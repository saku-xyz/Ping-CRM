(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/Pages/Dashboard/Index.svelte":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.svelte ***!
  \***************************************************/
/*! exports provided: default, layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"layout\", function() { return layout; });\n/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ \"./node_modules/svelte/internal/index.mjs\");\n/* harmony import */ var _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout.svelte */ \"./resources/js/Shared/Layout.svelte\");\n/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ \"./node_modules/@inertiajs/inertia-svelte/src/index.js\");\n/* resources/js/Pages/Dashboard/Index.svelte generated by Svelte v3.28.0 */\n\n\n\n\n\nfunction create_fragment(ctx) {\n\tlet h1;\n\tlet t1;\n\tlet p0;\n\tlet t5;\n\tlet div;\n\tlet a1;\n\tlet inertia_action;\n\tlet t7;\n\tlet a2;\n\tlet inertia_action_1;\n\tlet t9;\n\tlet p1;\n\tlet mounted;\n\tlet dispose;\n\n\treturn {\n\t\tc() {\n\t\t\th1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"h1\");\n\t\t\th1.textContent = \"Dashboard\";\n\t\t\tt1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"space\"])();\n\t\t\tp0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"p\");\n\t\t\tp0.innerHTML = `Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how <a class=\"text-indigo-500 underline hover:text-orange-600\" href=\"https://inertiajs.com\">Inertia.js</a> works.`;\n\t\t\tt5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"space\"])();\n\t\t\tdiv = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"div\");\n\t\t\ta1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"a\");\n\t\t\ta1.textContent = \"500 error\";\n\t\t\tt7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"space\"])();\n\t\t\ta2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"a\");\n\t\t\ta2.textContent = \"404 error\";\n\t\t\tt9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"space\"])();\n\t\t\tp1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(\"p\");\n\t\t\tp1.textContent = \"👆 These links are intended to be broken to illustrate how error handling works with Inertia.js.\";\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(h1, \"class\", \"mb-8 font-bold text-3xl\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(p0, \"class\", \"mb-8 leading-normal\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(a1, \"href\", \"/500\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(a1, \"class\", \"btn-indigo\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(a2, \"href\", \"/404\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(a2, \"class\", \"btn-indigo ml-1\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(div, \"class\", \"mb-8 flex\");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"attr\"])(p1, \"class\", \"leading-normal\");\n\t\t},\n\t\tm(target, anchor) {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, h1, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, t1, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, p0, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, t5, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, div, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(div, a1);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(div, t7);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(div, a2);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, t9, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"insert\"])(target, p1, anchor);\n\n\t\t\tif (!mounted) {\n\t\t\t\tdispose = [\n\t\t\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"action_destroyer\"])(inertia_action = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__[\"inertia\"].call(null, a1)),\n\t\t\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"action_destroyer\"])(inertia_action_1 = _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__[\"inertia\"].call(null, a2))\n\t\t\t\t];\n\n\t\t\t\tmounted = true;\n\t\t\t}\n\t\t},\n\t\tp: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\t\ti: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\t\to: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"noop\"],\n\t\td(detaching) {\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(h1);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(t1);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(p0);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(t5);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(div);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(t9);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"detach\"])(p1);\n\t\t\tmounted = false;\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"run_all\"])(dispose);\n\t\t}\n\t};\n}\n\nconst layout = _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nfunction instance($$self, $$props, $$invalidate) {\n\tlet $title;\n\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"component_subscribe\"])($$self, _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__[\"title\"], $$value => $$invalidate(0, $title = $$value));\n\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"set_store_value\"])(_Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__[\"title\"], $title = \"Dashboard\", $title);\n\treturn [];\n}\n\nclass Index extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"SvelteComponent\"] {\n\tconstructor(options) {\n\t\tsuper();\n\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"init\"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"safe_not_equal\"], {});\n\t}\n}\n\n\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRGFzaGJvYXJkL0luZGV4LnN2ZWx0ZT9mZjIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dEO0FBS0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFKdEMsTUFBTSxHQUFHLDZEQUFNOzs7OztzSUFNNUIsTUFBTSxHQUFHLFdBQVciLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvRGFzaGJvYXJkL0luZGV4LnN2ZWx0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgTGF5b3V0LCB7IHRpdGxlIH0gZnJvbSAnQC9TaGFyZWQvTGF5b3V0LnN2ZWx0ZSdcbiAgZXhwb3J0IGNvbnN0IGxheW91dCA9IExheW91dFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xuXG4gICR0aXRsZSA9ICdEYXNoYm9hcmQnXG48L3NjcmlwdD5cblxuPGgxIGNsYXNzPVwibWItOCBmb250LWJvbGQgdGV4dC0zeGxcIj5EYXNoYm9hcmQ8L2gxPlxuPHAgY2xhc3M9XCJtYi04IGxlYWRpbmctbm9ybWFsXCI+XG4gIEhleSB0aGVyZSEgV2VsY29tZSB0byBQaW5nIENSTSwgYSBkZW1vIGFwcCBkZXNpZ25lZCB0byBoZWxwIGlsbHVzdHJhdGUgaG93IDxhXG4gICAgY2xhc3M9XCJ0ZXh0LWluZGlnby01MDAgdW5kZXJsaW5lIGhvdmVyOnRleHQtb3JhbmdlLTYwMFwiXG4gICAgaHJlZj1cImh0dHBzOi8vaW5lcnRpYWpzLmNvbVwiPlxuICAgIEluZXJ0aWEuanNcbiAgPC9hPiB3b3Jrcy5cbjwvcD5cbjxkaXYgY2xhc3M9XCJtYi04IGZsZXhcIj5cbiAgPGEgdXNlOmluZXJ0aWEgaHJlZj1cIi81MDBcIiBjbGFzcz1cImJ0bi1pbmRpZ29cIj41MDAgZXJyb3I8L2E+XG4gIDxhIHVzZTppbmVydGlhIGhyZWY9XCIvNDA0XCIgY2xhc3M9XCJidG4taW5kaWdvIG1sLTFcIj40MDQgZXJyb3I8L2E+XG48L2Rpdj5cbjxwIGNsYXNzPVwibGVhZGluZy1ub3JtYWxcIj5cbiAg8J+RhiBUaGVzZSBsaW5rcyBhcmUgaW50ZW5kZWQgdG8gYmUgYnJva2VuIHRvIGlsbHVzdHJhdGUgaG93IGVycm9yIGhhbmRsaW5nIHdvcmtzIHdpdGggSW5lcnRpYS5qcy5cbjwvcD5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Dashboard/Index.svelte\n");

/***/ })

}]);