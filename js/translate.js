// Language selector - Global scope
let currentLang = 'es';
let dropdownInBody = false;

// Translation Dictionary
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.classes": "Clases",
        "nav.plans": "Ver Planes",
        "nav.book": "Agendar Clase",
        "nav.courses": "Clases Grupales",
        "nav.test": "Test de Nivel",
        "nav.library": "Biblioteca",
        "nav.mini": "Mini-clases",
        "nav.podcast": "Podcast",
        "nav.activities": "Actividades",
        "nav.gallery": "Galería",
        "nav.support": "Soporte",
        "nav.help": "Ayuda",
        "nav.faq": "Preguntas Frecuentes",
        "nav.terms": "Términos y Condiciones",
        "nav.contact": "Contacto",
        "nav.cta": "Agendar Ahora",
        "footer.quick": "Enlaces Rápidos",
        "footer.contact": "Contacto",
        "footer.social": "Redes Sociales",
        "footer.rights": "Todos los derechos reservados.",
        // Home - Hero
        "hero.slide1.title": "<span class=\"white\">Clases de Inglés</span> <span class=\"white\">Particulares</span>",
        "hero.slide1.desc": "Clases 100% online adaptadas a tu ritmo y necesidades. Comienza a aprender hoy.",
        "hero.slide2.title": "<span class=\"white\">Material de Estudio</span> <span class=\"white\">Gratuito</span>",
        "hero.slide2.desc": "Mejora tu inglés con nuestros recursos gratuitos, mini-clases y actividades prácticas.",
        // Home - Value
        "value.flex.title": "Horarios Flexibles",
        "value.flex.desc": "Diseñados para ajustarse a tu rutina y estilo de vida. Clases 100% online.",
        "value.exam.title": "Preparación para Exámenes",
        "value.exam.desc": "Entrenamiento específico para certificaciones de Cambridge, TOEFL, IELTS, y más.",
        "value.price.title": "Precios Justos",
        "value.price.desc": "Clases de calidad sin pagar de más. Precios adaptados a tus requerimientos.",
        "value.free.title": "Contenido Gratuito",
        "value.free.desc": "Accede a la biblioteca de recursos para encontrar videos, podcasts y mini-clases.",
        // Home - Services
        "services.label": "Oferta Educativa",
        "services.title": "Clases de inglés personalizadas y recursos educativos",
        "services.desc": "<span class=\"title-highlight\">Enbreak</span> te acompaña en cada etapa de tu aprendizaje con opciones adaptadas a tu nivel, horarios flexibles y material educativo de calidad para alcanzar tus objetivos en inglés.",
        "services.private.title": "Clases Particulares",
        "services.private.desc": "Sesiones completamente adaptadas a tus necesidades y objetivos personales con atención exclusiva. Horarios flexibles.",
        "services.group.title": "Clases Grupales",
        "services.group.desc": "Aprende en conjunto con otros estudiantes de tu mismo nivel en un ambiente colaborativo y dinámico. Grupos reducidos de 6 estudiantes máximo.",
        "services.group.btn": "Ver Cursos",
        "services.test.title": "Test de Nivelación",
        "services.test.desc": "Descubre tu nivel de inglés actual con un test diagnóstico basado en el Marco Común Europeo de Referencia (CEFR).",
        "services.test.btn": "Realizar Test",
        "services.exam.title": "Preparación para Exámenes",
        "services.exam.desc": "Entrenamiento específico para certificaciones de Cambridge, TOEFL, IELTS y más.",
        "services.mini.title": "Mini-clases",
        "services.mini.desc": "Cápsulas educativas para estudiar conceptos específicos de forma eficiente y práctica.",
        "services.mini.btn": "Estudiar",
        "services.activities.title": "Actividades",
        "services.activities.desc": "Practica las 4 habilidades del idioma: Reading, Listening, Writing y Speaking con ejercicios interactivos.",
        "services.activities.btn": "Practicar",
        "services.academic.title": "Acompañamiento Académico",
        "services.academic.desc": "Asistencia personalizada en tareas, informes, proyectos y presentaciones académicas.",
        "services.academic.btn": "Solicitar Ayuda",
        "services.podcast.title": "Podcasts",
        "services.podcast.desc": "Accede a contenido educativo y relevante para escuchar donde estés y cuando quieras.",
        "services.podcast.btn": "Escuchar",
        "services.business.title": "Empresas",
        "services.business.desc": "Cursos grupales de inglés diseñados para mejorar las habilidades del idioma en tu equipo de trabajo.",
        "services.business.btn": "Contáctanos",
        // Home - Teacher
        "teacher.tab.prof": "Profesor",
        "teacher.tab.career": "Carrera",
        "teacher.bio.profesor": "<p>¡Hola! Soy Alexis. Profesor de Inglés como Lengua Extranjera (EFL Teacher). Me gradué de la <span class=\"highlight\">Pontificia Universidad Católica de Valparaíso</span>, institución donde también he trabajado como docente durante los últimos cinco años.</p>",
        "teacher.bio.carrera": "<p><span class=\"highlight\">2011:</span> Certificado en Productividad Digital (Universidad de Concepción)</p><p><span class=\"highlight\">2018:</span> Acreditación C1 Advanced (Cambridge University)</p><p><span class=\"highlight\">2020:</span> Licenciado en Educación (PUCV) - Distinción Cum Laude</p><p><span class=\"highlight\">2020:</span> Profesor de Inglés (PUCV) - Proyecto de Título Destacado: Enbreak</p><p><span class=\"highlight\">2024:</span> Designado como Invigilator y Speaking Examiner (Cambridge University)</p>",
        "teacher.bio.enbreak": "<p>En 2020 creé la plataforma online <span class=\"highlight\">English Break (Enbreak)</span> como mi proyecto de título. En 2025 decidí llevar a Enbreak al siguiente nivel, transformándolo en un espacio de aprendizaje virtual abierto a todos y todas.</p><p>La misión de Enbreak es clara: ayudarte a dominar el inglés de manera práctica y libre de estrés. <span class=\"highlight\">Toma un break con Enbreak</span> y comienza a construir confianza, superar miedos y avanzar paso a paso hacia tus objetivos.</p>",
        "teacher.stats.exp": "Años de Experiencia",
        "teacher.stats.students": "Estudiantes",
        "teacher.stats.courses": "Cursos",
        "teacher.stats.countries": "Países",
        // Home - Testimonials
        "testimonials.title": "Lo Que Dicen Mis Estudiantes",
        "testimonials.desc": "Descubre las experiencias reales de estudiantes que han mejorado su inglés conmigo",
        "role.software": "Ingeniera de Software",
        "role.student": "Estudiante Universitario",
        "role.sales": "Ejecutiva de Ventas",
        "role.entrepreneur": "Emprendedor",
        "role.designer": "Diseñadora Gráfica",
        "role.manager": "Gerente de Proyectos",
        // Home - Form
        "form.title": "¿Tienes una Pregunta?",
        "form.desc": "Envíanos un mensaje y cuéntanos qué necesitas.",
        "form.name": "Nombre",
        "form.lastname": "Apellido",
        "form.select": "Selecciona una opción",
        "form.opt.private": "Clases Particulares",
        "form.opt.group": "Clases Grupales",
        "form.opt.academic": "Ayuda Académica",
        "form.opt.exam": "Exámenes Internacionales",
        "form.opt.other": "Otro",
        "form.email": "Correo",
        "form.message": "Mensaje",
        "form.submit": "Envía tu Consulta",
        // Home - Resources
        "resources.title": "Recursos Recientes",
        "resources.desc": "Explora los últimos recursos educativos: mini-clases, podcasts y contenido diseñado para potenciar tu aprendizaje del inglés.",
        "resource.cat": "Actividad",
        "resource.btn": "Ver recurso"
    },
    en: {
        "nav.home": "Home",
        "nav.classes": "Classes",
        "nav.plans": "View Plans",
        "nav.book": "Book a Class",
        "nav.courses": "Group Classes",
        "nav.test": "Placement Test",
        "nav.library": "Library",
        "nav.mini": "Mini-classes",
        "nav.podcast": "Podcast",
        "nav.activities": "Activities",
        "nav.gallery": "Gallery",
        "nav.support": "Support",
        "nav.help": "Help",
        "nav.faq": "FAQ",
        "nav.terms": "Terms & Conditions",
        "nav.contact": "Contact",
        "nav.cta": "Book Now",
        "footer.quick": "Quick Links",
        "footer.contact": "Contact",
        "footer.social": "Social Media",
        "footer.rights": "All rights reserved.",
        // Home - Hero
        "hero.slide1.title": "<span class=\"white\">Private English</span> <span class=\"white\">Classes</span>",
        "hero.slide1.desc": "100% online classes adapted to your pace and needs. Start learning today.",
        "hero.slide2.title": "<span class=\"white\">Free Study</span> <span class=\"white\">Material</span>",
        "hero.slide2.desc": "Improve your English with our free resources, mini-classes, and practical activities.",
        // Home - Value
        "value.flex.title": "Flexible Schedules",
        "value.flex.desc": "Designed to fit your routine and lifestyle. 100% online classes.",
        "value.exam.title": "Exam Preparation",
        "value.exam.desc": "Specific training for Cambridge, TOEFL, IELTS certifications, and more.",
        "value.price.title": "Fair Prices",
        "value.price.desc": "Quality classes without overpaying. Prices adapted to your requirements.",
        "value.free.title": "Free Content",
        "value.free.desc": "Access the resource library to find videos, podcasts, and mini-classes.",
        // Home - Services
        "services.label": "Educational Offer",
        "services.title": "Personalized English classes and educational resources",
        "services.desc": "<span class=\"title-highlight\">Enbreak</span> accompanies you at every stage of your learning with options adapted to your level, flexible schedules, and quality educational material to reach your English goals.",
        "services.private.title": "Private Classes",
        "services.private.desc": "Sessions completely adapted to your needs and personal goals with exclusive attention. Flexible schedules.",
        "services.group.title": "Group Classes",
        "services.group.desc": "Learn together with other students of your level in a collaborative environment. Small groups of 6 students max.",
        "services.group.btn": "View Courses",
        "services.test.title": "Placement Test",
        "services.test.desc": "Discover your current English level with a diagnostic test based on the Common European Framework of Reference (CEFR).",
        "services.test.btn": "Take Test",
        "services.exam.title": "Exam Preparation",
        "services.exam.desc": "Specific training for Cambridge, TOEFL, IELTS certifications, and more.",
        "services.mini.title": "Mini-classes",
        "services.mini.desc": "Educational capsules to study specific concepts efficiently and practically.",
        "services.mini.btn": "Study",
        "services.activities.title": "Activities",
        "services.activities.desc": "Practice the 4 language skills: Reading, Listening, Writing, and Speaking with interactive exercises.",
        "services.activities.btn": "Practice",
        "services.academic.title": "Academic Support",
        "services.academic.desc": "Personalized assistance with homework, reports, projects, and academic presentations.",
        "services.academic.btn": "Request Help",
        "services.podcast.title": "Podcasts",
        "services.podcast.desc": "Access educational and relevant content to listen to wherever and whenever you want.",
        "services.podcast.btn": "Listen",
        "services.business.title": "Business",
        "services.business.desc": "Group English courses designed to improve language skills in your work team.",
        "services.business.btn": "Contact Us",
        // Home - Teacher
        "teacher.tab.prof": "Teacher",
        "teacher.tab.career": "Career",
        "teacher.bio.profesor": "<p>Hello! I'm Alexis. English as a Foreign Language (EFL) Teacher. I graduated from <span class=\"highlight\">Pontificia Universidad Católica de Valparaíso</span>, where I have also worked as a teacher for the last five years.</p>",
        "teacher.bio.carrera": "<p><span class=\"highlight\">2011:</span> Certificate in Digital Productivity (University of Concepción)</p><p><span class=\"highlight\">2018:</span> C1 Advanced Accreditation (Cambridge University)</p><p><span class=\"highlight\">2020:</span> Bachelor in Education (PUCV) - Cum Laude Distinction</p><p><span class=\"highlight\">2020:</span> English Teacher (PUCV) - Outstanding Degree Project: Enbreak</p><p><span class=\"highlight\">2024:</span> Designated as Invigilator and Speaking Examiner (Cambridge University)</p>",
        "teacher.bio.enbreak": "<p>In 2020 I created the online platform <span class=\"highlight\">English Break (Enbreak)</span> as my degree project. In 2025 I decided to take Enbreak to the next level, transforming it into a virtual learning space open to everyone.</p><p>Enbreak's mission is clear: to help you master English in a practical and stress-free way. <span class=\"highlight\">Take a break with Enbreak</span> and start building confidence, overcoming fears, and advancing step by step towards your goals.</p>",
        "teacher.stats.exp": "Years of Experience",
        "teacher.stats.students": "Students",
        "teacher.stats.courses": "Courses",
        "teacher.stats.countries": "Countries",
        // Home - Testimonials
        "testimonials.title": "What My Students Say",
        "testimonials.desc": "Discover real experiences from students who have improved their English with me",
        "role.software": "Software Engineer",
        "role.student": "University Student",
        "role.sales": "Sales Executive",
        "role.entrepreneur": "Entrepreneur",
        "role.designer": "Graphic Designer",
        "role.manager": "Project Manager",
        // Home - Form
        "form.title": "Have a Question?",
        "form.desc": "Send us a message and tell us what you need.",
        "form.name": "Name",
        "form.lastname": "Last Name",
        "form.select": "Select an option",
        "form.opt.private": "Private Classes",
        "form.opt.group": "Group Classes",
        "form.opt.academic": "Academic Help",
        "form.opt.exam": "International Exams",
        "form.opt.other": "Other",
        "form.email": "Email",
        "form.message": "Message",
        "form.submit": "Send Inquiry",
        // Home - Resources
        "resources.title": "Recent Resources",
        "resources.desc": "Explore the latest educational resources: mini-classes, podcasts, and content designed to boost your English learning.",
        "resource.cat": "Activity",
        "resource.btn": "View resource"
    }
};

window.toggleLanguage = function(event) {
    event.stopPropagation();
    const selector = document.querySelector('.language-selector');
    const dropdown = document.querySelector('.language-dropdown');
    const btn = event.currentTarget;

    if (selector && dropdown && btn) {
        const isActive = selector.classList.contains('active');

        if (!isActive) {
            // Opening dropdown
            selector.classList.add('active');

            // Move to body and position
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
            // Closing dropdown
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

    // Save preference and apply translations
    localStorage.setItem('enbreak_lang', lang);
    applyTranslations(lang);

    // Close dropdown
    selector.classList.remove('active');
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    dropdown.style.transform = 'translateY(-10px)';
};

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Add support for HTML translations
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

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

// Apply saved language on component load
document.addEventListener('componentsLoaded', function() {
    const savedLang = localStorage.getItem('enbreak_lang') || 'es';
    // Initialize the UI state without animation
    changeLanguage(savedLang);
});