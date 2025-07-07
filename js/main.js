const btnMoblie = document.querySelector('.btn-mobile');
const menu = document.querySelector('.menu-moblie');

btnMoblie.addEventListener('click', () => {
  btnMoblie.classList.toggle('active');
  menu.classList.toggle('active');
});