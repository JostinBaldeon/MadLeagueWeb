const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const navbar = document.querySelector('.main-navbar');

if (menuToggle && closeMenu && navbar) {
  // Abrir el menú
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Cerrar el menú desde el botón dentro del menú
  closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}
