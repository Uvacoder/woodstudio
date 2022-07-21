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

/***/ "./src/components/Hamburger.tsx":
/*!**************************************!*\
  !*** ./src/components/Hamburger.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Container = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\", {\n    height: 32,\n    width: 32\n});\n_c = Container;\nvar lineStyles = {\n    backgroundColor: \"$border\",\n    height: 1.5,\n    width: 24,\n    borderRadius: 2,\n    transition: \"all 200ms ease\"\n};\nvar TopLine = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, lineStyles), {\n    variants: {\n        position: {\n            flat: {\n                transform: \"translate(4px, 10px) rotate(0)\"\n            },\n            angled: {\n                transform: \"translate(4px, 16px) rotate(-135deg)\"\n            }\n        }\n    }\n}));\n_c1 = TopLine;\nvar BottomLine = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, lineStyles), {\n    variants: {\n        position: {\n            flat: {\n                transform: \"translate(4px, 20px) rotate(0)\"\n            },\n            angled: {\n                transform: \"translate(4px, 14px) rotate(135deg)\"\n            }\n        }\n    }\n}));\n_c2 = BottomLine;\nvar Hamburger = function(param) {\n    var onChange = param.onChange;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var handleClick = function() {\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TopLine, {\n                position: isOpen ? \"angled\" : \"flat\"\n            }, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Hamburger.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomLine, {\n                position: isOpen ? \"angled\" : \"flat\"\n            }, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Hamburger.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/justin/dev/onendstudio/src/components/Hamburger.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hamburger, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hamburger);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"TopLine\");\n$RefreshReg$(_c2, \"BottomLine\");\n$RefreshReg$(_c3, \"Hamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IYW1idXJnZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBaUM7QUFDZ0I7O0FBRWpELElBQU1FLFNBQVMsR0FBR0QsK0RBQU0sQ0FBQyxLQUFLLEVBQUU7SUFDOUJFLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQztBQUhJRixLQUFBQSxTQUFTO0FBSWYsSUFBTUcsVUFBVSxHQUFHO0lBQ2pCQyxlQUFlLEVBQUUsU0FBUztJQUMxQkgsTUFBTSxFQUFFLEdBQUc7SUFDWEMsS0FBSyxFQUFFLEVBQUU7SUFDVEcsWUFBWSxFQUFFLENBQUM7SUFDZkMsVUFBVSxFQUFFLGdCQUFnQjtDQUM3QjtBQUNELElBQU1DLE9BQU8sR0FBR1IsK0RBQU0sQ0FBQyxLQUFLLEVBQUUsd0tBQ3pCSSxVQUFVO0lBQ2JLLFFBQVEsRUFBRTtRQUNSQyxRQUFRLEVBQUU7WUFDUkMsSUFBSSxFQUFFO2dCQUFFQyxTQUFTLEVBQUUsZ0NBQWdDO2FBQUU7WUFDckRDLE1BQU0sRUFBRTtnQkFBRUQsU0FBUyxFQUFFLHNDQUFzQzthQUFFO1NBQzlEO0tBQ0Y7RUFDRixDQUFDO0FBUklKLE1BQUFBLE9BQU87QUFTYixJQUFNTSxVQUFVLEdBQUdkLCtEQUFNLENBQUMsS0FBSyxFQUFFLHdLQUM1QkksVUFBVTtJQUViSyxRQUFRLEVBQUU7UUFDUkMsUUFBUSxFQUFFO1lBQ1JDLElBQUksRUFBRTtnQkFBRUMsU0FBUyxFQUFFLGdDQUFnQzthQUFFO1lBQ3JEQyxNQUFNLEVBQUU7Z0JBQUVELFNBQVMsRUFBRSxxQ0FBcUM7YUFBRTtTQUM3RDtLQUNGO0VBQ0YsQ0FBQztBQVRJRSxNQUFBQSxVQUFVO0FBV2hCLElBQU1DLFNBQVMsR0FBRyxnQkFBZ0I7UUFBZEMsUUFBUSxTQUFSQSxRQUFROztJQUMxQixJQUE0QmpCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENrQixNQUFNLEdBQWVsQixHQUFlLEdBQTlCLEVBQUVtQixTQUFTLEdBQUluQixHQUFlLEdBQW5CO0lBQ3hCLElBQU1vQixXQUFXLEdBQUcsV0FBTTtRQUN4QkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QscUJBQ0UsOERBQUNoQixTQUFTO1FBQUNtQixPQUFPLEVBQUVELFdBQVc7OzBCQUM3Qiw4REFBQ1gsT0FBTztnQkFBQ0UsUUFBUSxFQUFFTyxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU07Ozs7O3FCQUFJOzBCQUNqRCw4REFBQ0gsVUFBVTtnQkFBQ0osUUFBUSxFQUFFTyxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU07Ozs7O3FCQUFJOzs7Ozs7YUFDMUMsQ0FDWjtDQUNIO0dBWEtGLFNBQVM7QUFBVEEsTUFBQUEsU0FBUztBQWFmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGFtYnVyZ2VyLnRzeD9lN2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQHN0eWxlcy9zdGl0Y2hlcy5jb25maWdcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFwiZGl2XCIsIHtcbiAgaGVpZ2h0OiAzMixcbiAgd2lkdGg6IDMyLFxufSk7XG5jb25zdCBsaW5lU3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFwiJGJvcmRlclwiLFxuICBoZWlnaHQ6IDEuNSxcbiAgd2lkdGg6IDI0LFxuICBib3JkZXJSYWRpdXM6IDIsXG4gIHRyYW5zaXRpb246IFwiYWxsIDIwMG1zIGVhc2VcIixcbn07XG5jb25zdCBUb3BMaW5lID0gc3R5bGVkKFwiZGl2XCIsIHtcbiAgLi4ubGluZVN0eWxlcyxcbiAgdmFyaWFudHM6IHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgZmxhdDogeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDRweCwgMTBweCkgcm90YXRlKDApXCIgfSxcbiAgICAgIGFuZ2xlZDogeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDRweCwgMTZweCkgcm90YXRlKC0xMzVkZWcpXCIgfSxcbiAgICB9LFxuICB9LFxufSk7XG5jb25zdCBCb3R0b21MaW5lID0gc3R5bGVkKFwiZGl2XCIsIHtcbiAgLi4ubGluZVN0eWxlcyxcblxuICB2YXJpYW50czoge1xuICAgIHBvc2l0aW9uOiB7XG4gICAgICBmbGF0OiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNHB4LCAyMHB4KSByb3RhdGUoMClcIiB9LFxuICAgICAgYW5nbGVkOiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNHB4LCAxNHB4KSByb3RhdGUoMTM1ZGVnKVwiIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBIYW1idXJnZXIgPSAoe29uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIDxUb3BMaW5lIHBvc2l0aW9uPXtpc09wZW4gPyBcImFuZ2xlZFwiIDogXCJmbGF0XCJ9IC8+XG4gICAgICA8Qm90dG9tTGluZSBwb3NpdGlvbj17aXNPcGVuID8gXCJhbmdsZWRcIiA6IFwiZmxhdFwifSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJsaW5lU3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNpdGlvbiIsIlRvcExpbmUiLCJ2YXJpYW50cyIsInBvc2l0aW9uIiwiZmxhdCIsInRyYW5zZm9ybSIsImFuZ2xlZCIsIkJvdHRvbUxpbmUiLCJIYW1idXJnZXIiLCJvbkNoYW5nZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNsaWNrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hamburger.tsx\n"));

/***/ })

});