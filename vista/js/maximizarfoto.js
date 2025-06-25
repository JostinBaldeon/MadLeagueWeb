// Obtener los elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

// Agregar el evento al contenedor de la imagen
document.querySelector(".data-header__profile-container").addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src; // Obtener la fuente de la imagen
    modal.style.display = "flex";
    modalImg.src = imgSrc; // Mostrar la imagen seleccionada
});

// Cerrar el modal al hacer clic en la X
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
