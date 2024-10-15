function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Display user and computer choices in the UI
  document.getElementById("userChoice").textContent = userChoice;
  document.getElementById("computerChoice").textContent = computerChoice;

  // Determine the result
  let resultText = "";
  let resultClass = "";

  if (userChoice === computerChoice) {
    resultText = `It's a draw!`;
    resultClass = "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `You win! ${userChoice} beats ${computerChoice}`;
    resultClass = "winner";
  } else {
    resultText = `You lose! ${computerChoice} beats ${userChoice}`;
    resultClass = "loser";
  }

  // Display the result with appropriate class (color)
  const resultElement = document.getElementById("result");
  resultElement.textContent = resultText;
  resultElement.className = resultClass;
}
