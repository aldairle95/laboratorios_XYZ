require('./bootstrap');

import vue from 'vue'
window.Vue = vue;

// importamos componente app
import App from './components/App.vue';

// importamos axios
import axios from 'axios';
import VueAxios from 'vue-axios';


// importamos vue router
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.prototype.$axios = axios;

const router = new VueRouter({
    mode:'history',
    routes: routes
});

new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
});


