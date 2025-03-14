const burger = document.getElementById('qtk_burger');
const menu = document.getElementById('qtk_menu');
const sidebar_switcher = document.getElementById('qtk_sidebar_switcher');
const aside = document.getElementById('qtk_aside');
const root = document.documentElement;

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  root.classList.toggle('burger-active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

sidebar_switcher.addEventListener('click', () => {
  const expanded = sidebar_switcher.getAttribute('aria-expanded') === 'true';
  sidebar_switcher.setAttribute('aria-expanded', !expanded);
  root.classList.toggle('aside-active');
  aside.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
