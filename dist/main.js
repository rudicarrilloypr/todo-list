/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/img/space.jpg */ \"./assets/img/space.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: Arial, sans-serif;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  background-color: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  max-width: 90%;\n  width: 600px;\n  padding: 1rem;\n}\n\n.container header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.container h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 1.2rem;\n  font-weight: normal;\n}\n\n.input-container {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #ccc;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: white;\n  align-items: center;\n}\n\n.container .input-container {\n  background-color: rgba(255, 255, 255, 0.1);\n  border: none;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n#task-input {\n  border: none;\n  flex-grow: 1;\n  margin-right: 10px;\n}\n\n.container #task-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  background-color: transparent;\n}\n\n.container #todo-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  transition: box-shadow 0.3s ease;\n}\n\nli:active {\n  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);\n}\n\n.container #todo-list li {\n  padding: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n}\n\n.container #todo-list li input[type=\"checkbox\"] {\n  margin-right: 0.5rem;\n}\n\n.container #refresh-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n#clear-completed-btn {\n  transition: background 0.3s ease-in-out;\n}\n\n.container #clear-completed-btn {\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n#enter-btn {\n  background: none;\n  opacity: 0.5;\n  border: none;\n  color: gray;\n  transition: opacity 0.3s ease-in-out;\n}\n\n#enter-btn:hover {\n  opacity: 1;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 2px solid #666;\n  border-radius: 3px;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  position: relative;\n}\n\ninput[type='checkbox']:checked::before {\n  content: '\\\\2713';\n  font-size: 18px;\n  color: #666;\n  position: absolute;\n  top: -2px;\n  left: 4px;\n}\n\n#clear-completed-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\ninput[type='checkbox']:checked ~ span {\n  text-decoration: line-through;\n  color: gray;\n}\n\n/* Estilos para el contenedor de los botones */\n#todo-list li .button-container {\n  margin-left: auto;\n  display: flex;\n  gap: 1px;\n}\n\n/* Estilos para el botón de borrar */\n#todo-list li .button-container button {\n  opacity: 0.5;\n  transition: opacity 0.3s ease-in-out;\n  border: none; /* Elimina cualquier borde */\n  background: none; /* Elimina cualquier fondo */\n  margin-left: 10px;\n}\n\n#todo-list li .button-container button:hover {\n  opacity: 1;\n}\n\n/* Estilos para el botón de arrastrar */\n#todo-list li .button-container .drag-icon {\n  font-size: 1.2rem;\n  color: #777;\n  cursor: move;\n  transition: color 0.2s ease-in-out;\n}\n\n#todo-list li .button-container .drag-btn {\n  background: none;\n  border: none;\n  cursor: move;\n}\n\n#todo-list li .button-container .drag-btn:hover .drag-icon {\n  color: #333;\n}\n\n/* Estilos para el contenedor de texto y checkbox */\n#todo-list li .text-container {\n  display: flex;\n  gap: 10px;\n}\n\n/* Media queries para tabletas y dispositivos móviles */\n@media (max-width: 768px) {\n  /* stylelint-disable-next-line indentation */\n.container {\n    width: 100%;\n    padding: 0.5rem;\n  }\n\n  #todo-list li .text-container {\n    width: 80%; /* Ajusta la anchura del contenedor de texto al 80% en dispositivos móviles y tabletas */\n  }\n\n  #todo-list li .button-container {\n    width: 20%; /* Ajusta la anchura del contenedor de botones al 20% en dispositivos móviles y tabletas */\n    justify-content: space-evenly; /* Esto distribuye los botones de manera uniforme en el espacio disponible. */\n  }\n\n  #todo-list li .button-container button {\n    font-size: 1rem; /* Ajusta el tamaño de los íconos para los dispositivos móviles y tabletas. */\n  }\n\n  #task-input {\n    font-size: 1.2rem; /* Ajusta el tamaño de la fuente del campo de entrada para los dispositivos móviles y tabletas. */\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/taskFunctions.js\");\n/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusUpdates.js */ \"./src/statusUpdates.js\");\n\n\n// eslint-disable-next-line no-unused-vars\n\n\nconst todoList = document.getElementById('todo-list');\nconst taskInput = document.getElementById('task-input');\nconst clearCompletedBtn = document.getElementById('clear-completed-btn');\nconst refreshBtn = document.getElementById('refresh-btn');\nconst enterBtn = document.getElementById('enter-btn');\n\n// Agregar event listeners\ntaskInput.addEventListener('keyup', (event) => {\n  if (event.key === 'Enter') {\n    (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.handleNewTask)(taskInput, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.populateTodoList, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.getTasks, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.setTasks);\n  }\n});\n\nfunction handleRefresh() {\n  // Aquí puedes realizar cualquier acción que desees cuando se haga clic en el botón de actualizar\n  // eslint-disable-next-line no-console\n  console.log('La lista de tareas ha sido actualizada');\n}\n\nclearCompletedBtn.addEventListener('click', () => (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_2__.clearAllCompleted)(_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.populateTodoList, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.getTasks, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.setTasks, todoList));\nrefreshBtn.addEventListener('click', handleRefresh);\n\nwindow.onload = () => {\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.loadTasksFromLocalStorage)();\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.populateTodoList)((0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)(), todoList);\n};\n\nenterBtn.addEventListener('click', () => (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.handleNewTask)(taskInput, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.populateTodoList, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.getTasks, _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.setTasks));\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/statusUpdates.js":
/*!******************************!*\
  !*** ./src/statusUpdates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAllCompleted: () => (/* binding */ clearAllCompleted),\n/* harmony export */   toggleTaskCompleted: () => (/* binding */ toggleTaskCompleted)\n/* harmony export */ });\n// statusUpdates.js\nfunction toggleTaskCompleted(task, populateTodoList, tasks, todoList) {\n  task.completed = !task.completed;\n  populateTodoList(tasks, todoList);\n}\n\nfunction clearAllCompleted(populateTodoList, getTasks, setTasks, todoList) {\n  let tasks = getTasks();\n  tasks = tasks.filter((task) => !task.completed);\n  setTasks(tasks);\n  populateTodoList(tasks, todoList);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/statusUpdates.js?");

