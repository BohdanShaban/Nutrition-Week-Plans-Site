

const caloriesCalculator = () => {

    console.log("caloriesCalculator.js Connected...");

    const calouriesResult = document.querySelector('.calculating__result span');
    let gender = 'female'  , ratio = 1.375 ;
    let height , weight , age;

    function calcPersonCalories() {

        if( !gender || !ratio || !height || !weight || !age) {
            calouriesResult.textContent = '****';
            return
        }

        if( gender == 'female') {

            calouriesResult.textContent = Math.round( ( 447.6 + (9.2  * weight) + (3.1 * height) - (4.3 * age) ) * ratio);
        } else {
            calouriesResult.textContent = Math.round( ( 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) ) * ratio);
        }
    }
    calcPersonCalories();


    function takeStaticInfo( parentSelector , activeClass = 'calculating__choose-item_active') {

        const divButtnsArr = document.querySelectorAll(`${parentSelector} div`);

        divButtnsArr.forEach( divButt => {
            divButt.addEventListener( 'click' , (e) => {

                if( e.target.getAttribute('data-ratio') ) {
                    ratio = +e.target.getAttribute('data-ratio');
                } else {
                    gender = e.target.getAttribute('data-gender');
                }
    
                console.log(`gender: ${gender}, ratio: ${ratio}` );
    
                divButtnsArr.forEach( item => {
                    item.classList.remove(activeClass)
                })
    
                e.target.classList.add(activeClass);
                calcPersonCalories();
            })
        })
    }
    takeStaticInfo( '#gender' );
    takeStaticInfo( '.calculating__choose_big' );


    function takeDynamicInfo( parentSelector) {
        const inputsParent = document.querySelector(parentSelector);

        inputsParent.addEventListener( 'input' , (e) => {

            const regEx = /\D/g ;
            if( regEx.test(e.target.value) ){
                e.target.style.border = '3px solid red';
            } else {
                e.target.style.border = 'none';
            }

            const id = e.target.getAttribute('id');

            switch (id) {
                case "height" :
                    height = +e.target.value;
                    console.log(`heigth: ${height}`);
                    break;
                case "weight" :
                    weight = +e.target.value;
                    console.log(`weight: ${weight}`);
                    break;
                case "age" :
                    age = +e.target.value;
                    console.log(`age: ${age}`);
                    break;
            }
            calcPersonCalories();
        })
    }
    takeDynamicInfo('.calculating__choose_medium');
}

export default caloriesCalculator;