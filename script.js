'use strict';
const newGame = document.querySelector('.new-game');
const endGame = document.querySelector('.End-game');
let dicePicture = document.querySelector('.dicepic');
const player0elm = document.querySelector('.player1');
const player1elm = document.querySelector('.player2');

const roll = document.querySelector('.btnroll');
const check = document.querySelector('.btncheck');
let score0elm = document.querySelector('.score1');
let score1elm = document.querySelector('.score2');
let highScore0elm = document.querySelector('.highscore1');
let highScore1elm = document.querySelector('.highscore2');

let activePlayer = 1,
  scores = 0,
  highScore = 0;

//switch player
const switchPlayer = function () {
  document.getElementById(`score${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 1 ? 2 : 1;

  player0elm.classList.toggle('.bg');
  player1elm.classList.toggle('.bg');
};

//roll dice
roll.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  dicePicture.src = `dice-${randomNumber}.png`;
  if (randomNumber === 6) {
    scores = scores + randomNumber;

    document.getElementById(`score${activePlayer}`).textContent = scores;
  } else {
    switchPlayer();
  }

  //random color
  function getRandomColor() {
    const letters = '013256789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.trunc(Math.random() * 15) + 1];
    }
    return color;
  }
  roll.style.backgroundColor = `${getRandomColor()}`;

  dicePicture.classList.remove('hide');
});

//highscore button

check.addEventListener('click', function () {
  highScore += scores;
  document.getElementById(`highscore${activePlayer}`).textContent = highScore;
  document.getElementById(`score${activePlayer}`).textContent = 0;

  //random color
  function getRandomColor() {
    const letters = '013256789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.trunc(Math.random() * 15) + 1];
    }
    return color;
  }
  dicePicture.classList.add('hide');
  check.style.backgroundColor = `${getRandomColor()}`;
});

newGame.addEventListener('click', function () {
  document.getElementById(`score${activePlayer}`).textContent = 0;
  document.getElementById(`highscore${activePlayer}`).textContent = 0;
  dicePicture.classList.add('hide');
  
});
