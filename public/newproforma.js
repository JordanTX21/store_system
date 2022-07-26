(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newproforma"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/views/FormProforma.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proforma/views/FormProforma.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Button: function Button() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../components/Button.vue */ "./resources/js/components/Button.vue"));
    },
    ListProducts: function ListProducts() {
      return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ../components/ListProducts/views/ListProduct.vue */ "./resources/js/modules/proforma/components/ListProducts/views/ListProduct.vue"));
    },
    TableListProducts: function TableListProducts() {
      return Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../components/ListProducts/components/TableProduct.vue */ "./resources/js/modules/proforma/components/ListProducts/components/TableProduct.vue"));
    }
  },
  data: function data() {
    return {
      form: {
        products: '',
        client_document: ''
      },
      text_button: 'Generar proforma',
      is_send_data: false,
      is_adding: false,
      products: []
    };
  },
  props: {
    status: {
      type: String,
      "default": 'CREATE'
    },
    item: {
      type: Object
    }
  },
  methods: {
    deleteItem: function deleteItem(item) {
      this.products = this.products.filter(function (product) {
        return product.id !== item.id;
      });
      this.$refs["list-products"].deleteProductsToList(item);
    },
    addItem: function addItem(item) {
      var is_added = false;

      var _iterator = _createForOfIteratorHelper(this.products),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var product = _step.value;

          if (product.id === item.id) {
            product.quantity = parseFloat(product.quantity) + parseFloat(item.quantity);
            product.price = parseFloat(product.price) + parseFloat(item.price);
            is_added = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!is_added) {
        this.products.push(item);
      }

      this.$refs["list-products"].addProductsToList(item);
      this.is_adding = false;
    },
    selectItem: function selectItem(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.is_adding = true;

                _this.$emit('selectItem', item);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    checkForm: function checkForm() {
      if (this.products.length === 0) {
        Alerts.showToastErrorMessage("Debe seleccionar al menos un producto");
        return false;
      }

      this.form.products = this.products;

      if (this.status === Constants.STATUS_EDIT) {
        this.sendEditData();
      } else {
        this.sendCreateData();
      }
    },
    resetForm: function resetForm() {
      this.form.products = [];
      this.products = [];
      this.form.client_document = '';
      this.$refs['validation-observer'].reset();
      this.$refs['list-products'].getSearch();
    },
    sendEditData: function sendEditData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var body, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.is_send_data = true;
                _context3.prev = 1;
                body = _objectSpread({}, _this2.form);
                _context3.next = 5;
                return axios.put("/proforma/".concat(body.id), _objectSpread({}, body)).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(result.status === 200)) {
                              _context2.next = 9;
                              break;
                            }

                            if (result.data.success) {
                              _context2.next = 5;
                              break;
                            }

                            _context2.next = 4;
                            return Alerts.showToastErrorMessage(result.data.message);

                          case 4:
                            return _context2.abrupt("return");

                          case 5:
                            _context2.next = 7;
                            return Alerts.showUpdatedMessage();

                          case 7:
                            _this2.resetForm();

                            _this2.$router.push({
                              name: 'listproforma'
                            });

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  if (err.response.data.code == "Error") {
                    Alerts.showErrorMessageWithMessage(err.response.data.message);
                  }

                  _this2.is_search = false;
                });

              case 5:
                result = _context3.sent;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                Alerts.showErrorMessage();

              case 11:
                _this2.is_send_data = false;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 8]]);
      }))();
    },
    sendCreateData: function sendCreateData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var body, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this3.is_send_data = true;
                _context4.prev = 1;
                body = _objectSpread({}, _this3.form);
                _context4.next = 5;
                return axios.post('proforma', _objectSpread({}, body));

              case 5:
                result = _context4.sent;

                if (!(result.status === 200)) {
                  _context4.next = 15;
                  break;
                }

                if (result.data.success) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 10;
                return Alerts.showToastErrorMessage(result.data.message);

              case 10:
                return _context4.abrupt("return");

              case 11:
                _context4.next = 13;
                return Alerts.showCreatedMessage();

              case 13:
                _this3.resetForm();

                _this3.$router.push({
                  name: 'listproforma'
                });

              case 15:
                _context4.next = 21;
                break;

              case 17:
                _context4.prev = 17;
                _context4.t0 = _context4["catch"](1);
                _context4.next = 21;
                return Alerts.showErrorMessage();

              case 21:
                _this3.is_send_data = false;

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 17]]);
      }))();
    },
    validateStatus: function validateStatus() {
      if (this.status === 'EDIT') {
        this.form = _objectSpread({}, this.item);
        this.text_button = 'Actualizar';
      } else {
        if (this.$route.name === 'updateproforma' && this.item === undefined) {
          this.$router.push({
            name: 'newproforma'
          });
        }
      }
    }
  },
  computed: {
    total_price: function total_price() {
      var total = 0;

      var _iterator2 = _createForOfIteratorHelper(this.products),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var product = _step2.value;
          total += parseFloat(product.price);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return total.toFixed(2);
    },
    total_quantity: function total_quantity() {
      var total = 0;

      var _iterator3 = _createForOfIteratorHelper(this.products),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var product = _step3.value;
          total += parseFloat(product.quantity);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return total;
    }
  },
  mounted: function mounted() {
    this.validateStatus();
    /** EJEMPLO*/
    //this.$refs["search-entity"].setCompanyByID(3)
  },
  watch: {
    status: function status(_status) {
      if (_status === Constants.STATUS_CREATE && this.text_button === "Actualizar") {
        location.reload();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/views/FormProforma.vue?vue&type=template&id=72258c44&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proforma/views/FormProforma.vue?vue&type=template&id=72258c44& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("validation-observer", {
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
        }, [_c("ListProducts", {
          ref: "list-products",
          attrs: {
            products: _vm.products,
            add: true
          },
          on: {
            selectItem: _vm.selectItem
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "card"
        }, [_c("div", {
          staticClass: "card-header d-flex justify-content-between"
        }, [_c("h3", {
          staticClass: "mb-0"
        }, [_vm._v("Productos añadidos")]), _vm._v(" "), _c("div", [_c("span", [_vm._v("Pecio Total: "), _c("span", {
          staticClass: "badge badge-danger"
        }, [_vm._v("S/." + _vm._s(_vm.total_price))])]), _vm._v(" "), _c("span", [_vm._v("Cantidad Total: "), _c("span", {
          staticClass: "badge badge-danger"
        }, [_vm._v(_vm._s(_vm.total_quantity))])])])]), _vm._v(" "), _c("div", {
          staticClass: "card-body"
        }, [_c("TableListProducts", {
          ref: "table",
          attrs: {
            listAll: _vm.products,
            is_search: _vm.is_adding,
            can_delete: true
          },
          on: {
            deleteItem: _vm.deleteItem
          }
        })], 1)]), _vm._v(" "), _c("div", {
          staticClass: "form-row"
        }, [_c("div", {
          staticClass: "col-md-4"
        }, [_c("div", {
          staticClass: "form-group mb-3"
        }, [_c("validation-provider", {
          attrs: {
            name: "Documento del Cliente",
            rules: "required|numeric|min:8"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("label", {
                staticClass: "form-control-label",
                attrs: {
                  "for": "input-client"
                }
              }, [_vm._v("Documento del Cliente")]), _vm._v(" "), _c("input", {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.client_document,
                  expression: "form.client_document"
                }],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "input-client",
                  placeholder: ""
                },
                domProps: {
                  value: _vm.form.client_document
                },
                on: {
                  input: function input($event) {
                    if ($event.target.composing) return;

                    _vm.$set(_vm.form, "client_document", $event.target.value);
                  }
                }
              }), _vm._v(" "), _c("span", {
                staticClass: "is-invalid"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("Button", {
          attrs: {
            classname: "btn btn-primary",
            type: "submit",
            icon: "",
            disabled: _vm.is_send_data,
            title: _vm.text_button
          }
        })], 1)];
      }
    }])
  })], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-header"
  }, [_c("h3", {
    staticClass: "mb-0"
  }, [_vm._v("Emitir proforma")])]);
}];
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

