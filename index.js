document.addEventListener('DOMContentLoaded', () => {
    // 1. Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
            splashScreen.addEventListener('transitionend', () => {
                splashScreen.remove(); // Remove from DOM after animation
            });
        }, 2000); // 2 seconds
    }

    // 2. Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active'); // Optional: for animating hamburger icon
        });

        // Close nav menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    // 3. Smooth Scroll for "Start Creating Wishes!" button
    const scrollToBtn = document.querySelector('.scroll-to-btn');
    if (scrollToBtn) {
        scrollToBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // No complex particle effect JS included here for performance and simplicity.
    // If desired, integrate a lightweight particle library or more complex CSS.
});