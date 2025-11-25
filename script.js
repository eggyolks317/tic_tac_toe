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

let board = createBoard();
