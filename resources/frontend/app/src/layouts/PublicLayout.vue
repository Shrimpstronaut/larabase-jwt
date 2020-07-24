<template>
    <div>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link"
                               v-if="isAuthenticated"
                               :to="{name: 'dashboard'}"
                               class="navbar-item is-size-5">
                    Dashboard
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="router-link" :to="{name: 'home'}"
                               class="navbar-item is-size-5">
                    Features
                </b-navbar-item>
                <b-navbar-item tag="a" href="https://github.com/simply-fiete/larabase-jwt"
                               class="navbar-item is-size-5">
                    Sourcecode
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{name: 'login'}"
                               class="navbar-item is-size-5">
                    Login
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "PublicLayout",
        computed: {
            ...mapGetters({
                isAuthenticated: 'isAuthenticated'
            })
        }
    }
</script>

<style scoped>

</style>
