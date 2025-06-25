document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las celdas con estadísticas
    const statCells = document.querySelectorAll(".erfolg_table_saison");

    statCells.forEach(cell => {
        // Obtiene el valor de la estadística (desde el contenido o atributo data-value)
        const statValue = parseInt(cell.getAttribute("data-value") || cell.textContent.trim(), 10);

        // Determina el color según el rango de valores
        let color = "white"; // Por defecto, negro para valores menores a 75
        if (statValue >= 75 && statValue <= 79) {
            color = "green";
        } else if (statValue >= 80 && statValue <= 89) {
            color = "yellow";
        } else if (statValue >= 90 && statValue <= 94) {
            color = "orange";
        } else if (statValue >= 95 && statValue <= 99) {
            color = "red";
        }

        // Aplica el color al texto de la celda
        cell.style.color = color;
        cell.style.backgroundColor = "black";
    });
});
