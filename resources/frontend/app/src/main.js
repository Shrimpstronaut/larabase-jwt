import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require('./plugins')

Vue.config.productionTip = false;

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
