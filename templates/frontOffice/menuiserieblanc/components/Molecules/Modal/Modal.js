export function ModalFunction() {
  const openModalButtons = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".Modal");

  openModalButtons.forEach(button => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-id");
      const modalToOpen = document.querySelector(`.Modal[data-id="${modalId}"]`);
      if (modalToOpen) {
        toggleModal(modalToOpen);
      }
    });
  });

  modals.forEach(modal => {
    const closeIcon = modal.querySelector(".close-icon");
    const closeButton = modal.querySelector(".close-button");

    closeIcon.addEventListener("click", function () {
      toggleModal(modal);
    });
    closeButton.addEventListener("click", function () {
      toggleModal(modal);
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        toggleModal(modal);
      }
    });
  });
}

function toggleModal(modal) {
  modal.classList.toggle("show-modal");
}
