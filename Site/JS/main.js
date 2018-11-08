// Traverse the DOM to find and element with a particular ID.
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.clearRect(0,0,500,500);

//Draws Rectangle in the middle of the canvas
ctx.fillStyle = "green";
ctx.fillRect(225,225,50,50);

// Create gradient
var gradient=ctx.createLinearGradient(0,0,500,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");

//Draws circle
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(400,250,100, 0, 2 * Math.PI, false);
ctx.fill();

//Draws Lines to Split Canvas
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(250,0);
ctx.lineTo(250,500);
ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.stroke();

// :P
ctx.font="40px Calibri";
ctx.fillStyle="orange";
ctx.fillText(":P",235,260);

canvas.addEventListener('click', DrawMouseBox, false);

function DrawMouseBox(e){
    var clientRect = canvas.getBoundingClientRect();

    ctx.fillStyle = "purple";
    ctx.fillRect(e.clientX - clientRect.left - 2, e.clientY - clientRect.top - 2, 4, 4);
}
