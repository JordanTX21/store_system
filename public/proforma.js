(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{0:function(t,e,n){"use strict";function r(t,e,n,r,o,s,i,a){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=d):o&&(d=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(t,e){return d.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},126:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{breadcrumbsList:[{name:"Generar Pedido",router:"listproforma"}]}},components:{Breadcrumbs:function(){return n.e(2).then(n.bind(null,131))},FooterPage:function(){return n.e(3).then(n.bind(null,28))},ModalAddProduct:function(){return n.e(34).then(n.bind(null,134))}},methods:{selectItem:function(t){this.$refs.modalAddProduct.showModal(t)},addProduct:function(t){this.$refs["router-view"].addItem(t),this.$refs.modalAddProduct.hideModal()}},mounted:function(){console.log(window)}},o=n(0),s=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticClass:"header bg-default pb-6"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"header-body"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("Breadcrumbs",{attrs:{titulo:"Generar Pedido",breadcrumbs:t.breadcrumbsList}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("router-link",{staticClass:"btn btn-sm btn-neutral",attrs:{to:{name:"listproforma"}}},[t._v("Listar")]),t._v(" "),e("router-link",{staticClass:"btn btn-sm btn-dark",attrs:{to:{name:"newproforma"}}},[t._v("Emitir Proforma")])],1)])])])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("router-view",{ref:"router-view",on:{selectItem:t.selectItem}})],1)])]),t._v(" "),e("ModalAddProduct",{ref:"modalAddProduct",on:{addProduct:t.addProduct}})],1)}),[],!1,null,"06daf0d0",null);e.default=s.exports}}]);