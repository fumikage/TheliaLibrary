export function ToggleMenuFunction() {
  const openToggleMenuButtons = document.querySelectorAll('.open-toggleMenu');
  const toggleMenus = document.querySelectorAll('.ToggleMenu');

  openToggleMenuButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const toggleMenuId = this.getAttribute('data-id');
      const toggleMenuToOpen = document.querySelector(
        `.ToggleMenu[data-id="${toggleMenuId}"]`
      );
      if (toggleMenuToOpen) {
        toggleMenu(toggleMenuToOpen);
      }
    });
  });

  toggleMenus.forEach((toggledMenu) => {
    const closeButton = toggledMenu.querySelector('.close-button');
    const closeIcon = toggledMenu.querySelector('.close-icon');
    window.addEventListener('click', function (event) {
      if (event.target === toggledMenu) {
        toggleMenu(toggledMenu);
      }
    });
    closeButton.addEventListener('click', function () {
      toggleMenu(toggledMenu);
    });

    closeIcon.addEventListener('click', function () {
      toggleMenu(toggledMenu);
    });
  });
}

function toggleMenu(toggledMenu) {
  toggledMenu.classList.toggle('show-toggleMenu');
}
