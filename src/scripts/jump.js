const jump = function (dino) {
  if (dino.classList.value !== 'jump') {
    dino.classList.add('jump');
  }

  setTimeout(() => {
    dino.classList.remove('jump');
  }, 300);
};

export default jump;
