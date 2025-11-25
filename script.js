let displayBoard = document.getElementById("board");
function createUser(name) {
  return { name };
}
//create a brand new board
function createBoard() {
  let board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell", "flex");
    cell.addEventListener("click", (e) => {
      if (!cell.classList.contains("clicked")) {
        if (gameBoard.getTurn()) {
          cell.textContent = "o";
          board[Math.trunc(i / 3)][i % 3] = "o";
        } else {
          cell.textContent = "x";
          board[Math.trunc(i / 3)][i % 3] = "x";
        }
        console.log(gameBoard.checkWin(board));
        cell.classList.add("clicked");
      }
    });
    displayBoard.appendChild(cell);
  }
  function getBoard() {
    return board;
  }
  return { getBoard };
}
//gameboard functions
const gameBoard = (function () {
  let turn = 0;
  function getTurn() {
    turn++;
    return turn % 2;
  }
  function checkWin(board) {
    let count = 0;
    let sign = -1;
    if (turn % 2) {
      sign = "o";
    } else {
      sign = "x";
    }
    //check horizontal
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == sign) {
          count++;
        }
      }
      if (count == 3) {
        return true;
      } else {
        count = 0;
      }
    }
  }
  return { getTurn, checkWin };
})();
//global code
let board = createBoard();
