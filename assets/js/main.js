/* 
Consegna:
Creare un carosello come nella foto allegata.

MILESTONE 0:

MILESTONE 1:

MILESTONE 2:

BONUS 1 (opzionale):

BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
STRUTTURA DATI:
Ecco la struttura dati da usare (le immagini sono le stesse della volta scorsa)
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const containerEl = document.querySelector('.my_container');
const thumbsEl = document.querySelector('.thumbs');
const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const sizeImages = images.length;
let slides = [];
let current = 0;

images.forEach(slide => slides.push(slide.image));

for (let i = 0; i < sizeImages; i++) {
    const imgMarkup = `<img class="image ${i === current ? 'active' : ''}" src="./assets/${slides[i]}">`;
    containerEl.insertAdjacentHTML('beforeend', imgMarkup);
}

for (let i = 0; i < sizeImages; i++) {
    const thumbsMarkup = `<img class="thumbs_slide ${i === current ? 'apparent' : ''}" src="./assets/${slides[i]}">`;
    thumbsEl.insertAdjacentHTML('beforeend', thumbsMarkup);
}

nextEl.addEventListener('click', function () {
    const allSlides = document.querySelectorAll('.image');
    const allThumbs = document.querySelectorAll('.thumbs_slide');
    const activeSlide = document.querySelector('.active');
    const apparentThumb = document.querySelector('.apparent');
    activeSlide.classList.remove('active');
    apparentThumb.classList.remove('apparent');
    current++;
    if (current === 5) {
        current = 0;
        allSlides[current].classList.add('active');
        allThumbs[current].classList.add('apparent');
    } else {
        allSlides[current].classList.add('active');
        allThumbs[current].classList.add('apparent');
    }
});

prevEl.addEventListener('click', function () {
    const allSlides = document.querySelectorAll('.image');
    const allThumbs = document.querySelectorAll('.thumbs_slide');
    const activeSlide = document.querySelector('.active');
    const apparentThumb = document.querySelector('.apparent');
    activeSlide.classList.remove('active');
    apparentThumb.classList.remove('apparent');
    current--;
    if (current === -1) {
        current = 4;
        allSlides[current].classList.add('active');
        allThumbs[current].classList.add('apparent');
    } else {
        allSlides[current].classList.add('active');
        allThumbs[current].classList.add('apparent');
    }
});


