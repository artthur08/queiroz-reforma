const images = [
    "assets/img/section-2.png",

];

let index = 0;
const slider = document.querySelector(".background-slider");

function changeBackground() {
    slider.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000); // Troca a cada 3 segundos
changeBackground(); // Inicia com a primeira imagem