
import Vue from 'vue'
import i18n from './plugins/translations'
import Router from 'vue-router'
import router from './router'
import VueMoment from 'vue-moment';
import * as Alerts from './plugins/utils/alerts'
import './plugins'
import './plugins/components'
import scrollbar from 'malihu-custom-scrollbar-plugin'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
//import store from './store';


window.Vue = require('vue');

Vue.use(VueMoment)
require('vue-multiselect');

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
    //store,
    i18n
});
