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
/******/ 	return __webpack_require__(__webpack_require__.s = "./render-process.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_mainView_Cont_CharInfo_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/mainView/Cont_CharInfo.tsx */ "./views/mainView/Cont_CharInfo.tsx");
/* harmony import */ var _viewModels_VM_CharInfo_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewModels/VM_CharInfo.ts */ "./viewModels/VM_CharInfo.ts");
/* harmony import */ var _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewModels/VM_AbilityScore */ "./viewModels/VM_AbilityScore.ts");
/* harmony import */ var _viewModels_VM_AbilityScoreContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewModels/VM_AbilityScoreContainer */ "./viewModels/VM_AbilityScoreContainer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






 //IMPORT CHARINFO MODEL

/*
export default function App() {
    return (
      <div>
        <div className="sidebar">
            test
        </div>
      </div>
    );
}
*/

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.vm_CharInfo = new _viewModels_VM_CharInfo_ts__WEBPACK_IMPORTED_MODULE_3__["default"]("Wikus", "Human", "Druid", 8, "Medium"); //load view modal with Model via JSON data

    _this.VM_AbilityScoreContainer = new _viewModels_VM_AbilityScoreContainer__WEBPACK_IMPORTED_MODULE_5__["default"](new _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"]("STR"), new _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"]("DEX"), new _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"]("CON"), new _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"]("INT"), new _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"]("WIS"), new _viewModels_VM_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"]("CHA"));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log(_viewModels_VM_AbilityScoreContainer__WEBPACK_IMPORTED_MODULE_5__["default"]);
      this.VM_AbilityScoreContainer.setRaceBonus("Elf"); //this.VM_AbilityScoreContainer.setAbilitySubScore("strScore", "baseScore", 11);

      console.log(_viewModels_VM_AbilityScoreContainer__WEBPACK_IMPORTED_MODULE_5__["default"]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_views_mainView_Cont_CharInfo_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        vm_CharInfo: this.vm_CharInfo,
        vm_AbilityScores: this.VM_AbilityScoreContainer
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./core/classDefinitions/druid.json":
/*!******************************************!*\
  !*** ./core/classDefinitions/druid.json ***!
  \******************************************/
/*! exports provided: class, hitDie, alignments, knownSkills, skillPoints, weaponProficiency, armorProficiency, spellInfo, levelTable, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"class\":\"druid\",\"hitDie\":{\"diceNum\":1,\"diceType\":8},\"alignments\":[{\"alignmentName\":\"NG\"},{\"alignmentName\":\"LN\"},{\"alignmentName\":\"NC\"},{\"alignmentName\":\"NE\"}],\"knownSkills\":[{\"skill\":\"Concentration\"},{\"skill\":\"Craft\"},{\"skill\":\"Diplomacy\"},{\"skill\":\"Handle Animal\"},{\"skill\":\"Heal\"},{\"skill\":\"Knowledge Nature\"},{\"skill\":\"Listen\"},{\"skill\":\"Profession\"},{\"skill\":\"Ride\"},{\"skill\":\"Spellcraft\"},{\"skill\":\"Spot\"},{\"skill\":\"Survival\"},{\"skill\":\"Swim\"}],\"skillPoints\":[{\"firstLevel\":[{\"add\":4},{\"abilityMod\":\"INT\"},{\"product\":4}]},{\"levelUp\":[{\"add\":4},{\"abilityMod\":\"INT\"}]}],\"weaponProficiency\":[{\"martial\":[{\"weapon\":\"Club\"},{\"weapon\":\"Dagger\"},{\"weapon\":\"Dart\"},{\"weapon\":\"Quarterstaff\"},{\"weapon\":\"Scimitar\"},{\"weapon\":\"Sickle\"},{\"weapon\":\"Dart\"},{\"weapon\":\"Shortspear\"},{\"weapon\":\"Sling\"},{\"weapon\":\"Spear\"}]},{\"exotic\":[]}],\"armorProficiency\":[{\"armor\":\"Light\"},{\"armor\":\"Medium\"}],\"spellInfo\":{\"spellType\":\"Divine\",\"castingReq\":{\"abilityMod\":\"WIS\",\"add\":10,\"spelllevel\":null},\"dc\":{\"abilityMod\":\"WIS\",\"add\":10,\"spelllevel\":null}},\"levelTable\":[{\"level\":{\"name\":1,\"bab\":{\"1st\":0,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"fort\":2,\"ref\":0,\"will\":2},\"special\":[{\"name\":\"Animal companion\"},{\"name\":\"Nature sense\"},{\"name\":\"Wild empathy\"}],\"spellsPerDay\":{\"0\":3,\"1\":1,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":2,\"bab\":{\"1st\":1,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":3,\"Ref\":0,\"Will\":3},\"special\":[{\"name\":\"Woodland stride\"}],\"spellsPerDay\":{\"0\":4,\"1\":2,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":3,\"bab\":{\"1st\":2,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":3,\"Ref\":0,\"Will\":3},\"special\":[{\"name\":\"Trackless step\"}],\"spellsPerDay\":{\"0\":4,\"1\":2,\"2\":1,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":4,\"bab\":{\"1st\":3,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":4,\"Ref\":1,\"Will\":4},\"special\":[{\"name\":\"Resist nature’s lure\"}],\"spellsPerDay\":{\"0\":5,\"1\":3,\"2\":2,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":5,\"bab\":{\"1st\":3,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":4,\"Ref\":1,\"Will\":4},\"special\":[{\"name\":\"Wild shape (1/day)\"}],\"spellsPerDay\":{\"0\":5,\"1\":3,\"2\":2,\"3\":1,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":6,\"bab\":{\"1st\":4,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":5,\"Ref\":2,\"Will\":5},\"special\":[{\"name\":\"Wild shape (2/day)\"}],\"spellsPerDay\":{\"0\":5,\"1\":3,\"2\":3,\"3\":2,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":7,\"bab\":{\"1st\":5,\"2nd\":0,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":5,\"Ref\":2,\"Will\":5},\"special\":[{\"name\":\"Wild shape (3/day)\"}],\"spellsPerDay\":{\"0\":6,\"1\":4,\"2\":3,\"3\":2,\"4\":1,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":8,\"bab\":{\"1st\":6,\"2nd\":1,\"3rd\":0,\"4th\":0},\"saves\":{\"fort\":6,\"ref\":2,\"will\":6},\"special\":[{\"name\":\"Wild shape (Large)\"}],\"spellsPerDay\":{\"0\":6,\"1\":4,\"2\":3,\"3\":3,\"4\":2,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":9,\"bab\":{\"1st\":6,\"2nd\":1,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":6,\"Ref\":3,\"Will\":6},\"special\":[{\"name\":\"Venom immunity\"}],\"spellsPerDay\":{\"0\":6,\"1\":4,\"2\":4,\"3\":3,\"4\":2,\"5\":1,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":10,\"bab\":{\"1st\":7,\"2nd\":2,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":7,\"Ref\":3,\"Will\":7},\"special\":[{\"name\":\"Wild shape (4/day)\"}],\"spellsPerDay\":{\"0\":6,\"1\":4,\"2\":4,\"3\":3,\"4\":3,\"5\":2,\"6\":0,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":11,\"bab\":{\"1st\":8,\"2nd\":3,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":7,\"Ref\":3,\"Will\":7},\"special\":[{\"name\":\"Wild shape (Tiny)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":4,\"3\":4,\"4\":3,\"5\":2,\"6\":1,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":12,\"bab\":{\"1st\":9,\"2nd\":4,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":8,\"Ref\":4,\"Will\":8},\"special\":[{\"name\":\"Wild shape (Plant)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":4,\"3\":4,\"4\":3,\"5\":3,\"6\":2,\"7\":0,\"8\":0,\"9\":0}}},{\"level\":{\"name\":13,\"bab\":{\"1st\":9,\"2nd\":4,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":8,\"Ref\":4,\"Will\":8},\"special\":[{\"name\":\"A thousand faces\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":4,\"4\":4,\"5\":3,\"6\":2,\"7\":1,\"8\":0,\"9\":0}}},{\"level\":{\"name\":14,\"bab\":{\"1st\":10,\"2nd\":5,\"3rd\":0,\"4th\":0},\"saves\":{\"Fort\":9,\"Ref\":4,\"Will\":9},\"special\":[{\"name\":\"Wild shape (5/day)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":4,\"4\":4,\"5\":3,\"6\":3,\"7\":2,\"8\":0,\"9\":0}}},{\"level\":{\"name\":15,\"bab\":{\"1st\":11,\"2nd\":6,\"3rd\":1,\"4th\":0},\"saves\":{\"Fort\":9,\"Ref\":5,\"Will\":9},\"special\":[{\"name\":\"Timeless body\"},{\"name\":\"Wild shape (Huge)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":5,\"4\":4,\"5\":4,\"6\":3,\"7\":2,\"8\":1,\"9\":0}}},{\"level\":{\"name\":16,\"bab\":{\"1st\":12,\"2nd\":7,\"3rd\":2,\"4th\":0},\"saves\":{\"Fort\":10,\"Ref\":5,\"Will\":10},\"special\":[{\"name\":\"Wild shape (elemental 1/day)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":5,\"4\":4,\"5\":4,\"6\":3,\"7\":3,\"8\":2,\"9\":0}}},{\"level\":{\"name\":17,\"bab\":{\"1st\":12,\"2nd\":7,\"3rd\":2,\"4th\":0},\"saves\":{\"Fort\":10,\"Ref\":5,\"Will\":10},\"special\":[],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":5,\"4\":5,\"5\":4,\"6\":4,\"7\":3,\"8\":2,\"9\":1}}},{\"level\":{\"name\":18,\"bab\":{\"1st\":13,\"2nd\":8,\"3rd\":3,\"4th\":0},\"saves\":{\"Fort\":11,\"Ref\":6,\"Will\":11},\"special\":[{\"name\":\"Wild shape (6/day)\"},{\"name\":\"Elemental (2/day)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":5,\"4\":5,\"5\":4,\"6\":4,\"7\":3,\"8\":3,\"9\":2}}},{\"level\":{\"name\":19,\"bab\":{\"1st\":14,\"2nd\":9,\"3rd\":4,\"4th\":0},\"saves\":{\"Fort\":11,\"Ref\":6,\"Will\":11},\"special\":[],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":5,\"4\":5,\"5\":5,\"6\":4,\"7\":4,\"8\":3,\"9\":3}}},{\"level\":{\"name\":20,\"bab\":{\"1st\":15,\"2nd\":10,\"3rd\":5,\"4th\":0},\"saves\":{\"Fort\":12,\"Ref\":6,\"Will\":12},\"special\":[{\"name\":\"Elemental (3/day)\"},{\"name\":\"Elemental (Huge)\"}],\"spellsPerDay\":{\"0\":6,\"1\":5,\"2\":5,\"3\":5,\"4\":5,\"5\":5,\"6\":4,\"7\":4,\"8\":4,\"9\":4}}}]}");

/***/ }),

