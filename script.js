//lista imagenes
imageList=[
  'img/ale.jpg',
  'img/alemichi.jpg',
  'img/alerojo.jpg',
  'img/aleyo.jpg',
  'img/aleyopanora.jpg',
  'img/aleyotop.jpg',
  'img/payaso.jpg',
  'img/yo.jpg',
  'img/canela.jpg'

]

//agarrar foto al azar
function getRandomImage() {
  const index = Math.floor(Math.random() * imageList.length);
  return imageList[index];
}

//crear imagenes
function createImage() {
  const imgA = document.createElement('img');
  imgA.src = getRandomImage();
  imgA.alt = 'img';
  imgA.style.width= "200px";
  imgA.style.height= "200px";
  imgA.classList.add('falling-img');

  imgA.style.left = Math.random() * 90 + "vw";
  imgA.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(imgA);

  setTimeout(() => imgA.remove(), 6000);
}
// Intervalo para dejar caer imágenes
setInterval(createImage, 2500);


// Función para crear corazones 💗
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💗';

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 5 + "s";
  heart.style.fontSize = (Math.random() * 3 + 2.5) + "rem";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 200);

// Sparkles 💫
const canvas = document.getElementById('sparkles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5;
    this.alpha = Math.random();
    this.speed = 0.6 + Math.random();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.y = 0;
    this.draw();
  }
}

function initSparkles() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animateSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animateSparkles);
}

initSparkles();
animateSparkles();

// Resize canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
