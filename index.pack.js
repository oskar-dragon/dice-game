let player1Score = 0;
let player2Score = 0;
let isPlayer1Turn = true;

// DOM Elements
const playerTurn = document.querySelector(".message");
const player1Scoreboard = document.getElementById("player1score");
const player2Scoreboard = document.getElementById("player2score");
const player1Dice = document.getElementById("player1dice");
const player2Dice = document.getElementById("player2dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showResetButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore(newScore) {
  if (isPlayer1Turn) {
    player1Score = player1Score + newScore;
  } else {
    player2Score = player2Score + newScore;
  }
}

function updateScoreboard(newScore) {
  if (isPlayer1Turn) {
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Scoreboard.textContent = player2Score;
  }
}

function updateTurnBoard() {
  if (isPlayer1Turn) {
    playerTurn.textContent = "Player 1 Turn";
  } else {
    playerTurn.textContent = "Player 2 Turn";
  }
}

function toggleTurn() {
  isPlayer1Turn = !isPlayer1Turn;
}

function gameOver() {
  if (player1Score > player2Score) {
    playerTurn.textContent = "Player 1 has won!";
  } else {
    playerTurn.textContent = "Player 2 has won!";
  }
}

function rollDice(player1Turn) {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  const currentPlayer = player1Turn ? player1Dice : player2Dice;
  const enemy = player1Turn ? player2Dice : player1Dice;

  enemy.classList.remove("active");
  currentPlayer.textContent = diceResult;
  currentPlayer.classList.add("active");
  enemy.textContent = "-";

  updateScore(diceResult);
  updateScoreboard();
  updateTurnBoard();
  toggleTurn();
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  rollBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  player1Dice.classList.remove("active");
  player2Dice.classList.remove("active");
  playerTurn.textContent = "New Game";
}

// Event listeners (buttons)
rollBtn.addEventListener("click", function () {
  rollDice(isPlayer1Turn);

  if (player1Score >= 25 || player2Score >= 25) {
    gameOver();
    showResetButton();
  }
});

resetBtn.addEventListener("click", resetGame);
