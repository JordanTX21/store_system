(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitude"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      breadcrumbsList: [{
        name: 'Generar Pedido',
        router: 'listsolicitude'
      }]
    };
  },
  components: {
    Breadcrumbs: function Breadcrumbs() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../../components/Breadcrumb.vue */ "./resources/js/components/Breadcrumb.vue"));
    },
    FooterPage: function FooterPage() {
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../../components/FooterPage.vue */ "./resources/js/components/FooterPage.vue"));
    },
    ModalAddProduct: function ModalAddProduct() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../components/ModalAddProduct.vue */ "./resources/js/modules/solicitude/components/ModalAddProduct.vue"));
    }
  },
  methods: {
    selectItem: function selectItem(item) {
      this.$refs["modalAddProduct"].showModal(item);
    },
    addProduct: function addProduct(data) {
      this.$refs["router-view"].addItem(data);
      this.$refs["modalAddProduct"].hideModal();
    }
  },
  mounted: function mounted() {
    console.log(window);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true& ***!
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
    staticClass: "main-content"
  }, [_c("div", {
    staticClass: "header bg-default pb-6"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "header-body"
  }, [_c("div", {
    staticClass: "row align-items-center py-4"
  }, [_c("div", {
    staticClass: "col-lg-6 col-7"
  }, [_c("Breadcrumbs", {
    attrs: {
      titulo: "Generar Pedido",
      breadcrumbs: _vm.breadcrumbsList
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-5 text-right"
  }, [_c("router-link", {
    staticClass: "btn btn-sm btn-neutral",
    attrs: {
      to: {
        name: "listsolicitude"
      }
    }
  }, [_vm._v("Listar")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-sm btn-dark",
    attrs: {
      to: {
        name: "newsolicitude"
      }
    }
  }, [_vm._v("Generar Pedido")])], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid mt--6"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("router-view", {
    ref: "router-view",
    on: {
      selectItem: _vm.selectItem
    }
  })], 1)])]), _vm._v(" "), _c("ModalAddProduct", {
    ref: "modalAddProduct",
    on: {
      addProduct: _vm.addProduct
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolicitudeLayout_vue_vue_type_template_id_558552ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true& */ "./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true&");
/* harmony import */ var _SolicitudeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolicitudeLayout.vue?vue&type=script&lang=js& */ "./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SolicitudeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolicitudeLayout_vue_vue_type_template_id_558552ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolicitudeLayout_vue_vue_type_template_id_558552ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "558552ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/solicitude/layouts/SolicitudeLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitudeLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudeLayout_vue_vue_type_template_id_558552ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/solicitude/layouts/SolicitudeLayout.vue?vue&type=template&id=558552ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudeLayout_vue_vue_type_template_id_558552ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitudeLayout_vue_vue_type_template_id_558552ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);