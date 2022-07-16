//this creates the 16*16 grid inside the body of the html
const bod = document.body;
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  for (let j = 0; j < 16; j++) {
    const col = document.createElement("div");
    col.setAttribute("class", "col");
    row.appendChild(col);
  }
  bod.appendChild(row);
}
