////////   TIMER   ////////  ( .promotion__timer | .promotion__timer .timer__block | .timer )


// 1) Function for Date Difference :  Now Date - DeadLine Date  —> getTimeRemaining()
// 2) Function for Timer SetUp() :  get all Elms (days, hours, secs) and Being Set Them  —>  setClock()
// 3) Function for Timer Upd() :  Work with Timer SetUp()  —> updateClock()


const timer = () => {

    console.log('timer.js Script Connedted...');

    // 1) Function for Date Difference :  Now Date - DeadLine Date  —> getTimeRemaining()

    // const now = new Date();
    // console.log(now);
    const checkTimerStop = '2020-12-30T13:27:51.777Z';
    const deadLineStr = '2021-9-16';

    function getTimeRemaining(deadLineStr) {

        const deadLineDate = Date.parse(deadLineStr);
        const nowDate = new Date();

        const mSecs = deadLineDate - nowDate;
        const days  = Math.floor( mSecs / (1000 * 60 * 60 * 24) ),
                hours = Math.floor( (mSecs / (1000 * 60 * 60) ) % 24  ),
                mints = Math.floor( (mSecs / 1000 / 60) % 60  ),
                secs  = Math.floor( (mSecs / 1000 ) % 60  );

        return {
            mSecs : mSecs,
            days : days,
            hours : hours,
            minutes : mints,
            seconds : secs
        }
    }


    // 2) Function for Timer SetUp() :  get all Elms (days, hours, secs) and Being Set Them  —>  setClock()
    function setClock() {

        const day = document.querySelector('#days'),
                hour = document.querySelector('#hours'),
                minute = document.querySelector('#minutes'),
                second = document.querySelector('#seconds');

        // 3) Function for Timer Upd() :  Work with Timer SetUp()  —> updClock()
        updClock();

        const setIntervId =  setInterval( updClock, 1000);

        function updClock() {
            const {mSecs, days, hours, minutes, seconds} = getTimeRemaining(deadLineStr);

            if (mSecs >= 0) {
                day.innerHTML = days;
                hour.innerHTML = hours;
                minute.innerHTML = minutes;
                second.innerHTML = seconds;

                console.log('Changed...');

            }else { console.log('Stoped......'); clearInterval(setIntervId) }
        }
    }
    setClock();
}

export default timer;