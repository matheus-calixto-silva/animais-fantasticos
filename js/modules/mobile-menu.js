import outsideClick from './outside-click.js';

export default function menuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];

  function openMenu(e) {
    e.preventDefault();

    btnMenu.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, events, () => {
      btnMenu.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (btnMenu) {
    events.forEach((userEvent) => {
      btnMenu.addEventListener(userEvent, openMenu);
    });
  }
}
