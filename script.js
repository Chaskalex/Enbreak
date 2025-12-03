document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'open' class on the navigation list
            navList.classList.toggle('open');
            // Optional: Change the button appearance (e.g., to an 'X')
            menuToggle.classList.toggle('active');
        });

        // Optional: Close the menu when a link is clicked (useful for single-page sites)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('open')) {
                    navList.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
});