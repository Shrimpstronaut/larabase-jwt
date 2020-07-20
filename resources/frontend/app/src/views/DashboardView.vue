<template>
    <div>
        <section class="hero is-primary is-bold is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Dashboard
                    </h1>
                    <h2 class="subtitle">
                        Primary subtitle
                    </h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="box">
                    <h1 class="subtitle">User details</h1>
                    <hr>
                    <code>
                        {{user}}
                    </code>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "DashboardView",
        computed: {
            ...mapGetters({
                user: 'user'
            })
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
