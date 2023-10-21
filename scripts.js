const grid = document.querySelector(".padInnerContainer");
const toggleColorButton = document.querySelector(".padButtonRainbow");

function createGrid(cellCreate) {
    grid.style.gridTemplateColumns = `repeat(${cellCreate}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cellCreate}, 1fr)`;
    for (let i = 1; i <= cellCreate * cellCreate; i++) {
        let divGrid = document.createElement("div");

        divGrid.classList.add("padCell")
        grid.appendChild(divGrid);
        }
        //When resizing, hover-to-color doesn't work unless "rainbow" button is pressed, this fixes it, toggling it back and forth.
        toggleColors()
    }

function resizeGrid(cellResize) {
    let divCells = document.querySelectorAll(".padCell");
        if (cellResize >= 2 && cellResize <= 100) {
        divCells.forEach((cellResize) => cellResize.remove());

        createGrid(cellResize);
        //When resizing, hover-to-color doesn't work unless "rainbow" button is pressed, this fixes it, toggling it back and forth.
        toggleColors()
        }
    };

function resetGrid() {
    let resetButton = document.querySelector(".padButtonReset");
    resetButton.addEventListener("click", function () {
        let divCells = document.querySelectorAll(".padCell");
        divCells.forEach((divCells) => {
        divCells.style.backgroundColor = "#a2a2a2";
        divCells.style.borderColor = "#adadad";
        });
    });
}

let colorBlackEnabled = false;
function toggleColors() {
    if (colorBlackEnabled) {
        let divCells = document.querySelectorAll(`.padCell`);

        divCells.forEach((divCells) => {
        divCells.addEventListener("mouseover", function () {
            divCells.style.backgroundColor = "black";
            divCells.style.borderColor = "black";
            });
        });
        toggleColorButton.style.backgroundColor = "white";
    }
    else {
        let divCells = document.querySelectorAll(".padCell");

        divCells.forEach((divCells) => {
        divCells.addEventListener("mouseover", function () {
            let colorR = colorRainbowFunc();
            divCells.style.backgroundColor = colorR;
            divCells.style.borderColor = colorR;
            });
        });
        toggleColorButton.style.backgroundColor = "gray";
    }
    colorBlackEnabled = !colorBlackEnabled;
}
toggleColorButton.addEventListener("click", toggleColors);

//Creates a random color by combining "#" with 6 other Hex chars and returns it.
function colorRainbowFunc() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

createGrid(16);
resetGrid();
resizeGrid();
toggleColors();