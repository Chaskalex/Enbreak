// Load header and footer components
function loadComponent(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Determine the correct path based on current location
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const basePath = depth === 0 ? '' : '../'.repeat(depth);

    Promise.all([
        loadComponent('header-placeholder', basePath + 'header.html'),
        loadComponent('footer-placeholder', basePath + 'footer.html')
    ]).then(() => {
        // Wait for DOM to update after components are loaded
        setTimeout(() => {
            // Always fix logo images for all pages
            const logoImg = document.getElementById('logo-img');
            const footerLogoImg = document.getElementById('footer-logo-img');

            if (depth > 0) {
                // Fix navigation paths based on depth
                document.querySelectorAll('[data-nav-link]').forEach(link => {
                    const href = link.getAttribute('href');
                    // Don't modify absolute paths (starting with /)
                    if (!href.startsWith('/')) {
                        link.setAttribute('href', basePath + href);
                    }
                });

                // Fix logo images for subpages
                if (logoImg) logoImg.setAttribute('src', basePath + 'assets/logo/logo.png');
                if (footerLogoImg) footerLogoImg.setAttribute('src', basePath + 'assets/logo/logo2.png');
            }

            // Hide loader and show page
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('hidden');
            }
            document.body.classList.add('loaded');
        }, 0);
    });
});
