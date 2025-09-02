
const track = document.querySelector('.container-track');
let speed = 1; 
let position = 0;


const images = track.querySelectorAll('img');
const totalWidth = Array.from(images).reduce((acc, img) => acc + img.offsetWidth, 0);

function animate() {
  position -= speed;

  
  if (position <= -totalWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}


animate();




