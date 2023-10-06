let wins = 0;
let losses = 0;
let draws = 0;

const numberOfGames = 5;
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.round(Math.random() * 2);
  return choices[randomIndex];
};

const getPlayerChoice = () => {};

const playRound = (playerSelection, computerSelection) => {
  const choice = playerSelection.toLowerCase();

  if (choice === computerSelection) {
    return "Draw";
  } else if (
    (choice === "paper" && computerSelection === "rock") ||
    (choice === "rock" && computerSelection === "scissors") ||
    (choice === "scissors" && computerSelection === "paper")
  ) {
    return "Win";
  } else {
    return "Loss";
  }
};

const Game = () => {};

const playerChoice = "rock";
const compChoice = getComputerChoice();

console.log(playRound(playerChoice, compChoice));
