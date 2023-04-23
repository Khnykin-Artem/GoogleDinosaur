import jump from './jump';
import isAlive from './checkAlive.js';

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', (event) => event.code === 'Space' && jump(dino));

isAlive(dino, cactus);
