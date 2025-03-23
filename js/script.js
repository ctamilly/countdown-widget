function applyTheme(theme) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
}

const urlParams = new URLSearchParams(window.location.search);
const themeFromUrl = urlParams.get('theme');
const dateFromUrl = urlParams.get('date');
const titleFromUrl = urlParams.get('title');

if (themeFromUrl) {
  applyTheme(themeFromUrl);
} else {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  applyTheme(darkModeMediaQuery.matches ? 'dark' : 'light');

  darkModeMediaQuery.addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
}

// Atualiza o título se vier via URL
if (titleFromUrl) {
  document.getElementById('countdown-title').textContent = decodeURIComponent(titleFromUrl);
}

function startCountdown(targetDate) {
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${days}d`;
    document.getElementById('hours').textContent = `${hours}h`;
    document.getElementById('minutes').textContent = `${minutes}m`;
    document.getElementById('seconds').textContent = `${seconds}s`;

    if (distance < 0) {
      countdownElement.textContent = "Countdown Finished!";
      clearInterval(interval);
    }
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

// Usa a data da URL ou padrão
const targetDate = dateFromUrl
  ? new Date(dateFromUrl).getTime()
  : new Date('2025-05-31T00:00:00').getTime();

startCountdown(targetDate);
