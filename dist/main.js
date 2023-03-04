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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".selected {\\r\\n  border: 1px solid steelblue;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"appendTodo\": () => (/* binding */ appendTodo),\n/* harmony export */   \"appendTodoOnProjectSelect\": () => (/* binding */ appendTodoOnProjectSelect),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"todos\": () => (/* binding */ todos)\n/* harmony export */ });\n/* harmony import */ var _loadInitialProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadInitialProject */ \"./src/loadInitialProject.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n\r\n\r\n\r\n\r\nconst todos = document.querySelector(\".todos\");\r\nlet idCount = 0;\r\n// factory function for to do\r\nconst createTodo = (title, desc) => {\r\n  return { title, desc };\r\n};\r\n\r\n// function to process factory function and append to DOM\r\nconst addTodo = (todosTitle, todosDesc, projectSelectedIndex) => {\r\n  const newTodo = createTodo(todosTitle, todosDesc);\r\n  _loadInitialProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectSelectedIndex][\"projectTask\"].push(newTodo);\r\n  console.log(\"masuk add todo\");\r\n  appendTodo(newTodo);\r\n};\r\n\r\nconst appendTodo = (newTodo) => {\r\n  const todosWrapper = document.createElement(\"div\");\r\n  const p = document.createElement(\"p\");\r\n  const deleteBtn = document.createElement(\"button\");\r\n  const editBtn = document.createElement(\"button\");\r\n\r\n  todosWrapper.setAttribute(\"id\", idCount);\r\n\r\n  p.textContent = `${newTodo.title}, ${newTodo.desc}, ${_listeners__WEBPACK_IMPORTED_MODULE_1__.projectSelectedIndex}`;\r\n  p.style.display = \"inline-block\";\r\n\r\n  editBtn.textContent = \"Edit\";\r\n  editBtn.style.display = \"inline-block\";\r\n  editBtn.className = \"edit-btn-todos\";\r\n\r\n  deleteBtn.textContent = \"Delete\";\r\n  deleteBtn.style.display = \"inline-block\";\r\n  deleteBtn.className = \"delete-btn-todos\";\r\n\r\n  todosWrapper.appendChild(p);\r\n  todosWrapper.appendChild(editBtn);\r\n  todosWrapper.appendChild(deleteBtn);\r\n  todos.appendChild(todosWrapper);\r\n\r\n  idCount++;\r\n};\r\n\r\nconst appendTodoOnProjectSelect = (projectSelectedIndex) => {\r\n  idCount = 0;\r\n  todos.innerHTML = \"\";\r\n  _loadInitialProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectSelectedIndex].projectTask.forEach((element) => {\r\n    appendTodo(element);\r\n  });\r\n  (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.selectTodos)();\r\n};\r\n\r\nconst findProjectIndex = () => {\r\n  for (let i = 0; i < _loadInitialProject__WEBPACK_IMPORTED_MODULE_0__.projectList; i++) {\r\n    console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/createToDo.js?");

/***/ }),

/***/ "./src/deleteFunction.js":
/*!*******************************!*\
  !*** ./src/deleteFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deleteTodos\": () => (/* binding */ deleteTodos)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _loadInitialProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadInitialProject */ \"./src/loadInitialProject.js\");\n\r\n\r\n\r\n\r\nconst deleteProject = (deleteProjectIndex) => {\r\n  console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_2__.projectList);\r\n  console.log(deleteProjectIndex);\r\n  _loadInitialProject__WEBPACK_IMPORTED_MODULE_2__.projectList.splice(deleteProjectIndex, 1);\r\n  console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_2__.projectList);\r\n  (0,_loadInitialProject__WEBPACK_IMPORTED_MODULE_2__.appendAllProjectFromArray)(deleteProjectIndex);\r\n};\r\n\r\nconst deleteTodos = (deleteTodoIndex, deleteTodoProjectIndex) => {\r\n  // console.log(\"tes\");\r\n  // console.log(\"todo id :\", deleteTodoIndex);\r\n  // console.log(\"todo project id :\", deleteTodoProjectIndex);\r\n  console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_2__.projectList[deleteTodoProjectIndex].projectTask.splice(deleteTodoIndex, 1));\r\n  console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_2__.projectList[deleteTodoProjectIndex].projectTask);\r\n  (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.appendTodoOnProjectSelect)(deleteTodoProjectIndex);\r\n  (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.selectTodos)();\r\n  // projectList[deleteTodoProjectIndex]\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/deleteFunction.js?");

