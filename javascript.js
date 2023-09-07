let playerChoice = "";
let winner = document.getElementById("winner");

function getComputerChoice() {
  const threeChoices = ["Rock", "Paper", "Scissors"];
  return threeChoices[Math.floor(Math.random() * threeChoices.length)];
}

function getPlayerChoiceHand() {
  playerChoice = "Hand";
  const computerChoice = getComputerChoice();
  game(playerChoice, computerChoice);
}

function getPlayerChoiceRock() {
  playerChoice = "Rock";
  const computerChoice = getComputerChoice();
  game(playerChoice, computerChoice);
}

function getPlayerChoiceScissors() {
  playerChoice = "Scissors";
  const computerChoice = getComputerChoice();
  game(playerChoice, computerChoice);
}

function game(playerChoice, computerChoice) {
  console.log("Player Choice: ", playerChoice);
  console.log("Computer Choice: ", computerChoice);

  switch (true) {
    case playerChoice === computerChoice:
      winner.innerText = "";
      document.getElementById("winner-p").innerHTML = "It's a draw!!!";
      document.getElementById("computerSelection-span").innerHTML =
        computerChoice;
      document.getElementById("playerSelection-span").innerHTML = playerChoice;
      break;
    case (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper"):
      winner.innerText = "Player wins!";
      document.getElementById("computerSelection-span").innerHTML =
        computerChoice;
      document.getElementById("playerSelection-span").innerHTML = playerChoice;
      document.getElementById("winner-p").innerHTML = "The winner is: ";
      break;
    default:
      winner.innerText = "Computer wins!";
      document.getElementById("computerSelection-span").innerHTML =
        computerChoice;
      document.getElementById("playerSelection-span").innerHTML = playerChoice;
      document.getElementById("winner-p").innerHTML = "The winner is: ";
      break;
  }
}
