document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('input[name="query"]');
    const tableBody = document.querySelector("table.items tbody");
    // Guardamos el contenido original de la tabla (todas las filas)
    const originalTableHTML = tableBody.innerHTML;

    function filterResults(term) {
        const searchTermLower = term.toLowerCase();
        // Restaurar el contenido original de la tabla en cada búsqueda
        tableBody.innerHTML = originalTableHTML;
        const rows = tableBody.querySelectorAll("tr");
        let hasResults = false;

        rows.forEach(row => {
            const playerCell = row.querySelector("td:nth-child(2)");
            const clubCell = row.querySelector("td:nth-child(4)");

            if (playerCell && clubCell) {
                const playerName = playerCell.innerText.toLowerCase();
                const clubName = clubCell.innerText.toLowerCase();

                // Si la fila NO coincide, se elimina del DOM
                if (playerName.includes(searchTermLower) || clubName.includes(searchTermLower)) {
                    hasResults = true;
                } else {
                    row.remove();
                }
            }
        });

        // Si no se encontró ninguna coincidencia, borrar todas las filas y mostrar el mensaje
        if (!hasResults) {
            tableBody.innerHTML = ""; // Borrar todas las filas
            const noResultsRow = document.createElement("tr");
            noResultsRow.id = "no-results";
            const noResultsCell = document.createElement("td");
            noResultsCell.setAttribute("colspan", "7");
            noResultsCell.style.textAlign = "center";
            noResultsCell.innerText = `No se encontraron resultados para "${term}"`;
            noResultsRow.appendChild(noResultsCell);
            tableBody.appendChild(noResultsRow);
        }
    }

    // Si la URL tiene el parámetro "query" (desde index.html), lo usamos para filtrar
    const urlParams = new URLSearchParams(window.location.search);
    const urlSearchTerm = urlParams.get('query');
    if (urlSearchTerm) {
        // Actualizamos el valor del input y aplicamos el filtro
        if (searchInput) {
            searchInput.value = urlSearchTerm;
        }
        filterResults(urlSearchTerm);
    }

    // Búsqueda en tiempo real mientras se escribe
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            filterResults(searchInput.value);
        });
    }
});