/***/ }),

/***/ "./src/editFunction.js":
/*!*****************************!*\
  !*** ./src/editFunction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editProject\": () => (/* binding */ editProject),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadInitialProject */ \"./src/loadInitialProject.js\");\n\r\n\r\n\r\nconst editProject = (editProjectIndex, newTitle) => {\r\n  console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[editProjectIndex]);\r\n  _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[editProjectIndex].projectName = newTitle;\r\n  console.log(_loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[editProjectIndex]);\r\n  (0,_loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.appendAllProjectFromArray)();\r\n};\r\n\r\nconst editTodo = (editTodoIndex, editTodoProjectIndex, newTitle, newDesc) => {\r\n  // console.log(projectList[editTodoProjectIndex].projectTask[editTodoIndex].title);\r\n  _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[editTodoProjectIndex].projectTask[editTodoIndex].title = newTitle;\r\n  _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[editTodoProjectIndex].projectTask[editTodoIndex].desc = newDesc;\r\n  (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.appendTodoOnProjectSelect)(editTodoProjectIndex);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/editFunction.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadInitialProject */ \"./src/loadInitialProject.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n\r\n\r\n// projects :\r\n// - edit(done),hapus(done)\r\n// todo :\r\n// - edit(done),hapus(done)\r\n// all projects :\r\n// - add display mechanism so the latest to do will be at the bottom\r\n\r\n// added dataset todos(still has bugs)\r\n\r\nconsole.log(\"tes from console to test webpack setup\");\r\n\r\n// const contentContainer = document.getElementById(\"content\");\r\n// console.log(\"container : \", contentContainer);\r\n// const h1 = document.createElement(\"h1\");\r\n// h1.textContent = \"Testing append Dom\";\r\n\r\n// contentContainer.appendChild(h1);\r\n\r\n\r\n// import { addTodo } from \"./createToDo\";\r\n\r\n\r\n\r\n// loadInitialProject(\"Today\");\r\n// loadInitialProject(\"All Tasks\");\r\n// loadInitialProject(\"Next Week\");\r\n\r\n// projectObj[\"Today\"].push(createTodo(\"santuy\", \"makan\"));\r\n// projectObj[\"Next Week\"].push(createTodo(\"santuy2\", \"minum\"));\r\n// loadInitialProject(\"Today\");\r\n// loadInitialProject(\"NextWeek\");\r\n\r\n// console.log(projectList);\r\n// console.log(projectList);\r\n\r\n// Array.from(projects).forEach((element) => {\r\n//   console.log(element);\r\n// });\r\n// addTodo(0);\r\n// console.log(loadInitialProject(\"Next Month\"));\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectChildren\": () => (/* binding */ projectChildren),\n/* harmony export */   \"projectSelectedIndex\": () => (/* binding */ projectSelectedIndex),\n/* harmony export */   \"selectAllTodos\": () => (/* binding */ selectAllTodos),\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject),\n/* harmony export */   \"selectTodos\": () => (/* binding */ selectTodos)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadInitialProject */ \"./src/loadInitialProject.js\");\n/* harmony import */ var _deleteFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteFunction */ \"./src/deleteFunction.js\");\n/* harmony import */ var _editFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editFunction */ \"./src/editFunction.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet projectChildren = document.querySelector(\".projects\").children;\r\nlet projectSelectedIndex = 0;\r\nlet editProjectIndex = 0;\r\nlet editTodoIndex = 0;\r\nlet isEditProject = false;\r\nlet isEditTodo = false;\r\n\r\nconst titleInput = document.getElementById(\"title\");\r\n// const descInput = document.getElementById(\"desc\");\r\nconst btnSubmit = document.getElementById(\"btn-submit\");\r\nconst btnSubmitTodos = document.getElementById(\"btn-submit-todos\");\r\n\r\nconst titleTodosInput = document.getElementById(\"todos-title\");\r\nconst descTodosInput = document.getElementById(\"todos-desc\");\r\n\r\nbtnSubmit.addEventListener(\"click\", (event) => {\r\n  event.preventDefault();\r\n  if (!isEditProject) {\r\n    (0,_loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.loadInitialProject)(titleInput.value);\r\n  } else {\r\n    (0,_editFunction__WEBPACK_IMPORTED_MODULE_3__.editProject)(editProjectIndex, titleInput.value);\r\n    isEditProject = false;\r\n    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.appendTodoOnProjectSelect)(editProjectIndex);\r\n    btnSubmit.textContent = \"Submit\";\r\n  }\r\n  titleInput.value = \"\";\r\n});\r\n\r\nbtnSubmitTodos.addEventListener(\"click\", (event) => {\r\n  event.preventDefault();\r\n  if (!isEditTodo) {\r\n    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.addTodo)(titleTodosInput.value, descTodosInput.value, projectSelectedIndex);\r\n    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.appendTodoOnProjectSelect)(projectSelectedIndex);\r\n    selectTodos(projectSelectedIndex);\r\n    (0,_loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.appendAllTodoToArray)(titleTodosInput.value, descTodosInput.value, projectSelectedIndex, _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList);\r\n  } else {\r\n    (0,_editFunction__WEBPACK_IMPORTED_MODULE_3__.editTodo)(editTodoIndex, projectSelectedIndex, titleTodosInput.value, descTodosInput.value);\r\n    btnSubmitTodos.textContent = \"Submit\";\r\n    isEditTodo = false;\r\n  }\r\n  titleTodosInput.value = \"\";\r\n  descTodosInput.value = \"\";\r\n});\r\n\r\n// masih misteri kenapa jika bentuknya seperti ini, dia tidak ada\r\n// duplikasi\r\n\r\n// fungsi select project untuk memberikan eventlistener click ke semua project\r\nconst selectProject = () => {\r\n  Array.from(projectChildren).forEach((element) => {\r\n    element.addEventListener(\"click\", myListener);\r\n  });\r\n};\r\n\r\nconst myListener = (e) => {\r\n  innerListener(e);\r\n};\r\n\r\nconst innerListener = (event) => {\r\n  const currentSelected = document.querySelector(\".selected\");\r\n  if (currentSelected != undefined) {\r\n    currentSelected.classList.remove(\"selected\");\r\n  }\r\n\r\n  if (event.target.classList.contains(\"btn-delete-project\")) {\r\n    (0,_deleteFunction__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(event.target.parentElement.firstChild.id);\r\n  } else if (event.target.classList.contains(\"btn-edit-project\")) {\r\n    isEditProject = true;\r\n    titleInput.value = _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[event.target.parentElement.firstChild.id].projectName;\r\n    editProjectIndex = event.target.parentElement.firstChild.id;\r\n    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.appendTodoOnProjectSelect)(editProjectIndex);\r\n    btnSubmit.textContent = \"Edit\";\r\n  } else {\r\n    projectSelectedIndex = event.target.firstChild.id;\r\n    event.target.classList.add(\"selected\");\r\n    console.log(event.target);\r\n    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.appendTodoOnProjectSelect)(projectSelectedIndex);\r\n  }\r\n};\r\n\r\n// fungsi select project untuk memberikan eventlistener click ke semua todos yang ditampilkan\r\nconst selectTodos = () => {\r\n  console.log(\"masuk select todos\");\r\n  Array.from(_createToDo__WEBPACK_IMPORTED_MODULE_0__.todos.children).forEach((element) => {\r\n    element.addEventListener(\"click\", myListenerTodos);\r\n  });\r\n};\r\n\r\nconst myListenerTodos = (e) => {\r\n  tesSelectTodos(e);\r\n};\r\n\r\nconst tesSelectTodos = (e) => {\r\n  if (e.target.classList.contains(\"edit-btn-todos\")) {\r\n    // console.log(projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title);\r\n    titleTodosInput.value = _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title;\r\n    descTodosInput.value = _loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].desc;\r\n    editTodoIndex = e.target.parentElement.id;\r\n    btnSubmitTodos.textContent = \"Edit\";\r\n    isEditTodo = true;\r\n  } else if (e.target.classList.contains(\"delete-btn-todos\")) {\r\n    (0,_deleteFunction__WEBPACK_IMPORTED_MODULE_2__.deleteTodos)(e.target.parentElement.id, projectSelectedIndex);\r\n  } else {\r\n    console.log(\"select all\");\r\n  }\r\n};\r\n\r\n// fungsi select project untuk memberikan eventlistener click ke all task yang ditampilkan\r\nconst selectAllTodos = () => {\r\n  // console.log(\"masuk select all todos\");\r\n  Array.from(_loadInitialProject__WEBPACK_IMPORTED_MODULE_1__.allTasksContainer.children).forEach((element) => {\r\n    element.addEventListener(\"click\", myListenerAllTodos);\r\n  });\r\n};\r\n\r\nconst myListenerAllTodos = (e) => {\r\n  tesSelectAllTodos(e);\r\n};\r\n\r\nconst tesSelectAllTodos = (e) => {\r\n  if (e.target.classList.contains(\"edit-btn-todos\")) {\r\n    // console.log(projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title);\r\n    // titleTodosInput.value = projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].title;\r\n    // descTodosInput.value = projectList[projectSelectedIndex].projectTask[e.target.parentElement.id].desc;\r\n    // editTodoIndex = e.target.parentElement.id;\r\n    // btnSubmitTodos.textContent = \"Edit\";\r\n    // isEditTodo = true;\r\n    console.log(\"edit all todos\");\r\n    // setAttribute();\r\n    console.log(e.target.parentElement.getAttribute(\"data-project-index\"));\r\n  } else if (e.target.classList.contains(\"delete-btn-todos\")) {\r\n    // deleteTodos(e.target.parentElement.id, projectSelectedIndex);\r\n    console.log(\"delete all todos\");\r\n  } else {\r\n    console.log(\"select all todos\");\r\n  }\r\n};\r\n\r\n// Untuk tes metode conventional\r\n// function print(element) {\r\n//   console.log(\"tes\", element.id);\r\n// }\r\n\r\n// const selectProject = () => {\r\n//   Array.from(projectChildren).forEach((element) => {\r\n//     element.addEventListener(\"click\", () => {\r\n//       print(element);\r\n//     });\r\n//   });\r\n// };\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners.js?");

