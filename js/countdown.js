const targetDate = new Date("2025-07-25T00:00:00Z").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML = "🎉 Chegou o dia!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = `${days}d`;
  document.getElementById("hours").innerText = `${hours}h`;
  document.getElementById("minutes").innerText = `${minutes}m`;
  document.getElementById("seconds").innerText = `${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
