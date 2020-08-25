/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/avatar.png":
/*!***************************!*\
  !*** ./images/avatar.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/avatar.png\");\n\n//# sourceURL=webpack:///./images/avatar.png?");

/***/ }),

/***/ "./images/emoticon.png":
/*!*****************************!*\
  !*** ./images/emoticon.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/emoticon.png\");\n\n//# sourceURL=webpack:///./images/emoticon.png?");

/***/ }),

/***/ "./images/enter-background.png":
/*!*************************************!*\
  !*** ./images/enter-background.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/enter-background.png\");\n\n//# sourceURL=webpack:///./images/enter-background.png?");

/***/ }),

/***/ "./images/facebook.png":
/*!*****************************!*\
  !*** ./images/facebook.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/facebook.png\");\n\n//# sourceURL=webpack:///./images/facebook.png?");

/***/ }),

/***/ "./images/instagram.png":
/*!******************************!*\
  !*** ./images/instagram.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/instagram.png\");\n\n//# sourceURL=webpack:///./images/instagram.png?");

/***/ }),

/***/ "./images/location.png":
/*!*****************************!*\
  !*** ./images/location.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/location.png\");\n\n//# sourceURL=webpack:///./images/location.png?");

/***/ }),

/***/ "./images/logo-label.png":
/*!*******************************!*\
  !*** ./images/logo-label.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/logo-label.png\");\n\n//# sourceURL=webpack:///./images/logo-label.png?");

/***/ }),

/***/ "./images/menu-burger.png":
/*!********************************!*\
  !*** ./images/menu-burger.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/menu-burger.png\");\n\n//# sourceURL=webpack:///./images/menu-burger.png?");

/***/ }),

/***/ "./images/room_1.png":
/*!***************************!*\
  !*** ./images/room_1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/room_1.png\");\n\n//# sourceURL=webpack:///./images/room_1.png?");

/***/ }),

/***/ "./images/room_2.png":
/*!***************************!*\
  !*** ./images/room_2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/room_2.png\");\n\n//# sourceURL=webpack:///./images/room_2.png?");

/***/ }),

/***/ "./images/search_background.png":
/*!**************************************!*\
  !*** ./images/search_background.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/search_background.png\");\n\n//# sourceURL=webpack:///./images/search_background.png?");

/***/ }),

/***/ "./images/twitter.png":
/*!****************************!*\
  !*** ./images/twitter.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/twitter.png\");\n\n//# sourceURL=webpack:///./images/twitter.png?");

/***/ }),

/***/ "./includes/headers-footers/header/header.js":
/*!***************************************************!*\
  !*** ./includes/headers-footers/header/header.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $burger = document.querySelector(\".menu-burger\");\n$burger.addEventListener(\"click\", function () {\n  document.querySelector(\".header__content\").classList.toggle(\"show-menu\");\n});\n\n//# sourceURL=webpack:///./includes/headers-footers/header/header.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _includes_headers_footers_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./includes/headers-footers/header/header */ \"./includes/headers-footers/header/header.js\");\n/* harmony import */ var _includes_headers_footers_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_includes_headers_footers_header_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_emoticon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/emoticon.png */ \"./images/emoticon.png\");\n/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/location.png */ \"./images/location.png\");\n/* harmony import */ var _images_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/avatar.png */ \"./images/avatar.png\");\n/* harmony import */ var _images_room_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/room_1.png */ \"./images/room_1.png\");\n/* harmony import */ var _images_room_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/room_2.png */ \"./images/room_2.png\");\n/* harmony import */ var _images_logo_label_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/logo-label.png */ \"./images/logo-label.png\");\n/* harmony import */ var _images_facebook_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/facebook.png */ \"./images/facebook.png\");\n/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/twitter.png */ \"./images/twitter.png\");\n/* harmony import */ var _images_instagram_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/instagram.png */ \"./images/instagram.png\");\n/* harmony import */ var _images_menu_burger_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/menu-burger.png */ \"./images/menu-burger.png\");\n/* harmony import */ var _images_enter_background_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/enter-background.png */ \"./images/enter-background.png\");\n/* harmony import */ var _images_search_background_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/search_background.png */ \"./images/search_background.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleNotFoundError: Module not found: Error: Can't resolve './images/checked.png' in 'E:\\\\Web\\\\Trainee\\\\Hotel\\\\src'\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:925:10\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:401:22\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:130:21\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:224:22\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\neo-async\\\\async.js:2830:7\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\neo-async\\\\async.js:6877:13\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:214:25\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:213:14\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\UnsafeCachePlugin.js:44:7\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:25:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DescriptionFilePlugin.js:67:43\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:25:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DescriptionFilePlugin.js:67:43\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:285:5\\n    at eval (eval at create (E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DirectoryExistsPlugin.js:27:15\\n    at E:\\\\Web\\\\Trainee\\\\Hotel\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:85:15\\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)\");\n\n//# sourceURL=webpack:///./main.scss?");

/***/ })

/******/ });