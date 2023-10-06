let wins = 0;
let losses = 0;
let draws = 0;

let numberOfGames = 0;
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.round(Math.random() * 2);
  return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  console.log(`The computer chose: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return 2 /* Tie */;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return 1 /* Win */;
  } else {
    return 0 /* Loss */;
  }
};

const Game = () => {
  while (numberOfGames < 5) {
    const playerChoice = prompt(
      "Enter 'rock', 'paper' pr scissors (or 'q' to quit):"
    );

    // playerChoice.toLowerCase();

    if (playerChoice === null || playerChoice.toLowerCase() === "q") {
      console.log("Sorry to see you go");
      break;
    }

    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      console.log("Please enter a valid choice.");
      continue;
    }

    const compChoice = getComputerChoice();
    const playerWon = playRound(playerChoice, compChoice);

    if (playerWon === 2) {
      console.log("It's a draw.");
      draws++;
    } else if (playerWon === 1) {
      console.log("You win.");
      wins++;
    } else {
      console.log("You lose.");
      losses++;
    }

    numberOfGames++;
  }
};

Game();
