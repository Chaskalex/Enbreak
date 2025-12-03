// Load header and footer components
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            return response.text();
        })
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
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
