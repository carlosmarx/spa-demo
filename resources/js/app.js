import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

//Route information for Vue Router
import Routes from '@/js/routes.js';
import store from '@/js/store'
import '@/js/plugins'

//Component file
import App from '@/js/views/App';


Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    store,
    router: Routes,
    vuetify: new Vuetify(),
    render: h => h(App),
});

export default app;