/***/ "./core/raceDefinitions/elf.json":
/*!***************************************!*\
  !*** ./core/raceDefinitions/elf.json ***!
  \***************************************/
/*! exports provided: race, size, speed, abilityBonus, savingThrows, skillBonus, conditionalSkillBonus, weaponFamiliarity, weaponProficiency, languages, raceAbilities, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"race\":\"Elf\",\"size\":\"Medium\",\"speed\":30,\"abilityBonus\":{\"str\":0,\"dex\":2,\"con\":-2,\"int\":0,\"wis\":0,\"cha\":0},\"savingThrows\":{\"savingThrowBonus\":{\"fort\":0,\"ref\":0,\"will\":0},\"conditionialSavingThrowBonus\":[{\"save\":\"all\",\"bonus\":2,\"condition\":\"Enchantment spells or effects\"}]},\"skillBonus\":[{\"skill\":\"listen\",\"bonus\":2},{\"skill\":\"search\",\"bonus\":2},{\"skill\":\"spot\",\"bonus\":2}],\"conditionalSkillBonus\":[{\"skill\":\"search\",\"bonus\":0,\"condition\":\"Entitled to search check within 5 feet of secret/concealed door\"}],\"weaponFamiliarity\":[],\"weaponProficiency\":[{\"martial\":[{\"weapon\":\"Longsword\"},{\"weapon\":\"Rapier\"},{\"weapon\":\"Longbow\"},{\"weapon\":\"Composite Longbow\"},{\"weapon\":\"Shortbow\"},{\"weapon\":\"Composite Shortbow\"}]},{\"exotic\":[]}],\"languages\":[{\"known\":[{\"language\":\"Common\"},{\"language\":\"Elven\"}]},{\"bonus\":[{\"language\":\"Draconic\"},{\"language\":\"Gnoll\"},{\"language\":\"Gnome\"},{\"language\":\"Goblin\"},{\"language\":\"Orc\"},{\"language\":\"Sylvan\"}]}],\"raceAbilities\":[{\"description\":\"Immunity to magic effects\"}]}");

/***/ }),

/***/ "./core/raceDefinitions/human.json":
/*!*****************************************!*\
  !*** ./core/raceDefinitions/human.json ***!
  \*****************************************/
/*! exports provided: race, size, speed, abilityBonus, savingThrows, skillBonus, conditionalSkillBonus, weaponFamiliarity, weaponProficiency, languages, raceAbilities, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"race\":\"Human\",\"size\":\"Medium\",\"speed\":30,\"abilityBonus\":{\"str\":0,\"dex\":0,\"con\":0,\"int\":0,\"wis\":0,\"cha\":0},\"savingThrows\":{\"savingThrowBonus\":{\"fort\":0,\"ref\":0,\"will\":0},\"conditionialSavingThrowBonus\":[{\"save\":\"all\",\"bonus\":2,\"condition\":\"Enchantment spells or effects\"}]},\"skillBonus\":[{\"skill\":\"listen\",\"bonus\":2},{\"skill\":\"search\",\"bonus\":2},{\"skill\":\"spot\",\"bonus\":2}],\"conditionalSkillBonus\":[{\"skill\":\"search\",\"bonus\":0,\"condition\":\"Entitled to search check within 5 feet of secret/concealed door\"}],\"weaponFamiliarity\":[],\"weaponProficiency\":[{\"martial\":[{\"weapon\":\"Longsword\"},{\"weapon\":\"Rapier\"},{\"weapon\":\"Longbow\"},{\"weapon\":\"Composite Longbow\"},{\"weapon\":\"Shortbow\"},{\"weapon\":\"Composite Shortbow\"}]},{\"exotic\":[]}],\"languages\":[{\"known\":[{\"language\":\"Common\"}]},{\"bonus\":[{\"language\":\"Draconic\"},{\"language\":\"Gnoll\"},{\"language\":\"Gnome\"},{\"language\":\"Goblin\"},{\"language\":\"Orc\"},{\"language\":\"Sylvan\"}]}],\"raceAbilities\":[{\"description\":\"Immunity to magic effects\"}]}");

/***/ }),

/***/ "./core/ruleTables/skills.json":
/*!*************************************!*\
  !*** ./core/ruleTables/skills.json ***!
  \*************************************/
/*! exports provided: skillsList, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"skillsList\":[{\"skill\":\"Appraise\",\"abi\":\"INT\",\"ut\":\"yes\"},{\"skill\":\"Balance\",\"abi\":\"DEX\",\"ut\":\"yes\"},{\"skill\":\"Bluff\",\"abi\":\"CHA\",\"ut\":\"yes\"},{\"skill\":\"Climb\",\"abi\":\"STR\",\"ut\":\"yes\"},{\"skill\":\"Concentration\",\"abi\":\"CON\",\"ut\":\"yes\"},{\"skill\":\"Craft\",\"abi\":\"INT\",\"ut\":\"yes\"},{\"skill\":\"Decipher Script\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Diplomacy\",\"abi\":\"CHA\",\"ut\":\"yes\"},{\"skill\":\"Disable Device\",\"abi\":\"int\",\"ut\":\"no\"},{\"skill\":\"Disguise\",\"abi\":\"CHA\",\"ut\":\"yes\"},{\"skill\":\"Escape Artist\",\"abi\":\"DEX\",\"ut\":\"yes\"},{\"skill\":\"Forgery\",\"abi\":\"INT\",\"ut\":\"yes\"},{\"skill\":\"Gather Information\",\"abi\":\"CHA\",\"ut\":\"yes\"},{\"skill\":\"Handle Animal\",\"abi\":\"CHA\",\"ut\":\"no\"},{\"skill\":\"Heal\",\"abi\":\"WIS\",\"ut\":\"yes\"},{\"skill\":\"Hide\",\"abi\":\"DEX\",\"ut\":\"yes\"},{\"skill\":\"Intimidate\",\"abi\":\"CHA\",\"ut\":\"yes\"},{\"skill\":\"Jump\",\"abi\":\"STR\",\"ut\":\"yes\"},{\"skill\":\"Knowledge (Arcana)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Arch/Eng)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Dungeoneering)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Geography)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (History)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Local)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Nature)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Nobility/Royalty)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Planes)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Psionics)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Knowledge (Religion)\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Listen\",\"abi\":\"WIS\",\"ut\":\"yes\"},{\"skill\":\"Move Silently\",\"abi\":\"DEX\",\"ut\":\"yes\"},{\"skill\":\"Profession\",\"abi\":\"WIS\",\"ut\":\"no\"},{\"skill\":\"Ride\",\"abi\":\"DEX\",\"ut\":\"yes\"},{\"skill\":\"Search\",\"abi\":\"INT\",\"ut\":\"yes\"},{\"skill\":\"Sense Motive\",\"abi\":\"WIS\",\"ut\":\"yes\"},{\"skill\":\"Slight of Hand\",\"abi\":\"DEX\",\"ut\":\"no\"},{\"skill\":\"Spellcraft\",\"abi\":\"INT\",\"ut\":\"no\"},{\"skill\":\"Spot\",\"abi\":\"WIS\",\"ut\":\"yes\"},{\"skill\":\"Swim\",\"abi\":\"STR\",\"ut\":\"yes\"},{\"skill\":\"Tumble\",\"abi\":\"DEX\",\"ut\":\"no\"},{\"skill\":\"Use Magic Device\",\"abi\":\"CHA\",\"ut\":\"no\"},{\"skill\":\"Use Rope\",\"abi\":\"DEX\",\"ut\":\"yes\"}]}");

/***/ }),

