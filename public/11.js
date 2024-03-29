(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Button: function Button() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../components/Button.vue */ "./resources/js/components/Button.vue"));
    }
  },
  data: function data() {
    return {
      form: {
        id: '',
        quantity: '',
        price: ''
      },
      is_send_data: false,
      item: {}
    };
  },
  methods: {
    checkForm: function checkForm() {
      if (this.item.quantity < this.form.quantity) {
        Alerts.showToastErrorMessage('La cantidad solicitada es mayor a la existente');
        return false;
      }

      this.is_send_data = true;
      this.$emit('addProduct', _objectSpread({}, this.form));
    },
    changeQuantity: function changeQuantity() {
      this.form.price = this.item.price * this.form.quantity;
    },
    showModal: function showModal(item) {
      this.item = _objectSpread({}, item);
      this.$refs['validation-observer'].reset();
      this.form = _objectSpread({}, item);
      this.form.product = this.item;
      this.form.quantity = 1; //this.form.price = this.item.price

      $('#modal-form').modal('show');
    },
    hideModal: function hideModal() {
      this.is_send_data = false;
      $('#modal-form').modal('hide');
    }
  },
  watch: {
    'form.quantity': function formQuantity(val) {
      this.changeQuantity();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "modal-form",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "modal-form",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal- modal-dialog-centered modal-sm",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-body p-0"
  }, [_c("div", {
    staticClass: "card bg-secondary border-0 mb-0"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body px-lg-5 py-lg-5"
  }, [_vm._m(1), _vm._v(" "), _c("validation-observer", {
    ref: "validation-observer",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var handleSubmit = _ref.handleSubmit;
        return [_c("form", {
          staticClass: "needs-validation",
          on: {
            submit: function submit($event) {
              $event.preventDefault();
              return handleSubmit(_vm.checkForm);
            }
          }
        }, [_c("div", {
          staticClass: "form-group mb-3"
        }, [_c("validation-provider", {
          attrs: {
            name: "Cantidad",
            rules: "required|numeric|min_value:1|max_value:".concat(_vm.item.quantity)
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("label", {
                staticClass: "form-control-label",
                attrs: {
                  "for": "input-quantity"
                }
              }, [_vm._v("Cantidad")]), _vm._v(" "), _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.quantity,
                  expression: "form.quantity"
                }],
                staticClass: "form-control",
                attrs: {
                  type: "number",
                  id: "input-quantity",
                  placeholder: "0.00"
                },
                domProps: {
                  value: _vm.form.quantity
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;

                    _vm.$set(_vm.form, "quantity", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "is-invalid"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "form-group mb-3"
        }, [_c("validation-provider", {
          attrs: {
            name: "Precio",
            rules: "required|min_value:0"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("label", {
                staticClass: "form-control-label",
                attrs: {
                  "for": "input-price"
                }
              }, [_vm._v("Precio")]), _vm._v(" "), _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.price,
                  expression: "form.price"
                }],
                staticClass: "form-control",
                attrs: {
                  type: "number",
                  step: ".01",
                  id: "input-price",
                  placeholder: "0.00",
                  readonly: ""
                },
                domProps: {
                  value: _vm.form.price
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;

                    _vm.$set(_vm.form, "price", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "is-invalid"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("hr"), _vm._v(" "), _c("Button", {
          attrs: {
            classname: "btn btn-primary",
            type: "submit",
            icon: "",
            disabled: _vm.is_send_data,
            title: "Agregar"
          }
        })], 1)];
      }
    }])
  })], 1)])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-header bg-transparent modal-header"
  }, [_c("h6", {
    staticClass: "modal-title",
    attrs: {
      id: "modal-title-default"
    }
  }, [_vm._v("Añadir producto")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center text-muted mb-4"
  }, [_c("small", [_vm._v("Ingrese la cantidad del producto a solicitar")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/modules/proforma/components/ModalAddProduct.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/proforma/components/ModalAddProduct.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalAddProduct_vue_vue_type_template_id_fa3a576a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true& */ "./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true&");
/* harmony import */ var _ModalAddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalAddProduct.vue?vue&type=script&lang=js& */ "./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalAddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalAddProduct_vue_vue_type_template_id_fa3a576a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalAddProduct_vue_vue_type_template_id_fa3a576a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa3a576a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proforma/components/ModalAddProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalAddProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAddProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAddProduct_vue_vue_type_template_id_fa3a576a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/components/ModalAddProduct.vue?vue&type=template&id=fa3a576a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAddProduct_vue_vue_type_template_id_fa3a576a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAddProduct_vue_vue_type_template_id_fa3a576a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);