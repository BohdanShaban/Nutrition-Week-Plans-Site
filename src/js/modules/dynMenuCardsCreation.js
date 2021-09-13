
////////    REPLACE CARDS WITH CLASSES  ( Dyn Cards Creation )   ////////
////////    REST OPER(...)  &  DEFAULT PARAMS    ////////

const dynMenuCardsCreation = () => {

    // 1) Classes Craation 
    // 2) Dynamic Elems Creation on Page
    // 3) Path Args 
    // 4) Selectors:  .menu__item ,  Parent: .menu__field .container
    // *) In future this Elms Will Be Created Dynamically from Server Datas

    // 5) MenuCard(args) -> Last arg as ...rest
    // 6) Replace the One <div> of 2
    // 7) Check if ...rest is []  &  Write the Conditions


    class MenuCard {

        constructor(imgSrc, alt, title, descript, price, parent, ...cssClasses)  {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.title = title;
            this.descript = descript;
            this.price = price;
            this.parent = document.querySelector(parent);
            this.changeCourse = 27; // Cours for Currency (Later can be recieved by API)
            this.changeToUAN();
            this.cssClasesArr = cssClasses; // Can't be Checked by: rest = rest || 2  ( []->true )
        }
        changeToUAN() {
            this.price = this.price * this.changeCourse;
        }

        render() {
            const newDivEl = document.createElement('div');

            if( this.cssClasesArr.length === 0 ) {
                newDivEl.classList.add('menu__item');
            } else {
                this.cssClasesArr.forEach( cssClass => newDivEl.classList.add(cssClass) )
            }

            newDivEl.innerHTML = `
                <img src=${this.imgSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                <div class="menu__item-descr">${this.descript}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;

            this.parent.append(newDivEl);
            console.log(`Element ${this.title} Was Appended...`);
        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Фитнес',
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        8,
        '.menu__field .container', /* Parent El */
        'menu__item', /* Additional Css classes below (with ...rest oper) */
        'big',
        'red'

    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        '“Премиум”',
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        10,
        '.menu__field .container', /* Parent El */
        'menu__item', /* Additional Css classes below (with ...rest oper) */
        'big',
        'red'

    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Постное',
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        9,
        '.menu__field .container', /* Parent El */
        'menu__item', /* Additional Css classes below (with ...rest oper) */
        'big',
        'red'

    ).render();
}

export default dynMenuCardsCreation;