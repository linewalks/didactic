(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/contracts.js":
/*!**********************************!*\
  !*** ./src/helpers/contracts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar getContractsFromPath = function getContractsFromPath(contractsPath) {\n  return fs.readdirSync(contractsPath).map(function (p) {\n    return path.join(contractsPath, p);\n  });\n};\n\nvar parseNameAndABIFromCompiledContract = function parseNameAndABIFromCompiledContract(pathToCompiledContracts) {\n  return pathToCompiledContracts.map(function (contractPath) {\n    return {\n      name: JSON.parse(fs.readFileSync(contractPath)).contractName,\n      abi: JSON.parse(fs.readFileSync(contractPath)).abi\n    };\n  });\n};\n\nmodule.exports = {\n  getContractsFromPath: getContractsFromPath,\n  parseNameAndABIFromCompiledContract: parseNameAndABIFromCompiledContract\n};\n\n//# sourceURL=webpack:///./src/helpers/contracts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar _require = __webpack_require__(/*! ./router */ \"./src/router.js\"),\n    router = _require.router,\n    port = _require.port;\n\nmodule.exports = {\n  runServer: function runServer() {\n    var app = express();\n    app.use(router);\n    app.listen(port, function () {\n      return console.log(\"didactic running on port \".concat(port, \"!\"));\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar program = __webpack_require__(/*! commander */ \"commander\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\nvar _require = __webpack_require__(/*! ./helpers/contracts */ \"./src/helpers/contracts.js\"),\n    getContractsFromPath = _require.getContractsFromPath,\n    parseNameAndABIFromCompiledContract = _require.parseNameAndABIFromCompiledContract;\n\nvar router = express.Router();\nvar defaultOptions = {\n  port: \"8081\",\n  contractsPath: \"../build/contracts\"\n};\nprogram.version(\"0.0.1\").option(\"-p, --port <n>\", \"Specify port\", parseInt).option(\"-c, --contractsPath <path>\", \"Specify path for compiled contracts\").parse(process.argv);\nvar _program$port = program.port,\n    port = _program$port === void 0 ? defaultOptions.port : _program$port,\n    _program$contractsPat = program.contractsPath,\n    contractsPath = _program$contractsPat === void 0 ? defaultOptions.contractsPath : _program$contractsPat;\nrouter.get(\"/contracts_meta\", function (req, res) {\n  var listOfContracts = getContractsFromPath(contractsPath);\n  res.send(parseNameAndABIFromCompiledContract(listOfContracts));\n});\nrouter.get(\"/deployed_contracts\", function (req, res) {\n  res.send(\"About birds\");\n});\nrouter.get(\"/networkInformation\", function (req, res) {\n  res.send({\n    host: \"localhost:3434\",\n    port: \"8545\",\n    networkId: \"*\"\n  });\n});\nmodule.exports = {\n  router: router,\n  port: port\n};\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"commander\");\n\n//# sourceURL=webpack:///external_%22commander%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ })));