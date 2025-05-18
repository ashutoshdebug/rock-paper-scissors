const moves = {
    rock: "fist.png",
    paper: "hand.png",
    scissors: "victory.png",
  };

  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  function triggerAnimationWithImageplayer(imageName) {
    const element = document.getElementById("hand1");
    element.src = "fist.png";
    element.style.transition = "none";
    element.classList.remove("bounceanimeplayer");
    void element.offsetWidth;
    element.classList.add("bounceanimeplayer");

    setTimeout(() => {
      element.src = imageName;
    }, 3000);
  }

  function triggerAnimationWithImagecomp(imageName) {
    const element = document.getElementById("hand2");
    element.src = "fist.png";
    element.style.transition = "none";
    element.classList.remove("bounceanimecomp");
    void element.offsetWidth;
    element.classList.add("bounceanimecomp");

    setTimeout(() => {
      element.src = imageName;
    }, 3000);
  }

  function playRound(playerMove) {
    const computerOptions = ["rock", "paper", "scissors"];
    const compMove = computerOptions[Math.floor(Math.random() * 3)];

    triggerAnimationWithImageplayer(moves[playerMove]);
    triggerAnimationWithImagecomp(moves[compMove]);

    let resultText = "";

    if (playerMove === compMove) {
      resultText = "It's a Draw!";
      drawScore++;
    } else if (
      (playerMove === "rock" && compMove === "scissors") ||
      (playerMove === "paper" && compMove === "rock") ||
      (playerMove === "scissors" && compMove === "paper")
    ) {
      resultText = "You Win!";
      playerScore++;
    } else {
      resultText = "You Lose!";
      computerScore++;
    }

    setTimeout(() => {
      document.getElementById("result").innerText = resultText;
      updateScores();
    }, 3000);
  }

  function updateScores() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("drawScore").textContent = drawScore;
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    updateScores();
    document.getElementById("result").innerText = "";
    document.getElementById("hand1").src = "fist.png";
    document.getElementById("hand2").src = "fist.png";
  }