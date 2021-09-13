import tabs from './modules/tabs.js';
import timer from './modules/timer.js';



document.addEventListener( 'DOMContentLoaded' , () => {
    
    console.log("main.js Connected...");
    'use strict';

    // MODULE FUNCTIONS CALLING
    tabs();
    timer();

}) // document.addEventListener( 'DOMContentLoaded' END