var randomNumber = Math.floor(Math.random() * 10) + 1;
var trial = 3;


function checkGuess() {
  var userGuess = Number(document.getElementById('guess').value);
  var result = document.getElementById('result');

  if (trial === 0) return;

  if (userGuess === randomNumber) {
    result.innerHTML = `<span class="hint correct">🎉 Correct! You got it!</span>`;
    trial = 0;
  } else {
    trial--;
    if (trial === 0) {
      result.innerHTML = `<span class="hint game-over">Game Over! The number was ${randomNumber}.</span>`;
    } else if (userGuess > randomNumber) {
      result.innerHTML = `<span class="hint too-high">📈 Too High!</span><span class="subtext">${trial} attempt(s) left — guess lower.</span>`;
    } else {
      result.innerHTML = `<span class="hint too-low">📉 Too Low!</span><span class="subtext">${trial} attempt(s) left — guess higher.</span>`;
    }
  }
  document.getElementById('guess').value = '';
}

function StartAgain() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  trial = 3;
  document.getElementById('result').innerHTML = '';
  document.getElementById('guess').value = '';
}