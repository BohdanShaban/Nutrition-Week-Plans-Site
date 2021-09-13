////////    XMLHttpRequest  Server  Comunication  (Practice 1 L53)   ////////

const formsPostOnServ = () => {

    console.log("formsPostOnServ.js Connected...");

    // 1) Take All Forms
    // 2) Code post(form) Which will addEvntList to Each Form
    // 3) Inside post(form) : Create & Configure XMLHttpReq
    // 4) Ins post(form) : Create obj = FormData()
    // 5) Ins post(form) EvntList : check if Req is Success or Not & Show Created Message div
    // 6) post(form) :  Reset Form after Data was Send
    // 7) post(form) :  Clear Interval of Div Message Box

    const formsArr = document.querySelectorAll('form');

    formsArr.forEach( form => postDataXMLHttp(form) );

    const messages = {
        loading : 'Loading...',
        success : 'Is OK. We Will Contact You !',
        error : 'Error'
    };

    function postDataXMLHttp( form ) {
        form.addEventListener( 'submit', (e) => {
            e.preventDefault();

            // Message div Creation
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('status');
            infoDiv.textContent = messages.loading;
            form.append(infoDiv);

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
                    infoDiv.textContent = messages.success;

                    form.reset();
                    setTimeout( () => { infoDiv.remove() }, 2500 )

                } else {
                    infoDiv.textContent = messages.error;   
                }
            })

        } )
    }
}
export default formsPostOnServ;