import outsideClick from './outside-click.js';

export default class DropDownMenu {
  constructor(dropdownMenus, activeClass = 'ativo', events = ['touchstart', 'click']) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = activeClass;
    this.events = events

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;

    element.classList.add(this.activeclass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeclass);
    });
  }

  addDropDownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus) {
      this.addDropDownMenuEvent();
    }
    return this;
  }
}
