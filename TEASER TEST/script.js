const buttons = document.querySelectorAll('.button');

function animateLaunchpad() {
  let index = 0;
  const interval = setInterval(() => {
    buttons[index].classList.add('active');
    index++;
    if (index === buttons.length) {
      clearInterval(interval);
    }
  }, 200);
}

animateLaunchpad();
