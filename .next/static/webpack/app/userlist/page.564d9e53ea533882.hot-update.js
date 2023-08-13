"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/userlist/page",{

/***/ "(app-pages-browser)/./src/app/userlist/page.js":
/*!**********************************!*\
  !*** ./src/app/userlist/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [usersRef, setUsersRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const fetchUsers = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/users?page=\".concat(currentPage, \"&sort=name&length=10\"));\n            console.log(response);\n            setUsersRef(response.data.users);\n            setTotalPages(response.data.totalPages);\n        } catch (error) {\n            console.error(\"Error fetching users:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUsers();\n    }, [\n        currentPage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUsers(usersRef);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"User List\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: users && users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                user.name,\n                                \" , \",\n                                user.email\n                            ]\n                        }, user.id, true, {\n                            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setCurrentPage((prevPage)=>prevPage - 1),\n                            disabled: currentPage === 1,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setCurrentPage((prevPage)=>prevPage + 1),\n                            disabled: currentPage === totalPages,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"OLCv846+toHP7df6pqP2ObjsmlI=\");\n_c = Page;\n;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlcmxpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDbkI7QUFDZDtBQUVYLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHWCw2Q0FBTUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1ZLGFBQWE7UUFDakIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVgsNkNBQUtBLENBQUNZLEdBQUcsQ0FBQyxvQ0FBZ0QsT0FBWlIsYUFBWTtZQUNqRlMsUUFBUUMsR0FBRyxDQUFDSDtZQUNaRixZQUFZRSxTQUFTSSxJQUFJLENBQUNiLEtBQUs7WUFDL0JLLGNBQWNJLFNBQVNJLElBQUksQ0FBQ1QsVUFBVTtRQUN4QyxFQUFFLE9BQU9VLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLHlCQUF5QkE7UUFDekM7SUFDRjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUmE7SUFDRixHQUFHO1FBQUNOO0tBQVk7SUFFaEJQLGdEQUFTQSxDQUFDO1FBQ1JNLFNBQVNLO0lBQ1gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNTO1FBQUtDLFdBQVduQiw4REFBVztrQkFDMUIsNEVBQUNvQjs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUNFbkIsU0FBU0EsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUNDOztnQ0FDRUQsS0FBS0UsSUFBSTtnQ0FBQztnQ0FBSUYsS0FBS0csS0FBSzs7MkJBRGxCSCxLQUFLSSxFQUFFOzs7Ozs7Ozs7OzhCQU1wQiw4REFBQ1I7O3NDQUNDLDhEQUFDUzs0QkFDQ0MsU0FBUyxJQUFNeEIsZUFBZXlCLENBQUFBLFdBQVlBLFdBQVc7NEJBQ3JEQyxVQUFVM0IsZ0JBQWdCO3NDQUMzQjs7Ozs7O3NDQUdELDhEQUFDd0I7NEJBQ0NDLFNBQVMsSUFBTXhCLGVBQWV5QixDQUFBQSxXQUFZQSxXQUFXOzRCQUNyREMsVUFBVTNCLGdCQUFnQkU7c0NBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBdER3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91c2VybGlzdC9wYWdlLmpzP2Y2NzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFt1c2Vyc1JlZiwgc2V0VXNlcnNSZWZdID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnM/cGFnZT0ke2N1cnJlbnRQYWdlfSZzb3J0PW5hbWUmbGVuZ3RoPTEwYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgc2V0VXNlcnNSZWYocmVzcG9uc2UuZGF0YS51c2Vycyk7XHJcbiAgICAgIHNldFRvdGFsUGFnZXMocmVzcG9uc2UuZGF0YS50b3RhbFBhZ2VzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXJzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hVc2VycygpO1xyXG4gIH0sIFtjdXJyZW50UGFnZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlcnModXNlcnNSZWYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5Vc2VyIExpc3Q8L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHt1c2VycyAmJiB1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAge3VzZXIubmFtZX0gLCB7dXNlci5lbWFpbH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKHByZXZQYWdlID0+IHByZXZQYWdlIC0gMSl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShwcmV2UGFnZSA9PiBwcmV2UGFnZSArIDEpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsImF4aW9zIiwiUGFnZSIsInVzZXJzIiwic2V0VXNlcnMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJ1c2Vyc1JlZiIsInNldFVzZXJzUmVmIiwiZmV0Y2hVc2VycyIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwidXNlciIsImxpIiwibmFtZSIsImVtYWlsIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldlBhZ2UiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/userlist/page.js\n"));

/***/ })

});