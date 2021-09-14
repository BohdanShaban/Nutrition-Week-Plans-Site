////////    MODAL WINDOW  ////////

const closeModalWind = (modalSel) => {
    document.querySelector(modalSel).classList.add('hide');
    document.querySelector(modalSel).classList.remove('show');
    document.body.style.overflow = ''; // Enable Scroll
}

const openModalWind = (modalSel, modWindowTimerId = null) => {
    //// 4) Change Inline Styles on Classes
    //modalWind.style.display = 'block'; 
    document.querySelector(modalSel).classList.add('show');
    document.querySelector(modalSel).classList.remove('hide');
    //// 6) DisAble Scrolling Posibility (style.overflov = 'hidden')
    document.body.style.overflow = 'hidden';
    // Clear Interval if Modal Was Open By User
    if(modWindowTimerId) { clearInterval(modWindowTimerId); }
}

const modal = ( openTrigSel, closeTrigSel, modalSel ) => {

    console.log('modal.js Script Connedted...');

    // 1) Create Data Atr:  data-modal  &  data-close (Can be through tags/selectors BUT It's Convenient)
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
          modWindowTimerId = setTimeout( () => openModalWind(modalSel), 20000 ); // !!! 10 Seconds
    //console.log(trigClose);

    //// 3) addEvntListner on Open buttns
    trigsOpen.forEach( btn => {
        btn.addEventListener( 'click', () => {
            openModalWind(modalSel, modWindowTimerId);
        })
    })


    //closeModalWind(modalSel);

    // 5) addEvntListner on Close butt
    trigClose.addEventListener( 'click' , () => closeModalWind(modalSel) );

    // 7) Close Mod Wind by Clicking Outside of Modal Dialog
    modalWind.addEventListener('click' , (e) => {
        if (e.target == modalWind) { closeModalWind(modalSel); }
    })

    // 8) Close Mod Wind by Clicking Esc Btn  ( keydown , keypress)
    document.addEventListener( 'keydown' , (e) => {
        if (e.code === 'Escape') { closeModalWind(modalSel) ; }
    });

    // 10) Open Mod Wind if User Scrolled Page to the End
    window.addEventListener( 'scroll', showModalWinByScroll );

    function showModalWinByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { 
            openModalWind(modalSel, modWindowTimerId); 
            removeEventListener( 'scroll', showModalWinByScroll ); 
        }
    }
}

export default modal;
export { closeModalWind, openModalWind }