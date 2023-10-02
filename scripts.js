const grid = document.querySelector(`div[class="padInnerContainer"]`);

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
    let singleCell = document.querySelectorAll(`div[class="padCell"]`);

    singleCell.forEach((singleCell) => {
    singleCell.addEventListener("mouseover", function () {
        singleCell.classList.remove("padCell");
        singleCell.classList.add("padCellBlk");});
    })};

gridMaker(50);
colorBlack();