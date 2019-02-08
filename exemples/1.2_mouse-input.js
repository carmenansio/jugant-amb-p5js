// launch your canvas
function setup() {
  // put setup code here
  createCanvas(640, 360);
  background(255);
  noSmooth();
}

// loop for your draw/animation
function draw() {
  // put drawing code here
  fill(0,255,0);
  ellipse(mouseX, mouseY, 60, 60);
}