export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    }
    this.tooltipBox.style.left = `${e.pageX + 20}px`;
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipEvents() {
    this.tooltips.forEach((item) => item.addEventListener('mouseover', this.onMouseOver));
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvents();
    }
    return this;
  }
}
