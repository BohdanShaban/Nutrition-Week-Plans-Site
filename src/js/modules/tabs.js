

const tabs = () => {

    console.log('tabs.js Script Connedted...');

    const tabsParrent = document.querySelector('.tabheader__items'),
          tabs        = document.querySelectorAll('.tabheader__item'),
          tabsContent  = document.querySelectorAll('.tabcontent');
    //console.log(tabItems);


    function hideAllTabs() {  

        tabsContent.forEach( tab => {
            //tab.style.display = 'none'; -> Last style.css classes -> ( .show{display:block}.hide{display:none} )
            tab.classList.add('hide');
            tab.classList.remove('show');
        });

        tabs.forEach( item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showSomeTab(id) {  
        tabs[id].classList.add('tabheader__item_active');
        //tabsContent[id].style.display = 'block'; -> Last style.css classes -> ( .show{display:block}.hide{display:none} )
        tabsContent[id].classList.add('show');
        tabsContent[id].classList.remove('hide');
    }
    hideAllTabs();
    showSomeTab(0);

        
    tabsParrent.addEventListener( 'click', (e) => {
        const target = e.target;
        
        if( target && target.classList.contains('tabheader__item')) {
            tabs.forEach( (tab, idx) => {
                if (target == tab) {
                    hideAllTabs();
                    showSomeTab(idx);
                } 
            })
        }

    })

}

export default tabs;