let displayBoard = document.getElementById("board");
function createUser(name) {
  return { name };
}

function createBoard() {
  let board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    displayBoard.appendChild(cell);
  }
  function getBoard() {
    return board;
  }
  return { getBoard };
}
const gameBoard = (function () {
  let turn = 0;
  function getTurn() {
    turn++;
    return turn % 2;
  }
  return { getTurn };
})();
let board = createBoard();
console.log(gameBoard.getTurn());