/***/ "./render-process.tsx":
/*!****************************!*\
  !*** ./render-process.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./App.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_0__["render"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));

if (false) {}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./viewModels/VM_AbilityScore.ts":
/*!***************************************!*\
  !*** ./viewModels/VM_AbilityScore.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_AbilityScore; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VM_AbilityScore = /*#__PURE__*/function () {
  function VM_AbilityScore(abilityLabel) {
    _classCallCheck(this, VM_AbilityScore);

    _defineProperty(this, "abilityLabel", void 0);

    _defineProperty(this, "totalScore", void 0);

    _defineProperty(this, "permMod", void 0);

    _defineProperty(this, "tempMod", void 0);

    _defineProperty(this, "baseScore", void 0);

    _defineProperty(this, "raceScore", void 0);

    _defineProperty(this, "itemScore", void 0);

    _defineProperty(this, "levelUpScore", void 0);

    _defineProperty(this, "miscScore", void 0);

    _defineProperty(this, "spellScore", void 0);

    this.abilityLabel = abilityLabel;
    this.baseScore = 14;
    this.raceScore = -99;
    this.itemScore = 0;
    this.levelUpScore = 0;
    this.miscScore = 0;
    this.spellScore = 0;
    this.totalScore = -9;
    this.permMod = -9;
    this.tempMod = -9;
  }

  _createClass(VM_AbilityScore, [{
    key: "setSubScore",
    value: function setSubScore(scoreName, value) {
      //console.log(scoreName);
      //console.log(value);
      this[scoreName] = value;
      this.calcTotalScore();
    }
  }, {
    key: "setAbilityLabel",
    value: function setAbilityLabel(label) {
      this.abilityLabel = label;
    }
  }, {
    key: "calcTotalScore",
    value: function calcTotalScore() {
      console.log("TOTAL SCORE", this.totalScore);
      console.log("BASE SCORE", this.baseScore);
      console.log("RACE SCORE", this.raceScore);
      console.log("ITEM SCORE", this.itemScore);
      console.log("LVL SCORE", this.levelUpScore);
      console.log("MISC SCORE", this.miscScore);
      console.log("SPELL SCORE", this.spellScore);
      console.log("PERMMOD SCORE", this.permMod);
      console.log("TEMPMOD SCORE", this.tempMod);
      console.log("BASE SCORE", this.baseScore);
      this.totalScore = +this.baseScore + +this.raceScore + +this.itemScore + +this.levelUpScore + +this.miscScore + +this.spellScore;
      console.log("TOTAL SCORE AFTER CALC", this.totalScore);
      this.calcMods();
    }
  }, {
    key: "calcMods",
    value: function calcMods() {
      this.permMod = Math.floor((this.totalScore - this.itemScore - this.miscScore - this.spellScore) / 2 - 5);
      this.tempMod = Math.floor(this.totalScore / 2 - 5);
      console.log(this.totalScore);
      console.log(this.permMod);
      console.log(this.tempMod);
    }
  }]);

  return VM_AbilityScore;
}();



/***/ }),

/***/ "./viewModels/VM_AbilityScoreContainer.ts":
/*!************************************************!*\
  !*** ./viewModels/VM_AbilityScoreContainer.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_AbilityScoreContainer; });
/* harmony import */ var _helpers_Helper_AbilityModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Helper_AbilityModifier */ "./viewModels/helpers/Helper_AbilityModifier.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var VM_AbilityScoreContainer = /*#__PURE__*/function () {
  function VM_AbilityScoreContainer(str, dex, con, _int, wis, cha) {
    _classCallCheck(this, VM_AbilityScoreContainer);

    _defineProperty(this, "strScore", void 0);

    _defineProperty(this, "dexScore", void 0);

    _defineProperty(this, "conScore", void 0);

    _defineProperty(this, "intScore", void 0);

    _defineProperty(this, "wisScore", void 0);

    _defineProperty(this, "chaScore", void 0);

    _defineProperty(this, "helper", void 0);

    this.strScore = str;
    this.dexScore = dex;
    this.conScore = con;
    this.intScore = _int;
    this.wisScore = wis;
    this.chaScore = cha;
    this.helper = new _helpers_Helper_AbilityModifier__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(VM_AbilityScoreContainer, [{
    key: "setAbilitySubScore",
    value: function setAbilitySubScore(abilityName, subScoreName, score) {
      this[abilityName].setSubScore(subScoreName, score);
    }
  }, {
    key: "setBaseScore",
    value: function setBaseScore(ability, score) {
      this[ability].baseScore = score;
    }
  }, {
    key: "setRaceBonus",
    value: function setRaceBonus(race) {
      this.strScore = this.helper.raceAbilityBonus("str", this.strScore, race);
      this.dexScore = this.helper.raceAbilityBonus("dex", this.dexScore, race);
      this.conScore = this.helper.raceAbilityBonus("con", this.conScore, race);
      this.intScore = this.helper.raceAbilityBonus("int", this.intScore, race);
      this.wisScore = this.helper.raceAbilityBonus("wis", this.wisScore, race);
      this.chaScore = this.helper.raceAbilityBonus("cha", this.chaScore, race);
    }
  }]);

  return VM_AbilityScoreContainer;
}();



/***/ }),

/***/ "./viewModels/VM_AttackScore.ts":
/*!**************************************!*\
  !*** ./viewModels/VM_AttackScore.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_AttackScore; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import Helper_SizeDef from './helpers/Helper_SizeDef'
var VM_AttackScore = /*#__PURE__*/function () {
  function VM_AttackScore(attackType, helper_ClassDef, abilityMod, size, spellMod, misc, level) {
    _classCallCheck(this, VM_AttackScore);

    _defineProperty(this, "attackType", void 0);

    _defineProperty(this, "totalAttack", void 0);

    _defineProperty(this, "bab", void 0);

    _defineProperty(this, "abilityMod", void 0);

    _defineProperty(this, "sizeMod", void 0);

    _defineProperty(this, "spellMod", void 0);

    _defineProperty(this, "miscMod", void 0);

    _defineProperty(this, "helper_ClassDef", void 0);

    this.attackType = attackType;
    this.helper_ClassDef = helper_ClassDef;
    this.bab = this.getBAB(level);
    this.abilityMod = abilityMod;
    this.sizeMod = 0; //this.sizeMod = this.calcSizeMod(size); //BROKEN, CAN'T FIGURE OUT

    this.spellMod = spellMod;
    this.miscMod = misc;
    this.calculateTotalAttack();
  }

  _createClass(VM_AttackScore, [{
    key: "getBAB",
    value: function getBAB(level) {
      console.log("ATTACK_VM: getBAB"); //console.log(this.helper_ClassDef);

      var levelBab = this.helper_ClassDef.getBAB(level);
      console.log("GETBAB: ", levelBab['1st']);
      return levelBab['1st'];
    }
  }, {
    key: "calculateTotalAttack",
    value: function calculateTotalAttack() {
      console.log("BAB:", this.bab);
      console.log("ABI:", this.abilityMod);
      console.log("SIZE:", this.sizeMod);
      console.log("SPEL:", this.spellMod);
      console.log("MISC:", this.miscMod);
      this.totalAttack = +this.bab + +this.abilityMod + +this.sizeMod + +this.spellMod + +this.miscMod;
      console.log("TOTAL:", this.totalAttack);
    }
  }, {
    key: "calcSizeMod",
    value: function calcSizeMod(size) {
      helper_sizeDef = new Helper_SizeDef(size);
      return helper_sizeDef.getAttackAC(size);
    }
  }]);

  return VM_AttackScore;
}();
/*
export default class VM_AttackScoreContainer {
  melee: VM_AttackScore;
  range: VM_AttackScore;

  constructor(melee: VM_AttackScore, range: VM_AttackScore){
    this.melee = melee;
    this.range = range;
  }

}
*/




/***/ }),

/***/ "./viewModels/VM_CharInfo.ts":
/*!***********************************!*\
  !*** ./viewModels/VM_CharInfo.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_CharInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VM_CharInfo = function VM_CharInfo(charName, race, charClass, level, size) {
  _classCallCheck(this, VM_CharInfo);

  _defineProperty(this, "charName", void 0);

  _defineProperty(this, "race", void 0);

  _defineProperty(this, "charClass", void 0);

  _defineProperty(this, "level", void 0);

  _defineProperty(this, "size", void 0);

  this.charName = charName;
  this.race = race;
  this.charClass = charClass;
  this.level = level;
  this.size = size;
};



/***/ }),

/***/ "./viewModels/VM_InitiativeScore.ts":
/*!******************************************!*\
  !*** ./viewModels/VM_InitiativeScore.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_InitiativeScore; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VM_InitiativeScore = /*#__PURE__*/function () {
  //not sure how to do this;
  //featList: string[]; //make an object of vmFeat?
  function VM_InitiativeScore() {
    _classCallCheck(this, VM_InitiativeScore);

    _defineProperty(this, "totalScore", void 0);

    _defineProperty(this, "dexMod", void 0);

    _defineProperty(this, "featMod", void 0);

    _defineProperty(this, "spellMod", void 0);

    _defineProperty(this, "miscMod", void 0);

    this.totalScore = 0;
    this.dexMod = 0;
    this.featMod = 0;
    this.spellMod = 0;
    this.miscMod = 0;
    this.calcTotalScore();
  }

  _createClass(VM_InitiativeScore, [{
    key: "calcTotalScore",
    value: function calcTotalScore() {
      this.totalScore = +this.dexMod + +this.featMod + +this.spellMod + +this.miscMod;
    }
  }, {
    key: "setSubScore",
    value: function setSubScore(scoreName, value) {
      //console.log("I've been called:", scoreName);
      //console.log(scoreName, value);
      //console.log(scoreName);
      //console.log(value);
      this[scoreName] = value; //console.log(this.[scoreName]);

      this.calcTotalScore(); //console.log("NEW TOTAL SAVE SCORE: ", this.totalScore);
    }
  }]);

  return VM_InitiativeScore;
}();



/***/ }),

/***/ "./viewModels/VM_SaveingThrowScore.ts":
/*!********************************************!*\
  !*** ./viewModels/VM_SaveingThrowScore.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_SavingThrowScore; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VM_SavingThrowScore = /*#__PURE__*/function () {
  //multiple spell mods?
  function VM_SavingThrowScore(saveType, abilityMod) {
    _classCallCheck(this, VM_SavingThrowScore);

    _defineProperty(this, "saveType", void 0);

    _defineProperty(this, "totalScore", void 0);

    _defineProperty(this, "baseScore", void 0);

    _defineProperty(this, "abilityMod", void 0);

    _defineProperty(this, "raceMod", void 0);

    _defineProperty(this, "miscMod", void 0);

    _defineProperty(this, "spellMod", void 0);

    console.log(abilityMod);
    this.saveType = saveType;
    this.totalScore = -99;
    this.baseScore = 2;
    this.abilityMod = abilityMod;
    this.raceMod = 0; //NOT ABILITY RACE MOD NEED HELPER

    this.spellMod = 0;
    this.miscMod = 0;
    this.calcTotalScore();
  }

  _createClass(VM_SavingThrowScore, [{
    key: "setSubScore",
    value: function setSubScore(scoreName, value) {
      //console.log("I've been called:", scoreName);
      //console.log(scoreName, value);
      //console.log(scoreName);
      //console.log(value);
      this[scoreName] = value; //console.log(this.[scoreName]);

      this.calcTotalScore(); //console.log("NEW TOTAL SAVE SCORE: ", this.totalScore);
    }
  }, {
    key: "calcTotalScore",
    value: function calcTotalScore() {
      this.totalScore = +this.baseScore + +this.abilityMod + +this.raceMod + +this.spellMod + +this.miscMod;
    }
  }]);

  return VM_SavingThrowScore;
}();



