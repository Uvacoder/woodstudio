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

/***/ "./src/components/DefaultLayout.tsx":
/*!******************************************!*\
  !*** ./src/components/DefaultLayout.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DefaultLayout\": function() { return /* binding */ DefaultLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n/* harmony import */ var _components_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Flex */ \"./src/components/Flex.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Footer */ \"./src/components/Footer.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar Grid = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.styled)(\"div\", {\n    gridTemplateColumns: \"1fr\",\n    \"@large\": {\n        gridTemplateColumns: \"1fr\",\n        gridTemplateRows: \"150px 1fr\"\n    },\n    \"@small\": {\n        gridTemplateColumns: \"1fr\",\n        gridTemplateRows: \"64px 1fr\",\n        gridTemplateAreas: \"'nav' 'content'\"\n    }\n});\n_c = Grid;\nvar DefaultLayout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Flex__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        as: \"section\",\n        direction: \"column\",\n        css: {\n            minHeight: \"100%\",\n            fontFamily: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.fonts.primary,\n            backgroundColor: _styles_stitches_config__WEBPACK_IMPORTED_MODULE_1__.theme.colors.siteBg\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/justin/dev/onendstudio/src/components/DefaultLayout.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/justin/dev/onendstudio/src/components/DefaultLayout.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/justin/dev/onendstudio/src/components/DefaultLayout.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/justin/dev/onendstudio/src/components/DefaultLayout.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\nvar _c, _c1;\n$RefreshReg$(_c, \"Grid\");\n$RefreshReg$(_c1, \"DefaultLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZWZhdWx0TGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBRXBCO0FBQ1k7QUFDUjtBQUV4QyxJQUFNSyxJQUFJLEdBQUdMLCtEQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3pCTSxtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLFFBQVEsRUFBRTtRQUNSQSxtQkFBbUIsRUFBRSxLQUFLO1FBQzFCQyxnQkFBZ0IsRUFBRSxXQUFXO0tBQzlCO0lBQ0QsUUFBUSxFQUFFO1FBQ1JELG1CQUFtQixFQUFFLEtBQUs7UUFDMUJDLGdCQUFnQixFQUFFLFVBQVU7UUFDNUJDLGlCQUFpQixFQUFFLGlCQUFpQjtLQUNyQztDQUNGLENBQUM7QUFYSUgsS0FBQUEsSUFBSTtBQWFILElBQU1JLGFBQWEsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQ3RDLHFCQUNFLDhEQUFDUix3REFBSTtRQUNIUyxFQUFFLEVBQUMsU0FBUztRQUNaQyxTQUFTLEVBQUMsUUFBUTtRQUNsQkMsR0FBRyxFQUFFO1lBQ0hDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCQyxVQUFVLEVBQUVkLHdFQUFtQjtZQUMvQmlCLGVBQWUsRUFBRWpCLHdFQUFtQjtTQUNyQztrQkFFRCw0RUFBQ0ksSUFBSTs7OEJBQ0gsOERBQUNGLDhEQUFVOzs7O3lCQUFHO2dCQUNiTyxRQUFROzhCQUNULDhEQUFDTiwwREFBTTs7Ozt5QkFBRzs7Ozs7O2lCQUNMOzs7OzthQUNGLENBQ1A7Q0FDSCxDQUFDO0FBbEJXSyxNQUFBQSxhQUFhO0FBb0IxQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRMYXlvdXQudHN4PzI5N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCB0aGVtZSB9IGZyb20gXCJAc3R5bGVzL3N0aXRjaGVzLmNvbmZpZ1wiO1xuXG5pbXBvcnQgRmxleCBmcm9tIFwiQGNvbXBvbmVudHMvRmxleFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIkBjb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIkBjb21wb25lbnRzL0Zvb3RlclwiO1xuXG5jb25zdCBHcmlkID0gc3R5bGVkKFwiZGl2XCIsIHtcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnJcIixcbiAgXCJAbGFyZ2VcIjoge1xuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyXCIsXG4gICAgZ3JpZFRlbXBsYXRlUm93czogXCIxNTBweCAxZnJcIixcbiAgfSxcbiAgXCJAc21hbGxcIjoge1xuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyXCIsXG4gICAgZ3JpZFRlbXBsYXRlUm93czogXCI2NHB4IDFmclwiLFxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBcIiduYXYnICdjb250ZW50J1wiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBhcz1cInNlY3Rpb25cIlxuICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGNzcz17e1xuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBmb250RmFtaWx5OiB0aGVtZS5mb250cy5wcmltYXJ5LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5zaXRlQmcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0O1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsInRoZW1lIiwiRmxleCIsIk5hdmlnYXRpb24iLCJGb290ZXIiLCJHcmlkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJncmlkVGVtcGxhdGVBcmVhcyIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsImFzIiwiZGlyZWN0aW9uIiwiY3NzIiwibWluSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRzIiwicHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInNpdGVCZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DefaultLayout.tsx\n"));

/***/ })

});