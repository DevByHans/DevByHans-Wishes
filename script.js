document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById('splash');
    const mainContent = document.querySelector('.container');

    // Check if a splash screen exists on the current page (typically index.html)
    if (splash) {
        // If it's the index page (with a splash screen), apply the splash logic
        setTimeout(() => {
            if (splash) {
                splash.classList.add('hidden'); // Hide the splash screen with transition
            }

            // After splash hides, show the main content with its animation
            if (mainContent) {
                mainContent.classList.add('show'); // Add 'show' class to trigger .container animation
            }
        }, 2000); // Splash screen duration (2 seconds)
    } else {
        // If there's no splash screen (e.g., About, Contact, Privacy, Terms pages),
        // ensure the main content is immediately visible.
        // We've set 'container show' directly in HTML for these pages,
        // so this 'else' block primarily acts as a fallback or for consistency.
        if (mainContent) {
            mainContent.classList.add('show'); // Ensure main content is visible on these pages
        }
    }
});