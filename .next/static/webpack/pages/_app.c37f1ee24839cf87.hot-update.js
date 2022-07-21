"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Logo */ \"./src/components/Logo.tsx\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Hamburger */ \"./src/components/Hamburger.tsx\");\nvar _this = undefined;\n\n\n\n\nvar InstagramIcon = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"img\", {\n    width: 24,\n    height: 24,\n    minWidth: 24\n});\nvar Anchor = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"a\", {\n    position: \"relative\",\n    color: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.colors.black,\n    fontSize: 21,\n    textTransform: \"uppercase\",\n    textDecoration: \"none\",\n    \"&:hover\": {\n        textDecoration: \"underline\"\n    }\n});\nvar Grid = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"div\", {\n    display: \"grid\",\n    alignItems: \"center\",\n    borderBottom: \"1px solid $border\",\n    variants: {\n        layout: {\n            mobile: {\n                gridTemplateColumns: \"1fr\",\n                justifyContent: \"space-between\"\n            },\n            desktop: {\n                gridTemplateColumns: \"1fr 1fr\"\n            }\n        },\n        padding: {\n            compact: {\n                padding: \"0 $2\"\n            },\n            comfortable: {\n                padding: \"0 $4\"\n            }\n        }\n    },\n    defaultVariants: {\n        layout: \"mobile\",\n        padding: \"compact\"\n    }\n});\n_c = Grid;\nvar Navigation = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n        padding: {\n            \"@m\": \"comfortable\"\n        },\n        layout: {\n            \"@m\": \"desktop\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c, _c1;\n$RefreshReg$(_c, \"Grid\");\n$RefreshReg$(_c1, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDd0Q7QUFHcEI7QUFDVTtBQUU5QyxJQUFNSSxhQUFhLEdBQUdKLCtEQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2xDSyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFFRixJQUFNQyxNQUFNLEdBQUdSLCtEQUFNLENBQUMsR0FBRyxFQUFFO0lBQ3pCUyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsS0FBSyxFQUFFVCx1RUFBa0I7SUFDekJZLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLGFBQWEsRUFBRSxXQUFXO0lBQzFCQyxjQUFjLEVBQUUsTUFBTTtJQUN0QixTQUFTLEVBQUU7UUFDVEEsY0FBYyxFQUFFLFdBQVc7S0FDNUI7Q0FDRixDQUFDO0FBRUYsSUFBTUMsSUFBSSxHQUFHaEIsK0RBQU0sQ0FBQyxLQUFLLEVBQUU7SUFDekJpQixPQUFPLEVBQUUsTUFBTTtJQUNmQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQ0MsUUFBUSxFQUFFO1FBQ1JDLE1BQU0sRUFBRTtZQUNOQyxNQUFNLEVBQUU7Z0JBQ05DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCQyxjQUFjLEVBQUUsZUFBZTthQUNoQztZQUNEQyxPQUFPLEVBQUU7Z0JBQ1BGLG1CQUFtQixFQUFFLFNBQVM7YUFDL0I7U0FDRjtRQUNERyxPQUFPLEVBQUU7WUFDUEMsT0FBTyxFQUFFO2dCQUFFRCxPQUFPLEVBQUUsTUFBTTthQUFFO1lBQzVCRSxXQUFXLEVBQUU7Z0JBQUVGLE9BQU8sRUFBRSxNQUFNO2FBQUU7U0FDakM7S0FDRjtJQUNERyxlQUFlLEVBQUU7UUFDZlIsTUFBTSxFQUFFLFFBQVE7UUFDaEJLLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0NBQ0YsQ0FBQztBQXZCSVYsS0FBQUEsSUFBSTtBQXlCVixJQUFNYyxVQUFVLEdBQUcsV0FBTTtJQUN2QixxQkFDRSw4REFBQ2QsSUFBSTtRQUFDVSxPQUFPLEVBQUU7WUFBRSxJQUFJLEVBQUUsYUFBYTtTQUFFO1FBQUVMLE1BQU0sRUFBRTtZQUFFLElBQUksRUFBRSxTQUFTO1NBQUU7OzBCQUNqRSw4REFBQ25CLHdEQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDQyw2REFBUzs7OztxQkFBRzs7Ozs7O2FBb0JSLENBQ1A7Q0FDSDtBQTFCSzJCLE1BQUFBLFVBQVU7QUE0QmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/MDFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBzdHlsZWQsIHRoZW1lIH0gZnJvbSBcIkBzdHlsZXMvc3RpdGNoZXMuY29uZmlnXCI7XG5cbmltcG9ydCBGbGV4IGZyb20gXCJAY29tcG9uZW50cy9GbGV4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQGNvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiQGNvbXBvbmVudHMvSGFtYnVyZ2VyXCI7XG5cbmNvbnN0IEluc3RhZ3JhbUljb24gPSBzdHlsZWQoXCJpbWdcIiwge1xuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIG1pbldpZHRoOiAyNCxcbn0pO1xuXG5jb25zdCBBbmNob3IgPSBzdHlsZWQoXCJhXCIsIHtcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgZm9udFNpemU6IDIxLFxuICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gIH0sXG59KTtcblxuY29uc3QgR3JpZCA9IHN0eWxlZChcImRpdlwiLCB7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICRib3JkZXJcIixcbiAgdmFyaWFudHM6IHtcbiAgICBsYXlvdXQ6IHtcbiAgICAgIG1vYmlsZToge1xuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICB9LFxuICAgICAgZGVza3RvcDoge1xuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYWRkaW5nOiB7XG4gICAgICBjb21wYWN0OiB7IHBhZGRpbmc6IFwiMCAkMlwiIH0sXG4gICAgICBjb21mb3J0YWJsZTogeyBwYWRkaW5nOiBcIjAgJDRcIiB9LFxuICAgIH0sXG4gIH0sXG4gIGRlZmF1bHRWYXJpYW50czoge1xuICAgIGxheW91dDogXCJtb2JpbGVcIixcbiAgICBwYWRkaW5nOiBcImNvbXBhY3RcIixcbiAgfSxcbn0pO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIHBhZGRpbmc9e3sgXCJAbVwiOiBcImNvbWZvcnRhYmxlXCIgfX0gbGF5b3V0PXt7IFwiQG1cIjogXCJkZXNrdG9wXCIgfX0+XG4gICAgICA8TG9nbyAvPlxuICAgICAgPEhhbWJ1cmdlciAvPlxuICAgICAgey8qIDxGbGV4IGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJiZXR3ZWVuXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicm93XCIgZ2FwPXt7IFwiQGluaXRpYWxcIjogXCJsXCIsIFwiQGxnXCI6IFwieGxcIiB9fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxBbmNob3I+V29yazwvQW5jaG9yPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8QW5jaG9yPkFib3V0PC9BbmNob3I+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPEFuY2hvcj5Db250YWN0PC9BbmNob3I+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb25lbmRzdHVkaW9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uIHNyYz1cIi9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiSW5zdGFncmFtXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvRmxleD4gKi99XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ0aGVtZSIsIkxvZ28iLCJIYW1idXJnZXIiLCJJbnN0YWdyYW1JY29uIiwid2lkdGgiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIkFuY2hvciIsInBvc2l0aW9uIiwiY29sb3IiLCJjb2xvcnMiLCJibGFjayIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwiR3JpZCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyQm90dG9tIiwidmFyaWFudHMiLCJsYXlvdXQiLCJtb2JpbGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwianVzdGlmeUNvbnRlbnQiLCJkZXNrdG9wIiwicGFkZGluZyIsImNvbXBhY3QiLCJjb21mb3J0YWJsZSIsImRlZmF1bHRWYXJpYW50cyIsIk5hdmlnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navigation.tsx\n"));

/***/ })

});