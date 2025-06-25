
    let currentPage = 1;
    const rowsPerPage = 500;
    const rows = Array.from(document.querySelectorAll(".items tbody tr"));
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function displayPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? "table-row" : "none";
        });

        updatePageButtons();
    }

    function updatePageButtons() {
        const pageNumbers = document.querySelector(".page-numbers");
        pageNumbers.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.onclick = () => goToPage(i);
            if (i === currentPage) {
                button.classList.add("active");
            }
            pageNumbers.appendChild(button);
        }

        document.querySelector(".prev-page").disabled = currentPage === 1;
        document.querySelector(".next-page").disabled = currentPage === totalPages;
    }

    function goToPage(page) {
        currentPage = page;
        displayPage(currentPage);
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    }

    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        displayPage(currentPage);
    });

