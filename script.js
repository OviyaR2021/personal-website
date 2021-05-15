alert("Hello!");
let canvasElement = document.getElementById("canvas");
let ctx = canvasElement.getContext("2d");
let cellSize = 10;

canvasElement.width = Window.innerWidth;
canvasElement.height = Window.innerHeight;

let numberOfRows = canvasElement.height/cellSize;
let numberOfColumns = canvasElement.width / cellSize;

let makeCanvas = function() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    for (let row = 0; row < numberOfRows; row++) {
        for (let column = 0; column < numberOfColumns; column++) {
            ctx.strokeRect(column * cellSize, row * cellSize, cellSize);
            }
    }
}

makeCanvas();