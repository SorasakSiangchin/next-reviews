"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reviews/[slug]/page",{

/***/ "(app-pages-browser)/./components/ShareLinkButton.jsx":
/*!****************************************!*\
  !*** ./components/ShareLinkButton.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_LinkIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=LinkIcon!=!@heroicons/react/20/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/20/solid/esm/LinkIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ShareLinkButton = ()=>{\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // จะใช้ onclick ต้องใส่ 'use client' ตรงด้านบน\n    const handleClick = ()=>{\n        // navigator.clipboard.writeText => กดแล้วจะคัดลอก\n        // window.location.href => path ที่อยู่ปัจจุบัน\n        navigator.clipboard.writeText(window.location.href);\n        setClicked(true);\n        setTimeout(()=>{\n            setClicked(false);\n        }, 1500);\n    };\n    console.log(\"[ShareLinkButton] rendering\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"border fle px-2 py-1 rounded text-slate-500 text-sm   hover:bg-orange-100 hover:text-slate-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LinkIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"h-4 w-4\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\Reacts\\\\nextjs\\\\next-reviews\\\\components\\\\ShareLinkButton.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            clicked ? \"Link copied!\" : \"Share link\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Development\\\\Reacts\\\\nextjs\\\\next-reviews\\\\components\\\\ShareLinkButton.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShareLinkButton, \"hy5zEebmttfAh/4wSUUwwYpeeQc=\");\n_c = ShareLinkButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShareLinkButton);\nvar _c;\n$RefreshReg$(_c, \"ShareLinkButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2hhcmVMaW5rQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXdDO0FBRVk7QUFFcEQsTUFBTUcsa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLFNBQVVDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDeEMsK0NBQStDO0lBQy9DLE1BQU1LLGNBQWM7UUFDbEIsa0RBQWtEO1FBQ2xELCtDQUErQztRQUMvQ0MsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSTtRQUVsRFAsV0FBVztRQUNYUSxXQUFXO1lBQ1BSLFdBQVc7UUFDZixHQUFHO0lBQ0w7SUFFQVMsUUFBUUMsR0FBRyxDQUFDO0lBRVoscUJBQ0UsOERBQUNDO1FBQ0dDLFNBQVNYO1FBQ1RZLFdBQVU7OzBCQUdWLDhEQUFDaEIsZ0dBQVFBO2dCQUFDZ0IsV0FBVTs7Ozs7O1lBQ25CZCxVQUFVLGlCQUFpQjs7Ozs7OztBQUdwQztHQTFCTUQ7S0FBQUE7QUE0Qk4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZUxpbmtCdXR0b24uanN4PzU0NmEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgTGlua0ljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZFwiXHJcblxyXG5jb25zdCBTaGFyZUxpbmtCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NsaWNrZWQgLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyDguIjguLDguYPguIrguYkgb25jbGljayDguJXguYnguK3guIfguYPguKrguYggJ3VzZSBjbGllbnQnIOC4leC4o+C4h+C4lOC5ieC4suC4meC4muC4mVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQgPT4g4LiB4LiU4LmB4Lil4LmJ4Lin4LiI4Liw4LiE4Lix4LiU4Lil4Lit4LiBXHJcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9PiBwYXRoIOC4l+C4teC5iOC4reC4ouC4ueC5iOC4m+C4seC4iOC4iOC4uOC4muC4seC4mVxyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuICAgIHNldENsaWNrZWQodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRDbGlja2VkKGZhbHNlKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKCdbU2hhcmVMaW5rQnV0dG9uXSByZW5kZXJpbmcnKVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdib3JkZXIgZmxlIHB4LTIgcHktMSByb3VuZGVkIHRleHQtc2xhdGUtNTAwIHRleHQtc21cclxuICAgICAgICAgICAgaG92ZXI6Ymctb3JhbmdlLTEwMCBob3Zlcjp0ZXh0LXNsYXRlLTcwMCdcclxuICAgICAgICA+XHJcbiAgICAgICAgPExpbmtJY29uIGNsYXNzTmFtZT0naC00IHctNCcgIC8+XHJcbiAgICAgICAge2NsaWNrZWQgPyAnTGluayBjb3BpZWQhJyA6ICdTaGFyZSBsaW5rJ31cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmVMaW5rQnV0dG9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rSWNvbiIsIlNoYXJlTGlua0J1dHRvbiIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ShareLinkButton.jsx\n"));

/***/ })

});