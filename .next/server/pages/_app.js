/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/ShoppingCartContext.tsx":
/*!**********************************************!*\
  !*** ./src/contexts/ShoppingCartContext.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShoppingCartProvider: () => (/* binding */ ShoppingCartProvider),\n/* harmony export */   useShoppingCart: () => (/* binding */ useShoppingCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* This is a context created for inter-component communications of modifying the shopping cart */ const ShoppingCartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useShoppingCart() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ShoppingCartContext);\n}\nfunction ShoppingCartProvider({ children }) {\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [clientId, setClientId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const initializeCart = ({ id })=>{\n        setClientId(id);\n        // creates a POST request to the server to create a cart for the client\n        fetch(\"https://dummyjson.com/carts/add\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userId: id,\n                products: [\n                    {}\n                ]\n            })\n        }).then((res)=>res.json()).then(console.log);\n    };\n    const addToCart = ({ product })=>{\n        fetch(\"https://dummyjson.com/carts/\" + clientId, {\n            method: \"PUT\",\n            /* or PATCH */ headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                merge: true,\n                products: [\n                    {\n                        id: product.id,\n                        quantity: 1\n                    }\n                ]\n            })\n        }).then((res)=>res.json()).then(console.log);\n        setCartItems((prevItems)=>{\n            // Check if the product is already in the cart\n            const existingProductIndex = prevItems.findIndex((item)=>item.id === product.id);\n            // If the product is already in the cart, increase the quantity\n            if (existingProductIndex >= 0) {\n                return prevItems.map((item, index)=>{\n                    if (index === existingProductIndex) {\n                        return {\n                            ...item,\n                            quantity: item.quantity + 1\n                        };\n                    }\n                    return item;\n                });\n            }\n            // If the product is not in the cart, add it with a quantity of 1\n            return [\n                ...prevItems,\n                {\n                    ...product,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = ({ product })=>{\n        fetch(\"https://dummyjson.com/carts/\" + clientId, {\n            method: \"PUT\",\n            /* or PATCH */ headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                merge: true,\n                products: [\n                    {\n                        id: product.id,\n                        quantity: -1\n                    }\n                ]\n            })\n        });\n        setCartItems((prevItems)=>{\n            // Check if the product is already in the cart\n            const existingProductIndex = prevItems.findIndex((item)=>item.id === product.id);\n            // If the product is already in the cart\n            if (existingProductIndex >= 0) {\n                const updatedItems = prevItems.map((item, index)=>{\n                    // Decrease the quantity if more than one, or remove if it's the last one\n                    if (index === existingProductIndex) {\n                        if (item.quantity > 0) return {\n                            ...item,\n                            quantity: item.quantity - 1\n                        };\n                    // For items with quantity 1, we filter them out below, so do nothing here\n                    }\n                    return item;\n                }).filter((item)=>item.quantity > 0); // Remove the item if quantity is 0\n                return updatedItems;\n            } else {\n                console.log(\"Deleting item with id \" + product.id + \" not found\");\n                return prevItems;\n            }\n        });\n    };\n    return(// export the Cart functions to the webpage\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShoppingCartContext.Provider, {\n        value: {\n            initializeCart,\n            cartItems,\n            addToCart,\n            removeFromCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tianrunyu/e-commerce-app/src/contexts/ShoppingCartContext.tsx\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHSSxJQUFJOzRCQUFFSixVQUFVSSxLQUFLSixRQUFRLEdBQUc7d0JBQUU7b0JBQ2xELDBFQUEwRTtvQkFDOUU7b0JBQ0EsT0FBT0k7Z0JBQ1gsR0FBR0ssTUFBTSxDQUFDTCxDQUFBQSxPQUFRQSxLQUFLSixRQUFRLEdBQUcsSUFBSSxtQ0FBbUM7Z0JBRXpFLE9BQU9RO1lBQ1gsT0FBTztnQkFDSGIsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkUsUUFBUWYsRUFBRSxHQUFHO2dCQUNwRCxPQUFPa0I7WUFDWDtRQUNKO0lBQ0o7SUFFQSxPQUNJLDJDQUEyQztrQkFDM0MsOERBQUMzQixvQkFBb0JvQyxRQUFRO1FBQUNDLE9BQU87WUFBRTdCO1lBQWdCSjtZQUFXbUI7WUFBV1U7UUFBZTtrQkFDM0Y5Qjs7Ozs7O0FBR1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0anMvLi9zcmMvY29udGV4dHMvU2hvcHBpbmdDYXJ0Q29udGV4dC50c3g/OTg1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qIFRoaXMgaXMgYSBjb250ZXh0IGNyZWF0ZWQgZm9yIGludGVyLWNvbXBvbmVudCBjb21tdW5pY2F0aW9ucyBvZiBtb2RpZnlpbmcgdGhlIHNob3BwaW5nIGNhcnQgKi9cblxuY29uc3QgU2hvcHBpbmdDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNob3BwaW5nQ2FydCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU2hvcHBpbmdDYXJ0Q29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaG9wcGluZ0NhcnRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjbGllbnRJZCwgc2V0Q2xpZW50SWRdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IGluaXRpYWxpemVDYXJ0ID0gKHsgaWQgfSkgPT4ge1xuICAgICAgICBzZXRDbGllbnRJZChpZCk7XG5cbiAgICAgICAgLy8gY3JlYXRlcyBhIFBPU1QgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGNyZWF0ZSBhIGNhcnQgZm9yIHRoZSBjbGllbnRcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9jYXJ0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogaWQsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvQ2FydCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL2NhcnRzLycgKyBjbGllbnRJZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJywgLyogb3IgUEFUQ0ggKi9cbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1lcmdlOiB0cnVlLCAvLyB0aGlzIHdpbGwgaW5jbHVkZSBleGlzdGluZyBwcm9kdWN0cyBpbiB0aGUgY2FydFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihjb25zb2xlLmxvZyk7XG5cbiAgICAgICAgc2V0Q2FydEl0ZW1zKChwcmV2SXRlbXMpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb2R1Y3QgaXMgYWxyZWFkeSBpbiB0aGUgY2FydFxuICAgICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHByZXZJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZSBwcm9kdWN0IGlzIGFscmVhZHkgaW4gdGhlIGNhcnQsIGluY3JlYXNlIHRoZSBxdWFudGl0eVxuICAgICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGV4aXN0aW5nUHJvZHVjdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGUgcHJvZHVjdCBpcyBub3QgaW4gdGhlIGNhcnQsIGFkZCBpdCB3aXRoIGEgcXVhbnRpdHkgb2YgMVxuICAgICAgICByZXR1cm4gWy4uLnByZXZJdGVtcywgeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9XTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgXG5cbiAgICBjb25zdCByZW1vdmVGcm9tQ2FydCA9ICh7cHJvZHVjdH0pID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9jYXJ0cy8nICsgY2xpZW50SWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsIC8qIG9yIFBBVENIICovXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lcmdlOiB0cnVlLCAvLyB0aGlzIHdpbGwgaW5jbHVkZSBleGlzdGluZyBwcm9kdWN0cyBpbiB0aGUgY2FydFxuICAgICAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzZXRDYXJ0SXRlbXMoKHByZXZJdGVtcykgPT4ge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb2R1Y3QgaXMgYWxyZWFkeSBpbiB0aGUgY2FydFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQcm9kdWN0SW5kZXggPSBwcmV2SXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIHRoZSBwcm9kdWN0IGlzIGFscmVhZHkgaW4gdGhlIGNhcnRcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Byb2R1Y3RJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gcHJldkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVjcmVhc2UgdGhlIHF1YW50aXR5IGlmIG1vcmUgdGhhbiBvbmUsIG9yIHJlbW92ZSBpZiBpdCdzIHRoZSBsYXN0IG9uZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGV4aXN0aW5nUHJvZHVjdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnF1YW50aXR5ID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBpdGVtcyB3aXRoIHF1YW50aXR5IDEsIHdlIGZpbHRlciB0aGVtIG91dCBiZWxvdywgc28gZG8gbm90aGluZyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5xdWFudGl0eSA+IDApOyAvLyBSZW1vdmUgdGhlIGl0ZW0gaWYgcXVhbnRpdHkgaXMgMFxuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkSXRlbXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgaXRlbSB3aXRoIGlkIFwiICsgcHJvZHVjdC5pZCArIFwiIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldkl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIGV4cG9ydCB0aGUgQ2FydCBmdW5jdGlvbnMgdG8gdGhlIHdlYnBhZ2VcbiAgICAgICAgPFNob3BwaW5nQ2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaW5pdGlhbGl6ZUNhcnQsIGNhcnRJdGVtcywgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1Nob3BwaW5nQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJTaG9wcGluZ0NhcnRDb250ZXh0IiwidXNlU2hvcHBpbmdDYXJ0IiwiU2hvcHBpbmdDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImNsaWVudElkIiwic2V0Q2xpZW50SWQiLCJpbml0aWFsaXplQ2FydCIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJwcm9kdWN0cyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJtZXJnZSIsInF1YW50aXR5IiwicHJldkl0ZW1zIiwiZXhpc3RpbmdQcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwibWFwIiwiaW5kZXgiLCJyZW1vdmVGcm9tQ2FydCIsInVwZGF0ZWRJdGVtcyIsImZpbHRlciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ShoppingCartContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/ShoppingCartContext */ \"./src/contexts/ShoppingCartContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tianrunyu/e-commerce-app/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUV3QztBQUV2RCxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwrRUFBb0JBO2tCQUNuQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHRqcy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBTaG9wcGluZ0NhcnRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRzL1Nob3BwaW5nQ2FydENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2hvcHBpbmdDYXJ0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TaG9wcGluZ0NhcnRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaG9wcGluZ0NhcnRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();