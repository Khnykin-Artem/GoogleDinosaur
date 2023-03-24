'use strict';

import jump from './jump.js';
import isAlive from './isAlive.js';

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', (event) => {
  event.code === 'Space' && jump(dino);
});

isAlive(dino, cactus);
