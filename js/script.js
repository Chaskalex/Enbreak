        // Set active nav item based on current page
        document.addEventListener('DOMContentLoaded', function() {
            // Wait for header to load
            setTimeout(() => {
                const currentPath = window.location.pathname.toLowerCase();
                const navItems = document.querySelectorAll('.nav-item');

                // Remove active class from all nav items first
                navItems.forEach(item => item.classList.remove('active'));

                // Check if we're on the home page
                if (currentPath === '/' || currentPath === '/home' || currentPath === '/index.html' ||
                    currentPath.endsWith('/index.html') || currentPath === '' ||
                    currentPath.includes('/enbreak/') && !currentPath.includes('/pages/')) {
                    // Activate "Inicio" nav item
                    navItems.forEach(navItem => {
                        const navLink = navItem.querySelector('.nav-link');
                        const href = navLink?.getAttribute('href');
                        if (href && (href === 'index.html' || href === '/index.html' || href === '/' || href === '/home')) {
                            navItem.classList.add('active');
                        }
                    });
                    return;
                }

                // Check which category the current page belongs to
                navItems.forEach(navItem => {
                    const dropdownLinks = navItem.querySelectorAll('.dropdown a');

                    // Check if any dropdown link matches current page
                    dropdownLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href) {
                            // Extract the filename from the href
                            const hrefFileName = href.split('/').pop();
                            const currentFileName = currentPath.split('/').pop();

                            // Check if the current path contains the category (clases, biblioteca, soporte)
                            if (href.includes('/clases/') && currentPath.includes('/clases/')) {
                                navItem.classList.add('active');
                            } else if (href.includes('/biblioteca/') && currentPath.includes('/biblioteca/')) {
                                navItem.classList.add('active');
                            } else if (href.includes('/soporte/') && currentPath.includes('/soporte/')) {
                                navItem.classList.add('active');
                            } else if (currentFileName === hrefFileName && hrefFileName !== '') {
                                navItem.classList.add('active');
                            }
                        }
                    });
                });
            }, 200);
        });

        // Sticky Navbar on Scroll
        window.addEventListener('scroll', function() {
            const stickyWrapper = document.querySelector('.sticky-wrapper');
            const topHeader = document.querySelector('.top-header');

            if (stickyWrapper && topHeader) {
                const topHeaderHeight = topHeader.offsetHeight;

                if (window.pageYOffset > topHeaderHeight) {
                    stickyWrapper.classList.add('is-stuck');
                    // Add padding to body to prevent content jump
                    document.body.style.paddingTop = stickyWrapper.offsetHeight + 'px';
                } else {
                    stickyWrapper.classList.remove('is-stuck');
                    // Remove padding
                    document.body.style.paddingTop = '0';
                }
            }
        });

        let currentLang = 'es';

        function toggleLanguage(event) {
            event.stopPropagation();
            const selector = document.querySelector('.language-selector');
            selector.classList.toggle('active');
        }

        function changeLanguage(lang) {
            const btn = document.getElementById('currentLanguage');
            const dropdown = document.querySelector('.language-dropdown');
            
            if (lang === 'es') {
                btn.textContent = 'Español';
                dropdown.innerHTML = '<a href="#" onclick="changeLanguage(\'en\'); return false;">English</a>';
                currentLang = 'es';
            } else if (lang === 'en') {
                btn.textContent = 'English';
                dropdown.innerHTML = '<a href="#" onclick="changeLanguage(\'es\'); return false;">Español</a>';
                currentLang = 'en';
            }
            document.querySelector('.language-selector').classList.remove('active');
        }

        document.addEventListener('click', function(event) {
            const selector = document.querySelector('.language-selector');
            if (!selector.contains(event.target)) {
                selector.classList.remove('active');
            }
        });

        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('navMenu').classList.remove('active');
                    
                    // Update active nav item
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });

        // Premium scroll animation system with better thresholds
        const premiumObserverOptions = {
            threshold: 0.15,
            rootMargin: '-50px 0px -50px 0px'
        };

        // Value cards observer
        const valueObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    valueObserver.unobserve(entry.target);
                }
            });
        }, premiumObserverOptions);

        document.querySelectorAll('.value-card').forEach(card => {
            valueObserver.observe(card);
        });

        // Service header observer
        const serviceHeaderObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    serviceHeaderObserver.unobserve(entry.target);
                }
            });
        }, premiumObserverOptions);

        const serviceHeader = document.querySelector('.service-header');
        if (serviceHeader) {
            serviceHeaderObserver.observe(serviceHeader);
        }

        // Service cards observer
        const serviceCardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    serviceCardObserver.unobserve(entry.target);
                }
            });
        }, premiumObserverOptions);

        document.querySelectorAll('.service-card').forEach(card => {
            serviceCardObserver.observe(card);
        });

        // Counter animation for teacher stats
        function animateCounter(element, target, duration = 3000) {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start).toLocaleString();
                }
            }, 16);
        }

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        animateCounter(stat, target);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const teacherStats = document.querySelector('.teacher-stats');
        if (teacherStats) {
            statsObserver.observe(teacherStats);
        }

        // Fade-in animation for teacher section
        const teacherObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector('.teacher-image-wrapper').classList.add('animate');
                    document.querySelector('.teacher-content').classList.add('animate');
                    teacherObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const teacherSection = document.querySelector('.teacher-section');
        if (teacherSection) {
            teacherObserver.observe(teacherSection);
        }

        // Scroll animation for recursos items
        const recursosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.recurso-item').forEach(item => {
            recursosObserver.observe(item);
        });

        // Testimonials carousel functionality - Perfect infinite loop
        let currentIndex = 0;
        let autoplayTimer = null;
        const grid = document.getElementById('testimonials-grid');
        const originalCards = Array.from(document.querySelectorAll('.testimonial-card'));
        const totalOriginalCards = originalCards.length;

        // Drag functionality variables
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = 0;
        let dragStartIndex = 0;
        let initialTranslate = 0;

        // Clone cards for seamless infinite loop
        function setupInfiniteCarousel() {
            // Clear existing grid
            grid.innerHTML = '';

            // Add clones before original cards
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                grid.appendChild(clone);
            });

            // Add original cards
            originalCards.forEach(card => {
                grid.appendChild(card);
            });

            // Add clones after original cards
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                grid.appendChild(clone);
            });

            // Start at the first original card (after the first set of clones)
            currentIndex = totalOriginalCards;
            updateCarousel(false);
        }

        function updateCarousel(animated = true) {
            const allCards = grid.querySelectorAll('.testimonial-card');
            if (allCards.length === 0) return;

            // Fixed card width of 270px + 30px gap = 300px per card movement
            const cardWidth = 270;
            const gap = 30;
            const moveDistance = cardWidth + gap; // 300px

            // No offset needed - cards start aligned to show 4 full cards
            const offset = -(currentIndex * moveDistance);

            if (animated) {
                grid.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            } else {
                grid.style.transition = 'none';
            }

            grid.style.transform = `translateX(${offset}px)`;
            updateDots();
        }

        function moveCarousel(direction) {
            // Reset autoplay timer when user interacts
            resetAutoplay();

            currentIndex += direction;
            updateCarousel(true);

            // Check if we need to reset position for infinite loop
            setTimeout(() => {
                if (currentIndex >= totalOriginalCards * 2) {
                    // We're past the original cards, jump back to first original
                    currentIndex = totalOriginalCards;
                    updateCarousel(false);
                } else if (currentIndex < totalOriginalCards) {
                    // We're before the original cards, jump to last original
                    currentIndex = totalOriginalCards * 2 - 1;
                    updateCarousel(false);
                }
            }, 600);
        }

        function createDots() {
            const dotsContainer = document.getElementById('carousel-dots');
            dotsContainer.innerHTML = '';

            for (let i = 0; i < totalOriginalCards; i++) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                dot.onclick = () => goToSlide(i);
                dotsContainer.appendChild(dot);
            }
        }

        function goToSlide(index) {
            resetAutoplay();
            currentIndex = totalOriginalCards + index;
            updateCarousel(true);
        }

        function updateDots() {
            const dots = document.querySelectorAll('.carousel-dot');
            // Calculate which original card we're showing
            let actualIndex = currentIndex % totalOriginalCards;
            if (currentIndex >= totalOriginalCards && currentIndex < totalOriginalCards * 2) {
                actualIndex = currentIndex - totalOriginalCards;
            }

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === actualIndex);
            });
        }

        function startAutoplay() {
            autoplayTimer = setInterval(() => {
                moveCarousel(1);
            }, 5000);
        }

        function resetAutoplay() {
            clearInterval(autoplayTimer);
            startAutoplay();
        }

        // Drag functionality
        function touchStart(event) {
            isDragging = true;
            dragStartIndex = currentIndex;
            startPos = getPositionX(event);

            const cardWidth = 270;
            const gap = 30;
            const moveDistance = cardWidth + gap;

            // Store the initial position when dragging starts
            initialTranslate = -(currentIndex * moveDistance);
            currentTranslate = initialTranslate;
            prevTranslate = initialTranslate;

            animationID = requestAnimationFrame(animation);
            grid.classList.add('dragging');

            // Pause autoplay while dragging
            clearInterval(autoplayTimer);
        }

        function touchMove(event) {
            if (isDragging) {
                event.preventDefault();
                const currentPosition = getPositionX(event);
                const dragDistance = currentPosition - startPos;
                currentTranslate = initialTranslate + dragDistance;
            }
        }

        function touchEnd() {
            if (!isDragging) return;

            isDragging = false;
            cancelAnimationFrame(animationID);
            grid.classList.remove('dragging');

            const cardWidth = 270;
            const gap = 30;
            const moveDistance = cardWidth + gap;

            // Calculate how many cards we've moved based on total drag distance
            const movedBy = currentTranslate - initialTranslate;
            const cardsMoved = Math.round(-movedBy / moveDistance);

            // Update current index based on how many cards were dragged
            currentIndex = dragStartIndex + cardsMoved;

            // Clamp the index to prevent going too far
            const minIndex = 0;
            const maxIndex = totalOriginalCards * 3 - 1;
            currentIndex = Math.max(minIndex, Math.min(maxIndex, currentIndex));

            // Snap to the nearest card
            updateCarousel(true);

            // Check if we need to reset position for infinite loop
            setTimeout(() => {
                if (currentIndex >= totalOriginalCards * 2) {
                    currentIndex = totalOriginalCards + (currentIndex % totalOriginalCards);
                    updateCarousel(false);
                } else if (currentIndex < totalOriginalCards) {
                    currentIndex = totalOriginalCards + (currentIndex % totalOriginalCards);
                    updateCarousel(false);
                }
            }, 600);

            // Restart autoplay
            startAutoplay();
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            if (isDragging) {
                grid.style.transition = 'none';
                grid.style.transform = `translateX(${currentTranslate}px)`;
                requestAnimationFrame(animation);
            }
        }

        // Add drag event listeners to the grid
        function setupDragListeners() {
            grid.style.userSelect = 'none';

            // Mouse events
            grid.addEventListener('mousedown', (e) => {
                e.preventDefault();
                touchStart(e);
            });

            grid.addEventListener('mousemove', (e) => {
                touchMove(e);
            });

            grid.addEventListener('mouseup', (e) => {
                touchEnd(e);
            });

            grid.addEventListener('mouseleave', (e) => {
                if (isDragging) {
                    touchEnd(e);
                }
            });

            // Touch events
            grid.addEventListener('touchstart', (e) => {
                touchStart(e);
            }, { passive: false });

            grid.addEventListener('touchmove', (e) => {
                if (isDragging) {
                    touchMove(e);
                }
            }, { passive: false });

            grid.addEventListener('touchend', touchEnd);

            // Prevent context menu on long press
            grid.addEventListener('contextmenu', (e) => e.preventDefault());

            // Prevent default drag behavior on images and links
            grid.querySelectorAll('img, a').forEach(element => {
                element.addEventListener('dragstart', (e) => e.preventDefault());
                element.style.userSelect = 'none';
            });
        }

        // Initialize carousel
        window.addEventListener('load', () => {
            setupInfiniteCarousel();
            createDots();
            setupDragListeners();
            startAutoplay();
        });

        window.addEventListener('resize', () => {
            updateCarousel(false);
        });

        // Teacher tabs functionality
        function switchTab(tabName) {
            // Remove active class from all tabs
            document.querySelectorAll('.teacher-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            // Hide all tab contents
            document.querySelectorAll('.teacher-tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to clicked tab
            event.target.classList.add('active');

            // Show corresponding content
            document.getElementById(tabName + '-content').classList.add('active');

            // Show/hide teacher name based on tab
            const teacherName = document.getElementById('teacher-name');
            if (tabName === 'profesor') {
                teacherName.style.display = 'inline-block';
            } else {
                teacherName.style.display = 'none';
            }
        }