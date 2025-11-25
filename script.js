let displayBoard = document.getElementById("board");
function createUser(name) {
  return { name };
}

function createBoard() {
  let board = [
    [, ,],
    [, ,],
    [, ,],
  ];
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    displayBoard.appendChild(cell);
  }
  return { board };
}

let board = createBoard();
