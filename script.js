//variable for amount of grid squares
let gridSquares = 16;
//create header with button to change amount of squares
const bod = document.body;
const header = document.createElement("header");
header.setAttribute("id", "header");
const btn = document.createElement("button");
btn.innerText = "Change Tiles";
btn.setAttribute("id", "header--btn");
header.appendChild(btn);
bod.appendChild(header);
btn.addEventListener("click", changeSquares);
changeGrid();

///function to get user input an change the amount of squares
function changeSquares() {
  removeGrid();
  gridSquares = parseInt(
    prompt("How many boxes should the grid consist of?", "16")
  );
  if (gridSquares > 100) {
    gridSquares = 100;
  }
  changeGrid();
}
//function that defaults the page
function removeGrid() {
  const divs = Array.from(document.getElementsByClassName("row"));
  divs.forEach((div) => {
    bod.removeChild(div);
  });
}

////changes the amount of tiles in the grid
function changeGrid() {
  //this creates the 16*16 grid inside the body of the html
  for (let i = 0; i < gridSquares; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < gridSquares; j++) {
      const col = document.createElement("div");
      col.setAttribute("class", "col");
      col.style.setProperty("width", `calc(100vw/${gridSquares})`);
      col.style.setProperty("height", `calc(100vh/${gridSquares})`);
      row.appendChild(col);
    }
    bod.appendChild(row);
  }
  onHoverEvent();
}
//function that creates an event handler for the on mouseover
function onHoverEvent() {
  const colHover = Array.from(document.getElementsByClassName("col"));
  colHover.forEach((col) => {
    col.addEventListener("mouseover", changeColor);
  });
}

function changeColor() {
  this.style.setProperty("background-color", "black");
}
