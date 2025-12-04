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
    Promise.all([
        loadComponent('header-placeholder', '/header.html'),
        loadComponent('footer-placeholder', '/footer.html')
    ]).then(() => {
        // Hide loader and show page
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('hidden');
        }
        document.body.classList.add('loaded');
    });
});
