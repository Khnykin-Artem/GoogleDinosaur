import jump from './jump.js';
import isAlive from './checkAlive.js';
import isWebp from './isWebp.js';

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener(
  'keydown',
  (event) => event.code === 'Space' && jump(dino)
);

isWebp();
isAlive(dino, cactus);
