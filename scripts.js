const grid = document.querySelector(`.padInnerContainer`);
const toggleColorButton = document.querySelector(".padButtonRainbow");

function gridMaker(cellSize) {
    grid.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
    for (let i = 2; i <= cellSize * cellSize; i++) {
        let divGrid = document.createElement("div");

        divGrid.classList.add("padCell")
        grid.appendChild(divGrid);
    }
}

let colorBlackEnabled = true;
function toggleColors() {
    if (colorBlackEnabled) {
        let singleCell = document.querySelectorAll(`.padCell`);

        singleCell.forEach((singleCell) => {
        singleCell.addEventListener("mouseover", function () {
            singleCell.style.backgroundColor = "black";
            singleCell.style.borderColor = "black";
            });
        });
        console.log("color is black");
        toggleColorButton.style.backgroundColor = "white";
    }
    else {
        let singleCell = document.querySelectorAll(".padCell");

        singleCell.forEach((singleCell) => {
        singleCell.addEventListener("mouseover", function () {
            let colorR = colorRainbowFunc();
            singleCell.style.backgroundColor = colorR;
            singleCell.style.borderColor = colorR;
            });
        });
        toggleColorButton.style.backgroundColor = "gray";
        console.log("color is rainbow");
    }
    colorBlackEnabled = !colorBlackEnabled;
}
toggleColorButton.addEventListener("click", toggleColors);

function resetGrid() {
    let resetButton = document.querySelector(".padButtonReset");
    resetButton.addEventListener("click", function () {
        let singleCell = document.querySelectorAll(`.padCell`);
        singleCell.forEach((singleCell) => {
            singleCell.style.backgroundColor = "#a2a2a2";
            singleCell.style.borderColor = "#adadad";
        });
    });
}

function colorRainbowFunc() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

resetGrid();
gridMaker(50);
toggleColors();