/***/ "./resources/js/modules/proforma/views/FormProforma.vue":
/*!**************************************************************!*\
  !*** ./resources/js/modules/proforma/views/FormProforma.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormProforma_vue_vue_type_template_id_72258c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormProforma.vue?vue&type=template&id=72258c44& */ "./resources/js/modules/proforma/views/FormProforma.vue?vue&type=template&id=72258c44&");
/* harmony import */ var _FormProforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormProforma.vue?vue&type=script&lang=js& */ "./resources/js/modules/proforma/views/FormProforma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormProforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormProforma_vue_vue_type_template_id_72258c44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormProforma_vue_vue_type_template_id_72258c44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proforma/views/FormProforma.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proforma/views/FormProforma.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/modules/proforma/views/FormProforma.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormProforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormProforma.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/views/FormProforma.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormProforma_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proforma/views/FormProforma.vue?vue&type=template&id=72258c44&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/proforma/views/FormProforma.vue?vue&type=template&id=72258c44& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormProforma_vue_vue_type_template_id_72258c44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormProforma.vue?vue&type=template&id=72258c44& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proforma/views/FormProforma.vue?vue&type=template&id=72258c44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormProforma_vue_vue_type_template_id_72258c44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormProforma_vue_vue_type_template_id_72258c44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);