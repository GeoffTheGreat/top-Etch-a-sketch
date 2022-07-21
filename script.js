//variable for amount of grid squares
let gridSquares = 20;
let color = "rgb(0,0,0)";
//create header with button to change amount of squares
const bod = document.body;

const etchBody = document.createElement("div");
etchBody.classList.add("etch--body");
const etchScreen = document.createElement("div");
etchScreen.classList.add("etch--screen");
const etchButtons = document.createElement("div");
etchButtons.classList.add("etch--buttons");
const etchBtnColor = document.createElement("button");
etchBtnColor.classList.add("etch--color");
etchBtnColor.setAttribute("id", "color");

etchBtnColor.textContent = "Change Color";
const etchBtnPixels = document.createElement("button");
etchBtnPixels.classList.add("etch--pixels");
etchBtnPixels.setAttribute("id", "pixels");

etchBtnPixels.textContent = "Change Tiles";
const etchBtnReset = document.createElement("button");
etchBtnReset.classList.add("etch--reset");
etchBtnReset.setAttribute("id", "reset");
etchBtnReset.textContent = "Reset";

etchButtons.appendChild(etchBtnColor);
etchButtons.appendChild(etchBtnReset);
etchButtons.appendChild(etchBtnPixels);
etchBody.appendChild(etchScreen);
etchBody.appendChild(etchButtons);
bod.appendChild(etchBody);
changeGrid();

const reset = document.getElementById("reset");
reset.addEventListener("click", changeGrid);

const changeTiles = document.getElementById("pixels");
changeTiles.addEventListener("click", changeSquares);

const rndColor = document.getElementById("color");
rndColor.addEventListener("click", randomColor);
///function to get user input an change the amount of squares
function changeSquares() {
  removeGrid();
  if (gridSquares < 100) {
    gridSquares += 20;
  } else {
    gridSquares = 20;
  }
  changeGrid();
}
//function that defaults the page
function removeGrid() {
  const divs = Array.from(document.getElementsByClassName("row"));
  divs.forEach((div) => {
    etchScreen.removeChild(div);
  });
}

////changes the amount of tiles in the grid
function changeGrid() {
  removeGrid();
  //this creates the 16*16 grid inside the body of the html
  for (let i = 0; i < gridSquares; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < gridSquares; j++) {
      const col = document.createElement("div");
      col.setAttribute("class", "col");
      col.style.setProperty("width", `calc(80vh/${gridSquares})`);
      col.style.setProperty("height", `calc(80vh/${gridSquares})`);
      row.appendChild(col);
    }
    etchScreen.appendChild(row);
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
function randomColor() {
  let r = Math.floor(Math.random() * 265);
  let g = Math.floor(Math.random() * 265);
  let b = Math.floor(Math.random() * 265);
  color = `rgb(${r},${g},${b})`;
  etchBody.style.backgroundColor = color;
}
function changeColor() {
  this.style.setProperty("background-color", color);
}
