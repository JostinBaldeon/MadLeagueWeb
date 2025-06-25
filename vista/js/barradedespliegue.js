    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-target');
            const content = document.querySelector(contentId);

            if (content) {
                const isExpanded = button.getAttribute('aria-expanded') === "true";
                button.setAttribute('aria-expanded', !isExpanded);
                content.classList.toggle('hidden');
            }
        });
    });

