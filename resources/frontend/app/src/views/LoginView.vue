<template>
    <div class="hero is-primary is-fullheight-with-navbar is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="column is-4 is-offset-4">
                    <h1 class="title has-text-centered">
                        Login
                    </h1>
                    <div class="box">
                        <b-message v-if="process.errors" class="is-danger">
                            <p v-for="error of process.errors">{{error[0]}}</p>
                        </b-message>
                        <b-message v-if="isLogout" class="is-success">
                            Logout successful
                        </b-message>
                        <b-field label="Email">
                            <b-input type="email" v-model="login.email">
                            </b-input>
                        </b-field>
                        <b-field label="Password">
                            <b-input type="password" v-model="login.password">
                            </b-input>
                        </b-field>
                        <b-field>
                            <b-checkbox v-model="login.remember">
                                Remember me
                            </b-checkbox>
                        </b-field>
                        <hr/>
                        <b-field>
                            <b-button class="is-fullwidth is-primary"
                                      :loading="process.loading" v-on:click="submit"
                                      :disabled="!login.username && !login.password">
                                Login
                            </b-button>
                        </b-field>
                        <b-field>
                            <p>
                                or
                                <router-link :to="{name: 'register'}">create a new account</router-link>
                            </p>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "LoginView",
        data() {
            return {
                process: {
                    loading: false,
                    errors: null // has to be null in order to perform check (errors is object, not array)
                },
                login: {
                    email: null,
                    password: null,
                    remember: false
                }
            }
        },
        computed: {
            isLogout: function () {
                return this.$route.query.logout === null;
            }
        },
        methods: {
            ...mapActions({
                authenticate: 'login',
                fetchUser: 'fetchUser'
            }),
            removeLogoutQuery() {
                if (this.isLogout) {
                    this.$router.replace({'query': null});
                }
            },
            submit() {
                this.removeLogoutQuery()
                this.process.loading = true
                this.process.error = null

                this.authenticate(this.login)
                    .then(() => {
                        this.fetchUser()
                            .then(() => {
                                this.$router.replace({name: 'dashboard'})
                            })
                            .finally(() => this.process.loading = false)
                    })
                    .catch((e) => {
                        this.process.errors = e.response.data
                        this.process.loading = false
                    });
            }
        }
    }
</script>

<style scoped>

</style>
