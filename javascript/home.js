// eye animation
document.addEventListener("DOMContentLoaded", function () {
    const eye = document.getElementById("blinking-eye");

    function blink() {
        eye.src = "../Assets/eye_closed.png"; // Change to closed eye
        setTimeout(() => {
            eye.src = "../Assets/blinking_eye.png"; // Change back to open eye
        }, 1000); // Eye stays closed for 200ms
    }

    // Make the eye blink every 3 seconds
    setInterval(blink, 3000);
});

// illust hero animation
document.addEventListener("DOMContentLoaded", function () {
    const smile = document.getElementById("hero-illust");

    function smiley() {
        smile.src = "../Assets/hero_illustSmile.png"; // senyum
        setTimeout(() => {
            smile.src = "../Assets/hero_illust.png"; // balik
        }, 2000); // mulut kebuka
    }

    // Make the eye blink every 3 seconds
    setInterval(smiley, 3000);
});

// dark mode toggle
document.addEventListener("DOMContentLoaded", function () {
    const darkMode = document.getElementById("dark-mode");
    const darkIcon = document.getElementById("dark-icon");

    let darkModeOn = false;
    
    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');


        // toggle icon
        if (darkModeOn){
            darkIcon.src="../Assets/sun.png";
            darkIcon.alt="light";
        }
        else{
            darkIcon.src="../Assets/moon.png";
            darkIcon.alt="dark";
        }

        darkModeOn = !darkModeOn;
    });
    
});