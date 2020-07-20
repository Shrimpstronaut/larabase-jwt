import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import PublicLayout from "./layouts/PublicLayout";
import LoginView from "./views/LoginView";
import RegistrationView from "./views/RegistrationView";
import store from "./store"
import PageNotFoundView from "./views/PageNotFoundView";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL | '/',
    routes: [
        {
            path: '/',
            component: PublicLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'about',
                    component: About
                },
                {
                    path: 'login',
                    name: 'login',
                    component: LoginView
                },
                {
                    path: 'register',
                    name: 'register',
                    component: RegistrationView
                }
            ]
        },
        {
            path: '/app',
            component: AppLayout,
            meta: {requiresAuth: true},
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    meta: {requiresAuth: true},
                    component: DashboardView,
                }
            ]
        },
        {
            path: '*',
            name: 'notfound',
            component: PageNotFoundView
        }
    ]
});

router.beforeEach((to, from, next) => {
    // check for route authentication requirements and login status
    if (to.matched.some(m => m.meta.requiresAuth) && !store.getters.isAuthenticated)
        next({name: 'login'})
    else
        next()
})

export default router
