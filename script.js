alert("Hello!");
let canvasElement = document.getElementById("canvas");
let ctx = canvasElement.getContext("2d");
canvasElement.width = 300;
canvasElement.height = 1000;

let makeCanvas = function() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            ctx.fillRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
            ctx.strokeRect(column * cellWidth, row * cellHeight, cellWidth, cellHeight);
            }
    }
}