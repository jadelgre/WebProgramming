// initialize canvas values
var canvas;
var context;
var canvasHeight = 500;
var canvasWidth = 500;
var myImage = new Image();
var imageX = 0;
var imageY = 0;
var dx = 10;
var dy = 10;

window.addEventListener("keydown", handleKeyEvent, false);
window.addEventListener("keypress", handleKeyEvent, false);
window.addEventListener("keyup", handleKeyEvent, false);

function handleKeyEvent(e) {
	// get the image dimensions
	var width = myImage.naturalWidth;
	var height = myImage.naturalHeight;
	switch(e.keyCode) {
		case 37: // left arrow
			if(imageX - dx >= 0) {
				imageX = imageX - dx;
				drawImage();
			}
			break;
		case 38: // up arrow
			if(imageY - dy >= 0) {
				imageY = imageY - dy;
				drawImage();
			}
			break;
		case 39: // right arrow 
			if(imageX + width + dx <= canvasWidth) {
				imageX = imageX + dx;
				drawImage();
			}
			break;
		case 40: // down arrow
			if(imageY + height + dy <= canvasHeight) {
				imageY = imageY + dy;
				drawImage();
			}
			break;  
	}   
}

var initializeCanvas = function() {
	canvas = document.getElementById("game");
	canvas.style.backgroundColor = "lightgray";
	canvas.width = canvasWidth;
	canvas.height = canvasWidth;
	context = canvas.getContext('2d');
	context.drawImage(myImage, imageX, imageY);
}

var drawImage = function() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	context.drawImage(myImage, imageX, imageY);
}

window.onload = function() {
	initializeCanvas();
}

myImage.src = './cat.jpg'
