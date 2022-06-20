
require('./bootstrap');

import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import VueMoment from 'vue-moment';
import * as Alerts from './plugins/utils/alerts'
import './plugins'
import './plugins/components'
import scrollbar from 'malihu-custom-scrollbar-plugin'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'


window.Vue = require('vue');

Vue.use(VueMoment)
require('vue-multiselect');

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
});
