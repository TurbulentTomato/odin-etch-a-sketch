const container = document.querySelector(".container");
let divNumber = 16; //no. of divs in grid
for (divNumber = divNumber ** 2; divNumber > 0; divNumber--) {
  const gridDiv = document.createElement("div");
  gridDiv.setAttribute("class", "grid-div");
  container.appendChild(gridDiv);

}

