const gameBoard = document.querySelector("#game-board");
const resultP = document.querySelector("#result");
const treasure = document.querySelector("#treasure");

gameBoard.addEventListener("click", function(event) {
  const clickX = event.clientX - gameBoard.offsetLeft;
  const clickY = event.clientY - gameBoard.offsetTop;

  const tolerance = 50;
  const treasureX = treasure.offsetLeft + treasure.offsetWidth;
  const treasureY = treasure.offsetTop;
  const distance = Math.sqrt(Math.pow(treasureX - clickX, 2) + Math.pow(treasureY - clickY, 2));
  if (distance < tolerance) {
    resultP.textContent = "You found the treasure! Congratulations!";
  } else {
    resultP.textContent = "Try again.";
  }
});