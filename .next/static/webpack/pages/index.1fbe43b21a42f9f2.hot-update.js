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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ItemList */ \"./src/components/ItemList.tsx\");\n/* harmony import */ var _contexts_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ShoppingCartContext */ \"./src/contexts/ShoppingCartContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Form,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Col,Form,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { products } = param;\n    _s();\n    // \n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(products);\n    const { initializeCart } = (0,_contexts_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_5__.useShoppingCart)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const userId = 1; // for demo purpose\n        initializeCart({\n            userId\n        });\n    }, []);\n    const handleInputChange = (e)=>{\n        setSearchTerm(e.target.value);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"https://dummyjson.com/products/search?q=\".concat(searchQuery));\n        const data = await response.json();\n        setItems(data.products);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"This is a tech case study created by Tony Yu, UCLA\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                as: \"main\",\n                className: \"py-4 px-3 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                        onSubmit: handleSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                            className: \"align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                                    xs: \"auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Form.Control, {\n                                        type: \"text\",\n                                        placeholder: \"Search\",\n                                        className: \"mr-sm-2\",\n                                        value: searchQuery,\n                                        onChange: handleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                                    xs: \"auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Form_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        type: \"submit\",\n                                        className: \"mb-2\",\n                                        children: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        products: items\n                    }, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"TGvsGoWHuzRLE/3ecR1BNn2cFY0=\", false, function() {\n    return [\n        _contexts_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_5__.useShoppingCart\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDcUI7QUFDVDtBQUNBO0FBQ0k7QUFDb0I7QUFDZDtBQUNNOztBQVUxQyxTQUFTYSxLQUFLLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFFM0IsR0FBRztJQUNILE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUNPO0lBQ25DLE1BQU0sRUFBRUssY0FBYyxFQUFFLEdBQUdkLDhFQUFlQTtJQUcxQ0csZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxTQUFTLEdBQUcsbUJBQW1CO1FBQ3JDRCxlQUFlO1lBQUVDO1FBQU87SUFDMUIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCQyxjQUFjRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwyQ0FBdUQsT0FBWmY7UUFDeEUsTUFBTWdCLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQ2QsU0FBU2EsS0FBS2pCLFFBQVE7SUFDeEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNkLGtEQUFJQTs7a0NBQ0gsOERBQUNpQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDdEMsaUVBQVNBO2dCQUFDdUMsSUFBRztnQkFBT0MsV0FBVTs7a0NBQzdCLDhEQUFDdEMsMERBQU1BOzs7OztrQ0FFUCw4REFBQ00sNEZBQUlBO3dCQUFDaUMsVUFBVWhCO2tDQUNkLDRFQUFDaEIsMkZBQUdBOzRCQUFDK0IsV0FBVTs7OENBQ2IsOERBQUM5QiwyRkFBR0E7b0NBQUNnQyxJQUFHOzhDQUNOLDRFQUFDbEMsNEZBQUlBLENBQUNtQyxPQUFPO3dDQUNYQyxNQUFLO3dDQUNMQyxhQUFZO3dDQUNaTCxXQUFVO3dDQUNWaEIsT0FBT1Y7d0NBQ1BnQyxVQUFVMUI7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDViwyRkFBR0E7b0NBQUNnQyxJQUFHOzhDQUNOLDRFQUFDL0IsOEZBQU1BO3dDQUFDaUMsTUFBSzt3Q0FBU0osV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLN0MsOERBQUNPOzs7OztrQ0FFRCw4REFBQzVDLDREQUFRQTt3QkFBQ1UsVUFBVUc7Ozs7OztrQ0FFcEIsOERBQUNmLDBEQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmO0dBN0R3Qlc7O1FBS0tSLDBFQUFlQTs7O0tBTHBCUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEl0ZW1MaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvSXRlbUxpc3RcIjtcbmltcG9ydCB7IHVzZVNob3BwaW5nQ2FydCB9IGZyb20gXCJAL2NvbnRleHRzL1Nob3BwaW5nQ2FydENvbnRleHRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZHVjdHM6IGRhdGEucHJvZHVjdHMgfSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMgfSkge1xuXG4gIC8vIFxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShwcm9kdWN0cyk7XG4gIGNvbnN0IHsgaW5pdGlhbGl6ZUNhcnQgfSA9IHVzZVNob3BwaW5nQ2FydCgpO1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IDE7IC8vIGZvciBkZW1vIHB1cnBvc2VcbiAgICBpbml0aWFsaXplQ2FydCh7IHVzZXJJZCB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvc2VhcmNoP3E9JHtzZWFyY2hRdWVyeX1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldEl0ZW1zKGRhdGEucHJvZHVjdHMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RS1Db21tZXJjZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGlzIGEgdGVjaCBjYXNlIHN0dWR5IGNyZWF0ZWQgYnkgVG9ueSBZdSwgVUNMQVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIFxuICAgICAgPENvbnRhaW5lciBhcz1cIm1haW5cIiBjbGFzc05hbWU9XCJweS00IHB4LTMgbXgtYXV0b1wiPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDb2wgeHM9XCJhdXRvXCI+XG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9XCJhdXRvXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPEl0ZW1MaXN0IHByb2R1Y3RzPXtpdGVtc30gLz5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQ29udGFpbmVyIiwiRm9vdGVyIiwiSGVhZGVyIiwiSXRlbUxpc3QiLCJ1c2VTaG9wcGluZ0NhcnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9ybSIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIkhvbWUiLCJwcm9kdWN0cyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJpdGVtcyIsInNldEl0ZW1zIiwiaW5pdGlhbGl6ZUNhcnQiLCJ1c2VySWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJzZXRTZWFyY2hUZXJtIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImFzIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ4cyIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});