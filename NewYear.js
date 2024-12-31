const countdown = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

const targetDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.days.textContent = String(days).padStart(2, '0');
    countdown.hours.textContent = String(hours).padStart(2, '0');
    countdown.minutes.textContent = String(minutes).padStart(2, '0');
    countdown.seconds.textContent = String(seconds).padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.body.innerHTML = '<h1>Happy New Year 2025!</h1>';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Hide Swipe Down Text on Scroll
window.addEventListener('scroll', () => {
    const swipeDown = document.getElementById('swipe-down');
    if (window.scrollY > 50) {
        swipeDown.classList.add('hidden');
    } else {
        swipeDown.classList.remove('hidden');
    }
});


// Add your WebGL background effects, resolution interactions, and confetti trigger here.