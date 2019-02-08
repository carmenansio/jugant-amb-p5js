var img;
var img2;

function preload() {
	img = loadImage ("assets/girona_black.png");
	img2 = loadImage ("assets/girona_white.png");
}
function setup() {
	createCanvas (displayWidth, displayHeight);
	background();
}
function draw(){
	image (img, random(width), random(height), 90,90);
	image (img2, mouseX, mouseY, mouseX, mouseY);
}