/***/ }),

/***/ "./viewModels/VM_SavingThrowScoreContainer.ts":
/*!****************************************************!*\
  !*** ./viewModels/VM_SavingThrowScoreContainer.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_SavingThrowScoreContainer; });
/* harmony import */ var _helpers_Helper_SavingThrowModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Helper_SavingThrowModifier */ "./viewModels/helpers/Helper_SavingThrowModifier.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var VM_SavingThrowScoreContainer = /*#__PURE__*/function () {
  function VM_SavingThrowScoreContainer(fort, ref, will, race, _class) {
    _classCallCheck(this, VM_SavingThrowScoreContainer);

    _defineProperty(this, "fortSave", void 0);

    _defineProperty(this, "refSave", void 0);

    _defineProperty(this, "willSave", void 0);

    _defineProperty(this, "helper", void 0);

    this.fortSave = fort;
    this.refSave = ref;
    this.willSave = will;
    this.helper = new _helpers_Helper_SavingThrowModifier__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(VM_SavingThrowScoreContainer, [{
    key: "setRacialBonus",
    value: function setRacialBonus(race) {
      this.fortSave = this.helper.getRacialBonus(race, this.fortSave);
      this.refSave = this.helper.getRacialBonus(race, this.refSave);
      this.willSave = this.helper.getRacialBonus(race, this.willSave);
    }
  }, {
    key: "setBaseScore",
    value: function setBaseScore(myClass, level) {
      this.fortSave = this.helper.getBaseScores(myClass, level, this.fortSave);
      this.refSave = this.helper.getBaseScores(myClass, level, this.refSave);
      this.willSave = this.helper.getBaseScores(myClass, level, this.willSave);
      console.log(this.fortSave);
    }
  }, {
    key: "setSubScore",
    value: function setSubScore(saveType, subScoreType, scoreValue) {
      //console.log("SaveType: VM_Conatiner: ", saveType);
      this[saveType].setSubScore(subScoreType, scoreValue);
    }
  }, {
    key: "setAbilitySubScore",
    value: function setAbilitySubScore(abilityName, subScoreName, score) {
      this[abilityName].setSubScore(subScoreName, score);
    }
  }, {
    key: "updateTotalScores",
    value: function updateTotalScores() {
      this.fortSave.calcTotalScore();
      this.refSave.calcTotalScore();
      this.willSave.calcTotalScore();
      console.log("FORT TOTAL: ", this.fortSave.totalScore);
    }
  }]);

  return VM_SavingThrowScoreContainer;
}();
/*
setRaceBonus(race: string){
  this.fortScore = this.helper.raceAbilityBonus("str", this.strScore, race);
  this.refScore = this.helper.raceAbilityBonus("dex", this.dexScore, race);
  this.willScore = this.helper.raceAbilityBonus("con", this.conScore, race);
  this.intScore = this.helper.raceAbilityBonus("int", this.intScore, race);
  this.wisScore = this.helper.raceAbilityBonus("wis", this.wisScore, race);
  this.chaScore = this.helper.raceAbilityBonus("cha", this.chaScore, race);
}
*/




/***/ }),

/***/ "./viewModels/VM_Skill.ts":
/*!********************************!*\
  !*** ./viewModels/VM_Skill.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_Skill; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VM_Skill = /*#__PURE__*/function () {
  function VM_Skill(name, abilityType, abilityMod, rank, feats, misc, synergy, untrained, classSkill) {
    _classCallCheck(this, VM_Skill);

    _defineProperty(this, "skillName", void 0);

    _defineProperty(this, "skillTotal", void 0);

    _defineProperty(this, "abilityType", void 0);

    _defineProperty(this, "abilityMod", void 0);

    _defineProperty(this, "rank", void 0);

    _defineProperty(this, "feats", void 0);

    _defineProperty(this, "misc", void 0);

    _defineProperty(this, "synergy", void 0);

    _defineProperty(this, "cost", void 0);

    _defineProperty(this, "untrained", void 0);

    _defineProperty(this, "classSkill", void 0);

    this.skillName = name;
    this.abilityType = abilityType;
    this.abilityMod = abilityMod;
    this.rank = rank;
    this.feats = feats;
    this.misc = misc;
    this.synergy = synergy;
    this.untrained = untrained;
    this.classSkill = classSkill;
    this.calcSkillTotal();
    this.calcCost();
  }

  _createClass(VM_Skill, [{
    key: "calcSkillTotal",
    value: function calcSkillTotal() {
      if (this.untrained == false && this.rank == 0) {
        this.skillTotal = 0;
      } else {
        this.skillTotal = +this.rank + +this.abilityMod + +this.feats + +this.misc + this.synergy;
      }
    }
  }, {
    key: "calcCost",
    value: function calcCost() {
      if (this.classSkill == false) {
        this.cost = this.rank * 2;
      } else {
        this.cost = this.rank;
      }
    }
  }]);

  return VM_Skill;
}();



/***/ }),

/***/ "./viewModels/VM_SkillsContainer.ts":
/*!******************************************!*\
  !*** ./viewModels/VM_SkillsContainer.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VM_SkillContainer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VM_SkillContainer = /*#__PURE__*/function () {
  function VM_SkillContainer() {
    _classCallCheck(this, VM_SkillContainer);

    _defineProperty(this, "skillArray", void 0);

    this.skillArray = []; //this.skillArray.push(new VM_Skill());
    //console.log("TEST: " ,this.skillArray);
  }

  _createClass(VM_SkillContainer, [{
    key: "addSkill",
    value: function addSkill(skillVM) {
      this.skillArray.push(skillVM);
    }
  }, {
    key: "getSkillArray",
    value: function getSkillArray() {
      return this.skillArray;
    }
  }]);

  return VM_SkillContainer;
}();



/***/ }),

/***/ "./viewModels/helpers/Helper_AbilityModifier.ts":
/*!******************************************************!*\
  !*** ./viewModels/helpers/Helper_AbilityModifier.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helper_AbilityModifier; });
/* harmony import */ var _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/raceDefinitions/elf.json */ "./core/raceDefinitions/elf.json");
var _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/raceDefinitions/elf.json */ "./core/raceDefinitions/elf.json", 1);
/* harmony import */ var _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/raceDefinitions/human.json */ "./core/raceDefinitions/human.json");
var _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/raceDefinitions/human.json */ "./core/raceDefinitions/human.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Helper_AbilityModifier = /*#__PURE__*/function () {
  function Helper_AbilityModifier() {//this.race = race;
    //this.findRace(race);
    //ar elfRace = (<any>ElfRace);
    //console.log(elfRace);
    //console.log(elfRace.savingThrows);
    //this.findRace("Elf");
    //this.raceAbilityBonus();

    _classCallCheck(this, Helper_AbilityModifier);

    _defineProperty(this, "raceDef", void 0);

    _defineProperty(this, "race", void 0);
  }

  _createClass(Helper_AbilityModifier, [{
    key: "raceAbilityBonus",
    value: function raceAbilityBonus(ability, vm_abilityScore, race) {
      this.findRace(race); //console.log(ability);
      //console.log(abilityScore);

      var raceDefAbilityScores = this.raceDef.abilityBonus;
      vm_abilityScore.raceScore = raceDefAbilityScores[ability];
      vm_abilityScore.setSubScore("raceScore", raceDefAbilityScores[ability]); //ability

      return vm_abilityScore;
    }
  }, {
    key: "findRace",
    value: function findRace(race) {
      switch (race) {
        case 'Elf':
          this.raceDef = _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0__;
          break;

        case 'Human':
          this.raceDef = _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1__;
          break;

        default:
          break;
      }
    }
  }]);

  return Helper_AbilityModifier;
}();



/***/ }),

