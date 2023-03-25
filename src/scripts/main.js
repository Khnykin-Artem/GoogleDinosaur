import jump from './jump';
import isAlive from './isAlive';

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', (event) => {
  event.code === 'Space' && jump(dino);
});

isAlive(dino, cactus);
