export default function modal() {
  const openModalBtn = document.querySelector("[data-modal='abrir']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const closeModalBtn = document.querySelector("[data-modal='fechar']");

  function toggleModal(event) {
    event.preventDefault();

    if (event.target === this) {
      return modalContainer.classList.toggle("ativo");
    }
  }

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", toggleModal);
}
