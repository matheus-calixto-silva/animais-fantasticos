export default class Modal {
  constructor(openModalBtn, closeModalBtn, modalContainer) {
    this.openModalBtn = document.querySelector(openModalBtn);
    this.closeModalBtn = document.querySelector(closeModalBtn);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClickModal = this.outsideClickModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  outsideClickModal(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal(e);
    }
  }

  addModalEvents() {
    this.openModalBtn.addEventListener('click', this.eventToggleModal);
    this.closeModalBtn.addEventListener('click', this.outsideClickModal);
    this.modalContainer.addEventListener('click', this.eventToggleModal);
  }

  init() {
    if (this.openModalBtn && this.closeModalBtn && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
