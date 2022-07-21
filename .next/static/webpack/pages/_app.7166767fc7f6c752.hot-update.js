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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/stitches.config */ \"./src/styles/stitches.config.js\");\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Container = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\", {\n    height: 32,\n    width: 32,\n    variants: {\n        display: {\n            hide: {\n                display: \"none\"\n            },\n            show: {\n                display: \"auto\"\n            }\n        }\n    },\n    defaultVariants: {\n        display: \"show\"\n    }\n});\n_c = Container;\nvar lineStyles = {\n    backgroundColor: \"$border\",\n    height: 1.5,\n    width: 24,\n    borderRadius: 2,\n    transition: \"all 200ms ease\"\n};\nvar TopLine = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, lineStyles), {\n    variants: {\n        position: {\n            flat: {\n                transform: \"translate(4px, 10px) rotate(0)\"\n            },\n            angled: {\n                transform: \"translate(4px, 16px) rotate(-135deg)\"\n            }\n        }\n    }\n}));\n_c1 = TopLine;\nvar BottomLine = (0,_styles_stitches_config__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, lineStyles), {\n    variants: {\n        position: {\n            flat: {\n                transform: \"translate(4px, 20px) rotate(0)\"\n            },\n            angled: {\n                transform: \"translate(4px, 14px) rotate(135deg)\"\n            }\n        }\n    }\n}));\n_c2 = BottomLine;\nvar Hamburger = function(param) {\n    var _onChange = param.onChange, onChange = _onChange === void 0 ? function(boolean) {} : _onChange;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var handleClick = function() {\n        var nextValue = !isOpen;\n        setIsOpen(nextValue);\n        onChange(nextValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TopLine, {\n                position: isOpen ? \"angled\" : \"flat\"\n            }, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Hamburger.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomLine, {\n                position: isOpen ? \"angled\" : \"flat\"\n            }, void 0, false, {\n                fileName: \"/home/justin/dev/onendstudio/src/components/Hamburger.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/justin/dev/onendstudio/src/components/Hamburger.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(Hamburger, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hamburger);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"TopLine\");\n$RefreshReg$(_c2, \"BottomLine\");\n$RefreshReg$(_c3, \"Hamburger\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IYW1idXJnZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBaUM7QUFFd0I7O0FBSXpELElBQU1FLFNBQVMsR0FBR0QsK0RBQU0sQ0FBQyxLQUFLLEVBQUU7SUFDOUJFLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFFBQVEsRUFBRTtRQUNSQyxPQUFPLEVBQUU7WUFDUEMsSUFBSSxFQUFFO2dCQUFFRCxPQUFPLEVBQUUsTUFBTTthQUFFO1lBQ3pCRSxJQUFJLEVBQUU7Z0JBQUVGLE9BQU8sRUFBRSxNQUFNO2FBQUU7U0FDMUI7S0FDRjtJQUNERyxlQUFlLEVBQUU7UUFDZkgsT0FBTyxFQUFFLE1BQU07S0FDaEI7Q0FDRixDQUFDO0FBWklKLEtBQUFBLFNBQVM7QUFhZixJQUFNUSxVQUFVLEdBQUc7SUFDakJDLGVBQWUsRUFBRSxTQUFTO0lBQzFCUixNQUFNLEVBQUUsR0FBRztJQUNYQyxLQUFLLEVBQUUsRUFBRTtJQUNUUSxZQUFZLEVBQUUsQ0FBQztJQUNmQyxVQUFVLEVBQUUsZ0JBQWdCO0NBQzdCO0FBQ0QsSUFBTUMsT0FBTyxHQUFHYiwrREFBTSxDQUFDLEtBQUssRUFBRSx3S0FDekJTLFVBQVU7SUFDYkwsUUFBUSxFQUFFO1FBQ1JVLFFBQVEsRUFBRTtZQUNSQyxJQUFJLEVBQUU7Z0JBQUVDLFNBQVMsRUFBRSxnQ0FBZ0M7YUFBRTtZQUNyREMsTUFBTSxFQUFFO2dCQUFFRCxTQUFTLEVBQUUsc0NBQXNDO2FBQUU7U0FDOUQ7S0FDRjtFQUNGLENBQUM7QUFSSUgsTUFBQUEsT0FBTztBQVNiLElBQU1LLFVBQVUsR0FBR2xCLCtEQUFNLENBQUMsS0FBSyxFQUFFLHdLQUM1QlMsVUFBVTtJQUViTCxRQUFRLEVBQUU7UUFDUlUsUUFBUSxFQUFFO1lBQ1JDLElBQUksRUFBRTtnQkFBRUMsU0FBUyxFQUFFLGdDQUFnQzthQUFFO1lBQ3JEQyxNQUFNLEVBQUU7Z0JBQUVELFNBQVMsRUFBRSxxQ0FBcUM7YUFBRTtTQUM3RDtLQUNGO0VBQ0YsQ0FBQztBQVRJRSxNQUFBQSxVQUFVO0FBV2hCLElBQU1DLFNBQVMsR0FBRyxnQkFBb0M7MEJBQWpDQyxRQUFRLEVBQVJBLFFBQVEsMEJBQUcsU0FBQ0MsT0FBTyxFQUFLLEVBQUU7O0lBQzdDLElBQTRCdEIsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQ3VCLE1BQU0sR0FBZXZCLEdBQWUsR0FBOUIsRUFBRXdCLFNBQVMsR0FBSXhCLEdBQWUsR0FBbkI7SUFDeEIsSUFBTXlCLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLElBQU1DLFNBQVMsR0FBRyxDQUFDSCxNQUFNO1FBQ3pCQyxTQUFTLENBQUNFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JCTCxRQUFRLENBQUNLLFNBQVMsQ0FBQyxDQUFDO0tBQ3JCO0lBQ0QscUJBQ0UsOERBQUN4QixTQUFTO1FBQUN5QixPQUFPLEVBQUVGLFdBQVc7OzBCQUM3Qiw4REFBQ1gsT0FBTztnQkFBQ0MsUUFBUSxFQUFFUSxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU07Ozs7O3FCQUFJOzBCQUNqRCw4REFBQ0osVUFBVTtnQkFBQ0osUUFBUSxFQUFFUSxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU07Ozs7O3FCQUFJOzs7Ozs7YUFDMUMsQ0FDWjtDQUNIO0dBYktILFNBQVM7QUFBVEEsTUFBQUEsU0FBUztBQWVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGFtYnVyZ2VyLnRzeD9lN2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSAqIGFzIFN0aXRjaGVzIGZyb20gJ0BzdGl0Y2hlcy9yZWFjdCc7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbmZpZyB9IGZyb20gXCJAc3R5bGVzL3N0aXRjaGVzLmNvbmZpZ1wiO1xuXG50eXBlIENTUyA9IFN0aXRjaGVzLkNTUzx0eXBlb2YgY29uZmlnPjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFwiZGl2XCIsIHtcbiAgaGVpZ2h0OiAzMixcbiAgd2lkdGg6IDMyLFxuICB2YXJpYW50czoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIGhpZGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgICAgIHNob3c6IHsgZGlzcGxheTogXCJhdXRvXCIgfSxcbiAgICB9LFxuICB9LFxuICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICBkaXNwbGF5OiBcInNob3dcIixcbiAgfSxcbn0pO1xuY29uc3QgbGluZVN0eWxlcyA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiBcIiRib3JkZXJcIixcbiAgaGVpZ2h0OiAxLjUsXG4gIHdpZHRoOiAyNCxcbiAgYm9yZGVyUmFkaXVzOiAyLFxuICB0cmFuc2l0aW9uOiBcImFsbCAyMDBtcyBlYXNlXCIsXG59O1xuY29uc3QgVG9wTGluZSA9IHN0eWxlZChcImRpdlwiLCB7XG4gIC4uLmxpbmVTdHlsZXMsXG4gIHZhcmlhbnRzOiB7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIGZsYXQ6IHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSg0cHgsIDEwcHgpIHJvdGF0ZSgwKVwiIH0sXG4gICAgICBhbmdsZWQ6IHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSg0cHgsIDE2cHgpIHJvdGF0ZSgtMTM1ZGVnKVwiIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuY29uc3QgQm90dG9tTGluZSA9IHN0eWxlZChcImRpdlwiLCB7XG4gIC4uLmxpbmVTdHlsZXMsXG5cbiAgdmFyaWFudHM6IHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgZmxhdDogeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDRweCwgMjBweCkgcm90YXRlKDApXCIgfSxcbiAgICAgIGFuZ2xlZDogeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDRweCwgMTRweCkgcm90YXRlKDEzNWRlZylcIiB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgSGFtYnVyZ2VyID0gKHsgb25DaGFuZ2UgPSAoYm9vbGVhbikgPT4ge30gfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSAhaXNPcGVuO1xuICAgIHNldElzT3BlbihuZXh0VmFsdWUpO1xuICAgIG9uQ2hhbmdlKG5leHRWYWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICA8VG9wTGluZSBwb3NpdGlvbj17aXNPcGVuID8gXCJhbmdsZWRcIiA6IFwiZmxhdFwifSAvPlxuICAgICAgPEJvdHRvbUxpbmUgcG9zaXRpb249e2lzT3BlbiA/IFwiYW5nbGVkXCIgOiBcImZsYXRcIn0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsIkNvbnRhaW5lciIsImhlaWdodCIsIndpZHRoIiwidmFyaWFudHMiLCJkaXNwbGF5IiwiaGlkZSIsInNob3ciLCJkZWZhdWx0VmFyaWFudHMiLCJsaW5lU3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNpdGlvbiIsIlRvcExpbmUiLCJwb3NpdGlvbiIsImZsYXQiLCJ0cmFuc2Zvcm0iLCJhbmdsZWQiLCJCb3R0b21MaW5lIiwiSGFtYnVyZ2VyIiwib25DaGFuZ2UiLCJib29sZWFuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlQ2xpY2siLCJuZXh0VmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hamburger.tsx\n"));

/***/ })

});