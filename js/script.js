function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const themeFromUrl = urlParams.get('theme');
  
  if (themeFromUrl) {
    applyTheme(themeFromUrl);
  } else {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
  
    darkModeMediaQuery.addEventListener('change', (e) => {
      applyTheme(e.matches ? 'dark' : 'light');
    });
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
  
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
  
      if (distance < 0) {
        countdownElement.textContent = "Countdown Finished!";
        clearInterval(interval);
      }
    }
  
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }
