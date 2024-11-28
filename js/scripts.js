document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("nav.navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Hide Splash Screen after 3 seconds
window.addEventListener('load', function () {
    setTimeout(function () {
        const splashScreen = document.getElementById('splashScreen');
        splashScreen.classList.add('fadeOut');
    }, 1500); // Adjust time (in milliseconds) to show splash screen for 3 seconds
});

// JavaScript to Trigger the Smoke Effect when the Formula 1 Button is Clicked
document.getElementById('formula1Button').addEventListener('click', function () {
    const smokeEffect = document.getElementById('smokeEffect');
    smokeEffect.style.display = 'block';

    setTimeout(function() {
        $('#formula1Modal').modal('show');
    }, 1000);

    setTimeout(function() {
        smokeEffect.style.display = 'none';
    }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splashScreen");
    const splashCard = splashScreen.querySelector(".splash-card");

    // Remove the splash screen after 3 seconds
    setTimeout(() => {
        // Add the exit animation
        splashCard.classList.add("exit-animation");

        // Wait for the exit animation to complete
        splashCard.addEventListener("animationend", () => {
            splashScreen.remove(); // Completely remove the splash screen from DOM
        });
    }, 1000); // Show splash screen for 3 seconds
});