"use strict"

const PETS = [
    {
        "id": 0,
        "name": "Jennifer",
        "img": "./img/our-pets/jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 1,
        "name": "Sophia",
        "img": "./img/our-pets/sophia.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 2,
        "name": "Woody",
        "img": "./img/our-pets/woody.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": 3,
        "name": "Scarlett",
        "img": "./img/our-pets/scarlett.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 4,
        "name": "Katrine",
        "img": "./img/our-pets/katrine.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 5,
        "name": "Timmy",
        "img": "./img/our-pets/timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": 6,
        "name": "Freddie",
        "img": "./img/our-pets/freddie.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 7,
        "name": "Charly",
        "img": "./img/our-pets/charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

/* -------------- КОНСТАНТЫ ------------------- */

const hamburger = document.querySelector('.hamburger'),
    navList = document.querySelector('.nav__list'),
    logo = document.querySelector('.logo'),
    overlay = document.querySelector('.overlay'),
    arrowLeft = document.querySelector('#arrow_left'),
    arrowRight = document.querySelector('#arrow_right'),
    carousel = document.querySelector('#carousel'),
    listLeft = document.querySelector('#slider__list_left'),
    listCenter = document.querySelector('#slider__list_center'),
    listRight = document.querySelector('#slider__list_right'),
    popUpElem = document.querySelector('.pop-up'),
    popUpContainer = document.querySelector('.pop-up__container'),
    popUpClose = document.querySelector('#pop-up__close'),
    sliderPages = document.querySelector('.pets-cards .slider__list');


/* -------------- ДИНАМИЧЕСКИ ЗАГРУЖАЕМ КАРТОЧКИ ПРИ ЗАГРУЗКЕ первой страницы------------------- */

let numberOfcardsInSlide;
let firstCardNumber = 0;  

function getNumberOfCards() { 
    const width = window.innerWidth;
      
    if (width < 576) {
        numberOfcardsInSlide = 1;
        return numberOfcardsInSlide;
    } else if (width < 1201 && width >= 576) {
        numberOfcardsInSlide = 2;
        return numberOfcardsInSlide;
    } else { 
        numberOfcardsInSlide = 3;
        return numberOfcardsInSlide;
    }
}


/* -------------- ДИНАМИЧЕСКИ ЗАГРУЖАЕМ КАРТОЧКИ ПРИ ЗАГРУЗКЕ первой страницы------------------- */

window.addEventListener('load', () => {
    
    listLeft.innerHTML = "";
    listCenter.innerHTML = "";
    listRight.innerHTML = "";

    getNumberOfCards();

    let arrOfSuperRandoms = createSuperRandomNumbers();

    for (let i = 0; i < numberOfcardsInSlide; i++) {
        const card = createCardTemplate();
        let petCardNumber = arrOfSuperRandoms[i];
        card.setAttribute('data-petnumber', petCardNumber);
        card.innerHTML = `<div class="slider__img">
                            <img src='${PETS[petCardNumber].img}' alt="${PETS[petCardNumber].name}">
                        </div>
                        <div class="slider__nickname">${PETS[petCardNumber].name}</div>
                        <div class="slider__info-btn">
                            <button class="btn btn_border" type="button">Learn more</button>
                        </div>`;
        listCenter.appendChild(card);
    }

    let newArrOfSuperRandoms = createSuperRandomNumbers();

    for (let i = 0; i < numberOfcardsInSlide; i++) {
        const card = createCardTemplate();
        let petCardNumber = newArrOfSuperRandoms[i];
        card.setAttribute('data-petnumber', petCardNumber);
        card.innerHTML = `<div class="slider__img">
                            <img src='${PETS[petCardNumber].img}' alt="${PETS[petCardNumber].name}">
                        </div>
                        <div class="slider__nickname">${PETS[petCardNumber].name}</div>
                        <div class="slider__info-btn">
                            <button class="btn btn_border" type="button">Learn more</button>
                        </div>`;
        listLeft.appendChild(card);
    }


    listRight.innerHTML = listLeft.innerHTML;
});


/* -------------- МЕНЮ ГАМБУРГЕР ------------------- */
function toggleMenu() {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
    logo.classList.toggle('open-nav-position');
    overlay.classList.toggle('open');
    document.querySelector('body').classList.toggle('not-scroll');

}

hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

/* -------------- КАРУСЕЛЬ ------------------- */
function moveLeft() {
    carousel.classList.add('transition-left');
    arrowLeft.removeEventListener('click', moveLeft);
    arrowRight.removeEventListener('click', moveRight);
}

function moveRight() {
    carousel.classList.add('transition-right');
    arrowLeft.removeEventListener('click', moveLeft);
    arrowRight.removeEventListener("click", moveRight);
}

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);

function createCardTemplate() {
    const card = document.createElement("div");
    card.classList.add("slider__item");
    return card;
}



function createSuperRandomNumbers() {
    let arrOfSuperRandoms = [];
    let arrOfUsedRandoms = [];

    let centerCards = document.querySelectorAll('#slider__list_center .slider__item');
    centerCards.forEach((card) => {
        arrOfUsedRandoms.push(+card.dataset.petnumber);
        return arrOfUsedRandoms;
    });
    // console.log('used '+ arrOfUsedRandoms);
    while (arrOfSuperRandoms.length < 3) {
        let random = Math.floor(Math.random() * 8);
        if (!arrOfUsedRandoms.includes(random) && !arrOfSuperRandoms.includes(random)) {
            arrOfSuperRandoms.push(random);
        }
    }
    console.log('used ' + arrOfUsedRandoms);
    console.log('super: ' + arrOfSuperRandoms);
    
// console.log('super ' + arrOfSuperRandoms);
    return arrOfSuperRandoms;
}



carousel.addEventListener('animationend', (animationEvent) => {

    if ((animationEvent.animationName === 'move-left-XL') || (animationEvent.animationName === 'move-left-M') || (animationEvent.animationName === 'move-left-S')) {
        carousel.classList.remove('transition-left');
        document.querySelector('#slider__list_center').innerHTML = listRight.innerHTML;
    } else {
        carousel.classList.remove('transition-right');
        document.querySelector('#slider__list_center').innerHTML = listLeft.innerHTML;
    }

    listLeft.innerHTML = "";
    let arrOfSuperRandoms = createSuperRandomNumbers();

    console.log('super =  ' + arrOfSuperRandoms);


    getNumberOfCards();

    for (let i = 0; i < numberOfcardsInSlide; i++) {
        const card = createCardTemplate();
        let petCardNumber = arrOfSuperRandoms[i];
        console.log(`petCardNumber - ` + petCardNumber);
        card.setAttribute('data-petnumber', petCardNumber);
        card.innerHTML = `<div class="slider__img">
                            <img src='${PETS[petCardNumber].img}' alt="${PETS[petCardNumber].name}">
                        </div>
                        <div class="slider__nickname">${PETS[petCardNumber].name}</div>
                        <div class="slider__info-btn">
                            <button class="btn btn_border" type="button">Learn more</button>
                        </div>`;
        listLeft.appendChild(card);
        console.log(`по одному: ` + arrOfSuperRandoms[i])
    }

    listRight.innerHTML = listLeft.innerHTML;

    arrowLeft.addEventListener("click", moveLeft);
    arrowRight.addEventListener("click", moveRight);
});

/* -------------- POP-UP ------------------- */

function openPopUp(e) {
    console.log(e.target.id);
    if (e.target.id == 'slider__list_center') { return true};

    popUpElem.style.display = 'block';
    document.querySelector('body').classList.toggle('not-scroll');

    const popUpCard = document.createElement("div");
    popUpCard.classList.add("pop-up__body");

    let petCardNumber = e.target.closest('.slider__item').dataset.petnumber;
    
    popUpCard.innerHTML = `
                    <div class="pop-up__img">
                        <img src="${PETS[petCardNumber].img}" alt="${PETS[petCardNumber].name}">
                    </div>
                    <div class="pop-up__text">
                        <h3 class="title_h3">${PETS[petCardNumber].name}</h3>
                        <h4 class="title_h4">${PETS[petCardNumber].type} - ${PETS[petCardNumber].breed}</h4>
                        <p>${PETS[petCardNumber].description}</p>
                        <ul>
                            <li><strong>Age:</strong> ${PETS[petCardNumber].age}</li>
                            <li><strong>Inoculations:</strong> ${PETS[petCardNumber].inoculations}</li>
                            <li><strong>Diseases:</strong> ${PETS[petCardNumber].diseases}</li>
                            <li><strong>Parasites:</strong> ${PETS[petCardNumber].parasites}</li>
                        </ul>
                    </div>`;

    popUpContainer.prepend(popUpCard);
    let popUpBody = document.querySelector('.pop-up__body');

    popUpBody.addEventListener('mouseout', () => {
        popUpClose.style.backgroundColor = '#F1CDB3';
    });

    popUpBody.addEventListener('mouseover', () => {
        popUpClose.style.backgroundColor = 'transparent';
    });
}

function closePopUp() {
    let popUpBody = document.querySelector('.pop-up__body');
    popUpBody.remove();
    popUpElem.style.display = 'none';
    document.querySelector('body').classList.toggle('not-scroll');
}

listCenter.addEventListener('click', openPopUp);

popUpClose.addEventListener('click', closePopUp);
popUpElem.addEventListener('click', function(e) {
    if (e.target != this) { return true; }   //отменяем событие на дочернем элементе
    closePopUp();                              // закрывает поп-ап при клине вне модального окна
});