document.addEventListener("DOMContentLoaded", function () {
    // Obtener el parámetro 'query' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('query');

    if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        const rows = document.querySelectorAll("table.items tbody tr");

        let hasResults = false;

        // Eliminar mensajes anteriores
        document.querySelectorAll(".no-results-message").forEach(el => el.remove());

        rows.forEach(row => {
            const playerCell = row.querySelector("td:nth-child(2)");
            const clubCell = row.querySelector("td:nth-child(4)");

            if (playerCell && clubCell) {
                const playerName = playerCell.innerText.toLowerCase();
                const clubName = clubCell.innerText.toLowerCase();

                if (playerName.includes(searchTermLower) || clubName.includes(searchTermLower)) {
                    row.style.display = ""; // Mostrar la fila si coincide
                    hasResults = true;
                } else {
                    row.style.display = "none"; // Ocultar la fila si no coincide
                }
            }
        });

        if (!hasResults) {
            const tableBody = document.querySelector("table.items tbody");

            // Eliminar filas antiguas (si no hay resultados)
            rows.forEach(row => row.remove());

            // Crear fila con mensaje de "No se encontraron resultados"
            const noResultsRow = document.createElement("tr");
            const noResultsCell = document.createElement("td");
            noResultsCell.setAttribute("colspan", "7");
            noResultsCell.style.textAlign = "center";
            noResultsCell.classList.add("no-results-message");
            noResultsCell.innerText = `No se encontraron resultados para "${searchTerm}"`;
            noResultsRow.appendChild(noResultsCell);
            tableBody.appendChild(noResultsRow);
        }
    } else {
        console.log("No se proporcionó ningún término de búsqueda en la URL.");
    }
});
