const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle do menu mobile
navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Destacar menu conforme scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 80; // 80px compensando header fixo
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section) {
            if (
                scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
