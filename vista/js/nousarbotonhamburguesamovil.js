// Seleccionamos los elementos necesarios
const profileImageContainer = document.getElementById('fotoauswahlOeffnen'); // Imagen de perfil
const closeMenuButton = document.querySelector('.close-menu'); // Botón de cerrar menú
const overlay = document.createElement('div'); // Creamos la capa de bloqueo

// Añadimos la capa de bloqueo al body
document.body.appendChild(overlay);

// Variable para saber si la imagen está maximizada
let isImageMaximized = false;

// Función para maximizar la imagen
function maximizeImage() {
    isImageMaximized = true;
    overlay.classList.add('active'); // Muestra el overlay (bloquea la página)
}

// Función para minimizar la imagen
function minimizeImage() {
    isImageMaximized = false;
    overlay.classList.remove('active'); // Oculta el overlay (desbloquea la página)
}

// Evento al hacer clic en la imagen de perfil
profileImageContainer.addEventListener('click', () => {
    if (isImageMaximized) {
        minimizeImage(); // Minimiza si ya está maximizada
    } else {
        maximizeImage(); // Maximiza si no está maximizada
    }
});

// Evento para cerrar el overlay solo cuando se hace clic en el botón de cerrar
closeMenuButton.addEventListener('click', (event) => {
    if (isImageMaximized) {
        minimizeImage(); // Minimiza la imagen cuando se cierra
    }
});
