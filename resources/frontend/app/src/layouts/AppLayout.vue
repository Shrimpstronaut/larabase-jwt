<template>
    <div>
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
        <div v-if="!isLoading">
            <Navbar></Navbar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "AppLayout",
        data() {
            return {
                isLoading: true
            }
        },
        methods: {
            ...mapActions({
                fetchUser: 'fetchUser'
            })
        },
        mounted() {
            this.fetchUser().finally(() =>
                this.isLoading = false
            )
        }
    }
</script>

<style scoped>

</style>
