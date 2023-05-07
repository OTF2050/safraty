"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesafraty"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/style.css */ \"./src/CSS/style.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"click\", function(){\r\n    \r\n})\r\nconst cities = \r\n{\r\n  EGY:  [\"القاهرة\", \"الإسكندرية\", \"البحيرة\", \"كفر الشيخ\", \"دمياط\", \"بورسعيد\", \"الإسماعيلية\", \"السويس\", \"الشرقية\", \"بني سويف\", \"المنيا\", \"أسيوط\", \"الفيوم\", \"المنوفية\", \"الغربية\", \"الدقهلية\", \"كفر الدوار\", \"قنا\", \"الأقصر\", \"أسوان\", \"سوهاج\", \"الوادي الجديد\", \"شمال سيناء\", \"جنوب سيناء\", \"البحر الأحمر\", \"مطروح\", \"الساحل الشمالي\"],\r\n  KSA: [\"Alabama\",\"Alaska\",\"Arizona\",\"Arkansas\",\r\n    \"California\",\r\n    \"Colorado\",\r\n    \"Connecticut\",\r\n    \"Delaware\",\r\n    \"Florida\",\r\n    \"Georgia\",\r\n    \"Hawaii\",\r\n    \"Idaho\",\r\n    \"Illinois\",\r\n    \"Indiana\",\r\n    \"Iowa\",\r\n    \"Kansas\",\r\n    \"Kentucky\",\r\n    \"Louisiana\",\r\n    \"Maine\",\r\n    \"Maryland\",\r\n    \"Massachusetts\",\r\n    \"Michigan\",\r\n    \"Minnesota\",\r\n    \"Mississippi\",\r\n    \"Missouri\",\r\n    \"Montana\",\r\n    \"Nebraska\",\r\n    \"Nevada\",\r\n    \"New Hampshire\",\r\n    \"New Jersey\",\r\n    \"New Mexico\",\r\n    \"New York\",\r\n    \"North Carolina\",\r\n    \"North Dakota\",\r\n    \"Ohio\",\r\n    \"Oklahoma\",\r\n    \"Oregon\",\r\n    \"Pennsylvania\",\r\n    \"Rhode Island\",\r\n    \"South Carolina\",\r\n    \"South Dakota\",\r\n    \"Tennessee\",\"Texas\",\"Utah\",\"Vermont\",\"Virginia\",\"Washington\",\"West Virginia\",\"Wisconsin\",\"Wyoming\"\r\n  ],\r\n  UAE: [\"أبو ظبي\",\"دبي\",\"شارقة\",\"عجمان\",\"أم القيوين\",\"رأس الخيمة\",\"الفجيرة\"]\r\n};\r\n\r\nconst countrySelect = document.getElementById('country');\r\nconst citySelect = document.getElementById('city');\r\n\r\ncountrySelect.addEventListener('change', (event) => {\r\n  const selectedCountry = event.target.value;\r\n  citySelect.innerHTML = '';\r\n  citySelect.disabled = true;\r\n  const defaultOption = document.createElement('option');\r\n  defaultOption.text = '--Please choose a city--';\r\n  defaultOption.value = '';\r\n  citySelect.appendChild(defaultOption);\r\n\r\n  if (selectedCountry) {\r\n    const citiesArray = cities[selectedCountry];\r\n    citiesArray.forEach(city => {\r\n      const option = document.createElement('option');\r\n      option.value = city;\r\n      option.text = city;\r\n      citySelect.appendChild(option);\r\n    });\r\n    citySelect.disabled = false;\r\n  }\r\n\r\n});\r\ndocument.getElementById(\"nigh-icon\").addEventListener(\"click\", backFunction);\r\n\r\nfunction backFunction() {\r\n  var background = document.body;\r\n  background.classList.toggle(\"night-mode\");\r\n  }\r\nconst btEl= document.querySelector(\".night-icon\");\r\n\r\ndocument.getElementById(\"search-icon\").addEventListener(\"click\",myFunction);\r\n\r\nfunction myFunction() {\r\n  let x = document.getElementById(\"icon\");\r\n  if (x.style.display === \"none\") {\r\n    x.style.display = \"block\";\r\n  } else {\r\n    x.style.display = \"none\";\r\n  }\r\n}\r\ndocument.getElementById(\"search-icon\").addEventListener(\"click\",sidebarFunction);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://safraty/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd1c3c4e81f22acc9afa")
/******/ })();
/******/ 
/******/ }
);