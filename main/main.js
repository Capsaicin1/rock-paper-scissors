let wins = 0;
let losses = 0;
let draws = 0;

let numberOfGames = 0;
const choices = ["mage", "knight", "archer"];

const getComputerChoice = () => {
  const randomIndex = Math.round(Math.random() * 2);
  return choices[randomIndex];
};

const playButtons = document.querySelectorAll("button");

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    numberOfGames < 5 ? game(button.id) : getWinner();
  });
});

const game = (buttonID) => {
  const compChoice = getComputerChoice();
  const playerWon = playRound(buttonID, compChoice);

  if (playerWon === 2) {
    console.log("It's a draw.");
    draws++;
    document.getElementById("draws").textContent = draws;
  } else if (playerWon === 1) {
    console.log("You win.");
    wins++;
    document.getElementById("wins").textContent = wins;
  } else {
    console.log("You lose.");
    losses++;
    document.getElementById("losses").textContent = losses;
  }
  numberOfGames++;
};

const playRound = (playerSelection, computerSelection) => {
  console.log(`The computer chose: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return 2 /* Tie */;
  } else if (
    (playerSelection === choices[0] && computerSelection === choices[1]) ||
    (playerSelection === choices[1] && computerSelection === choices[2]) ||
    (playerSelection === choices[2] && computerSelection === choices[0])
  ) {
    return 1 /* Win */;
  } else {
    return 0 /* Loss */;
  }
};

const getWinner = () => {
  const playerWon = "You Win!";
  const playerLost = "You LOST!";
  const playerDraw = " It's a draw!";

  if (wins > losses) {
    document.getElementById("winner").textContent = playerWon;
  } else if (wins === losses) {
    document.getElementById("winner").textContent = playerDraw;
  } else {
    document.getElementById("winner").textContent = playerLost;
  }
};
