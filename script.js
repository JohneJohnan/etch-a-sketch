const Btn = document.querySelector("button");
let gridSide = 10;
Btn.onclick = () => {
    do {
        gridSide = parseInt(prompt(
            "Enter new number of rows and colomns." +
            'it has to be between 1 & 20', 10));
    }
    while (!Number.isInteger(gridSide) || gridSide > 20 || gridSide < 1);
}
const main = document.body.querySelector(".main");

for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    main.appendChild(row);
    for (let j = 0; j < 10; j++) {
        const column = document.createElement("div");
        column.style.backgroundColor = "rgb(255,255,255)";
        column.classList.add("column");
        row.appendChild(column);
        column.onmouseover = e => makeDarker(e);
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


console.log('done');