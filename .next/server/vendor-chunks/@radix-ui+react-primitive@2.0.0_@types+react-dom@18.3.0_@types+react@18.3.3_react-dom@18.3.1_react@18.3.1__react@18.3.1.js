"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Primitive: () => (/* binding */ Primitive),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   dispatchDiscreteCustomEvent: () => (/* binding */ dispatchDiscreteCustomEvent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/primitive/src/Primitive.tsx\n\n\n\n\nvar NODES = [\n  \"a\",\n  \"button\",\n  \"div\",\n  \"form\",\n  \"h2\",\n  \"h3\",\n  \"img\",\n  \"input\",\n  \"label\",\n  \"li\",\n  \"nav\",\n  \"ol\",\n  \"p\",\n  \"span\",\n  \"svg\",\n  \"ul\"\n];\nvar Primitive = NODES.reduce((primitive, node) => {\n  const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n    const { asChild, ...primitiveProps } = props;\n    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : node;\n    if (typeof window !== \"undefined\") {\n      window[Symbol.for(\"radix-ui\")] = true;\n    }\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });\n  });\n  Node.displayName = `Primitive.${node}`;\n  return { ...primitive, [node]: Node };\n}, {});\nfunction dispatchDiscreteCustomEvent(target, event) {\n  if (target) react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => target.dispatchEvent(event));\n}\nvar Root = Primitive;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByaW1pdGl2ZUAyLjAuMF9AdHlwZXMrcmVhY3QtZG9tQDE4LjMuMF9AdHlwZXMrcmVhY3RAMTguMy4zX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQytCO0FBQ087QUFDTTtBQUNKO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBZ0I7QUFDL0IsWUFBWSw2QkFBNkI7QUFDekMsMkJBQTJCLHNEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzREFBRyxTQUFTLHNDQUFzQztBQUM3RSxHQUFHO0FBQ0gsa0NBQWtDLEtBQUs7QUFDdkMsV0FBVztBQUNYLENBQUMsSUFBSTtBQUNMO0FBQ0EsY0FBYyxnREFBa0I7QUFDaEM7QUFDQTtBQUtFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLXB3aC1ibG9nLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1wcmltaXRpdmVAMi4wLjBfQHR5cGVzK3JlYWN0LWRvbUAxOC4zLjBfQHR5cGVzK3JlYWN0QDE4LjMuM19yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMV9fcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlL2Rpc3QvaW5kZXgubWpzP2Y3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFja2FnZXMvcmVhY3QvcHJpbWl0aXZlL3NyYy9QcmltaXRpdmUudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xudmFyIE5PREVTID0gW1xuICBcImFcIixcbiAgXCJidXR0b25cIixcbiAgXCJkaXZcIixcbiAgXCJmb3JtXCIsXG4gIFwiaDJcIixcbiAgXCJoM1wiLFxuICBcImltZ1wiLFxuICBcImlucHV0XCIsXG4gIFwibGFiZWxcIixcbiAgXCJsaVwiLFxuICBcIm5hdlwiLFxuICBcIm9sXCIsXG4gIFwicFwiLFxuICBcInNwYW5cIixcbiAgXCJzdmdcIixcbiAgXCJ1bFwiXG5dO1xudmFyIFByaW1pdGl2ZSA9IE5PREVTLnJlZHVjZSgocHJpbWl0aXZlLCBub2RlKSA9PiB7XG4gIGNvbnN0IE5vZGUgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gICAgY29uc3QgeyBhc0NoaWxkLCAuLi5wcmltaXRpdmVQcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogbm9kZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgd2luZG93W1N5bWJvbC5mb3IoXCJyYWRpeC11aVwiKV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChDb21wLCB7IC4uLnByaW1pdGl2ZVByb3BzLCByZWY6IGZvcndhcmRlZFJlZiB9KTtcbiAgfSk7XG4gIE5vZGUuZGlzcGxheU5hbWUgPSBgUHJpbWl0aXZlLiR7bm9kZX1gO1xuICByZXR1cm4geyAuLi5wcmltaXRpdmUsIFtub2RlXTogTm9kZSB9O1xufSwge30pO1xuZnVuY3Rpb24gZGlzcGF0Y2hEaXNjcmV0ZUN1c3RvbUV2ZW50KHRhcmdldCwgZXZlbnQpIHtcbiAgaWYgKHRhcmdldCkgUmVhY3RET00uZmx1c2hTeW5jKCgpID0+IHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50KSk7XG59XG52YXIgUm9vdCA9IFByaW1pdGl2ZTtcbmV4cG9ydCB7XG4gIFByaW1pdGl2ZSxcbiAgUm9vdCxcbiAgZGlzcGF0Y2hEaXNjcmV0ZUN1c3RvbUV2ZW50XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs\n");

/***/ })

};
;