/***/ "./viewModels/helpers/Helper_ClassDef.ts":
/*!***********************************************!*\
  !*** ./viewModels/helpers/Helper_ClassDef.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helper_ClassDef; });
/* harmony import */ var _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/raceDefinitions/elf.json */ "./core/raceDefinitions/elf.json");
var _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/raceDefinitions/elf.json */ "./core/raceDefinitions/elf.json", 1);
/* harmony import */ var _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/raceDefinitions/human.json */ "./core/raceDefinitions/human.json");
var _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/raceDefinitions/human.json */ "./core/raceDefinitions/human.json", 1);
/* harmony import */ var _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/classDefinitions/druid.json */ "./core/classDefinitions/druid.json");
var _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/classDefinitions/druid.json */ "./core/classDefinitions/druid.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Helper_ClassDef = /*#__PURE__*/function () {
  function Helper_ClassDef(myClass) {
    _classCallCheck(this, Helper_ClassDef);

    _defineProperty(this, "classDef", void 0);

    _defineProperty(this, "class", void 0);

    this.classDef = this.getClassDef(myClass);
    this["class"] = myClass; //console.log(this.classDef);
  }

  _createClass(Helper_ClassDef, [{
    key: "getHitDie",
    value: function getHitDie() {
      var hitDie = this.classDef.hitDie;
      return hitDie;
    }
  }, {
    key: "getAlignments",
    value: function getAlignments() {
      var alignments = this.classDef.alignments;
      return alignments;
    }
  }, {
    key: "getKnownSkills",
    value: function getKnownSkills() {
      var skills = this.classDef.knownSkills;
      return skills;
    }
  }, {
    key: "getSkillPointCalc",
    value: function getSkillPointCalc() {
      var skillPoints = this.classDef.skillPoints;
      return skills;
    }
  }, {
    key: "getweaponProf",
    value: function getweaponProf() {
      var weaponProf = this.classDef.weaponProficiency;
      return weaponProf;
    }
  }, {
    key: "getArmorProf",
    value: function getArmorProf() {
      var armorProf = this.classDef.armorProficiency;
      return armorProf;
    }
  }, {
    key: "getSpellInfo",
    value: function getSpellInfo() {
      var spellInfo = this.classDef.spellInfo;
      return spellInfo;
    }
  }, {
    key: "getSaveScores",
    value: function getSaveScores(level) {
      var levelTable = this.getLevelTable(level);
      var saves = levelTable.saves;
      return saves;
    }
  }, {
    key: "getBAB",
    value: function getBAB(level) {
      this.classDef = this.getClassDef(this["class"]);
      var levelTable = this.getLevelTable(level);
      var bab = levelTable.bab;
      return bab;
    }
  }, {
    key: "getSpellsPerDay",
    value: function getSpellsPerDay(level) {
      var levelTable = this.getLevelTable(level);
      var spellsPerDay = levelTable.spellsPerDay;
      return spellsPerDay;
    }
  }, {
    key: "getSpecialAbilities",
    value: function getSpecialAbilities(level) {
      var levelTable = this.getLevelTable(level);
      var specials = levelTable.special;
      return specials;
    }
  }, {
    key: "getLevelTable",
    value: function getLevelTable(level) {
      var levelTableSaves = this.classDef.levelTable[level - 1].level; //console.log(this.classDef);
      //console.log(this.classDef.levelTable[level-1]);

      return levelTableSaves;
    }
  }, {
    key: "getRaceDef",
    value: function getRaceDef(race) {
      switch (race) {
        case 'Elf':
          this.raceDef = _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0__;
          this.race = "Elf";
          break;

        case 'Human':
          this.raceDef = _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1__;
          this.race = "Human";
          break;

        default:
          break;
      }
    }
  }, {
    key: "getClassDef",
    value: function getClassDef(myClass) {
      var classDef;

      switch (myClass) {
        case 'Druid':
          classDef = _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2__;
          this["class"] = "Druid"; //console.log(this.classDef);

          break;

        default:
          break;
      }

      return classDef;
    }
  }]);

  return Helper_ClassDef;
}();



/***/ }),

/***/ "./viewModels/helpers/Helper_ParseSkills.ts":
/*!**************************************************!*\
  !*** ./viewModels/helpers/Helper_ParseSkills.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helper_ParseSkills; });
/* harmony import */ var _core_ruleTables_skills_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ruleTables/skills.json */ "./core/ruleTables/skills.json");
var _core_ruleTables_skills_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/ruleTables/skills.json */ "./core/ruleTables/skills.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Helper_ParseSkills = /*#__PURE__*/function () {
  function Helper_ParseSkills() {
    _classCallCheck(this, Helper_ParseSkills);

    _defineProperty(this, "skillTable", void 0);

    this.skillTable = _core_ruleTables_skills_json__WEBPACK_IMPORTED_MODULE_0__; //console.log(this.classDef);
  }

  _createClass(Helper_ParseSkills, [{
    key: "getSkillTable",
    value: function getSkillTable() {
      return this.skillTable;
    }
  }]);

  return Helper_ParseSkills;
}();



/***/ }),

/***/ "./viewModels/helpers/Helper_SavingThrowModifier.ts":
/*!**********************************************************!*\
  !*** ./viewModels/helpers/Helper_SavingThrowModifier.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helper_SavingThrowModifier; });
/* harmony import */ var _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/raceDefinitions/elf.json */ "./core/raceDefinitions/elf.json");
var _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/raceDefinitions/elf.json */ "./core/raceDefinitions/elf.json", 1);
/* harmony import */ var _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/raceDefinitions/human.json */ "./core/raceDefinitions/human.json");
var _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/raceDefinitions/human.json */ "./core/raceDefinitions/human.json", 1);
/* harmony import */ var _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/classDefinitions/druid.json */ "./core/classDefinitions/druid.json");
var _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../core/classDefinitions/druid.json */ "./core/classDefinitions/druid.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Helper_SavingThrowModifier = /*#__PURE__*/function () {
  function Helper_SavingThrowModifier(race, myClass, level) {
    _classCallCheck(this, Helper_SavingThrowModifier);

    _defineProperty(this, "raceDef", void 0);

    _defineProperty(this, "classDef", void 0);

    _defineProperty(this, "race", void 0);

    _defineProperty(this, "class", void 0);

    _defineProperty(this, "level", void 0);

    this.raceDef = this.getRaceDef(race);
    this.classDef = this.getClassDef(myClass); //this.race = race;
    //this.findRace(race);
    //ar elfRace = (<any>ElfRace);
    //console.log(elfRace);
    //console.log(elfRace.savingThrows);
    //this.findRace("Elf");
    //this.raceAbilityBonus();
  }

  _createClass(Helper_SavingThrowModifier, [{
    key: "getRacialBonus",
    value: function getRacialBonus(race, vm_SavingThrowScore) {
      //console.log("SAVING THROW TYPE: " vm_SavingThrowScore.saveType);
      this.getRaceDef(race); //console.log(race);

      var raceSavingThrow = this.raceDef.savingThrows.savingThrowBonus; //console.log(raceSavingThrow);
      //console.log(vm_SavingThrowScore.saveType);
      //console.log(raceSavingThrow.fort);

      switch (vm_SavingThrowScore.saveType) {
        case "Fort":
          vm_SavingThrowScore.setSubScore("raceMod", raceSavingThrow.fort);
          break;

        case "Ref":
          vm_SavingThrowScore.setSubScore("raceMod", raceSavingThrow.ref);
          break;

        case "Will":
          vm_SavingThrowScore.setSubScore("raceMod", raceSavingThrow.will);
          break;

        default:
          break;
      }

      return vm_SavingThrowScore;
    }
  }, {
    key: "getBaseScores",
    value: function getBaseScores(myClass, level, vm_SavingThrowScore) {
      this.getClassDef(myClass); //console.log(myClass);

      var classLevelTable = this.classDef.levelTable[level - 1].level.saves;
      console.log(classLevelTable); //var levelDef = classLevelTable.find(x => x.level.name == level);
      //console.log("TESTING LEVEL DEF: ", levelDef);
      //var levelSaves = levelDef.saves;
      //console.log(levelDef.bab);
      //vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.fort);
      //vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.ref);
      //vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.will);

      switch (vm_SavingThrowScore.saveType) {
        case "Fort":
          vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.fort);
          break;

        case "Ref":
          vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.ref);
          break;

        case "Will":
          vm_SavingThrowScore.setSubScore("baseScore", classLevelTable.will);
          break;

        default:
          break;
      } //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);


      return vm_SavingThrowScore;
    }
  }, {
    key: "getRaceDef",
    value: function getRaceDef(race) {
      switch (race) {
        case 'Elf':
          this.raceDef = _core_raceDefinitions_elf_json__WEBPACK_IMPORTED_MODULE_0__;
          this.race = "Elf";
          break;

        case 'Human':
          this.raceDef = _core_raceDefinitions_human_json__WEBPACK_IMPORTED_MODULE_1__;
          this.race = "Human";
          break;

        default:
          break;
      }
    }
  }, {
    key: "getClassDef",
    value: function getClassDef(myClass) {
      switch (myClass) {
        case 'Druid':
          this.classDef = _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2__;
          this["class"] = "Druid";
          break;

        case 'Human':
          this.raceDef = _core_classDefinitions_druid_json__WEBPACK_IMPORTED_MODULE_2__;
          this.race = "Human";
          break;

        default:
          break;
      }
    }
  }, {
    key: "getBAB",
    value: function getBAB() {
      var classLevelTable = this.classDef.levelTable[level - 1].level.bab;
      return classLevelTable;
    }
  }]);

  return Helper_SavingThrowModifier;
}();



/***/ }),

/***/ "./views/mainView/Cont_AbilityScores.tsx":
/*!***********************************************!*\
  !*** ./views/mainView/Cont_AbilityScores.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont_AbilityScores; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View_AbilityScore */ "./views/mainView/View_AbilityScore.tsx");
