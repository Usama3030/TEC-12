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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const fetchUsers = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/users?page=\".concat(currentPage, \"&sort=name&length=10\"));\n            console.log(response);\n            setUsers(response.data.users);\n            setTotalPages(response.data.totalPages);\n        } catch (error) {\n            console.error(\"Error fetching users:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUsers();\n    }, [\n        currentPage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"User List\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: users && users.length > 0 ? users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                user.name,\n                                \", \",\n                                user.email\n                            ]\n                        }, user.id, true, {\n                            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"No users to display\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 2\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setCurrentPage((prevPage)=>prevPage - 1),\n                            disabled: currentPage === 1,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setCurrentPage((prevPage)=>prevPage + 1),\n                            disabled: currentPage === totalPages,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usama Bajwa\\\\react\\\\baskan\\\\tec-17\\\\src\\\\app\\\\userlist\\\\page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"jiq4Qt4cwOponj+RP6WHxWptygo=\");\n_c = Page;\n;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlcmxpc3QvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDWDtBQUNkO0FBRVgsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVcsYUFBYTtRQUNqQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLG9DQUFnRCxPQUFaTixhQUFZO1lBQ2pGTyxRQUFRQyxHQUFHLENBQUNIO1lBQ1pOLFNBQVNNLFNBQVNJLElBQUksQ0FBQ1gsS0FBSztZQUM1QkssY0FBY0UsU0FBU0ksSUFBSSxDQUFDUCxVQUFVO1FBQ3hDLEVBQUUsT0FBT1EsT0FBTztZQUNkSCxRQUFRRyxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGO0lBRUFoQixnREFBU0EsQ0FBQztRQUNSVTtJQUNGLEdBQUc7UUFBQ0o7S0FBWTtJQUVoQixxQkFDRSw4REFBQ1c7UUFBS0MsV0FBV2pCLDhEQUFXO2tCQUMxQiw0RUFBQ2tCOzs4QkFDQyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFRWCw4REFBQ0M7OEJBQ0NqQixTQUFTQSxNQUFNa0IsTUFBTSxHQUFHLElBQ3ZCbEIsTUFBTW1CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7O2dDQUNFRCxLQUFLRSxJQUFJO2dDQUFDO2dDQUFHRixLQUFLRyxLQUFLOzsyQkFEakJILEtBQUtJLEVBQUU7Ozs7a0RBS2xCLDhEQUFDSDtrQ0FBRzs7Ozs7Ozs7Ozs7OEJBSUEsOERBQUNOOztzQ0FDQyw4REFBQ1U7NEJBQ0NDLFNBQVMsSUFBTXZCLGVBQWV3QixDQUFBQSxXQUFZQSxXQUFXOzRCQUNyREMsVUFBVTFCLGdCQUFnQjtzQ0FDM0I7Ozs7OztzQ0FHRCw4REFBQ3VCOzRCQUNDQyxTQUFTLElBQU12QixlQUFld0IsQ0FBQUEsV0FBWUEsV0FBVzs0QkFDckRDLFVBQVUxQixnQkFBZ0JFO3NDQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTdEd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdXNlcmxpc3QvcGFnZS5qcz9mNjcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2UubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycz9wYWdlPSR7Y3VycmVudFBhZ2V9JnNvcnQ9bmFtZSZsZW5ndGg9MTBgKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBzZXRVc2VycyhyZXNwb25zZS5kYXRhLnVzZXJzKTtcclxuICAgICAgc2V0VG90YWxQYWdlcyhyZXNwb25zZS5kYXRhLnRvdGFsUGFnZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcnM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXJzKCk7XHJcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+VXNlciBMaXN0PC9oMT5cclxuICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICB7dXNlcnMgJiYgdXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgIHt1c2VyLm5hbWV9ICwge3VzZXIuZW1haWx9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+Ki99XHJcbiA8dWw+XHJcbiAge3VzZXJzICYmIHVzZXJzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICB1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAge3VzZXIubmFtZX0sIHt1c2VyLmVtYWlsfVxyXG4gICAgICA8L2xpPlxyXG4gICAgKSlcclxuICApIDogKFxyXG4gICAgPGxpPk5vIHVzZXJzIHRvIGRpc3BsYXk8L2xpPlxyXG4gICl9XHJcbjwvdWw+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKHByZXZQYWdlID0+IHByZXZQYWdlIC0gMSl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShwcmV2UGFnZSA9PiBwcmV2UGFnZSArIDEpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImF4aW9zIiwiUGFnZSIsInVzZXJzIiwic2V0VXNlcnMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJmZXRjaFVzZXJzIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJ1c2VyIiwibGkiLCJuYW1lIiwiZW1haWwiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2UGFnZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/userlist/page.js\n"));

/***/ })

});