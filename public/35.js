(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{133:function(t,e,a){"use strict";a.r(e);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o={components:{Button:function(){return a.e(0).then(a.bind(null,132))}},data:function(){return{form:{id:"",quantity:"",purchase_price:""},is_send_data:!1,item:{}}},methods:{checkForm:function(){this.is_send_data=!0,this.$emit("addProduct",i({},this.form))},changeQuantity:function(){this.form.purchase_price=this.item.purchase_price*this.form.quantity},showModal:function(t){this.item=i({},t),this.$refs["validation-observer"].reset(),this.form=i({},t),this.form.product=this.item,this.form.quantity=1,$("#modal-form").modal("show")},hideModal:function(){this.is_send_data=!1,$("#modal-form").modal("hide")}},watch:{"form.quantity":function(t){this.changeQuantity()}}},n=a(0),l=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:"modal-form",tabindex:"-1",role:"dialog","aria-labelledby":"modal-form","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal- modal-dialog-centered modal-sm",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body p-0"},[e("div",{staticClass:"card bg-secondary border-0 mb-0"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body px-lg-5 py-lg-5"},[t._m(1),t._v(" "),e("validation-observer",{ref:"validation-observer",scopedSlots:t._u([{key:"default",fn:function(a){var r=a.handleSubmit;return[e("form",{staticClass:"needs-validation",on:{submit:function(e){return e.preventDefault(),r(t.checkForm)}}},[e("div",{staticClass:"form-group mb-3"},[e("validation-provider",{attrs:{name:"Cantidad",rules:"required|numeric|min_value:1"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("label",{staticClass:"form-control-label",attrs:{for:"input-quantity"}},[t._v("Cantidad")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"form-control",attrs:{type:"number",id:"input-quantity",placeholder:"0.00"},domProps:{value:t.form.quantity},on:{input:function(e){e.target.composing||t.$set(t.form,"quantity",e.target.value)}}}),t._v(" "),e("span",{staticClass:"is-invalid"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"form-group mb-3"},[e("validation-provider",{attrs:{name:"Precio",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("label",{staticClass:"form-control-label",attrs:{for:"input-price"}},[t._v("Precio")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.purchase_price,expression:"form.purchase_price"}],staticClass:"form-control",attrs:{type:"number",step:".01",id:"input-price",placeholder:"0.00",readonly:""},domProps:{value:t.form.purchase_price},on:{input:function(e){e.target.composing||t.$set(t.form,"purchase_price",e.target.value)}}}),t._v(" "),e("span",{staticClass:"is-invalid"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),e("hr"),t._v(" "),e("Button",{attrs:{classname:"btn btn-primary",type:"submit",icon:"",disabled:t.is_send_data,title:"Agregar"}})],1)]}}])})],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header bg-transparent modal-header"},[t("h6",{staticClass:"modal-title",attrs:{id:"modal-title-default"}},[this._v("Añadir producto")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center text-muted mb-4"},[t("small",[this._v("Ingrese la cantidad del producto a solicitar")])])}],!1,null,"a0aef8d6",null);e.default=l.exports}}]);