/* harmony import */ var _View_AbilityLabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View_AbilityLabels */ "./views/mainView/View_AbilityLabels.tsx");
/* harmony import */ var _Cont_SavingThrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cont_SavingThrows */ "./views/mainView/Cont_SavingThrows.tsx");
/* harmony import */ var _Cont_Initiative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cont_Initiative */ "./views/mainView/Cont_Initiative.tsx");
/* harmony import */ var _Cont_AttackScore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cont_AttackScore */ "./views/mainView/Cont_AttackScore.tsx");
/* harmony import */ var _skillView_Cont_SkillTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skillView/Cont_SkillTable */ "./views/skillView/Cont_SkillTable.tsx");
/* harmony import */ var _viewModels_helpers_Helper_ClassDef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../viewModels/helpers/Helper_ClassDef */ "./viewModels/helpers/Helper_ClassDef.ts");
/* harmony import */ var _viewModels_helpers_Helper_ParseSkills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../viewModels/helpers/Helper_ParseSkills */ "./viewModels/helpers/Helper_ParseSkills.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var Cont_AbilityScores = /*#__PURE__*/function (_React$Component) {
  _inherits(Cont_AbilityScores, _React$Component);

  var _super = _createSuper(Cont_AbilityScores);

  function Cont_AbilityScores(props) {
    var _this;

    _classCallCheck(this, Cont_AbilityScores);

    _this = _super.call(this, props);
    _this.state = {
      //
      //props:
      //charClass
      //charLevel
      //charRace
      //charSize
      //
      helper_ParseSkills: new _viewModels_helpers_Helper_ParseSkills__WEBPACK_IMPORTED_MODULE_8__["default"](),
      helper_ClassDef: new _viewModels_helpers_Helper_ClassDef__WEBPACK_IMPORTED_MODULE_7__["default"](_this.props.charClass),
      vm_AbilityScores: _this.props.vm_AbilityScores,
      strVM: _this.props.vm_AbilityScores.strScore,
      dexVM: _this.props.vm_AbilityScores.dexScore,
      conVM: _this.props.vm_AbilityScores.conScore,
      intVM: _this.props.vm_AbilityScores.intScore,
      wisVM: _this.props.vm_AbilityScores.wisScore,
      chaVM: _this.props.vm_AbilityScores.chaScore
    };
    _this.changeAbilityScore = _this.changeAbilityScore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cont_AbilityScores, [{
    key: "changeAbilityScore",
    value: function changeAbilityScore(evt) {
      console.log(this.state.helper_ParseSkills.getSkillTable()); //console.log(this.state.strVM);

      /*
      console.log(evt.target.id);
      console.log(evt.target.name);
      console.log(evt.target.value);
      */

      var copy;
      /*
      copy.setSubScore(evt.target.name, evt.target.value);
      this.setState({ strVM: copy});
      */

      switch (evt.target.id) {
        case "STR":
          copy = this.state.strVM;
          copy.setSubScore(evt.target.name, evt.target.value);
          this.setState({
            strVM: copy
          });
          break;

        case "DEX":
          copy = this.state.dexVM;
          copy.setSubScore(evt.target.name, evt.target.value);
          this.setState({
            dexVM: copy
          });
          break;

        case "CON":
          copy = this.state.conVM;
          copy.setSubScore(evt.target.name, evt.target.value);
          this.setState({
            conVM: copy
          });
          break;

        case "INT":
          copy = this.state.intVM;
          copy.setSubScore(evt.target.name, evt.target.value);
          this.setState({
            intVM: copy
          });
          break;

        case "WIS":
          copy = this.state.wisVM;
          copy.setSubScore(evt.target.name, evt.target.value);
          this.setState({
            wisVM: copy
          });
          break;

        case "CHA":
          copy = this.state.chaVM;
          copy.setSubScore(evt.target.name, evt.target.value);
          this.setState({
            chaVM: copy
          });
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityLabels__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
        abilityModel: this.state.strVM,
        changeAbilityScore: this.changeAbilityScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
        abilityModel: this.state.dexVM,
        changeAbilityScore: this.changeAbilityScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
        abilityModel: this.state.conVM,
        changeAbilityScore: this.changeAbilityScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
        abilityModel: this.state.intVM,
        changeAbilityScore: this.changeAbilityScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
        abilityModel: this.state.wisVM,
        changeAbilityScore: this.changeAbilityScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AbilityScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
        abilityModel: this.state.chaVM,
        changeAbilityScore: this.changeAbilityScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Cont_SavingThrows__WEBPACK_IMPORTED_MODULE_3__["default"], {
        conVM: this.state.conVM,
        dexVM: this.state.dexVM,
        wisVM: this.state.wisVM,
        "class": this.props.charClass,
        race: this.props.charRace,
        level: this.props.charLevel
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Cont_Initiative__WEBPACK_IMPORTED_MODULE_4__["default"], {
        dexVM: this.state.dexVM
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Cont_AttackScore__WEBPACK_IMPORTED_MODULE_5__["default"], {
        strVM: this.state.strVM,
        dexVM: this.state.dexVM,
        charLevel: this.props.charLevel,
        helper_ClassDef: this.state.helper_ClassDef,
        charSize: this.props.charSize
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_skillView_Cont_SkillTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        vm_AbilityScores: this.props.vm_AbilityScores,
        helper_ClassDef: this.state.helper_ClassDef
      }));
    }
  }]);

  return Cont_AbilityScores;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/*
<View_AbilityScore abilityModel={this.state.dexVM}/>
<View_AbilityScore abilityModel={this.state.conVM}/>
<View_AbilityScore abilityModel={this.state.intVM}/>
<View_AbilityScore abilityModel={this.state.wisVM}/>
<View_AbilityScore abilityModel={this.state.chaVM}/>
*/




/***/ }),

/***/ "./views/mainView/Cont_AttackScore.tsx":
/*!*********************************************!*\
  !*** ./views/mainView/Cont_AttackScore.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont_AttackScore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewModels_VM_AttackScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../viewModels/VM_AttackScore */ "./viewModels/VM_AttackScore.ts");
/* harmony import */ var _View_AttackScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View_AttackScore */ "./views/mainView/View_AttackScore.tsx");
/* harmony import */ var _View_AttackScoreLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View_AttackScoreLabel */ "./views/mainView/View_AttackScoreLabel.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Cont_AttackScore = /*#__PURE__*/function (_React$Component) {
  _inherits(Cont_AttackScore, _React$Component);

  var _super = _createSuper(Cont_AttackScore);

  function Cont_AttackScore(props) {
    var _this;

    _classCallCheck(this, Cont_AttackScore);

    _this = _super.call(this, props);
    _this.state = {
      //props:
      //BAB, strVM, dexVM, size
      //charLevel
      //charRace
      //charSize
      //helper_ClassDef
      vm_meleeAttack: new _viewModels_VM_AttackScore__WEBPACK_IMPORTED_MODULE_1__["default"]("Melee", _this.props.helper_ClassDef, _this.props.strVM.tempMod, _this.props.charSize, 0, 0, _this.props.charLevel),
      vm_rangeAttack: new _viewModels_VM_AttackScore__WEBPACK_IMPORTED_MODULE_1__["default"]("Range", _this.props.helper_ClassDef, _this.props.dexVM.tempMod, _this.props.charSize, 0, 0, _this.props.charLevel)
      /*
      vm_AttackScoreContainer: new VM_AttackScoreContainer(
        new VM_AttackScore("Melee", 0, this.props.helper_ClassDef, this.props.strVM.tempMod,
          this.props.charSize, 0, 0, this.props.charLevel),
      )
      */

    };
    _this.changeAttackScore = _this.changeAttackScore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cont_AttackScore, [{
    key: "changeAttackScore",
    value: function changeAttackScore(evt) {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "''", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AttackScoreLabel__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AttackScore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attackVM: this.state.vm_meleeAttack,
        abilityMod: this.props.strVM.tempMod,
        changeValue: this.changeAttackScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_AttackScore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attackVM: this.state.vm_rangeAttack,
        abilityMod: this.props.dexVM.tempMod,
        changeValue: this.changeAttackScore
      }));
    }
  }]);

  return Cont_AttackScore;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/Cont_CharInfo.tsx":
/*!******************************************!*\
  !*** ./views/mainView/Cont_CharInfo.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont_CharInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View_CharInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View_CharInfo */ "./views/mainView/View_CharInfo.tsx");
/* harmony import */ var _Cont_AbilityScores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cont_AbilityScores */ "./views/mainView/Cont_AbilityScores.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Cont_CharInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(Cont_CharInfo, _React$Component);

  var _super = _createSuper(Cont_CharInfo);

  /*
  state = {
        charName: this.props.viewModel.charName,
        charClass: this.props.viewModel.charClass,
        level: this.props.viewModel.level,
        race: this.props.viewModel.race,
        size: this.props.viewModel.size
  }
  */
  function Cont_CharInfo(props) {
    var _this;

    _classCallCheck(this, Cont_CharInfo);

    _this = _super.call(this, props);
    _this.state = {
      charName: _this.props.vm_CharInfo.charName,
      charClass: _this.props.vm_CharInfo.charClass,
      level: _this.props.vm_CharInfo.level,
      race: _this.props.vm_CharInfo.race,
      size: _this.props.vm_CharInfo.size //viewModel: this.props.viewModel

    };
    _this.changeRace = _this.changeRace.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cont_CharInfo, [{
    key: "changeName",
    value: function changeName(name) {
      this.setState({
        charName: name
      });
    }
  }, {
    key: "changeRace",
    value: function changeRace() {
      this.setState({
        charName: "TESTING FUNCTION"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_CharInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
        charName: this.state.charName,
        charClass: this.state.charClass,
        charLevel: this.state.level,
        charRace: this.state.race,
        charSize: this.state.size,
        changeRace: this.changeRace
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Cont_AbilityScores__WEBPACK_IMPORTED_MODULE_2__["default"], {
        vm_AbilityScores: this.props.vm_AbilityScores,
        charClass: this.state.charClass,
        charLevel: this.state.level,
        charRace: this.state.race,
        charSize: this.state.size
      }));
    }
  }]);

  return Cont_CharInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/Cont_Initiative.tsx":
/*!********************************************!*\
  !*** ./views/mainView/Cont_Initiative.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont_Initiative; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View_Initiative__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View_Initiative */ "./views/mainView/View_Initiative.tsx");
