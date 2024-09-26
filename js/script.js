const gridContainer = document.querySelector(".grid-container");
const dimensionBtn = document.querySelector(".dimension-btn");
let divNumber = 16; //no. of divs in grid
const colorBtn = document.querySelector(".color-btn");
const resetBtn = document.querySelector(".reset-btn");
renderGrid(divNumber);

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".grid-div").forEach(div => {
    div.style.backgroundColor = "white";
    div.classList.remove("colored");
  })
})

colorBtn.addEventListener("click", () => {
  if (colorBtn.textContent === "COLORFUL MODE") {
    colorBtn.textContent = "MONOCHROME MODE";
  } else {
    colorBtn.textContent = "COLORFUL MODE";
  }

})

function getColor() {
  let color = "black";
  if (colorBtn.textContent === "COLORFUL MODE") {
    const red = Math.floor(Math.random() * 266);
    const green = Math.floor(Math.random() * 266);
    const blue = Math.floor(Math.random() * 266);
    color = `rgb(${red},
                 ${green},
                 ${blue})`;
  }
  return color;
}


gridContainer.addEventListener("mouseover", (event) => {
  if (event.target === gridContainer) {
    return;
  }
  if (Array.from(event.target.classList).includes("colored")) {
    if (event.target.style.opacity !== "1") {
      event.target.style.opacity = 0.1 + Number(event.target.style.opacity);
    }
    return;
  }
  event.target.style.backgroundColor = getColor();
  event.target.style.opacity = 0.1;
  event.target.classList.add("colored");
})

function renderGrid(divNumber) {
  for (let i = divNumber ** 2; i > 0; i--) {
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "grid-div");
    gridDiv.style.flexBasis = `${100 / divNumber}%`;
    gridContainer.appendChild(gridDiv);
  }
}

function removeGrid() {
  document.querySelectorAll(".grid-div").forEach(div => {
    div.remove();
  })
}

dimensionBtn.addEventListener("click", () => {
  divNumber = prompt("Enter new dimension (max value = 100)", 16);
  while (divNumber > 100 || divNumber < 1) {
    alert("Minimum value = 1; Maximum value= 100");
    divNumber = prompt("Enter new dimension (max value = 100)", 16);
  }
  removeGrid();
  renderGrid(divNumber);
}) 
