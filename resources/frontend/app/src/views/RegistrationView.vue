<template>
    <div class="hero is-bold is-primary is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="column is-4 is-offset-4">
                    <h1 class="title has-text-centered">
                        Registration
                    </h1>
                    <div class="box">
                        <b-message v-if="process.errors" class="is-danger">
                            <p v-for="error of process.errors">{{error[0]}}</p>
                        </b-message>
                        <b-field label="Name">
                            <b-input type="text" v-model="accountDetails.name">
                            </b-input>
                        </b-field>
                        <b-field label="Email">
                            <b-input type="email" v-model="accountDetails.email">
                            </b-input>
                        </b-field>
                        <b-field label="Password">
                            <b-input type="password" v-model="accountDetails.password">
                            </b-input>
                        </b-field>
                        <b-field label="Confirm password">
                            <b-input type="password" v-model="accountDetails.password_confirmation">
                            </b-input>
                        </b-field>
                        <hr/>
                        <b-field>
                            <b-button class="is-fullwidth is-primary"
                                      :loading="process.loading" v-on:click="submit"
                                      :disabled="!accountDetails.email &&
                                !accountDetails.password &&
                                !accountDetails.password_confirmation &&
                                !accountDetails.name">
                                Register
                            </b-button>
                        </b-field>
                        <b-field>
                            <p>
                                or
                                <router-link :to="{name: 'login'}">sign in to an existing account</router-link>
                            </p>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "RegistrationView",
        data() {
            return {
                accountDetails: {
                    email: null,
                    name: null,
                    password: null,
                    password_confirmation: null
                },
                process: {
                    loading: false,
                    errors: null // has to be null in order to perform check (errors is object, not array)
                }
            }
        },
        methods: {
            ...mapActions({
                register: 'register'
            }),

            submit: function () {
                this.process.loading = true // start loading indicator
                this.process.errors = null // reset previous errors

                this.register(this.accountDetails)
                    .then(() =>
                        this.$router.replace({name: 'login', query: {register: null}})
                    )
                    .catch((e) =>
                        this.process.errors = e.response.data.errors
                    )
                    .finally(() =>
                        this.process.loading = false // stop loading indicator after async call
                    )
            }
        }
    }
</script>

<style scoped>

</style>
