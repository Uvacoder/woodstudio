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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Logo */ \"./src/components/Logo.tsx\");\n/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Hamburger */ \"./src/components/Hamburger.tsx\");\nvar _this = undefined;\n\n\n\n\nvar InstagramIcon = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"img\", {\n    width: 24,\n    height: 24,\n    minWidth: 24\n});\nvar Anchor = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"a\", {\n    position: \"relative\",\n    color: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.colors.black,\n    fontSize: 21,\n    textTransform: \"uppercase\",\n    textDecoration: \"none\",\n    \"&:hover\": {\n        textDecoration: \"underline\"\n    }\n});\nvar Grid = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"div\", {\n    display: \"grid\",\n    alignItems: \"center\",\n    borderBottom: \"1px solid $border\",\n    variants: {\n        layout: {\n            mobile: {\n                gridTemplateColumns: \"1fr\",\n                gridAutoFlow: \"column\",\n                justifyContent: \"space-between\"\n            },\n            desktop: {\n                gridTemplateColumns: \"1fr 1fr\"\n            }\n        },\n        padding: {\n            compact: {\n                padding: \"0 $2\"\n            },\n            comfortable: {\n                padding: \"0 $4\"\n            }\n        }\n    },\n    defaultVariants: {\n        layout: \"mobile\",\n        padding: \"compact\"\n    }\n});\n_c = Grid;\nvar Navigation = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n        padding: {\n            \"@m\": \"comfortable\"\n        },\n        layout: {\n            \"@m\": \"desktop\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HideIfMatch, {\n                query: \"@m\"\n            }, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hamburger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/justin/dev/onendstudio/src/components/Navigation.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c, _c1;\n$RefreshReg$(_c, \"Grid\");\n$RefreshReg$(_c1, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDd0Q7QUFHcEI7QUFDVTtBQUU5QyxJQUFNSSxhQUFhLEdBQUdKLCtEQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2xDSyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFFRixJQUFNQyxNQUFNLEdBQUdSLCtEQUFNLENBQUMsR0FBRyxFQUFFO0lBQ3pCUyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsS0FBSyxFQUFFVCx1RUFBa0I7SUFDekJZLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLGFBQWEsRUFBRSxXQUFXO0lBQzFCQyxjQUFjLEVBQUUsTUFBTTtJQUN0QixTQUFTLEVBQUU7UUFDVEEsY0FBYyxFQUFFLFdBQVc7S0FDNUI7Q0FDRixDQUFDO0FBRUYsSUFBTUMsSUFBSSxHQUFHaEIsK0RBQU0sQ0FBQyxLQUFLLEVBQUU7SUFDekJpQixPQUFPLEVBQUUsTUFBTTtJQUNmQyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQ0MsUUFBUSxFQUFFO1FBQ1JDLE1BQU0sRUFBRTtZQUNOQyxNQUFNLEVBQUU7Z0JBQ05DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCQyxZQUFZLEVBQUUsUUFBUTtnQkFDdEJDLGNBQWMsRUFBRSxlQUFlO2FBQ2hDO1lBQ0RDLE9BQU8sRUFBRTtnQkFDUEgsbUJBQW1CLEVBQUUsU0FBUzthQUMvQjtTQUNGO1FBQ0RJLE9BQU8sRUFBRTtZQUNQQyxPQUFPLEVBQUU7Z0JBQUVELE9BQU8sRUFBRSxNQUFNO2FBQUU7WUFDNUJFLFdBQVcsRUFBRTtnQkFBRUYsT0FBTyxFQUFFLE1BQU07YUFBRTtTQUNqQztLQUNGO0lBQ0RHLGVBQWUsRUFBRTtRQUNmVCxNQUFNLEVBQUUsUUFBUTtRQUNoQk0sT0FBTyxFQUFFLFNBQVM7S0FDbkI7Q0FDRixDQUFDO0FBeEJJWCxLQUFBQSxJQUFJO0FBMEJWLElBQU1lLFVBQVUsR0FBRyxXQUFNO0lBQ3ZCLHFCQUNFLDhEQUFDZixJQUFJO1FBQUNXLE9BQU8sRUFBRTtZQUFFLElBQUksRUFBRSxhQUFhO1NBQUU7UUFBRU4sTUFBTSxFQUFFO1lBQUUsSUFBSSxFQUFFLFNBQVM7U0FBRTs7MEJBQ2pFLDhEQUFDbkIsd0RBQUk7Ozs7cUJBQUc7MEJBQ1IsOERBQUM4QixXQUFXO2dCQUFDQyxLQUFLLEVBQUMsSUFBSTs7Ozs7cUJBRVQ7MEJBQ2QsOERBQUM5Qiw2REFBUzs7OztxQkFBRzs7Ozs7O2FBb0JSLENBQ1A7Q0FDSDtBQTdCSzRCLE1BQUFBLFVBQVU7QUErQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/MDFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBzdHlsZWQsIHRoZW1lIH0gZnJvbSBcIkBzdHlsZXMvc3RpdGNoZXMuY29uZmlnXCI7XG5cbmltcG9ydCBGbGV4IGZyb20gXCJAY29tcG9uZW50cy9GbGV4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQGNvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiQGNvbXBvbmVudHMvSGFtYnVyZ2VyXCI7XG5cbmNvbnN0IEluc3RhZ3JhbUljb24gPSBzdHlsZWQoXCJpbWdcIiwge1xuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIG1pbldpZHRoOiAyNCxcbn0pO1xuXG5jb25zdCBBbmNob3IgPSBzdHlsZWQoXCJhXCIsIHtcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgZm9udFNpemU6IDIxLFxuICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIFwiJjpob3ZlclwiOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gIH0sXG59KTtcblxuY29uc3QgR3JpZCA9IHN0eWxlZChcImRpdlwiLCB7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICRib3JkZXJcIixcbiAgdmFyaWFudHM6IHtcbiAgICBsYXlvdXQ6IHtcbiAgICAgIG1vYmlsZToge1xuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmclwiLFxuICAgICAgICBncmlkQXV0b0Zsb3c6IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIH0sXG4gICAgICBkZXNrdG9wOiB7XG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBhZGRpbmc6IHtcbiAgICAgIGNvbXBhY3Q6IHsgcGFkZGluZzogXCIwICQyXCIgfSxcbiAgICAgIGNvbWZvcnRhYmxlOiB7IHBhZGRpbmc6IFwiMCAkNFwiIH0sXG4gICAgfSxcbiAgfSxcbiAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgbGF5b3V0OiBcIm1vYmlsZVwiLFxuICAgIHBhZGRpbmc6IFwiY29tcGFjdFwiLFxuICB9LFxufSk7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgcGFkZGluZz17eyBcIkBtXCI6IFwiY29tZm9ydGFibGVcIiB9fSBsYXlvdXQ9e3sgXCJAbVwiOiBcImRlc2t0b3BcIiB9fT5cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8SGlkZUlmTWF0Y2ggcXVlcnk9XCJAbVwiPlxuICAgICAgICBcbiAgICAgIDwvSGlkZUlmTWF0Y2g+XG4gICAgICA8SGFtYnVyZ2VyIC8+XG4gICAgICB7LyogPEZsZXggZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cImJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9e3sgXCJAaW5pdGlhbFwiOiBcImxcIiwgXCJAbGdcIjogXCJ4bFwiIH19PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPEFuY2hvcj5Xb3JrPC9BbmNob3I+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxBbmNob3I+QWJvdXQ8L0FuY2hvcj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8QW5jaG9yPkNvbnRhY3Q8L0FuY2hvcj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvRmxleD5cblxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vbmVuZHN0dWRpb1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gc3JjPVwiL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJJbnN0YWdyYW1cIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9GbGV4PiAqL31cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsInRoZW1lIiwiTG9nbyIsIkhhbWJ1cmdlciIsIkluc3RhZ3JhbUljb24iLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwiQW5jaG9yIiwicG9zaXRpb24iLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJHcmlkIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJib3JkZXJCb3R0b20iLCJ2YXJpYW50cyIsImxheW91dCIsIm1vYmlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkQXV0b0Zsb3ciLCJqdXN0aWZ5Q29udGVudCIsImRlc2t0b3AiLCJwYWRkaW5nIiwiY29tcGFjdCIsImNvbWZvcnRhYmxlIiwiZGVmYXVsdFZhcmlhbnRzIiwiTmF2aWdhdGlvbiIsIkhpZGVJZk1hdGNoIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navigation.tsx\n"));

/***/ })

});