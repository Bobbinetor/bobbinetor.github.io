const treasure = document.getElementById("treasure");
const result = document.getElementById("result");

treasure.addEventListener("click", function() {
  result.textContent = "Congratulations!";
  result.classList.add("bold");
});

gameBoard.addEventListener("click", function(event) {
  const distance = calculateDistance(event, treasure);
  if (distance < 20) {
    treasure.style.backgroundColor = "green";
    result.textContent = "Congratulations!";
    result.classList.add("bold");
  } else {
    result.textContent = "Try Again";
    result.classList.add("bold");
  }
});