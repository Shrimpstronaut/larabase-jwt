<template>
    <div>
        <section class="hero is-primary is-bold is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Profile
                    </h1>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="box">
                    <h3 class="subtitle is-3">Account</h3>
                    <hr>
                    <account-detail :readonly="readonly" :account="user"></account-detail>
                    <b-button @click="readonly = !readonly">Edit</b-button>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="box">
                    <b-button tag="router-link" :to="{path: 'password_reset'}">Reset password</b-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import AccountDetail from "../components/AccountDetail";

    export default {
        name: "ProfileView",
        components: {AccountDetail},
        data() {
            return {
                readonly: true
            }
        },
        computed: {
            ...mapGetters({
                user: 'user'
            })
        },
    }
</script>

<style scoped>
    .section {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>
