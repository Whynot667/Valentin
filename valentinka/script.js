function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");

    // Попробуем начать воспроизведение
    const playMusic = () => {
        audio.play().catch(() => {
            console.log("Автозапуск заблокирован. Нажмите на страницу.");
        });
    };

    // Попробуем сразу воспроизвести музыку
    playMusic();

    // Если браузер блокирует автозапуск, разрешаем при клике
    document.body.addEventListener("click", () => {
        playMusic();
    });
});

function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");

    // Создать эффект вспышки
    const flash = document.getElementById("flash-effect");
    flash.style.animation = "flash-animation 0.6s ease-out forwards";

    // Эффект частиц по всему экрану
    for (let i = 0; i < 500; i++) { // Увеличили количество частиц
        const particle = document.createElement("div");
        particle.className = "particle";

        // Случайное размещение по всему экрану
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;

        document.body.appendChild(particle);

        // Удалить частицу через 10 секунды
        setTimeout(() => {
            particle.remove();
        }, 100000);
    }
}

// Генерация случайного числа для направления анимации
function random() {
    return Math.random() - 1.5;
}