/***/ }),

/***/ "./src/taskFunctions.js":
/*!******************************!*\
  !*** ./src/taskFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTasks: () => (/* binding */ getTasks),\n/* harmony export */   handleClearCompleted: () => (/* binding */ handleClearCompleted),\n/* harmony export */   handleNewTask: () => (/* binding */ handleNewTask),\n/* harmony export */   loadTasksFromLocalStorage: () => (/* binding */ loadTasksFromLocalStorage),\n/* harmony export */   populateTodoList: () => (/* binding */ populateTodoList),\n/* harmony export */   saveTasksToLocalStorage: () => (/* binding */ saveTasksToLocalStorage),\n/* harmony export */   setTasks: () => (/* binding */ setTasks)\n/* harmony export */ });\n/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusUpdates.js */ \"./src/statusUpdates.js\");\n\n\nlet draggedItem = null;\nlet tasks = [];\n\nfunction getTasks() {\n  return tasks;\n}\n\nfunction setTasks(newTasks) {\n  tasks = newTasks;\n  // eslint-disable-next-line no-use-before-define\n  saveTasksToLocalStorage(tasks);\n}\n\nfunction saveTasksToLocalStorage(tasks) {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nfunction loadTasksFromLocalStorage() {\n  const storedTasks = localStorage.getItem('tasks');\n  if (storedTasks) {\n    tasks = JSON.parse(storedTasks);\n  }\n}\n\nfunction updateTaskIndexes(tasks) {\n  for (let i = 0; i < tasks.length; i += 1) {\n    tasks[i].index = i;\n  }\n  return tasks;\n}\n\nfunction handleNewTask(taskInput, populateTodoList, getTasks, setTasks) {\n  const tasks = getTasks();\n\n  if (taskInput.value.trim() === '') return;\n\n  const newTask = {\n    description: taskInput.value,\n    completed: false,\n    index: tasks.length,\n  };\n\n  tasks.push(newTask);\n\n  setTasks(tasks);\n\n  taskInput.value = '';\n  populateTodoList(tasks, document.getElementById('todo-list'));\n}\n\nfunction handleClearCompleted(populateTodoList, getTasks, setTasks) {\n  let tasks = getTasks();\n  tasks = tasks.filter((task) => !task.completed);\n  tasks = updateTaskIndexes(tasks);\n  setTasks(tasks);\n  populateTodoList(tasks, document.getElementById('todo-list'));\n}\n\nfunction populateTodoList(tasks, todoList) {\n  todoList.innerHTML = '';\n\n  tasks.sort((a, b) => a.index - b.index).forEach((task) => {\n    const listItem = document.createElement('li');\n    listItem.draggable = true;\n\n    const textContainer = document.createElement('div');\n    textContainer.classList.add('text-container');\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.checked = task.completed;\n    checkbox.addEventListener('change', () => {\n      (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskCompleted)(task, getTasks, setTasks);\n      populateTodoList(getTasks(), todoList);\n    });\n\n    const text = document.createElement('span');\n    text.textContent = task.description;\n    text.contentEditable = true;\n\n    // Añade el manejador del evento 'blur'\n    text.addEventListener('blur', () => {\n      task.description = text.textContent;\n      saveTasksToLocalStorage(tasks);\n    });\n\n    textContainer.append(checkbox, text);\n\n    const buttonContainer = document.createElement('div');\n    buttonContainer.classList.add('button-container');\n\n    const deleteBtn = document.createElement('button');\n    deleteBtn.innerHTML = '<i class=\"fas fa-trash-alt delete-icon\"></i>';\n    deleteBtn.addEventListener('click', () => {\n      let tasks = getTasks();\n      tasks = tasks.filter((t) => t.description !== task.description);\n      tasks = updateTaskIndexes(tasks);\n      setTasks(tasks);\n      populateTodoList(tasks, todoList);\n    });\n    buttonContainer.appendChild(deleteBtn);\n\n    const dragBtn = document.createElement('button');\n    dragBtn.innerHTML = '<i class=\"fas fa-ellipsis-v drag-icon\"></i>';\n    dragBtn.className = 'drag-btn';\n    buttonContainer.appendChild(dragBtn);\n\n    listItem.append(textContainer, buttonContainer);\n    todoList.append(listItem);\n\n    listItem.addEventListener('dragstart', () => {\n      draggedItem = task;\n    });\n\n    listItem.addEventListener('dragover', (e) => {\n      e.preventDefault();\n    });\n\n    listItem.addEventListener('drop', (e) => {\n      e.preventDefault();\n      let tasks = getTasks();\n\n      const oldIndex = tasks.findIndex((t) => t.description === draggedItem.description);\n      const newIndex = tasks.findIndex((t) => t.description === task.description);\n\n      tasks[oldIndex].index = newIndex;\n      tasks[newIndex].index = oldIndex;\n\n      tasks = tasks.sort((a, b) => a.index - b.index);\n      setTasks(tasks);\n      populateTodoList(tasks, todoList);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/taskFunctions.js?");

/***/ }),

/***/ "./assets/img/space.jpg":
/*!******************************!*\
  !*** ./assets/img/space.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d98e844c3e428bff2323.jpg\";\n\n//# sourceURL=webpack://todo-list/./assets/img/space.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;