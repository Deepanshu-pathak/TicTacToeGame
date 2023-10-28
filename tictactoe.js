let currentPlayer = "X";
let gameOver = false;

function makeMove(cell) {
  if (cell.textContent === "" && !gameOver) {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      document.getElementById(
        "message"
      ).textContent = `Player ${currentPlayer} wins!`;
      gameOver = true;
    } else if (
      [...document.querySelectorAll(".cell")].every(
        (cell) => cell.textContent !== ""
      )
    ) {
      document.getElementById("message").textContent = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById(
        "message"
      ).textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const cells = document.querySelectorAll(".cell");
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winCombinations) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.backgroundColor = "rgba(255, 0, 100, 0.401)";
      cells[b].style.backgroundColor = "rgba(255, 0, 100, 0.401)";
      cells[c].style.backgroundColor = "rgba(255, 0, 100, 0.401)";
      return true;
    }
  }
  return false;
}

function resetGame() {
  const cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
    cell.textContent = "";
    cell.style.backgroundColor = "";
  }
  document.getElementById("message").textContent = "Player X's turn";
  currentPlayer = "X";
  gameOver = false;
}
