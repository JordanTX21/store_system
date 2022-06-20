(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active'); // hide overlay

    $('.overlay').removeClass('active');
  });
  $('#sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').addClass('active'); // fade in the overlay

    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userLogued: JSON.parse(this.$attrs.userlogued)
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-c32b2eb4] {\r\n    display: block;\n}\n#sidebar[data-v-c32b2eb4] {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    /* top layer */\r\n    z-index: 9999;\n}\n.overlay[data-v-c32b2eb4] {\r\n    display: none;\r\n    position: fixed;\r\n    /* full screen */\r\n    width: 100vw;\r\n    height: 100vh;\r\n    /* transparent black */\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /* middle layer, i.e. appears below the sidebar */\r\n    z-index: 998;\r\n    opacity: 0;\r\n    /* animate the transition */\r\n    transition: all 0.5s ease-in-out;\n}\r\n\r\n/* display .overlay when it has the .active class */\n.overlay.active[data-v-c32b2eb4] {\r\n    display: block;\r\n    opacity: 1;\n}\n#dismiss[data-v-c32b2eb4] {\r\n    width: 35px;\r\n    height: 35px;\r\n    position: absolute;\r\n    /* top right corner of the sidebar */\r\n    top: 10px;\r\n    right: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { attrs: { id: "sidebar" } }, [
      _c("div", { attrs: { id: "dismiss" } }, [
        _c("i", { staticClass: "fas fa-arrow-left" }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-header" }, [
        _c("h3", [_vm._v("Bootstrap Sidebar")]),
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-unstyled components" }, [
        _c("p", [_vm._v("Dummy Heading")]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [
          _c(
            "a",
            {
              attrs: {
                href: "#homeSubmenu",
                "data-toggle": "collapse",
                "aria-expanded": "false",
              },
            },
            [_vm._v("Home")]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "collapse list-unstyled",
              attrs: { id: "homeSubmenu" },
            },
            [
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Home 1")])]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Home 2")])]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Home 3")])]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("About")]),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: {
                href: "#pageSubmenu",
                "data-toggle": "collapse",
                "aria-expanded": "false",
              },
            },
            [_vm._v("Pages")]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "collapse list-unstyled",
              attrs: { id: "pageSubmenu" },
            },
            [
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Page 1")])]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Page 2")])]),
              _vm._v(" "),
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Page 3")])]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Portfolio")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Contact")])]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/MenuApp/layout/MenuLayout.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/MenuApp/layout/MenuLayout.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuLayout_vue_vue_type_template_id_c32b2eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true& */ "./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true&");
/* harmony import */ var _MenuLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuLayout_vue_vue_type_style_index_0_id_c32b2eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css& */ "./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuLayout_vue_vue_type_template_id_c32b2eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuLayout_vue_vue_type_template_id_c32b2eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c32b2eb4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MenuApp/layout/MenuLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_style_index_0_id_c32b2eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=style&index=0&id=c32b2eb4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_style_index_0_id_c32b2eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_style_index_0_id_c32b2eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_style_index_0_id_c32b2eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_style_index_0_id_c32b2eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_template_id_c32b2eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuApp/layout/MenuLayout.vue?vue&type=template&id=c32b2eb4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_template_id_c32b2eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuLayout_vue_vue_type_template_id_c32b2eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);