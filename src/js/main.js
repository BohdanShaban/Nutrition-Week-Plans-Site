import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import modal from './modules/modal.js';


document.addEventListener( 'DOMContentLoaded' , () => {
    
    console.log("main.js Connected...");
    'use strict';

    // MODULE FUNCTIONS CALLING
    tabs();
    timer();
    modal('[data-modal]', '[data-close]', '.modal');

}) // document.addEventListener( 'DOMContentLoaded' END