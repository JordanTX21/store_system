(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}r.d(e,"a",(function(){return n}))},10:function(t,e,r){"use strict";e.a=[{titulo:"Seguridad",options:[{name:"Usuarios",module:"user",icon:"fas fa-user",nameroute:"listuser",permission:"view_user",disabled:!1},{name:"Roles",module:"role",icon:"fas fa-briefcase",nameroute:"listrole",permission:"view_role",disabled:!1}],disabled:!1},{titulo:"Administracion",options:[{name:"Provedores",module:"provider",icon:"fas fa-users",nameroute:"listprovider",permission:"view_provider",disabled:!1}],disabled:!1},{titulo:"Almacen",options:[{name:"Generar_Pedido",module:"solicitude",icon:"fas fa-truck-loading",nameroute:"listsolicitude",permission:"view_solicitude",disabled:!1},{name:"Productos",module:"product",icon:"fas fa-box-open",nameroute:"listproduct",permission:"view_product",disabled:!1}],disabled:!1},{titulo:"Operaciones",options:[{name:"Ventas",module:"proforma",icon:"fas fa-shopping-cart",nameroute:"listproforma",permission:"view_proforma",disabled:!1},{name:"Reportes",module:"report",icon:"fas fa-shopping-cart",nameroute:"listreport",permission:"view_report",disabled:!1}],disabled:!1}]},118:function(t,e,r){"use strict";r.r(e);var n=r(10);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=h(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function m(){}function p(){}var v={};u(v,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(E([])));b&&b!==e&&r.call(b,a)&&(v=b);var _=p.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,i){function s(){return new e((function(n,s){!function n(a,i,s,c){var u=d(t[a],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}(a,i,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,u(_,"constructor",p),u(p,"constructor",m),m.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(_),u(_,c,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,s,"next",t)}function s(t){l(a,n,o,i,s,"throw",t)}i(void 0)}))}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(t,e)||h(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p={components:{Button:function(){return r.e(0).then(r.bind(null,132))}},data:function(){return{form:{name:"",permissions:[]},text_button:"Crear",is_send_data:!1,menuList:n.a}},props:{status:{type:String,default:"CREATE"},item:{type:Object}},methods:{fillCheckModules:function(){var t=this;this.modules=[],this.menuList.forEach((function(e){e.options.forEach((function(e){t.form.permissions.push({name:e.name,module:e.module,view:!1,read:!1,create:!1,update:!1,delete:!1})}))}))},checkForm:function(){this.status===Constants.STATUS_EDIT?this.sendEditData():this.sendCreateData()},resetForm:function(){for(var t=0,e=Object.entries(this.form);t<e.length;t++){var r=f(e[t],2);r[0],r[1];""}this.$refs["validation-observer"].reset()},sendEditData:function(){var t=this;return d(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.is_send_data=!0,e.prev=1,r=c({},t.form),e.next=5,axios.put("/role/".concat(r.id),c({},r)).then(function(){var e=d(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==r.status){e.next=9;break}if(r.data.success){e.next=5;break}return e.next=4,Alerts.showToastErrorMessage(r.data.message);case 4:return e.abrupt("return");case 5:return e.next=7,Alerts.showUpdatedMessage();case 7:t.resetForm(),t.$router.push({name:"listrole"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){"Error"==e.response.data.code&&Alerts.showErrorMessageWithMessage(e.response.data.Message),t.is_search=!1}));case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Alerts.showErrorMessage();case 11:t.is_send_data=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},sendCreateData:function(){var t=this;return d(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.is_send_data=!0,e.prev=1,r=c({},t.form),e.next=5,axios.post("/role",c({},r));case 5:if(200!==(n=e.sent).status){e.next=13;break}if(n.data.success){e.next=11;break}return e.next=10,Alerts.showToastErrorMessage(n.data.message);case 10:return e.abrupt("return");case 11:Alerts.showCreatedMessage(),t.resetForm();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),Alerts.showErrorMessage();case 18:t.is_send_data=!1;case 19:case"end":return e.stop()}}),e,null,[[1,15]])})))()},validateStatus:function(){if(this.status===Constants.STATUS_EDIT){this.form.id=this.item.id,this.form.name=this.item.name;var t,e=a(this.item.permissions);try{for(e.s();!(t=e.n()).done;){var r,n=t.value,o=a(this.form.permissions);try{for(o.s();!(r=o.n()).done;){var i=r.value,s=n.name.split("_")[0],c=n.name.split("_")[1];i.module===c&&(i[s]=!0)}}catch(t){o.e(t)}finally{o.f()}}}catch(t){e.e(t)}finally{e.f()}this.text_button="Actualizar"}else"updaterole"===this.$route.name&&void 0===this.item&&this.$router.push({name:"newrole"})}},mounted:function(){this.fillCheckModules(),this.validateStatus()},watch:{status:function(t){t===Constants.STATUS_CREATE&&"Actualizar"===this.text_button&&location.reload()}}},v=r(0),y=Object(v.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("validation-observer",{ref:"validation-observer",scopedSlots:t._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[e("form",{staticClass:"needs-validation",on:{submit:function(e){return e.preventDefault(),n(t.checkForm)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-md-4 mb-2"},[e("validation-provider",{attrs:{name:"Nombre",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e("label",{staticClass:"form-control-label",attrs:{for:"input-name"}},[t._v("Nombre")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",id:"input-name",placeholder:"Nombre del Rol"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),e("span",{staticClass:"is-invalid"},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-md-12 mb-2"},[e("div",{staticClass:"table-responsive table-upgrade"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Vista")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Leer")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Crear")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Actualizar")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Eliminar")])])]),t._v(" "),e("tbody",t._l(t.form.permissions,(function(r,n){return e("tr",{key:"module-".concat(n)},[e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.view,expression:"item.view"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheckView".concat(r.module)},domProps:{checked:Array.isArray(r.view)?t._i(r.view,null)>-1:r.view},on:{change:function(e){var n=r.view,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&t.$set(r,"view",n.concat([null])):i>-1&&t.$set(r,"view",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(r,"view",a)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheckView".concat(r.module)}})])]),t._v(" "),e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.read,expression:"item.read"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheckRead".concat(r.module)},domProps:{checked:Array.isArray(r.read)?t._i(r.read,null)>-1:r.read},on:{change:function(e){var n=r.read,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&t.$set(r,"read",n.concat([null])):i>-1&&t.$set(r,"read",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(r,"read",a)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheckRead".concat(r.module)}})])]),t._v(" "),e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.create,expression:"item.create"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheckCreate".concat(r.module)},domProps:{checked:Array.isArray(r.create)?t._i(r.create,null)>-1:r.create},on:{change:function(e){var n=r.create,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&t.$set(r,"create",n.concat([null])):i>-1&&t.$set(r,"create",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(r,"create",a)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheckCreate".concat(r.module)}})])]),t._v(" "),e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.update,expression:"item.update"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheckUpdate".concat(r.module)},domProps:{checked:Array.isArray(r.update)?t._i(r.update,null)>-1:r.update},on:{change:function(e){var n=r.update,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&t.$set(r,"update",n.concat([null])):i>-1&&t.$set(r,"update",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(r,"update",a)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheckUpdate".concat(r.module)}})])]),t._v(" "),e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.delete,expression:"item.delete"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheckDelete".concat(r.module)},domProps:{checked:Array.isArray(r.delete)?t._i(r.delete,null)>-1:r.delete},on:{change:function(e){var n=r.delete,o=e.target,a=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&t.$set(r,"delete",n.concat([null])):i>-1&&t.$set(r,"delete",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(r,"delete",a)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheckDelete".concat(r.module)}})])])])})),0)])])])]),t._v(" "),e("hr"),t._v(" "),e("Button",{attrs:{classname:"btn btn-primary",type:"submit",icon:"",disabled:t.is_send_data,title:t.text_button}})],1)]}}])})],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Registro del nuevo rol")])])}],!1,null,null,null);e.default=y.exports}}]);