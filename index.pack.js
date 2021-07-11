// Variables for the game state
let player1Score = 0;
let player2Score = 0;
let ifPlayer1Turn = true;

// Variables to store references to the DOM nodes
let playerTurn = document.querySelector(".message");
let player1Scoreboard = document.getElementById("player1score");
let player2Scoreboard = document.getElementById("player2score");
let player1Dice = document.getElementById("player1dice")
let player2Dice = document.getElementById("player2dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")


// Functions to make code DRYer
function showResetButton() {
     rollBtn.style.display = "none"
     resetBtn.style.display = "inline-block"
}

//Event listeners (buttons)
document.getElementById("rollBtn").addEventListener("click", function() {
     let rollDice = Math.floor(Math.random() * 6) +1;

     

     if (ifPlayer1Turn === true) {
          player2Dice.classList.remove("active")
          player1Dice.textContent = rollDice
          player1Dice.classList.add("active")
          player2Dice.textContent = "-"
          player1Score+=rollDice
          player1Scoreboard.textContent = player1Score
          playerTurn.textContent = "Player 2 Turn"
          ifPlayer1Turn = false;

     } else {
          player1Dice.classList.remove("active")
          player2Dice.textContent = rollDice
          player2Dice.classList.add("active")
          player1Dice.textContent = "-"
          player2Score+=rollDice
          player2Scoreboard.textContent = player2Score
          playerTurn.textContent = "Player 1 Turn"
          ifPlayer1Turn = true;
     }



     if (player1Score >= 25) {
          playerTurn.textContent = "Player 1 has won!"
          showResetButton()
     }

     if (player2Score >= 25) {
          playerTurn.textContent = "Player 2 has won!"
          showResetButton()
     }

})

document.getElementById("resetBtn").addEventListener("click", function() {
     if (playerTurn.textContent === "Player 1 has won!") {
          ifPlayer1Turn = true;
          playerTurn.textContent = "Player 1 Turn";
          player1Score = 0;
          player2Score = 0;
          player1Scoreboard.textContent = 0;
          player2Scoreboard.textContent = 0
          player1Dice.textContent = "-"
          player2Dice.textContent = "-"
          rollBtn.style.display = "inline-block"
          resetBtn.style.display = "none"
          player1Dice.classList.remove("active")
          player2Dice.classList.remove("active")
     } else {
          ifPlayer1Turn = false;
          playerTurn.textContent = "Player 2 Turn";
          player1Score = 0;
          player2Score = 0;
          player1Scoreboard.textContent = 0;
          player2Scoreboard.textContent = 0
          player1Dice.textContent = "-"
          player2Dice.textContent = "-"
          rollBtn.style.display = "inline-block"
          resetBtn.style.display = "none"
          player1Dice.classList.remove("active")
          player2Dice.classList.remove("active")
     }

})
