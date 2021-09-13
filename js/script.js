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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");



document.addEventListener('DOMContentLoaded', () => {
  console.log("main.js Connected...");
  'use strict'; // MODULE FUNCTIONS CALLING


  Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__items', '.tabheader__item', '.tabcontent');
  Object(_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__["default"])('#days', '#hours', '#minutes', '#seconds');
  Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '[data-close]', '.modal');
}); // document.addEventListener( 'DOMContentLoaded' END

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
////////    MODAL WINDOW  ////////
const modal = (openTrigSel, closeTrigSel, modalSel) => {
  console.log('modal.js Script Connedted...'); // 1) Create Data Atr:  data-modal  &  data-close (Can be through tags/selectors BUT It's Convenient)
  // 2) Form List of Vars from HTML
  // 3) addEvntListner on Open buttns
  // 4) Change Inline Styles on Classes
  // 5) addEvntListner on Close butt
  // 6) DisAble Scrolling Posibility (style.overflov = 'hidden')
  // 7) Close Mod Wind by Clicking Outside of Modal Dialog
  // 8) Close Mod Wind by Clicking Esc Btn 
  // 9) Open Mod Wind in 5 sec (Don't if it was opened previously)
  // 10) Open Mod Wind if User Scrolled Page to the End
  //// 2) Form List of Vars from HTML

  const trigsOpen = document.querySelectorAll(openTrigSel),
        trigClose = document.querySelector(closeTrigSel),
        modalWind = document.querySelector(modalSel); //console.log(trigClose);
  //// 3) addEvntListner on Open buttns

  trigsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      openModalWind();
    });
  });

  function openModalWind() {
    //// 4) Change Inline Styles on Classes
    //modalWind.style.display = 'block'; 
    modalWind.classList.add('show');
    modalWind.classList.remove('hide'); //// 6) DisAble Scrolling Posibility (style.overflov = 'hidden')

    document.body.style.overflow = 'hidden'; // Clear Interval if Modal Was Open By User

    if (modWindowTimerId) {
      clearInterval(modWindowTimerId);
    }
  }

  function closeModalWind() {
    modalWind.classList.add('hide');
    modalWind.classList.remove('show');
    document.body.style.overflow = ''; // Enable Scroll
  } // 5) addEvntListner on Close butt


  trigClose.addEventListener('click', closeModalWind); // 7) Close Mod Wind by Clicking Outside of Modal Dialog

  modalWind.addEventListener('click', e => {
    if (e.target == modalWind) {
      closeModalWind();
    }
  }); // 8) Close Mod Wind by Clicking Esc Btn  ( keydown , keypress)

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModalWind();
    }
  }); // 9) Open Mod Wind in 5 sec (Don't if it was opened previously)

  const modWindowTimerId = setTimeout(openModalWind, 10000); // !!! 10 Seconds
  // 10) Open Mod Wind if User Scrolled Page to the End

  window.addEventListener('scroll', showModalWinByScroll);

  function showModalWinByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWind();
      removeEventListener('scroll', showModalWinByScroll);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
////////    TABS  ////////
const tabs = (tabsParrentSel, tabsSelctrs, tabsContntSelctrs) => {
  console.log('tabs.js Script Connedted...');
  const tabsParrent = document.querySelector(tabsParrentSel),
        tabs = document.querySelectorAll(tabsSelctrs),
        tabsContent = document.querySelectorAll(tabsContntSelctrs); //console.log(tabItems);

  function hideAllTabs() {
    tabsContent.forEach(tab => {
      //tab.style.display = 'none'; -> Last style.css classes -> ( .show{display:block}.hide{display:none} )
      tab.classList.add('hide');
      tab.classList.remove('show');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
    console.log('hideAllTabs()...');
  }

  function showSomeTab(id) {
    tabs[id].classList.add('tabheader__item_active'); //tabsContent[id].style.display = 'block'; -> Last style.css classes -> ( .show{display:block}.hide{display:none} )

    tabsContent[id].classList.add('show');
    tabsContent[id].classList.remove('hide');
  }

  hideAllTabs();
  showSomeTab(1);
  tabsParrent.addEventListener('click', e => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((tab, idx) => {
        if (target == tab) {
          hideAllTabs();
          showSomeTab(idx);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
////////   TIMER   ////////  ( .promotion__timer | .promotion__timer .timer__block | .timer )
// 1) Function for Date Difference :  Now Date - DeadLine Date  —> getTimeRemaining()  //  !!!!!  MOST COMPLEX ONE  !!!!!
// 2) Function for Timer SetUp() :  get all Elms (days, hours, secs) and Being Set Them  —>  setClock()
// 3) Function for Timer Upd() :  Work with Timer SetUp()  —> updateClock()
const timer = (daysSel, hoursSel, minsSel, secsSel) => {
  console.log('timer.js Script Connedted...'); // 1) Function for Date Difference :  Now Date - DeadLine Date  —> getTimeRemaining()
  // const now = new Date();
  // console.log(now);

  const checkTimerStop = '2020-12-30T13:27:51.777Z';
  const deadLineStr = '2022-2-16';

  function getTimeRemaining(deadLineStr) {
    //  !!!!!  MOST COMPLEX ONE  !!!!!
    const deadLineDate = Date.parse(deadLineStr);
    const nowDate = new Date();
    const mSecs = deadLineDate - nowDate;
    const days = Math.floor(mSecs / (1000 * 60 * 60 * 24)),
          hours = Math.floor(mSecs / (1000 * 60 * 60) % 24),
          mints = Math.floor(mSecs / 1000 / 60 % 60),
          secs = Math.floor(mSecs / 1000 % 60);
    return {
      mSecs: mSecs,
      days: days,
      hours: hours,
      minutes: mints,
      seconds: secs
    };
  } // 2) Function for Timer SetUp() :  get all Elms (days, hours, secs) and Being Set Them  —>  setClock()


  function setClock() {
    const day = document.querySelector(daysSel),
          hour = document.querySelector(hoursSel),
          minute = document.querySelector(minsSel),
          second = document.querySelector(secsSel); // 3) Function for Timer Upd() :  Work with Timer SetUp()  —> updClock()

    updClock();
    const setIntervId = setInterval(updClock, 1000);

    function updClock() {
      const {
        mSecs,
        days,
        hours,
        minutes,
        seconds
      } = getTimeRemaining(deadLineStr);

      if (mSecs >= 0) {
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
        console.log('Changed...');
      } else {
        console.log('Stoped......');
        clearInterval(setIntervId);
      }
    }
  }

  setClock();
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map