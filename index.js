const wordToGuess = 'codebar'

document.querySelector('.letter-input').addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const valueIndex = wordToGuess.split('').indexOf(event.target.value);
    if (valueIndex > -1) {
      document.querySelectorAll('.letter')[valueIndex].innerText = event.target.value;
    }
  }
})
