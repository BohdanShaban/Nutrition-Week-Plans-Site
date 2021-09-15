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
/* harmony import */ var _modules_dynMenuCardsCreation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dynMenuCardsCreation.js */ "./src/js/modules/dynMenuCardsCreation.js");
/* harmony import */ var _modules_formsPostOnServ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formsPostOnServ.js */ "./src/js/modules/formsPostOnServ.js");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider.js */ "./src/js/modules/slider.js");






document.addEventListener('DOMContentLoaded', () => {
  console.log("main.js Connected...");
  'use strict'; // MODULE FUNCTIONS CALLING


  Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__items', '.tabheader__item', '.tabcontent');
  Object(_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__["default"])('#days', '#hours', '#minutes', '#seconds');
  Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '[data-close]', '.modal');
  Object(_modules_dynMenuCardsCreation_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_formsPostOnServ_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_slider_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
}); // document.addEventListener( 'DOMContentLoaded' END

/***/ }),

/***/ "./src/js/modules/dynMenuCardsCreation.js":
/*!************************************************!*\
  !*** ./src/js/modules/dynMenuCardsCreation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
////////    REPLACE CARDS WITH CLASSES  ( Dyn Cards Creation )   ////////
////////    REST OPER(...)  &  DEFAULT PARAMS    ////////
const dynMenuCardsCreation = () => {
  // 1) Classes Craation 
  // 2) Dynamic Elems Creation on Page
  // 3) Path Args 
  // 4) Selectors:  .menu__item ,  Parent: .menu__field .container
  // *) In future this Elms Will Be Created Dynamically from Server Datas
  // 5) MenuCard(args) -> Last arg as ...rest
  // 6) Replace the One <div> of 2
  // 7) Check if ...rest is []  &  Write the Conditions
  class MenuCard {
    constructor(imgSrc, alt, title, descript, price, parent, ...cssClasses) {
      this.imgSrc = imgSrc;
      this.alt = alt;
      this.title = title;
      this.descript = descript;
      this.price = price;
      this.parent = document.querySelector(parent);
      this.changeCourse = 27; // Cours for Currency (Later can be recieved by API)

      this.changeToUAN();
      this.cssClasesArr = cssClasses; // Can't be Checked by: rest = rest || 2  ( []->true )
    }

    changeToUAN() {
      this.price = this.price * this.changeCourse;
    }

    render() {
      const newDivEl = document.createElement('div');

      if (this.cssClasesArr.length === 0) {
        newDivEl.classList.add('menu__item');
      } else {
        this.cssClasesArr.forEach(cssClass => newDivEl.classList.add(cssClass));
      }

      newDivEl.innerHTML = `
                <img src=${this.imgSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                <div class="menu__item-descr">${this.descript}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(newDivEl);
      console.log(`Element ${this.title} Was Appended...`);
    }

  }

  new MenuCard("img/tabs/vegy.jpg", "vegy", 'Фитнес', "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!", 8, '.menu__field .container',
  /* Parent El */
  'menu__item',
  /* Additional Css classes below (with ...rest oper) */
  'big', 'red').render();
  new MenuCard("img/tabs/elite.jpg", "elite", '“Премиум”', "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!", 10, '.menu__field .container',
  /* Parent El */
  'menu__item',
  /* Additional Css classes below (with ...rest oper) */
  'big', 'red').render();
  new MenuCard("img/tabs/post.jpg", "post", 'Постное', "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.", 9, '.menu__field .container',
  /* Parent El */
  'menu__item',
  /* Additional Css classes below (with ...rest oper) */
  'big', 'red').render();
};

/* harmony default export */ __webpack_exports__["default"] = (dynMenuCardsCreation);

/***/ }),

/***/ "./src/js/modules/formsPostOnServ.js":
/*!*******************************************!*\
  !*** ./src/js/modules/formsPostOnServ.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modal.js */ "./src/js/modules/modal.js");
////////    XMLHttpRequest  Server  Comunication  (Practice 1 L53)   ////////


