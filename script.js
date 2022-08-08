const Btn = document.querySelector("button");
let gridSide = 30;
makeGrid(gridSide);

Btn.onclick = () => {
    do {
        gridSide = parseInt(prompt(
            "Enter new number of rows and colomns." +
            '\nit has to be between 1 & 30', 30));
    }
    while (!Number.isInteger(gridSide) || gridSide > 30 || gridSide < 1);
    makeGrid(gridSide);
}

function makeGrid(side) {
    const main = document.body.querySelector(".main");
    const oldGrid = main.firstChild;
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid");

    if (oldGrid)
        main.replaceChild(newGrid, oldGrid);
    else
        main.appendChild(newGrid);

    for (let i = 0; i < side; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        newGrid.appendChild(row);
        for (let j = 0; j < side; j++) {
            const column = document.createElement("div");
            column.style.backgroundColor = "rgb(255,255,255)";
            column.classList.add("column");
            row.appendChild(column);
            column.onmouseover = e => makeDarker(e);
        }
    }
}

function makeDarker(event) {
    const currentRgb = rgbStrToArr(event.target.style.backgroundColor);
    event.target.style.backgroundColor =
        `rgb(${currentRgb[0] - 25}, ${currentRgb[1] - 25}, ${currentRgb[2] - 25})`;
}

function rgbStrToArr(string) {
    return string.replace("rgb(", "")
        .split(", ")
        .reduce((rgbArray, eachColor) => {
            rgbArray.push(parseInt(eachColor));
            return rgbArray;
        }, []);
}