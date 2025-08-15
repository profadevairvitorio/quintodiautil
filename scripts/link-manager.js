document.addEventListener("DOMContentLoaded", () => {
    const isIndexPage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html');
    const pathPrefix = isIndexPage ? '' : '../';

    const links = {
        home: `${pathPrefix}index.html`,
        privacy: `${pathPrefix}pages/politica-de-privacidade.html`,
        terms: `${pathPrefix}pages/termos-de-uso.html`,
        about: `${pathPrefix}pages/sobre.html`,
        contact: `${pathPrefix}pages/contato.html`,
        creator: 'https://vitoriosistemas.com'
    };

    const loadFooter = () => {
        const footerPlaceholder = document.querySelector("#footer-placeholder");
        if (!footerPlaceholder) return;

        fetch(`${pathPrefix}pages/footer.html`)
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
                populateLinks();
                updateYear();
            });
    };

    const populateLinks = () => {
        document.querySelectorAll('[data-link-id]').forEach(element => {
            const linkId = element.getAttribute('data-link-id');
            if (links[linkId]) {
                element.href = links[linkId];
            }
        });
    };

    const updateYear = () => {
        const currentYearSpan = document.querySelector("#current-year");
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

    loadFooter();
    populateLinks();
});
