// variables declaration
var a = 60
var b = 80

// launch your canvas
function setup() {
  // put setup code here
  createCanvas(480,120);
  background(255,0,255);
}

// loop for your draw/animation
function draw() {
  // put drawing code here
  strokeWeight(3);
  fill(7,185,255);
  ellipse(75,a,b,b);
  fill(255,0,40);
  ellipse(175,a,b,b);
  fill(140,255,0);
  ellipse(275,a,b,b);
}
