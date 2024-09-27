"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-destination@2.0.0";
exports.ids = ["vendor-chunks/micromark-factory-destination@2.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/micromark-factory-destination@2.0.0/node_modules/micromark-factory-destination/dev/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-factory-destination@2.0.0/node_modules/micromark-factory-destination/dev/index.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryDestination: () => (/* binding */ factoryDestination)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/.pnpm/micromark-util-symbol@2.0.0/node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n\n/**\n * Parse destinations.\n *\n * ###### Examples\n *\n * ```markdown\n * <a>\n * <a\\>b>\n * <a b>\n * <a)>\n * a\n * a\\)b\n * a(b)c\n * a(b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type for whole (`<a>` or `b`).\n * @param {TokenType} literalType\n *   Type when enclosed (`<a>`).\n * @param {TokenType} literalMarkerType\n *   Type for enclosing (`<` and `>`).\n * @param {TokenType} rawType\n *   Type when not enclosed (`b`).\n * @param {TokenType} stringType\n *   Type for the value (`a` or `b`).\n * @param {number | undefined} [max=Infinity]\n *   Depth of nested parens (inclusive).\n * @returns {State}\n *   Start state.\n */\n// eslint-disable-next-line max-params\nfunction factoryDestination(\n  effects,\n  ok,\n  nok,\n  type,\n  literalType,\n  literalMarkerType,\n  rawType,\n  stringType,\n  max\n) {\n  const limit = max || Number.POSITIVE_INFINITY\n  let balance = 0\n\n  return start\n\n  /**\n   * Start of destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *     ^\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function start(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan) {\n      effects.enter(type)\n      effects.enter(literalType)\n      effects.enter(literalMarkerType)\n      effects.consume(code)\n      effects.exit(literalMarkerType)\n      return enclosedBefore\n    }\n\n    // ASCII control, space, closing paren.\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)\n    ) {\n      return nok(code)\n    }\n\n    effects.enter(type)\n    effects.enter(rawType)\n    effects.enter(stringType)\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})\n    return raw(code)\n  }\n\n  /**\n   * After `<`, at an enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function enclosedBefore(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n      effects.enter(literalMarkerType)\n      effects.consume(code)\n      effects.exit(literalMarkerType)\n      effects.exit(literalType)\n      effects.exit(type)\n      return ok\n    }\n\n    effects.enter(stringType)\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString})\n    return enclosed(code)\n  }\n\n  /**\n   * In enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function enclosed(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)\n      effects.exit(stringType)\n      return enclosedBefore(code)\n    }\n\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)\n    ) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? enclosedEscape : enclosed\n  }\n\n  /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | <a\\*a>\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */\n  function enclosedEscape(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash\n    ) {\n      effects.consume(code)\n      return enclosed\n    }\n\n    return enclosed(code)\n  }\n\n  /**\n   * In raw destination.\n   *\n   * ```markdown\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function raw(code) {\n    if (\n      !balance &&\n      (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n        code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||\n        (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code))\n    ) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)\n      effects.exit(stringType)\n      effects.exit(rawType)\n      effects.exit(type)\n      return ok(code)\n    }\n\n    if (balance < limit && code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n      effects.consume(code)\n      balance++\n      return raw\n    }\n\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis) {\n      effects.consume(code)\n      balance--\n      return raw\n    }\n\n    // ASCII control (but *not* `\\0`) and space and `(`.\n    // Note: in `markdown-rs`, `\\0` exists in codes, in `micromark-js` it\n    // doesn’t.\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)\n    ) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? rawEscape : raw\n  }\n\n  /**\n   * After `\\`, at special character.\n   *\n   * ```markdown\n   * > | a\\*a\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */\n  function rawEscape(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash\n    ) {\n      effects.consume(code)\n      return raw\n    }\n\n    return raw(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLWZhY3RvcnktZGVzdGluYXRpb25AMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSwwQ0FBMEM7QUFDdkQ7O0FBTWlDO0FBQzRCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLE1BQU0sc0VBQVk7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3REFBSyxlQUFlLGFBQWEsNERBQVMsbUJBQW1CO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHdEQUFLLGVBQWUsYUFBYSw0REFBUyxtQkFBbUI7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQUs7QUFDdEIsbUJBQW1CLHdEQUFLO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQixNQUFNLDRFQUFrQjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQUs7QUFDckIsaUJBQWlCLHdEQUFLO0FBQ3RCLFFBQVEsbUZBQXlCO0FBQ2pDO0FBQ0EsbUJBQW1CLHdEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHdEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix3REFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLE1BQU0sc0VBQVk7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHdEQUFLO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCLGVBQWUsd0RBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdlc29tZS1wd2gtYmxvZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hcmstZmFjdG9yeS1kZXN0aW5hdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktZGVzdGluYXRpb24vZGV2L2luZGV4LmpzPzcwOTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHtcbiAgYXNjaWlDb250cm9sLFxuICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlLFxuICBtYXJrZG93bkxpbmVFbmRpbmdcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIFBhcnNlIGRlc3RpbmF0aW9ucy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogPGE+XG4gKiA8YVxcPmI+XG4gKiA8YSBiPlxuICogPGEpPlxuICogYVxuICogYVxcKWJcbiAqIGEoYiljXG4gKiBhKGIpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0VmZmVjdHN9IGVmZmVjdHNcbiAqICAgQ29udGV4dC5cbiAqIEBwYXJhbSB7U3RhdGV9IG9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7U3RhdGV9IG5va1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHVuc3VjY2Vzc2Z1bC5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSB0eXBlXG4gKiAgIFR5cGUgZm9yIHdob2xlIChgPGE+YCBvciBgYmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IGxpdGVyYWxUeXBlXG4gKiAgIFR5cGUgd2hlbiBlbmNsb3NlZCAoYDxhPmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IGxpdGVyYWxNYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIGVuY2xvc2luZyAoYDxgIGFuZCBgPmApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHJhd1R5cGVcbiAqICAgVHlwZSB3aGVuIG5vdCBlbmNsb3NlZCAoYGJgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBzdHJpbmdUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSB2YWx1ZSAoYGFgIG9yIGBiYCkuXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gW21heD1JbmZpbml0eV1cbiAqICAgRGVwdGggb2YgbmVzdGVkIHBhcmVucyAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeURlc3RpbmF0aW9uKFxuICBlZmZlY3RzLFxuICBvayxcbiAgbm9rLFxuICB0eXBlLFxuICBsaXRlcmFsVHlwZSxcbiAgbGl0ZXJhbE1hcmtlclR5cGUsXG4gIHJhd1R5cGUsXG4gIHN0cmluZ1R5cGUsXG4gIG1heFxuKSB7XG4gIGNvbnN0IGxpbWl0ID0gbWF4IHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICBsZXQgYmFsYW5jZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICBeXG4gICAqID4gfCBhYVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBjb2Rlcy5sZXNzVGhhbikge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIHJldHVybiBlbmNsb3NlZEJlZm9yZVxuICAgIH1cblxuICAgIC8vIEFTQ0lJIGNvbnRyb2wsIHNwYWNlLCBjbG9zaW5nIHBhcmVuLlxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuc3BhY2UgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgfHxcbiAgICAgIGFzY2lpQ29udHJvbChjb2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHJhd1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIodHlwZXMuY2h1bmtTdHJpbmcsIHtjb250ZW50VHlwZTogY29uc3RhbnRzLmNvbnRlbnRUeXBlU3RyaW5nfSlcbiAgICByZXR1cm4gcmF3KGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYDxgLCBhdCBhbiBlbmNsb3NlZCBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhYT5cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNsb3NlZEJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLmdyZWF0ZXJUaGFuKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQobGl0ZXJhbFR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmNodW5rU3RyaW5nLCB7Y29udGVudFR5cGU6IGNvbnN0YW50cy5jb250ZW50VHlwZVN0cmluZ30pXG4gICAgcmV0dXJuIGVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gZW5jbG9zZWQgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5jbG9zZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBjb2Rlcy5ncmVhdGVyVGhhbikge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gZW5jbG9zZWRCZWZvcmUoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlc3NUaGFuIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuYmFja3NsYXNoID8gZW5jbG9zZWRFc2NhcGUgOiBlbmNsb3NlZFxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YVxcKmE+XG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNsb3NlZEVzY2FwZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMubGVzc1RoYW4gfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmdyZWF0ZXJUaGFuIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2hcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuY2xvc2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gcmF3IGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYWFcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJhdyhjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgIWJhbGFuY2UgJiZcbiAgICAgIChjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRQYXJlbnRoZXNpcyB8fFxuICAgICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQocmF3VHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGJhbGFuY2UgPCBsaW1pdCAmJiBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYmFsYW5jZSsrXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYmFsYW5jZS0tXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuXG4gICAgLy8gQVNDSUkgY29udHJvbCAoYnV0ICpub3QqIGBcXDBgKSBhbmQgc3BhY2UgYW5kIGAoYC5cbiAgICAvLyBOb3RlOiBpbiBgbWFya2Rvd24tcnNgLCBgXFwwYCBleGlzdHMgaW4gY29kZXMsIGluIGBtaWNyb21hcmstanNgIGl0XG4gICAgLy8gZG9lc27igJl0LlxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuc3BhY2UgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpcyB8fFxuICAgICAgYXNjaWlDb250cm9sKGNvZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCA/IHJhd0VzY2FwZSA6IHJhd1xuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYVxcKmFcbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gcmF3RXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXMgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaFxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhdyhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/micromark-factory-destination@2.0.0/node_modules/micromark-factory-destination/dev/index.js\n");

/***/ })

};
;