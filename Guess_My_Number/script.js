'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  }
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';

    document.querySelector('.guess').style.display = 'none';
    document.querySelector('.check').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' You lost the game!');
      document.querySelector('.score').textContent = 0;
    
      document.body.style.backgroundColor = '#b34747';
  
      document.querySelector('.guess').style.display = 'none';
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#1c1b2f'; 
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').style.display = 'inline';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').value = '';
});




