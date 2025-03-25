"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_employee_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employee/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employee/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "employees",
  data: function data() {
    return {
      employees: [],
      dataFilter: {
        id: "",
        name: "",
        department: "",
        startDate: this.getFormattedDate(),
        endDate: ""
      },
      file: null,
      fileUploading: false,
      selectedDepartment: "Filter by departament",
      departments: []
    };
  },
  mounted: function mounted() {
    this.showemployee();
    this.fetchDepartments();
  },
  props: {
    rawDate: String // date
  },
  methods: {
    showemployee: function showemployee() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.get('/api/employee').then(function (Response) {
                _this.employees = Response.data;
              })["catch"](function (error) {
                _this.employee = [];
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    fetchDepartments: function fetchDepartments() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.axios.get('/api/department');
            case 3:
              response = _context2.sent;
              _this2.departments = response.data;
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Error getting departments:", _context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    employeeStatus: function employeeStatus(id, currentStatus) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var newStatus, url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              newStatus = currentStatus === "1" ? "0" : "1";
              url = "/api/employee/".concat(id, "/updatestatus");
              _context3.next = 5;
              return _this3.axios.put("/api/employee/".concat(id, "/updatestatus"), {
                active: newStatus
              });
            case 5:
              response = _context3.sent;
              alert('employee update');
              _this3.showemployee();
              console.log("server response:", response.data);
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              console.error("Error in the request:", _context3.t0.response ? _context3.t0.response.data : _context3.t0.message);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    employeDelete: function employeDelete(id) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (confirm("¿confirm delete the record?")) {
                _this4.axios["delete"]("/api/employee/".concat(id)).then(function (Response) {
                  _this4.showemployee();
                })["catch"](function (error) {
                  console.error("Error in the request:", error.response ? error.response.data : error.message);
                });
              }
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    setDepartment: function setDepartment(departmentId) {
      this.dataFilter.department = departmentId;
    },
    search: function search() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.axios.post('/api/employee/search', _this5.dataFilter).then(function (Response) {
                _this5.employees = Response.data;
              })["catch"](function (error) {
                console.log(error);
                _this5.employee = [];
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    filterEmployees: function filterEmployees() {
      var _this6 = this;
      this.filteredEmployees = this.employees.filter(function (employee) {
        return employee.department_id === _this6.dataFilter.department;
      });
    },
    clearDataFilter: function clearDataFilter() {
      this.dataFilter = {
        id: "",
        name: "",
        department: "",
        startDate: "",
        endDate: ""
      };
      this.search();
      this.dataFilter.startDate = this.getFormattedDate();
    },
    getFormattedDate: function getFormattedDate() {
      var today = new Date();
      var year = today.getFullYear();
      var month = String(today.getMonth() + 1).padStart(2, "0");
      var day = String(today.getDate()).padStart(2, "0");
      return "".concat(year, "-").concat(month, "-").concat(day);
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return "";
      var date = new Date(dateString);
      var day = date.getDate().toString().padStart(2, "0");
      var month = (date.getMonth() + 1).toString().padStart(2, "0");
      var year = date.getFullYear();
      return "".concat(day, "/").concat(month, "/").concat(year); // Format: DD/MM/YYYY
    },
    handleButtonClick: function handleButtonClick() {
      if (!this.file) {
        document.getElementById("fileInput").click();
      } else {
        this.uploadFile();
      }
    },
    handleFileUpload: function handleFileUpload(event) {
      var selectedFile = event.target.files[0];
      if (!selectedFile) return;
      if (!selectedFile.name.toLowerCase().endsWith(".csv")) {
        alert("Error: only CSV files are allowed");
        event.target.value = "";
        return;
      }
      this.file = selectedFile;
      this.uploadFile(); // valid file
    },
    uploadFile: function uploadFile() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_this7.file) {
                _context6.next = 4;
                break;
              }
              alert("Please select the file.");
              console.error("Error: empty file.");
              return _context6.abrupt("return");
            case 4:
              _this7.fileUploading = true;
              formData = new FormData();
              formData.append("file", _this7.file);
              _context6.prev = 7;
              _context6.next = 10;
              return _this7.axios.post("/api/employee/upload-csv", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });
            case 10:
              response = _context6.sent;
              alert("File uploaded successfully");
              _this7.showemployee();
              _context6.next = 20;
              break;
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](7);
              _this7.file = null; // file null
              document.getElementById("fileInput").value = "";
              if (_context6.t0.response && _context6.t0.response.status === 422) {
                alert("Error: The code already exists in the database.");
              } else {
                alert("Error uploading the file.");
              }
            case 20:
              _context6.prev = 20;
              _this7.fileUploading = false;
              return _context6.finish(20);
            case 23:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[7, 15, 20, 23]]);
      }))();
    },
    downloadReport: function downloadReport(employeeId) {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response, url, link;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios.get("/api/access-attempts/reportEmployee/".concat(employeeId), {
                responseType: "blob"
              });
            case 3:
              response = _context7.sent;
              if (!response.ok) {
                console.log('error test');
              }
              // Create URL
              url = window.URL.createObjectURL(new Blob([response.data]));
              link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "employee_record".concat(employeeId, ".pdf")); // Name PDF
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              _context7.next = 17;
              break;
            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](0);
              alert("Error downloading the report");
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 14]]);
      }))();
    },
    downloadPDF: function downloadPDF() {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response, url, link;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return axios.get("/api/access-attempts/report", {
                responseType: "blob" //response
              });
            case 3:
              response = _context8.sent;
              url = window.URL.createObjectURL(new Blob([response.data]));
              link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "access_attempts_report.pdf");
              document.body.appendChild(link);
              link.click();
              link.remove();
              _context8.next = 17;
              break;
            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              console.error("Error al descargar el reporte:", _context8.t0);
              alert("Error downloading the report, no accesses exist");
            case 17:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employee/Index.vue?vue&type=template&id=6b542ec8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employee/Index.vue?vue&type=template&id=6b542ec8& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h3", [_vm._v("Table Employee")]),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-3 text-center" }, [
      _c("div", { staticClass: "d-flex justify-content-center gap-2" }, [
        _c("div", { staticClass: "rounded" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataFilter.id,
                expression: "dataFilter.id",
              },
            ],
            staticClass: "form-control rounded-pill",
            attrs: {
              type: "search",
              placeholder: "Filter ID",
              "aria-label": "Buscar",
              "aria-describedby": "search-addon",
            },
            domProps: { value: _vm.dataFilter.id },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.dataFilter, "id", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "rounded" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataFilter.name,
                expression: "dataFilter.name",
              },
            ],
            staticClass: "form-control rounded-pill",
            attrs: {
              type: "search",
              placeholder: "Filter name",
              "aria-label": "Buscar",
              "aria-describedby": "search-addon",
            },
            domProps: { value: _vm.dataFilter.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.dataFilter, "name", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "btn-group",
            attrs: {
              role: "group",
              "aria-label": "Button group with nested dropdown",
            },
          },
          [
            _c(
              "button",
              { staticClass: "btn btn-success", attrs: { type: "button" } },
              [_vm._v(_vm._s(_vm.selectedDepartment || "Filter by department"))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "btn-group", attrs: { role: "group" } }, [
              _c("button", {
                staticClass: "btn btn-success dropdown-toggle",
                attrs: {
                  id: "btnGroupDrop2",
                  type: "button",
                  "data-bs-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dropdown-menu",
                  attrs: { "aria-labelledby": "btnGroupDrop2" },
                },
                _vm._l(_vm.departments, function (department) {
                  return _c(
                    "a",
                    {
                      key: department.id,
                      staticClass: "dropdown-item",
                      on: {
                        click: function ($event) {
                          return _vm.setDepartment(department.id)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(department.name) +
                          "\n            "
                      ),
                    ]
                  )
                }),
                0
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c(
            "label",
            { staticClass: "small text-muted", attrs: { for: "date1" } },
            [_vm._v("Start Date")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataFilter.startDate,
                expression: "dataFilter.startDate",
              },
            ],
            staticClass: "btn btn-outline-secondary",
            attrs: { type: "date", id: "date1" },
            domProps: { value: _vm.dataFilter.startDate },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.dataFilter, "startDate", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c(
            "label",
            { staticClass: "small text-muted", attrs: { for: "date2" } },
            [_vm._v("End Date")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataFilter.endDate,
                expression: "dataFilter.endDate",
              },
            ],
            staticClass: "btn btn-outline-secondary",
            attrs: { type: "date", id: "date2" },
            domProps: { value: _vm.dataFilter.endDate },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.dataFilter, "endDate", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                return _vm.search()
              },
            },
          },
          [_vm._v("Search")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                return _vm.clearDataFilter()
              },
            },
          },
          [_vm._v("Clear Filter")]
        ),
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary ms-auto me-2",
              attrs: { to: "/dashboard/employee/create" },
            },
            [_vm._v("New employee")]
          ),
          _vm._v(" "),
          _c("div", [
            _c("input", {
              staticClass: "d-none",
              attrs: { type: "file", id: "fileInput" },
              on: { change: _vm.handleFileUpload },
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success me-2",
                attrs: { disabled: _vm.fileUploading },
                on: { click: _vm.handleButtonClick },
              },
              [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.fileUploading ? "Subiendo..." : "Upload CSV") +
                    "\n      "
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-warning",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.downloadPDF()
                },
              },
            },
            [_vm._v("Report Employee")]
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-hover mt-2" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.employees, function (employee) {
          return _c("tr", { key: employee.id, staticClass: "table-active" }, [
            _c("th", [_vm._v(_vm._s(employee.code))]),
            _vm._v(" "),
            _c("th", [_vm._v(_vm._s(_vm.formatDate(employee.created_at)))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(employee.firstname))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(employee.lastname))]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                _vm._s(
                  employee.department
                    ? employee.department.name
                    : "Sin departamento"
                )
              ),
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(employee.count_sesion))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { to: "/dashboard/employee/edit/" + employee.id },
                  },
                  [_vm._v("Update")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "td",
              [
                employee.active == 1
                  ? [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-secondary",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.employeeStatus(
                                employee.id,
                                employee.active
                              )
                            },
                          },
                        },
                        [_vm._v("Disable")]
                      ),
                    ]
                  : [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-success",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.employeeStatus(
                                employee.id,
                                employee.active
                              )
                            },
                          },
                        },
                        [_vm._v("Active")]
                      ),
                    ],
              ],
              2
            ),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.downloadReport(employee.id)
                    },
                  },
                },
                [_vm._v("History")]
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.employeDelete(employee.id)
                    },
                  },
                },
                [_vm._v("Delete")]
              ),
            ]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-dark" }, [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Code")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("First Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Departament")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total access")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", colspan: "4" } }, [
          _vm._v("Actions"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/employee/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/employee/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6b542ec8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6b542ec8& */ "./resources/js/components/employee/Index.vue?vue&type=template&id=6b542ec8&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/employee/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6b542ec8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_6b542ec8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/employee/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/employee/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/employee/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employee/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/employee/Index.vue?vue&type=template&id=6b542ec8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/employee/Index.vue?vue&type=template&id=6b542ec8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6b542ec8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6b542ec8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6b542ec8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=6b542ec8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/employee/Index.vue?vue&type=template&id=6b542ec8&");


/***/ })

}]);