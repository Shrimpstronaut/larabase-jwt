<template>
    <div>
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-1">
                        Larabase
                    </h1>
                    <h2 class="subtitle">
                        This project aims to create a foundation for future projects based on Laravel and JWT. Laravel
                        is accessible, powerful, and provides tools required for large, robust applications.
                    </h2>
                </div>
            </div>
        </section>
        <section class="container landing-content">
            <figure class="image is-16by9">
                <img class="header-image" src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="paper scribbles">
            </figure>

            <div class="columns features">
                <div class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <figure class="image">
                                    <img class="logo" src="https://laravel.com/img/logotype.min.svg"/>
                                </figure>
                                <h4 class="has-text-centered">Laravel Framework</h4>
                                <p>Laravel is a free, open-source PHP web framework, created by Taylor Otwell and
                                    intended for the development of web applications following the model–view–controller
                                    architectural pattern and based on Symfony.</p>
                                <p><a href="https://laravel.com/">Read more</a></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <figure class="image">
                                    <img class="logo" src="https://vuejs.org/images/logo.png"/>
                                </figure>
                                <h4 class="has-text-centered">VueJS Frontend</h4>
                                <p>Vue.js is an open-source model–view–viewmodel JavaScript framework for building user
                                    interfaces and single-page applications. It was created by Evan You, and is
                                    maintained by him and the rest of the active core team members coming from various
                                    companies such as Netlify and Netguru.</p>
                                <p><a href="https://vuejs.org/">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <figure class="image">
                                    <img class="logo"
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/JWT-Logo.svg/800px-JWT-Logo.svg.png">
                                </figure>
                                <h4 class="has-text-centered">JWT authentication</h4>
                                <p>JSON Web Token is an Internet standard for creating data with optional signature
                                    and/or optional encryption whose payload holds JSON that asserts some number of
                                    claims. The tokens are signed either using a private secret or a public/private
                                    key.</p>
                                <p><a href="https://jwt.io/">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong>Larabase</strong> by <a href="#">Stefan Fiedler</a>. The source code is
                    licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";

    export default {
        name: "home",
        components: {
            HelloWorld
        }
    };
</script>

<style scoped>
    .features {
        padding: 3rem 0;
    }

    .features .card {
        border-radius: .5rem;
    }

    .header-image {
        border-radius: .5rem;
    }

    .logo {
        max-height: 32px;
        width: auto;
    }

    .column {
        display: flex;
    }

    .landing-content {
        padding-left: .5rem;
        padding-right: .5rem
    }
</style>
