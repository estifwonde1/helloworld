document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.ham-menu');
  const offscreenMenu = document.querySelector('.off-screen-menu');
  if (hamMenu && offscreenMenu) {
    hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active');
      offscreenMenu.classList.toggle('active');
    });
  }
});
