const checkAlive = function (dino, cactus) {
  setInterval(() => {
    const dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue('top'),
      10
    );
    const cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue('left'),
      10
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      alert('Game over!');
    }
  }, 10);
};

export default checkAlive;
