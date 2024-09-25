const gridContainer = document.querySelector(".grid-container");
const dimensionBtn = document.querySelector(".dimension-btn");
let divNumber = 16; //no. of divs in grid
renderGrid(divNumber);
gridContainer.addEventListener("mouseover", (event) => {
  if (event.target === gridContainer) {
    return;
  }
  const red = Math.floor(Math.random() * 266);
  const green = Math.floor(Math.random() * 266);
  const blue = Math.floor(Math.random() * 266);
  const alpha = Math.round(Math.random() * 100) / 100;
  event.target.style.backgroundColor = `rgba(${red},
                                             ${green},
                                             ${blue},
                                             ${alpha})`;
})

function renderGrid(divNumber) {
  for (let i = divNumber ** 2; i > 0; i--) {
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "grid-div");
    gridDiv.style.flexBasis = `${100 / divNumber}%`;
    gridContainer.appendChild(gridDiv);
  }
}

dimensionBtn.addEventListener("click", () => {
  divNumber = prompt("Enter new dimension (max value = 100)");
  while (divNumber > 100) {
    alert("New dimension cannot exceed 100");
    divNumber = prompt("Enter new dimension (max value = 100)");
  }
  document.querySelectorAll(".grid-div").forEach(div => {
    div.remove();
  })
  renderGrid(divNumber);
})     
