<template>

    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{name: 'dashboard'}" class="navbar-item">
                Dashboard
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item tag="router-link" :to="{name: 'dashboard'}" class="navbar-item">
                    About
                </b-navbar-item>
                <b-navbar-item tag="router-link" class="navbar-item" :to="{path: '/notfound'}">
                    404
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-dropdown :label="user ? user.name : ''">
                <b-navbar-item tag="router-link" :to="{name: 'dashboard'}" class="navbar-item">
                    Profile
                </b-navbar-item>
                <b-navbar-item class="navbar-item" v-on:click="logout">
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Navbar",
        computed: {
            ...mapGetters({
                user: 'user'
            })
        },
        methods: {
            ...mapActions({
                sLogout: 'logout'
            }),
            logout() {
                this.sLogout().then(() => {
                    this.$router.push('/login?logout')
                })
            }
        }
    }
</script>

<style scoped>

</style>
