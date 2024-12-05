const burger = document.getElementById('qtk_burger');
const menu = document.getElementById('qtk_menu');
const root = document.documentElement;

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  root.classList.toggle('burger-active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
