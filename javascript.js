let playerChoice = "";
let winner = document.getElementById("winner");
var svgRock = document.getElementById("rock");
var svgHand = document.getElementById("hand");
var svgScissors = document.getElementById("scissors");

function getComputerChoice() {
  const threeChoices = ["Rock", "Paper", "Scissors"];
  return threeChoices[Math.floor(Math.random() * threeChoices.length)];
}

function getPlayerChoiceHand() {
  if (svgHand) {
    // Change the fill color of the SVG
    svgRock.style.fill = "#000000";
    svgHand.style.fill = "#748cab";
    svgScissors.style.fill = "#000000";

    playerChoice = "Rock";
    const computerChoice = getComputerChoice();
    game(playerChoice, computerChoice);
  }

  playerChoice = "Hand";
  const computerChoice = getComputerChoice();
  game(playerChoice, computerChoice);
}

function getPlayerChoiceRock() {
  if (svgRock) {
    // Change the fill color of the SVG
    svgRock.style.fill = "#353a47";
    svgHand.style.fill = "#000000";
    svgScissors.style.fill = "#000000";

    playerChoice = "Rock";
    const computerChoice = getComputerChoice();
    game(playerChoice, computerChoice);
  }
}

function getPlayerChoiceScissors() {
  if (svgScissors) {
    // Change the fill color of the SVG
    svgRock.style.fill = "#000000";
    svgHand.style.fill = "#000000";
    svgScissors.style.fill = "#ed254e";
  }
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
      document.getElementById("winner-p").innerHTML = "Who's gonna win? ";
      break;
    default:
      winner.innerText = "Computer wins!";
      document.getElementById("computerSelection-span").innerHTML =
        computerChoice;
      document.getElementById("playerSelection-span").innerHTML = playerChoice;
      document.getElementById("winner-p").innerHTML = "Who's gonna win? ";
      break;
  }
}