/* harmony import */ var _View_InitiativeLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View_InitiativeLabel */ "./views/mainView/View_InitiativeLabel.tsx");
/* harmony import */ var _viewModels_VM_InitiativeScore_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../viewModels/VM_InitiativeScore.ts */ "./viewModels/VM_InitiativeScore.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Cont_Initiative = /*#__PURE__*/function (_React$Component) {
  _inherits(Cont_Initiative, _React$Component);

  var _super = _createSuper(Cont_Initiative);

  //Props
  //dexVM
  function Cont_Initiative(props) {
    var _this;

    _classCallCheck(this, Cont_Initiative);

    _this = _super.call(this, props);
    _this.state = {
      vm_initiative: new _viewModels_VM_InitiativeScore_ts__WEBPACK_IMPORTED_MODULE_3__["default"]()
    };
    _this.changingScoreValue = _this.changingScoreValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cont_Initiative, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      var copy = this.state.vm_initiative;
      copy.setSubScore("dexMod", this.props.dexVM.tempMod);
      this.setState({
        vm_initiative: copy
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //set up vm_initiative
      var copy = this.state.vm_initiative;
      copy.setSubScore("dexMod", this.props.dexVM.tempMod);
      this.setState({
        vm_initiative: copy
      });
    }
  }, {
    key: "changingScoreValue",
    value: function changingScoreValue(evt) {
      var copy = this.state.vm_initiative;
      copy.setSubScore(evt.target.name, evt.target.value);
      this.setState({
        vm_initiative: copy
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "''", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_InitiativeLabel__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_Initiative__WEBPACK_IMPORTED_MODULE_1__["default"], {
        vm_initiative: this.state.vm_initiative,
        changingScoreValue: this.changingScoreValue
      }))));
    }
  }]);

  return Cont_Initiative;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/Cont_SavingThrows.tsx":
/*!**********************************************!*\
  !*** ./views/mainView/Cont_SavingThrows.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont_SavingThrows; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewModels_VM_SaveingThrowScore_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../viewModels/VM_SaveingThrowScore.ts */ "./viewModels/VM_SaveingThrowScore.ts");
/* harmony import */ var _viewModels_VM_SavingThrowScoreContainer_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../viewModels/VM_SavingThrowScoreContainer.ts */ "./viewModels/VM_SavingThrowScoreContainer.ts");
/* harmony import */ var _View_SavingThrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View_SavingThrow */ "./views/mainView/View_SavingThrow.tsx");
/* harmony import */ var _View_SavingThrowLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View_SavingThrowLabels */ "./views/mainView/View_SavingThrowLabels.tsx");
/* harmony import */ var _viewModels_helpers_Helper_AbilityModifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../viewModels/helpers/Helper_AbilityModifier */ "./viewModels/helpers/Helper_AbilityModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Cont_SavingThrows = /*#__PURE__*/function (_React$Component) {
  _inherits(Cont_SavingThrows, _React$Component);

  var _super = _createSuper(Cont_SavingThrows);

  function Cont_SavingThrows(props) {
    var _this;

    _classCallCheck(this, Cont_SavingThrows);

    _this = _super.call(this, props);
    _this.state = {
      //
      //props:
      //conVM, dexVM, wisVM, race, class, level
      //
      //vm_FortSave: new VM_SavingThrowScore("Fort", this.props.conVM.tempMod),
      //vm_RefSave: new VM_SavingThrowScore("Ref", this.props.dexVM.tempMod),
      //vm_WillSave: new VM_SavingThrowScore("Will", this.props.wisVM.tempMod),
      helper: new _viewModels_helpers_Helper_AbilityModifier__WEBPACK_IMPORTED_MODULE_5__["default"](),
      vm_container: new _viewModels_VM_SavingThrowScoreContainer_ts__WEBPACK_IMPORTED_MODULE_2__["default"](new _viewModels_VM_SaveingThrowScore_ts__WEBPACK_IMPORTED_MODULE_1__["default"]("Fort", _this.props.conVM.tempMod), new _viewModels_VM_SaveingThrowScore_ts__WEBPACK_IMPORTED_MODULE_1__["default"]("Ref", _this.props.dexVM.tempMod), new _viewModels_VM_SaveingThrowScore_ts__WEBPACK_IMPORTED_MODULE_1__["default"]("Will", _this.props.wisVM.tempMod)) //vm_AbilityScores: this.props.vm_AbilityScores,
      //dexScore: this.props.vm_AbilityScores.dexScore,

    };
    _this.changeSavingThrowValue = _this.changeSavingThrowValue.bind(_assertThisInitialized(_this));
    _this.setRacialBonus = _this.setRacialBonus.bind(_assertThisInitialized(_this));
    _this.setClassBaseScore = _this.setClassBaseScore.bind(_assertThisInitialized(_this));
    _this.updateAbilityMod = _this.updateAbilityMod.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cont_SavingThrows, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.updateAbilityMod();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setRacialBonus(this.props.race);
      this.setClassBaseScore(this.props["class"], this.props.level);
    }
  }, {
    key: "setRacialBonus",
    value: function setRacialBonus(race) {
      var copy = this.state.vm_container;
      copy.setRacialBonus(race); //console.log(copy);

      this.setState({
        vm_container: copy
      });
    }
  }, {
    key: "setClassBaseScore",
    value: function setClassBaseScore(myClass, level) {
      var copy = this.state.vm_container;
      copy.setBaseScore(myClass, level);
      this.setState({
        vm_container: copy
      });
    }
  }, {
    key: "updateAbilityMod",
    value: function updateAbilityMod() {
      this.state.vm_container.setSubScore("fortSave", "abilityMod", this.props.conVM.tempMod);
      this.state.vm_container.setSubScore("refSave", "abilityMod", this.props.dexVM.tempMod);
      this.state.vm_container.setSubScore("willSave", "abilityMod", this.props.wisVM.tempMod);
      var copy = this.state.vm_container;
      this.setState({
        vm_container: copy
      });
    }
  }, {
    key: "changeSavingThrowValue",
    value: function changeSavingThrowValue(evt) {
      //this.setRacialBonus("Human");
      var copy = this.state.vm_container;
      /*
      console.log(evt.target.id);
      console.log(evt.target.name);
      console.log(evt.target.value);
      */

      switch (evt.target.id) {
        case "Fort":
          //copy = this.state.vm_container.fortSave;
          copy.setSubScore("fortSave", evt.target.name, evt.target.value);
          this.setState({
            vm_container: copy
          });
          break;

        case "Ref":
          //copy = this.state.vm_container.refSave;
          copy.setSubScore("refSave", evt.target.name, evt.target.value);
          this.setState({
            vm_container: copy
          });
          break;

        case "Will":
          //copy = this.state.vm_container.willSave;
          copy.setSubScore("willSave", evt.target.name, evt.target.value);
          this.setState({
            vm_container: copy
          });
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "break", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_SavingThrowLabels__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_SavingThrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        saveVM: this.state.vm_container.fortSave,
        abilityVM: this.props.conVM,
        changeSavingThrowValue: this.changeSavingThrowValue
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_SavingThrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        saveVM: this.state.vm_container.refSave,
        abilityVM: this.props.dexVM,
        changeSavingThrowValue: this.changeSavingThrowValue
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View_SavingThrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        saveVM: this.state.vm_container.willSave,
        abilityVM: this.props.wisVM,
        changeSavingThrowValue: this.changeSavingThrowValue
      }))));
    }
  }]);

  return Cont_SavingThrows;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_AbilityLabels.tsx":
/*!***********************************************!*\
  !*** ./views/mainView/View_AbilityLabels.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_AbilityLabels; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_AbilityLabels = /*#__PURE__*/function (_React$Component) {
  _inherits(View_AbilityLabels, _React$Component);

  var _super = _createSuper(View_AbilityLabels);

  function View_AbilityLabels() {
    _classCallCheck(this, View_AbilityLabels);

    return _super.apply(this, arguments);
  }

  _createClass(View_AbilityLabels, [{
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: "Abilities"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Base"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Race"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "LevelUp"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "PermMod"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Items"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Spells"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Misc"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "TempMod"
      })));
    }
  }]);

  return View_AbilityLabels;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_AbilityScore.tsx":
/*!**********************************************!*\
  !*** ./views/mainView/View_AbilityScore.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_AbilityScore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var styles = {
  input: {
    width: '12px'
  },
  button: {
    margin: '12px 0'
  },
  buttonSmall: {
    width: 'auto'
  }
};

var View_AbilityScore = /*#__PURE__*/function (_React$Component) {
  _inherits(View_AbilityScore, _React$Component);

  var _super = _createSuper(View_AbilityScore);

  function View_AbilityScore() {
    _classCallCheck(this, View_AbilityScore);

    return _super.apply(this, arguments);
  }

  _createClass(View_AbilityScore, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          abilityModel = _this$props.abilityModel,
          changeAbilityScore = _this$props.changeAbilityScore;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: this.props.abilityModel.abilityLabel
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.totalScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "baseScore",
        id: this.props.abilityModel.abilityLabel,
        onChange: changeAbilityScore,
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.baseScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.raceScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "levelUpScore",
        id: this.props.abilityModel.abilityLabel,
        onChange: changeAbilityScore,
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.levelUpScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.permMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.itemScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "spellScore",
        id: this.props.abilityModel.abilityLabel,
        onChange: changeAbilityScore,
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.spellScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "miscScore",
        id: this.props.abilityModel.abilityLabel,
        onChange: changeAbilityScore,
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.miscScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityModel.tempMod
      })));
    }
  }]);

  return View_AbilityScore;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_AttackScore.tsx":
/*!*********************************************!*\
  !*** ./views/mainView/View_AttackScore.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_AttackScore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_AttackScore = /*#__PURE__*/function (_React$Component) {
  _inherits(View_AttackScore, _React$Component);

  var _super = _createSuper(View_AttackScore);

  function View_AttackScore() {
    _classCallCheck(this, View_AttackScore);

    return _super.apply(this, arguments);
  }

  _createClass(View_AttackScore, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attackVM = _this$props.attackVM,
          abilityMod = _this$props.abilityMod,
          changeValue = _this$props.changeValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: this.props.attackVM.attackType
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.attackVM.totalAttack
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "baseScore",
        style: {
          width: "60px"
        },
        value: this.props.attackVM.bab
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "raceMod",
        style: {
          width: "60px"
        },
        value: this.props.attackVM.sizeMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "spellMod",
        style: {
          width: "60px"
        },
        id: this.props.attackVM.attackType,
        onChange: changeValue,
        value: this.props.attackVM.spellMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "miscMod",
        style: {
          width: "60px"
        },
        id: this.props.attackVM.attackType,
        onChange: changeValue,
        value: this.props.attackVM.miscMod
      })));
    }
  }]);

  return View_AttackScore;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_AttackScoreLabel.tsx":
