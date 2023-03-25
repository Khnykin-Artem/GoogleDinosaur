const checkAlive = function (dino, cactus) {
  const isAlive = setInterval(() => {
    const dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue('top')
    );
    const cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue('left')
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      alert('Game over!');
    }
  }, 10);
};

export default checkAlive;
