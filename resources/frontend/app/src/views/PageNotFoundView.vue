<template>
    <section class="hero is-primary is-bold is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    404 | Page not found
                </h1>
                <h2 class="subtitle">
                    The requested resource could not be found.
                </h2>
                <router-link :to="{name: 'dashboard'}" class="button is-outlined is-light">
                    Return to dashboard
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "PageNotFoundView"
    }
</script>

<style scoped>

</style>
