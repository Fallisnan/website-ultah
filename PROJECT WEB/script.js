const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// Musik
function toggleMusic() {
    if (!isPlaying) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Musik";
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.innerHTML = "▶ Play Musik";
        isPlaying = false;
    }
}

// ===== DARK MODE BUTTON =====
const darkBtn = document.createElement("button");
darkBtn.id = "darkBtn";
darkBtn.innerHTML = "🌙 Dark Mode";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.innerHTML = document.body.classList.contains("dark")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";
});

// ===== TYPING EFFECT =====
const paragraphs = document.querySelectorAll("p");
let speed = 40;

paragraphs.forEach(p => {
    const text = p.innerHTML;
    p.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            p.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    setTimeout(type, 500);
});
