"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\n\n\n\nfunction ProductCard(param) {\n    let { product } = param;\n    // Accessing the first image\n    const firstImage = product.images[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"h-100 d-flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Img, {\n                variant: \"top\",\n                src: firstImage,\n                alt: product.title,\n                style: {\n                    width: \"200px\",\n                    height: \"150px\",\n                    objectFit: \"cover\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Text, {\n                                children: [\n                                    \"$\",\n                                    product.price,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                                        lineNumber: 17,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Rating: \",\n                                    product.rating\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        variant: \"primary\",\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tianrunyu/e-commerce-app/src/components/ProductCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNJO0FBRTVDLFNBQVNHLFlBQVksS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQ25CLDRCQUE0QjtJQUM1QixNQUFNQyxhQUFhRCxRQUFRRSxNQUFNLENBQUMsRUFBRTtJQUVwQyxxQkFDRSw4REFBQ0wsNERBQUlBO1FBQUNNLFdBQVU7OzBCQUNkLDhEQUFDTixnRUFBUTtnQkFBQ1EsU0FBUTtnQkFBTUMsS0FBS0w7Z0JBQVlNLEtBQUtQLFFBQVFRLEtBQUs7Z0JBQUVDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLFFBQVE7b0JBQVNDLFdBQVc7Z0JBQVE7Ozs7OzswQkFDMUgsOERBQUNmLGlFQUFTOztrQ0FDUiw4REFBQ2lCOzswQ0FDQyw4REFBQ2pCLGtFQUFVOzBDQUFFRyxRQUFRUSxLQUFLOzs7Ozs7MENBQzFCLDhEQUFDWCxpRUFBUzs7b0NBQUM7b0NBQ0xHLFFBQVFpQixLQUFLO2tEQUNmLDhEQUFDQzs7Ozs7b0NBQUs7b0NBQ0dsQixRQUFRbUIsTUFBTTs7Ozs7Ozs7Ozs7OztrQ0FHN0IsOERBQUNyQiw4REFBTUE7d0JBQUNPLFNBQVE7a0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQztLQXBCU047QUFzQlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4PzYwYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdCB9KSB7XG4gIC8vIEFjY2Vzc2luZyB0aGUgZmlyc3QgaW1hZ2VcbiAgY29uc3QgZmlyc3RJbWFnZSA9IHByb2R1Y3QuaW1hZ2VzWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiaC0xMDAgZC1mbGV4XCI+XG4gICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17Zmlyc3RJbWFnZX0gYWx0PXtwcm9kdWN0LnRpdGxlfSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMTUwcHgnLCBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gLz5cbiAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENhcmQuVGl0bGU+e3Byb2R1Y3QudGl0bGV9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICR7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFJhdGluZzoge3Byb2R1Y3QucmF0aW5nfVxuICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkFkZCB0byBDYXJ0PC9CdXR0b24+XG4gICAgICA8L0NhcmQuQm9keT5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImZpcnN0SW1hZ2UiLCJpbWFnZXMiLCJjbGFzc05hbWUiLCJJbWciLCJ2YXJpYW50Iiwic3JjIiwiYWx0IiwidGl0bGUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiQm9keSIsImRpdiIsIlRpdGxlIiwiVGV4dCIsInByaWNlIiwiYnIiLCJyYXRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductCard.tsx\n"));

/***/ })

});