import outsideClick from './outside-click.js';

export default class MobileMenu {
  constructor(btnMenu, menuList, events = ['touchstart', 'click']) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();

    this.btnMenu.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.btnMenu.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMobileMenuEvents() {
    this.events.forEach((userEvent) => {
      this.btnMenu.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addMobileMenuEvents();
    }
    return this;
  }
}
