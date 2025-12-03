
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

        // Scroll animation for value cards
        const observerOptions = {
            threshold: 0.01,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.value-card').forEach(card => {
            observer.observe(card);
        });

        // Scroll animation for service items
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-item').forEach(item => {
            serviceObserver.observe(item);
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

        // Initialize carousel
        window.addEventListener('load', () => {
            setupInfiniteCarousel();
            createDots();
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