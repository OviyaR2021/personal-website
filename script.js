alert("Hello!");
let canvasElement = document.getElementById("canvas");
let ctx = canvasElement.getContext("2d");
canvasElement.width = 300;
canvasElement.height = 1000;

let makeCanvas = function() {
    ctx.fillStyle = "pink"
}