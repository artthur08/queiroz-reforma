const images = [
    "assets/img/img-banner-1.jpg",
    "assets/img/img-banner-2.jpg",
    "assets/img/img-banner-3.jpg",
    "assets/img/img-banner-4.jpg",
    "assets/img/img-banner-5.jpg",
    "assets/img/img-banner-6.jpg",
    "assets/img/img-banner-8.jpg",
    "assets/img/IMG-20250324-WA0001.jpg",
    "assets/img/IMG-20250324-WA0004.jpg",
    "assets/img/IMG-20250324-WA0005.jpg",
    "assets/img/IMG-20250324-WA0006.jpg",
    "assets/img/IMG-20250324-WA0007.jpg",
];

let index = 0;
const slider = document.querySelector(".background-slider");

function changeBackground() {
    slider.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000); // Troca a cada 3 segundos
changeBackground(); // Inicia com a primeira imagem