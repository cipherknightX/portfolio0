document.addEventListener("DOMContentLoaded", function() {
    // Intro Animation
    const helloText = document.getElementById("helloText");
    const intro = document.getElementById("intro");
    const homepage = document.getElementById("homepage");

    const greetings = ["Hello", "नमस्ते", "Hola", "Bonjour"];
    const timings = [1000, 1000, 650, 650]; // Timings for each greeting
    let currentGreeting = 0;

    function changeGreeting() {
        if (currentGreeting < greetings.length) {
            helloText.textContent = greetings[currentGreeting];
            helloText.style.opacity = 1; // Ensure text is fully visible
            setTimeout(() => {
                helloText.style.opacity = 0; // Fade out before the next greeting
                currentGreeting++;
                setTimeout(changeGreeting, 250); // Delay before showing the next greeting
            }, timings[currentGreeting]);
        }
    }

    if (!sessionStorage.getItem("introPlayed")) {
        // Initial delay before starting the greetings
        setTimeout(() => {
            changeGreeting(); // Start the greeting change cycle
        }, 1000);

        // Calculate the total duration to hide intro and show homepage
        const totalDuration = 1000 + timings.reduce((acc, time) => acc + time + 250, 0);
        setTimeout(() => {
            intro.classList.add("fade-up");
            setTimeout(() => {
                intro.classList.add("hidden");
                homepage.classList.remove("hidden");
                sessionStorage.setItem("introPlayed", "true");
            }, 1000); // Wait for the fade-up animation to complete
        }, totalDuration);
    } else {
        intro.classList.add("hidden");
        homepage.classList.remove("hidden");
    }

    // Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // Like Button Emoji Animation
    const likeButton = document.getElementById('likeButton');
    const emojis = ['👨‍💻', '👩‍💻', '🔥', '💡', '🚀', '🌟', '📚', '🎨', '✨'];

    likeButton.addEventListener('click', () => {
        for (let i = 0; i < 30; i++) {
            createFallingEmoji();
        }
    });

    function createFallingEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.classList.add('emoji');
        emoji.style.left = `${Math.random() * 100}vw`;
        const duration = Math.random() * 2 + 3; // random duration between 3s and 5s
        emoji.style.animationDuration = `${duration}s`;
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, duration * 1000); // remove emoji after it falls
    }

   

    function createLaughingEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = '😂';  // Laughing emoji
        emoji.classList.add('emoji');
        emoji.style.left = `${Math.random() * 100}vw`;
        const duration = Math.random() * 3 + 1; // random duration between 1s and 3s
        emoji.style.animationDuration = `${duration}s`;
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, duration * 1000); // remove emoji after it falls
    }

    // Responsive Navigation
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");

    // Toggle side menu visibility on smaller screens
    menuToggle.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });
});
// contact me 
function contactMe() {
    const email = "hmjeeva007@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.getElementById('copy-notification');
        notification.classList.add('show'); // Make notification visible and start transition
        setTimeout(() => {
            notification.classList.remove('show'); // Hide notification after 2 seconds
        }, 2000);  // The notification will disappear after 2 seconds
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}
