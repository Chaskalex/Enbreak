document.addEventListener('DOMContentLoaded', function() {
    if (typeof activityConfig === 'undefined') {
        console.warn('activityConfig is not defined. Tab navigation disabled.');
        return;
    }

    const tabs = activityConfig.tabs;
    const type = activityConfig.type;
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const navContainer = document.querySelector('.activity-nav');

    let currentTabIndex = 0;

    const initialActiveBtn = document.querySelector('.tab-btn.active');
    if (initialActiveBtn && initialActiveBtn.dataset.tab) {
        const initialIndex = tabs.indexOf(initialActiveBtn.dataset.tab);
        if (initialIndex !== -1) currentTabIndex = initialIndex;
    }

    function switchTab(tabId, scrollToTop = false) {
        tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
        tabContents.forEach(content => content.classList.toggle('active', content.id === tabId));
        currentTabIndex = tabs.indexOf(tabId);
        updateNavButtons();
        if (typeof resizeCanvas === 'function') setTimeout(resizeCanvas, 50);
        if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateNavButtons() {
        if (!navContainer) return;

        if (type === 'listening') {
            if (currentTabIndex === tabs.length - 1) {
                navContainer.style.display = 'none';
                return;
            }
            navContainer.style.display = 'flex';
            if (btnBack) {
                btnBack.disabled = currentTabIndex === 0;
                btnBack.classList.toggle('hidden', currentTabIndex === 0);
            }
            if (btnNext) {
                btnNext.innerHTML = currentTabIndex === tabs.length - 2
                    ? 'Back to Activities'
                    : 'Next <i class="fa-solid fa-arrow-right"></i>';
            }
        }

        if (type === 'vocabulary') {
            navContainer.style.display = 'flex';
            if (btnBack) {
                btnBack.disabled = currentTabIndex === 0;
                btnBack.classList.toggle('hidden', currentTabIndex === 0);
            }
            if (btnNext) {
                btnNext.innerHTML = currentTabIndex === tabs.length - 1
                    ? 'Back to Activities'
                    : 'Next <i class="fa-solid fa-arrow-right"></i>';
            }
        }

        if (type === 'speaking') {
        }

        if (type === 'writing') {
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab, false);
        });
    });

    if (btnBack) {
        btnBack.addEventListener('click', function() {
            if (currentTabIndex > 0) switchTab(tabs[currentTabIndex - 1], true);
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', function() {
            if (type === 'listening' && currentTabIndex === tabs.length - 2) {
                window.location.href = '../actividades.html';
                return;
            }
            if (type === 'vocabulary' && currentTabIndex === tabs.length - 1) {
                window.location.href = '../actividades.html';
                return;
            }
            if (currentTabIndex < tabs.length - 1) switchTab(tabs[currentTabIndex + 1], true);
        });
    }

    updateNavButtons();
    window.switchTab = switchTab;
});