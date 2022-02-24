export default class ScrollSuave {
  constructor(links, options = {
    block: 'start',
    behavior: 'smooth',
  }) {
    this.linksInternos = Array.from(links);
    this.options = options;

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', (e) => this.scrollToSection(e));
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }

}
