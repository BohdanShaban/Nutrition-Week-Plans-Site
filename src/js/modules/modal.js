////////    MODAL WINDOW  (Practice 3)   ////////

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


    //// 2) Form List of Vars from HTML
    const trigsOpen = document.querySelectorAll(openTrigSel),
          trigClose = document.querySelector(closeTrigSel),
          modalWind = document.querySelector(modalSel);
    //console.log(trigClose);

    //// 3) addEvntListner on Open buttns
    trigsOpen.forEach( btn => {
        btn.addEventListener( 'click', () => {

            //// 4) Change Inline Styles on Classes
            //modalWind.style.display = 'block'; 
            modalWind.classList.add('show');
            modalWind.classList.remove('hide');

            //// 6) DisAble Scrolling Posibility (style.overflov = 'hidden')
            document.body.style.overflow = 'hidden';
        })
    })

    function closeModalWind() {
        modalWind.classList.add('hide');
        modalWind.classList.remove('show');
        document.body.style.overflow = ''; // Enable Scroll
    }

    // 5) addEvntListner on Close butt
    trigClose.addEventListener( 'click' , closeModalWind );

    // 7) Close Mod Wind by Clicking Outside of Modal Dialog
    modalWind.addEventListener('click' , (e) => {
        if (e.target == modalWind) { closeModalWind(); }
    })

    // 8) Close Mod Wind by Clicking Esc Btn  ( keydown , keypress)
    document.addEventListener( 'keydown' , (e) => {
        if (e.code === 'Escape') { closeModalWind(); }
    });
}

export default modal;