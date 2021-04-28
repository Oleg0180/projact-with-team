/*const images = [
    "img/black-guitar.jpg",
    "img/saxophone.jpg",
    "img/tambourine.jpg",
    "img/red-guitar.jpg",
    "img/drum.jpg"
]

let currentSlide = 0;

function showSlide() {
    const carouselImage = document.querySelector('.products-carousel img');
    carouselImage.src = images[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = images.length - 1;
    showSlide();
}

showSlide();


document.querySelector('.slide-prev').addEventListener('click', prevSlide);
document.querySelector('.slide-next').addEventListener('click', nextSlide);