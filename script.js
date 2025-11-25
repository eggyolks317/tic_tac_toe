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
        gameBoard.getTurn()
          ? (cell.textContent = "o")
          : (cell.textContent = "x");
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
  return { getTurn };
})();
//global code
let board = createBoard();
console.log(gameBoard.getTurn());
