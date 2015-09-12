// initialize canvas values
var canvas;
var context;
var canvasHeight = 500;
var canvasWidth = 500;
var faceRadius = canvasHeight/3;
var	faceX = canvasWidth/2;
var	faceY = canvasHeight/2;

// Handle click events on the canvas
var handleClick = function(event) {
	var x = event.x;
	var y = event.y;
	// get relative XY coordinates
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	// check to see if the click is inside of the circle
	if((Math.pow((x - faceX),2) + Math.pow((y - faceY),2)) < Math.pow(faceRadius,2)) {
		toggle();
	}

}

var initializeCanvas = function() {
	canvas = document.getElementById("game");
	canvas.addEventListener("mousedown", handleClick, false);
	canvas.style.backgroundColor = "lightgray";
	canvas.width = canvasWidth;
	canvas.height = canvasWidth;
	context = canvas.getContext('2d');
}

var drawFace = function() {
	context.beginPath();
	// Draw the face
	context.arc(faceX, faceY, faceRadius,0,2*Math.PI); // circle
	context.closePath();
	context.stroke();
	context.fillStyle='yellow';
	context.fill();
	// Draw the left eye
	context.beginPath();
	context.arc(canvas.width*2/5, canvasHeight*2/5, canvasHeight/18,0,2*Math.PI); // circle
	context.closePath();
	context.stroke();
	// Draw the right eye
	context.beginPath();
	context.arc(canvas.width*3/5, canvasHeight*2/5, canvasHeight/18,0,2*Math.PI); // circle
	context.closePath();
	context.stroke();
}

var drawSmile = function() {
	context.beginPath();
	context.arc(canvas.width/2, canvasHeight*3/5, canvasHeight/6,0,Math.PI); // circle
	context.closePath();
	context.stroke();
	context.fillStyle='white';
	context.fill();
}

var drawFrown = function() {
	context.beginPath();
	context.arc(canvas.width/2, canvasHeight*2/3, canvasHeight/6,Math.PI,2*Math.PI); // circle
	context.closePath();
	context.stroke();
	context.fillStyle='white';
	context.fill();
}

var toggle = function () {
	var button = document.getElementById("theButton");
	if (button.innerHTML == "Make me smile") {
		button.innerHTML = "Make me frown";
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		drawFace();
		drawSmile();
	} else {
		button.innerHTML = "Make me smile";
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		drawFace();
		drawFrown();
	}
}

window.onload = function() {
	initializeCanvas();
	drawFace();
	drawSmile();
	document.getElementById("theButton").innerHTML = "Me me frown";
}

var drawSmile = function() {
	context.beginPath();
	context.arc(canvas.width/2, canvasHeight*3/5, canvasHeight/6,0,Math.PI); // circle
	context.closePath();
	context.stroke();
	context.fillStyle='white';
	context.fill();
}
