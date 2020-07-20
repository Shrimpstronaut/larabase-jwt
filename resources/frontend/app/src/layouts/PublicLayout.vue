<template>
    <div>
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
            </template>

            <template slot="end">
                <b-navbar-dropdown label="Account">
                    <b-navbar-item tag="router-link" :to="{name: 'login'}" class="navbar-item">
                        Login
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" class="navbar-item" :to="{name: 'register'}">
                        Register
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "PublicLayout"
    }
</script>

<style scoped>

</style>
