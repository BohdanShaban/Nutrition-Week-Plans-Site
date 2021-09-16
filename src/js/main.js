import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import modal from './modules/modal.js';
import dynMenuCardsCreation from './modules/dynMenuCardsCreation.js'
import formsPostOnServ from './modules/formsPostOnServ.js'
import sliderWheel from './modules/sliderWheel.js'
import caloriesCalculator from './modules/caloriesCalculator.js'





document.addEventListener( 'DOMContentLoaded' , () => {
    
    console.log("main.js Connected...");
    'use strict';

    // MODULE FUNCTIONS CALLING
    tabs( '.tabheader__items', '.tabheader__item', '.tabcontent' ); 
    timer( '#days' , '#hours' , '#minutes' , '#seconds' );  
    modal('[data-modal]', '[data-close]', '.modal');
    dynMenuCardsCreation();
    formsPostOnServ();
    sliderWheel();

}) // document.addEventListener( 'DOMContentLoaded' END