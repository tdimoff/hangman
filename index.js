let timing = 0;

const startHangman = () => {
  document.querySelectorAll('.piece').forEach(p => setTimeout(() => p.style.display = 'block', timing += 750));
}

setInterval(() => {
  timing = 0;
  document.querySelectorAll('.piece').forEach(p => p.style.display = 'none');
  startHangman();
}, 10000);

startHangman();
