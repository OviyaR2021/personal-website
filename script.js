alert("Hello!");
let canvasElement = document.getElementById("canvas");
let ctx = canvasElement.getContext("2d");
canvasElement.width = Window.innerWidth;
canvasElement.height = Window.innerHeight;

let makeCanvas = function() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    for (let row = 0; row < numberOfRows; row++) {
        for (let column = 0; column < numberOfColumns; column++) {
            ctx.fillRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
            ctx.strokeRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
            }
    }
}

makeCanvas();