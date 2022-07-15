import Vue from 'vue'
 import VueI18n from 'vue-i18n'
 import * as esPE from './es-pe.json'
 
 Vue.use(VueI18n)
 
 const app = {
     'es-pe': {
         ...esPE
     }
 }
 
 export default new VueI18n({
     locale: 'es-pe',
     app,
 })