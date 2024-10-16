// JavaScript for Scroll-Based Animation
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.8; // When the section is 80% in view

        if (sectionTop < triggerHeight) {
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealSection);
