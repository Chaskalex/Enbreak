let currentLang = 'es';
let dropdownInBody = false;

window.toggleLanguage = function(event) {
    event.stopPropagation();
    const selector = document.querySelector('.language-selector');
    const dropdown = document.querySelector('.language-dropdown');
    const btn = event.currentTarget;

    if (selector && dropdown && btn) {
        const isActive = selector.classList.contains('active');

        if (!isActive) {
            selector.classList.add('active');

            if (!dropdownInBody) {
                document.body.appendChild(dropdown);
                dropdownInBody = true;
            }

            const rect = btn.getBoundingClientRect();
            dropdown.style.position = 'fixed';
            dropdown.style.top = (rect.bottom + 5) + 'px';
            dropdown.style.left = (rect.left) + 'px';
            dropdown.style.zIndex = '99999';
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
        } else {
            selector.classList.remove('active');
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(-10px)';
        }
    }
};

window.changeLanguage = function(lang) {
    const btn = document.getElementById('currentLanguage');
    const flag = document.getElementById('currentFlag');
    const dropdown = document.querySelector('.language-dropdown');
    const selector = document.querySelector('.language-selector');

    if (lang === 'es') {
        btn.textContent = 'Español';
        flag.className = 'fi fi-es language-flag';
        dropdown.innerHTML = '<a href="#" onclick="changeLanguage(\'en\'); return false;"><span class="fi fi-gb"></span> English</a>';
        currentLang = 'es';
    } else if (lang === 'en') {
        btn.textContent = 'English';
        flag.className = 'fi fi-gb language-flag';
        dropdown.innerHTML = '<a href="#" onclick="changeLanguage(\'es\'); return false;"><span class="fi fi-es"></span> Español</a>';
        currentLang = 'en';
    }

    localStorage.setItem('enbreak_lang', lang);

    selector.classList.remove('active');
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    dropdown.style.transform = 'translateY(-10px)';
};

document.addEventListener('click', function(event) {
    const selector = document.querySelector('.language-selector');
    const dropdown = document.querySelector('.language-dropdown');

    if (selector && dropdown && !selector.contains(event.target) && !dropdown.contains(event.target)) {
        selector.classList.remove('active');
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
    }
});

document.addEventListener('componentsLoaded', function() {
    const savedLang = localStorage.getItem('enbreak_lang') || 'es';
    changeLanguage(savedLang);
});