/***/ }),

/***/ "./src/loadInitialProject.js":
/*!***********************************!*\
  !*** ./src/loadInitialProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTasksContainer\": () => (/* binding */ allTasksContainer),\n/* harmony export */   \"appendAllProjectFromArray\": () => (/* binding */ appendAllProjectFromArray),\n/* harmony export */   \"appendAllTodo\": () => (/* binding */ appendAllTodo),\n/* harmony export */   \"appendAllTodoToArray\": () => (/* binding */ appendAllTodoToArray),\n/* harmony export */   \"appendProjectDom\": () => (/* binding */ appendProjectDom),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"loadInitialProject\": () => (/* binding */ loadInitialProject),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n// import { selectProject } from \"./Listeners\";\r\n\r\n\r\n\r\n\r\n\r\n// let projectObj = {};\r\nlet projectList = [];\r\nlet allTodoList = [];\r\nlet idCount = 0;\r\nlet idCountTodo = 0;\r\n\r\nconst content = document.querySelector(\".projects\");\r\nconst allTasksContainer = document.querySelector(\".all-tasks\");\r\n\r\nconst createProject = (projectName) => {\r\n  let projectTask = [];\r\n  return { projectName, projectTask };\r\n};\r\n\r\n// const loadAllTasks = () => {\r\n//   allTasksContainer.innerHTML = \"\";\r\n//   Array.from(projectList).forEach((element, index) => {\r\n//     element.projectTask.forEach((task) => {\r\n//       appendAllTodo(task, index);\r\n//     });\r\n//   });\r\n// };\r\n\r\nconst loadInitialProject = (projectName) => {\r\n  console.log(\"calling loadInitialProject\");\r\n  const newProject = createProject(projectName);\r\n  projectList.push(newProject);\r\n  appendProjectDom(projectName);\r\n\r\n  (0,_listeners__WEBPACK_IMPORTED_MODULE_0__.selectProject)();\r\n};\r\n\r\nconst appendAllTodoToArray = (title, desc, index, todoIndexOnProject) => {\r\n  allTodoList.push({ title, desc, index, todoIndexOnProject: todoIndexOnProject[index].projectTask.length - 1 });\r\n  // console.log(todoIndexOnProject[index].projectTask.length - 1);\r\n  // console.log(\"tes todo index on project : \", todoIndexOnProject);\r\n  console.log(allTodoList);\r\n  appendAllTodo();\r\n};\r\n\r\nconst appendAllTodo = () => {\r\n  allTasksContainer.innerHTML = \"\";\r\n  allTodoList.forEach((element) => {\r\n    const todosWrapper = document.createElement(\"div\");\r\n    const p = document.createElement(\"p\");\r\n    const deleteBtn = document.createElement(\"button\");\r\n    const editBtn = document.createElement(\"button\");\r\n\r\n    todosWrapper.setAttribute(\"data-project-index\", element.index);\r\n    todosWrapper.setAttribute(\"data-todos-index\", element.todoIndexOnProject);\r\n\r\n    p.textContent = `${element.title}, ${element.desc}, ${element.index}`;\r\n    p.style.display = \"inline-block\";\r\n\r\n    editBtn.textContent = \"Edit\";\r\n    editBtn.style.display = \"inline-block\";\r\n    editBtn.className = \"edit-btn-todos\";\r\n\r\n    deleteBtn.textContent = \"Delete\";\r\n    deleteBtn.style.display = \"inline-block\";\r\n    deleteBtn.className = \"delete-btn-todos\";\r\n\r\n    todosWrapper.appendChild(p);\r\n    todosWrapper.appendChild(editBtn);\r\n    todosWrapper.appendChild(deleteBtn);\r\n    allTasksContainer.appendChild(todosWrapper);\r\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_0__.selectAllTodos)();\r\n  });\r\n};\r\n\r\nconst appendProjectDom = (projectName) => {\r\n  const projectWrapper = document.createElement(\"div\");\r\n  const p = document.createElement(\"p\");\r\n  const deleteBtn = document.createElement(\"button\");\r\n  const editBtn = document.createElement(\"button\");\r\n\r\n  projectWrapper.className = \"project-wrapper\";\r\n\r\n  p.textContent = projectName;\r\n  p.className = \"project-item\";\r\n  p.style.display = \"inline-block\";\r\n  p.style.pointerEvents = \"none\";\r\n  p.setAttribute(\"id\", idCount);\r\n\r\n  deleteBtn.textContent = \"Delete\";\r\n  deleteBtn.style.display = \"inline-block\";\r\n  deleteBtn.className = \"btn-delete-project\";\r\n\r\n  editBtn.textContent = \"Edit\";\r\n  editBtn.style.display = \"inline-block\";\r\n  editBtn.className = \"btn-edit-project\";\r\n\r\n  projectWrapper.appendChild(p);\r\n  projectWrapper.appendChild(editBtn);\r\n  projectWrapper.appendChild(deleteBtn);\r\n\r\n  content.appendChild(projectWrapper);\r\n  idCount++;\r\n};\r\n\r\nconst appendAllProjectFromArray = () => {\r\n  idCount = 0;\r\n  content.innerHTML = \"\";\r\n  projectList.forEach((element) => {\r\n    appendProjectDom(element.projectName);\r\n  });\r\n  _createToDo__WEBPACK_IMPORTED_MODULE_1__.todos.innerHTML = \"\";\r\n  (0,_listeners__WEBPACK_IMPORTED_MODULE_0__.selectProject)();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/loadInitialProject.js?");

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