/*!**************************************************!*\
  !*** ./views/mainView/View_AttackScoreLabel.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_AttackScoreLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_AttackScoreLabel = /*#__PURE__*/function (_React$Component) {
  _inherits(View_AttackScoreLabel, _React$Component);

  var _super = _createSuper(View_AttackScoreLabel);

  function View_AttackScoreLabel() {
    _classCallCheck(this, View_AttackScoreLabel);

    return _super.apply(this, arguments);
  }

  _createClass(View_AttackScoreLabel, [{
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: "Attack"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "baseScore",
        style: {
          width: "60px"
        },
        value: "BAB"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Abi Mod"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "raceMod",
        style: {
          width: "60px"
        },
        value: "Size"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "spellMod",
        style: {
          width: "60px"
        },
        value: "Spell"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "miscMod",
        style: {
          width: "60px"
        },
        value: "Misc"
      })));
    }
  }]);

  return View_AttackScoreLabel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_CharInfo.tsx":
/*!******************************************!*\
  !*** ./views/mainView/View_CharInfo.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_CharInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_CharInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(View_CharInfo, _React$Component);

  var _super = _createSuper(View_CharInfo);

  function View_CharInfo() {
    _classCallCheck(this, View_CharInfo);

    return _super.apply(this, arguments);
  }

  _createClass(View_CharInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          charName = _this$props.charName,
          charClass = _this$props.charClass,
          charLevel = _this$props.charLevel,
          charRace = _this$props.charRace,
          charSize = _this$props.charSize,
          changeRace = _this$props.changeRace;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "CHAR VIEW"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Player:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "playerName",
        value: charName,
        onChange: changeRace
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Race:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Human"
      }, "Human"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Dwarve"
      }, "Dwarve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Elf"
      }, "Elf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Gnome"
      }, "Gnome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Half-Elf"
      }, "Half-Elf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Half-Orc"
      }, "Half-Orc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        value: "Halfling"
      }, "Halfling"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Class:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "playerName",
        value: this.props.charClass
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Level:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "campaignName",
        value: this.props.charLevel
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Size:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "characterName",
        value: this.props.charSize
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null));
    }
  }]);

  return View_CharInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_Initiative.tsx":
/*!********************************************!*\
  !*** ./views/mainView/View_Initiative.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_Initiative; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_Initiative = /*#__PURE__*/function (_React$Component) {
  _inherits(View_Initiative, _React$Component);

  var _super = _createSuper(View_Initiative);

  function View_Initiative() {
    _classCallCheck(this, View_Initiative);

    return _super.apply(this, arguments);
  }

  _createClass(View_Initiative, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vm_initiative = _this$props.vm_initiative,
          changingScoreValue = _this$props.changingScoreValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: "Initiative: "
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.vm_initiative.totalScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.vm_initiative.dexMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.vm_initiative.featMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "spellMod",
        style: {
          width: "60px"
        },
        onChange: changingScoreValue,
        value: this.props.vm_initiative.spellMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "miscMod",
        style: {
          width: "60px"
        },
        onChange: changingScoreValue,
        value: this.props.vm_initiative.miscMod
      })));
    }
  }]);

  return View_Initiative;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_InitiativeLabel.tsx":
/*!*************************************************!*\
  !*** ./views/mainView/View_InitiativeLabel.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_InitiativeLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_InitiativeLabel = /*#__PURE__*/function (_React$Component) {
  _inherits(View_InitiativeLabel, _React$Component);

  var _super = _createSuper(View_InitiativeLabel);

  function View_InitiativeLabel() {
    _classCallCheck(this, View_InitiativeLabel);

    return _super.apply(this, arguments);
  }

  _createClass(View_InitiativeLabel, [{
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "baseScore",
        style: {
          width: "60px"
        },
        value: "Dex"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Feat"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "raceMod",
        style: {
          width: "60px"
        },
        value: "Spells"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "spellMod",
        style: {
          width: "60px"
        },
        value: "Misc"
      })));
    }
  }]);

  return View_InitiativeLabel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_SavingThrow.tsx":
/*!*********************************************!*\
  !*** ./views/mainView/View_SavingThrow.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_SavingThrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_SavingThrow = /*#__PURE__*/function (_React$Component) {
  _inherits(View_SavingThrow, _React$Component);

  var _super = _createSuper(View_SavingThrow);

  function View_SavingThrow() {
    _classCallCheck(this, View_SavingThrow);

    return _super.apply(this, arguments);
  }

  _createClass(View_SavingThrow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          saveVM = _this$props.saveVM,
          abilityVM = _this$props.abilityVM,
          changeSavingThrowValue = _this$props.changeSavingThrowValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: this.props.saveVM.saveType
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.saveVM.totalScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "baseScore",
        style: {
          width: "60px"
        },
        value: this.props.saveVM.baseScore
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: this.props.abilityVM.tempMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "raceMod",
        style: {
          width: "60px"
        },
        value: this.props.saveVM.raceMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "spellMod",
        style: {
          width: "60px"
        },
        id: this.props.saveVM.saveType,
        onChange: changeSavingThrowValue,
        value: this.props.saveVM.spellMod
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "number",
        className: "NameInputs",
        name: "miscMod",
        style: {
          width: "60px"
        },
        id: this.props.saveVM.saveType,
        onChange: changeSavingThrowValue,
        value: this.props.saveVM.miscMod
      })));
    }
  }]);

  return View_SavingThrow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/mainView/View_SavingThrowLabels.tsx":
/*!***************************************************!*\
  !*** ./views/mainView/View_SavingThrowLabels.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View_SavingThrowLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View_SavingThrowLabel = /*#__PURE__*/function (_React$Component) {
  _inherits(View_SavingThrowLabel, _React$Component);

  var _super = _createSuper(View_SavingThrowLabel);

  function View_SavingThrowLabel() {
    _classCallCheck(this, View_SavingThrowLabel);

    return _super.apply(this, arguments);
  }

  _createClass(View_SavingThrowLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          saveVM = _this$props.saveVM,
          abilityVM = _this$props.abilityVM,
          testChange = _this$props.testChange;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "",
        name: "",
        style: {
          width: "75px"
        },
        value: "Saves"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "baseScore",
        style: {
          width: "60px"
        },
        value: "Base"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Abi Mod"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "levelUpScore",
        style: {
          width: "60px"
        },
        value: "Race"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Spell"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        type: "text",
        className: "NameInputs",
        name: "",
        style: {
          width: "60px"
        },
        value: "Misc"
      })));
    }
  }]);

  return View_SavingThrowLabel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./views/skillView/Cont_SkillTable.tsx":
/*!*********************************************!*\
  !*** ./views/skillView/Cont_SkillTable.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont_SkillTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewModels_helpers_Helper_ParseSkills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../viewModels/helpers/Helper_ParseSkills */ "./viewModels/helpers/Helper_ParseSkills.ts");
/* harmony import */ var _viewModels_VM_Skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../viewModels/VM_Skill */ "./viewModels/VM_Skill.ts");
/* harmony import */ var _viewModels_VM_SkillsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../viewModels/VM_SkillsContainer */ "./viewModels/VM_SkillsContainer.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Cont_SkillTable = /*#__PURE__*/function (_React$Component) {
  _inherits(Cont_SkillTable, _React$Component);

  var _super = _createSuper(Cont_SkillTable);

  function Cont_SkillTable(props) {
    var _this;

    _classCallCheck(this, Cont_SkillTable);

    _this = _super.call(this, props);
    _this.state = {
      //PROPS: vm_AbilityScores, helper_ClassDef, helper_RaceDef(FIX THIS)
      helper_ParseSkills: new _viewModels_helpers_Helper_ParseSkills__WEBPACK_IMPORTED_MODULE_1__["default"](),
      vm_skillContainer: new _viewModels_VM_SkillsContainer__WEBPACK_IMPORTED_MODULE_3__["default"]()
    };
    _this.selectAbilityMod = _this.selectAbilityMod.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cont_SkillTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //LOAD UP skillArray
      var parsedSkills = this.state.helper_ParseSkills.getSkillTable();
      var copyModel = this.state.vm_skillContainer;
      var abiMod;
      console.log("OnPageLoad: ", parsedSkills);
      parsedSkills.skillsList.forEach(function (element) {
        abiMod = _this2.selectAbilityMod(element.abi);
        copyModel.addSkill(new _viewModels_VM_Skill__WEBPACK_IMPORTED_MODULE_2__["default"](element.skill, element.abi, abiMod, 0, 0, 0, 0, element.ut, true));
      });
      this.setState({
        vm_skillContainer: copyModel
      });
      console.log("AFTER LOOP: ", this.state.vm_skillContainer);
    }
  }, {
    key: "selectAbilityMod",
    value: function selectAbilityMod(abiType) {
      switch (abiType) {
        case "STR":
          return this.props.vm_AbilityScores.strScore.tempMod;
          break;

        case "DEX":
          return this.props.vm_AbilityScores.dexScore.tempMod;
          break;

        case "CON":
          return this.props.vm_AbilityScores.conScore.tempMod;
          break;

        case "INT":
          return this.props.vm_AbilityScores.intScore.tempMod;
          break;

        case "WIS":
          return this.props.vm_AbilityScores.wisScore.tempMod;
          break;

        case "CHA":
          return this.props.vm_AbilityScores.chaScore.tempMod;
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null);
    }
  }]);

  return Cont_SkillTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=render-process.js.map