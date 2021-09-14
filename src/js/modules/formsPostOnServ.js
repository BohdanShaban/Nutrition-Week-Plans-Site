////////    XMLHttpRequest  Server  Comunication  (Practice 1 L53)   ////////
import { closeModalWind, openModalWind } from '../modules/modal.js'

const formsPostOnServ = () => {

    console.log("formsPostOnServ.js Connected...");

    // 1) Take All Forms
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
    formsArr.forEach( form => postDataXMLHttp(form) );

    const messages = {
        loading : 'img/form/spinner.svg',
        success : 'Is OK. We Will Contact You !',
        error : 'Error'
    };

    function postDataXMLHttp( form ) {
        form.addEventListener( 'submit', (e) => {
            e.preventDefault();

            // Spinner Creation
            const spinImg = document.createElement('img');
            spinImg.src = messages.loading;
            spinImg.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement( 'afterend' , spinImg);

            // Request Creation and Configure
            const  req = new XMLHttpRequest();
            req.open( 'POST', 'server.php' );
            // FormData + XMLHttpReq :  Request DON'T NEED HEADER 
            // req.setRequestHeader( 'Content-type', 'multipart/form-data' ); !!! DON'T NEED HEADER 
            req.setRequestHeader( 'Content-type', 'application/json' );

            // Makeing the POST quer Body  —>  FormData
            const formData = new FormData(form)

            // Convert FormData  —>  JSON
            const obj = {};
            formData.forEach( function( key, value ) {
                obj[key] = value;
            }) 
            const jsonObj = JSON.stringify(obj);
            req.send(jsonObj);

            req.addEventListener( 'load' , () => {
                if (req.status === 200) {
                    console.log(req.response);

                    showThanksModalWind( messages.success );
                    spinImg.remove();
                    form.reset();
                } else {
                    showThanksModalWind( messages.error );   
                }
            })

        } )

        function showThanksModalWind( message ) {
            const prevModalDialog = document.querySelector('.modal__dialog');
            openModalWind('.modal');
            prevModalDialog.classList.add('hide');

            const createdModalDialog = document.createElement('div');
            createdModalDialog.classList.add('modal__dialog');
            //createdModalDialog.classList.add('show');

            createdModalDialog.innerHTML = `
                <div class="modal__content">
                    <div data-close class="modal__close">×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;
            document.querySelector('.modal').append(createdModalDialog);

            setTimeout( () => { 
                createdModalDialog.remove();
                prevModalDialog.classList.remove('hide');
                prevModalDialog.classList.add('show');
                closeModalWind('.modal');
            }, 3000 )
        }
    }
}
export default formsPostOnServ;