const formsPostOnServ = () => {
  console.log("formsPostOnServ.js Connected..."); // 1) Take All Forms
  // 2) Code post(form) Which will addEvntList to Each Form
  // 3) Inside post(form) : Create & Configure XMLHttpReq
  // 4) Ins post(form) : Create obj = FormData()
  // 5) Ins post(form) EvntList : check if Req is Success or Not & Show Created Message div
  // 6) post(form) :  Reset Form after Data was Send
  // 7) post(form) :  Clear Interval of Div Message Box
  /////  Spinner & Thanks Modal Window
  // 1) 
  // 2)  
  // 3) 

  const formsArr = document.querySelectorAll('form');
  formsArr.forEach(form => postDataWithFetch(form));
  const messages = {
    loading: 'img/form/spinner.svg',
    success: 'Is OK. We Will Contact You !',
    error: 'Is OK. We Will Contact You :)' // !!!!!!! Changed For Portfolio

  };

  function postDataWithFetch(form) {
    form.addEventListener('submit', e => {
      e.preventDefault(); // Spinner Creation

      const spinImg = document.createElement('img');
      spinImg.src = messages.loading;
      spinImg.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', spinImg); // FORM_DATA

      const formData = new FormData(form); // Convert FormData  —>  JSON

      const obj = {};
      formData.forEach(function (key, value) {
        obj[key] = value;
      });
      const jsonObj = JSON.stringify(obj); // REQUEST CREATION & CONFIGURE

      fetch('server.php', {
        // Config Obj
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: jsonObj
      }).then(data => {
        return data.text(); // !!! return
      }).then(data => {
        console.log(data);
        showThanksModalWind(messages.success);
        spinImg.remove();
      }).then(() => {
        form.reset();
      }).catch(() => {
        showThanksModalWind(messages.error);
      }); // .finally( () => {
      //     form.reset();
      // })
    });

    function showThanksModalWind(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');
      Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__["openModalWind"])('.modal');
      prevModalDialog.classList.add('hide');
      const createdModalDialog = document.createElement('div');
      createdModalDialog.classList.add('modal__dialog'); //createdModalDialog.classList.add('show');

      createdModalDialog.innerHTML = `
                <div class="modal__content">
                    <div data-close class="modal__close">×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;
      document.querySelector('.modal').append(createdModalDialog);
      setTimeout(() => {
        createdModalDialog.remove();
        prevModalDialog.classList.remove('hide');
        prevModalDialog.classList.add('show');
        Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__["closeModalWind"])('.modal');
      }, 2500);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (formsPostOnServ);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModalWind, openModalWind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModalWind", function() { return closeModalWind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModalWind", function() { return openModalWind; });
////////    MODAL WINDOW  ////////
const closeModalWind = modalSel => {
  document.querySelector(modalSel).classList.add('hide');
  document.querySelector(modalSel).classList.remove('show');
  document.body.style.overflow = ''; // Enable Scroll
};

const openModalWind = (modalSel, modWindowTimerId = null) => {
  //// 4) Change Inline Styles on Classes
  //modalWind.style.display = 'block'; 
  document.querySelector(modalSel).classList.add('show');
  document.querySelector(modalSel).classList.remove('hide'); //// 6) DisAble Scrolling Posibility (style.overflov = 'hidden')

  document.body.style.overflow = 'hidden'; // Clear Interval if Modal Was Open By User

  if (modWindowTimerId) {
    clearInterval(modWindowTimerId);
  }
};

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
        modalWind = document.querySelector(modalSel),
        // 9) Open Mod Wind in 5 sec (Don't if it was opened previously)
  modWindowTimerId = setTimeout(() => openModalWind(modalSel), 20000); // !!! 10 Seconds
  //console.log(trigClose);
  //// 3) addEvntListner on Open buttns

  trigsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      openModalWind(modalSel, modWindowTimerId);
    });
  }); //closeModalWind(modalSel);
  // 5) addEvntListner on Close butt

  trigClose.addEventListener('click', () => closeModalWind(modalSel)); // 7) Close Mod Wind by Clicking Outside of Modal Dialog

  modalWind.addEventListener('click', e => {
    if (e.target == modalWind) {
      closeModalWind(modalSel);
    }
  }); // 8) Close Mod Wind by Clicking Esc Btn  ( keydown , keypress)

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModalWind(modalSel);
    }
  }); // 10) Open Mod Wind if User Scrolled Page to the End

  window.addEventListener('scroll', showModalWinByScroll);

  function showModalWinByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWind(modalSel, modWindowTimerId);
      removeEventListener('scroll', showModalWinByScroll);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
///////////////////////    (Slider)   /////////////////////////////////////////
const slider = () => {
  console.log("slider.js Connected..."); // 1) Take All Needed Elms  ( .offer__slider, .offer__slider-counter , .offer__slide)
  // 2) Idx / Paramether for Current Slide (use & change)
  // 3) showSlide()  (consists of two) :  showCurrentSlide(Idx)  &  hideAllOtherSlides()
  // 4) showCurrentSlide(Idx) :  if(END of Slides) {BEGIN from start Again}  && vice versa (in reverse)
  // 5) divArrows.addEvntList( 'click' , showSlide() )  (if LeftArrow -> Idx--  if RightArrow Idx++)
  ////// 1) Take All Needed Elms  ( .offer__slider, .offer__slider-counter , .offer__slide)

  const nextSlideBtn = document.querySelector('.offer__slider-next');
  const prevSlideBtn = document.querySelector('.offer__slider-prev');
  const slidersArr = document.querySelectorAll('.offer__slide');
  const currentSlNum = document.querySelector('#current');
  const totalSlNum = document.querySelector('#total'); //console.log(`slidersArr.length: ${slidersArr.length}`) // -> 4
  ////// 2) Idx / Paramether for Current Slide (use & change)

  let currSldeIdx = 0;
  showSlide(currSldeIdx); ////// 5) divArrows.addEvntList( 'click' , showSlide() )  (if LeftArrow -> Idx--  if RightArrow Idx++)

  nextSlideBtn.addEventListener('click', e => {
    e.preventDefault(); //currSldeIdx ++;
    //console.log(`Next Pushed  currSldeIdx: ${currSldeIdx}`)

    showSlide(++currSldeIdx);
  });
  prevSlideBtn.addEventListener('click', e => {
    e.preventDefault(); //console.log(`Prev Pushed  currSldeIdx: ${currSldeIdx}`)
    //currSldeIdx --;

    showSlide(--currSldeIdx);
  }); // ADD 0 TO TOTAL SLIDES
  // if( slidesAmount < 10) {
  //     totalSlNum.textContent = '0' + slidesAmount;
  // } else {
  //     totalSlNum.textContent = slidesAmount ;
  // } 
  ////// 3) , 4) showSlide()  (consists of two) :  showCurrentSlide(Idx)  &  hideAllOtherSlides()

  function showSlide(slideIdx) {
    //console.log(`showSlide() slideIdx: ${slideIdx}`)
    const slidesAmount = slidersArr.length;

    if (slideIdx > slidesAmount) {
      //console.log('If: slideIdx > slidersArr.length')
      currSldeIdx = slideIdx = 1;
    }

    if (slideIdx < 1) {
      //console.log('If: slideIdx < 1')
      currSldeIdx = slideIdx = slidesAmount;
    } // ADD 0 TO CURRENT SLIDES


    if (slideIdx < 10) {
      currentSlNum.textContent = '0' + slideIdx;
    } else {
      currentSlNum.textContent = slideIdx;
    }

    let hideAllOtherSlides = () => {
      slidersArr.forEach(slide => {
        slide.classList.remove('show');
        slide.classList.add('hide');
      });
    };

    let showCurrentSlide = idx => {
      idx--; //console.log(`showSlide() -> showCurrentSlide()  idx: ${idx}`)

      slidersArr[idx].classList.remove('hide');
      slidersArr[idx].classList.add('show');
    };

    hideAllOtherSlides();
    showCurrentSlide(slideIdx);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

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
        second.innerHTML = seconds; //console.log('Changed...');
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