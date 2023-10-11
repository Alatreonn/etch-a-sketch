const grid = document.querySelector(`.padInnerContainer`);

function gridMaker(cellSize) {
    grid.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
    for (let i = 2; i <= cellSize * cellSize; i++) {
        let divGrid = document.createElement("div");

        divGrid.classList.add("padCell")
        grid.appendChild(divGrid);
    }
}

function colorBlack () {
    let singleCell = document.querySelectorAll(`.padCell`);

    singleCell.forEach((singleCell) => {
    singleCell.addEventListener("mouseover", function () {
        singleCell.classList.remove("padCell");
        singleCell.classList.add("padCellBlk");
        });
    });
}

function resetGrid() {
    let resetButton = document.querySelector(".padButtonReset");
    resetButton.addEventListener("click", function () {
        let singleBlkCell = document.querySelectorAll(`.padCellBlk`);
        singleBlkCell.forEach((singleCell) => {
            singleCell.classList.remove("padCellBlk");
            singleCell.classList.add("padCell");
        });
    });
}

resetGrid();
gridMaker(50);
colorBlack();