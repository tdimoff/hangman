let timing = 1000;

document.querySelectorAll('.piece').forEach(p => {
  setTimeout(() => {
    p.style.display = 'block';
  }, timing += 750);
});
