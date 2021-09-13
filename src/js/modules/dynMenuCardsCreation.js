
////////    REPLACE CARDS WITH CLASSES  ( Dyn Cards Creation )   ////////

const dynMenuCardsCreation = () => {

    // 1) Classes Craation 
    // 2) Dynamic Elems Creation on Page
    // 3) Path Args 
    // 4) Selectors:  .menu__item ,  Parent: .menu__field .container
    // *) In future this Elms Will Be Created Dynamically from Server Datas


    class MenuCard {

        constructor(imgSrc, alt, title, descript, price, parent)  {

            this.imgSrc = imgSrc;
            this.alt = alt;
            this.title = title;
            this.descript = descript;
            this.price = price;
            this.parent = document.querySelector(parent);
            this.changeCourse = 27;
            this.changeToUAN();
        }
        changeToUAN() {
            this.price = this.price * this.changeCourse;
        }

        render() {
            const newElem = document.createElement('div');

            newElem.innerHTML = 
            `<div class="menu__item">
                <img src=${this.imgSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                <div class="menu__item-descr">${this.descript}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>`

            this.parent.append(newElem);
            console.log(`Element ${this.title} Was Appended...`);
        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Фитнес',
        "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        8,
        '.menu__field .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        '“Премиум”',
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        10,
        '.menu__field .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Постное',
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        9,
        '.menu__field .container'
    ).render();
}

export default dynMenuCardsCreation;