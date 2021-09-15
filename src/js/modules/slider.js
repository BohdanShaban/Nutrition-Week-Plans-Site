///////////////////////    (Slider)   /////////////////////////////////////////

const slider = () => {

    console.log("slider.js Connected...");

    // 1) Take All Needed Elms  ( .offer__slider, .offer__slider-counter , .offer__slide)
    // 2) Idx / Paramether for Current Slide (use & change)
    // 3) showSlide()  (consists of two) :  showCurrentSlide(Idx)  &  hideAllOtherSlides()
    // 4) showCurrentSlide(Idx) :  if(END of Slides) {BEGIN from start Again}  && vice versa (in reverse)
    // 5) divArrows.addEvntList( 'click' , showSlide() )  (if LeftArrow -> Idx--  if RightArrow Idx++)


    ////// 1) Take All Needed Elms  ( .offer__slider, .offer__slider-counter , .offer__slide)
    const nextSlideBtn = document.querySelector('.offer__slider-next');
    const prevSlideBtn = document.querySelector('.offer__slider-prev');
    const slidersArr = document.querySelectorAll('.offer__slide');
    const currentSlNum = document.querySelector('#current');
    const totalSlNum = document.querySelector('#total');

    //console.log(`slidersArr.length: ${slidersArr.length}`) // -> 4
    

    ////// 2) Idx / Paramether for Current Slide (use & change)
    let currSldeIdx = 0;
    showSlide(currSldeIdx);
    
    ////// 5) divArrows.addEvntList( 'click' , showSlide() )  (if LeftArrow -> Idx--  if RightArrow Idx++)
    nextSlideBtn.addEventListener( 'click' , (e) => {
        e.preventDefault();
        //currSldeIdx ++;
        //console.log(`Next Pushed  currSldeIdx: ${currSldeIdx}`)
        showSlide( ++currSldeIdx);
        
    })

    prevSlideBtn.addEventListener( 'click' , (e) => {
        e.preventDefault();
        //console.log(`Prev Pushed  currSldeIdx: ${currSldeIdx}`)
        //currSldeIdx --;
        showSlide( --currSldeIdx);
        
    })

    // ADD 0 TO TOTAL SLIDES
    // if( slidesAmount < 10) {
    //     totalSlNum.textContent = '0' + slidesAmount;
    // } else {
    //     totalSlNum.textContent = slidesAmount ;
    // } 

    ////// 3) , 4) showSlide()  (consists of two) :  showCurrentSlide(Idx)  &  hideAllOtherSlides()
    function showSlide(slideIdx) {
        //console.log(`showSlide() slideIdx: ${slideIdx}`)
        const slidesAmount = slidersArr.length;

        if( slideIdx > slidesAmount) {
            //console.log('If: slideIdx > slidersArr.length')
            currSldeIdx = slideIdx = 1;
        }
        if( slideIdx < 1) {
            //console.log('If: slideIdx < 1')
            currSldeIdx = slideIdx = slidesAmount;
        }

        // ADD 0 TO CURRENT SLIDES
        if( slideIdx < 10) {
            currentSlNum.textContent = '0' + slideIdx;
        } else {
            currentSlNum.textContent = slideIdx ;
        }


        let hideAllOtherSlides = () => {
            slidersArr.forEach( slide => {
                slide.classList.remove('show');
                slide.classList.add('hide');
            })
        }
        
        let showCurrentSlide = (idx) => {
            idx--;
            //console.log(`showSlide() -> showCurrentSlide()  idx: ${idx}`)
            slidersArr[idx].classList.remove('hide');
            slidersArr[idx].classList.add('show');
        }

        hideAllOtherSlides();
        showCurrentSlide(slideIdx);
           
    }
}

export default slider;