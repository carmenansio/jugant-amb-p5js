function setup() {
  createCanvas (displayWidth, displayHeight);
  background(255);
}

function draw() {
  textSize (60); //fixa el tamany del text
  fill(255, 0, 150, 51);
  text("Creative Coding girona", random(width), random(height));
  textSize(60);
  fill(0,0,150,51);
  text("code", mouseX, mouseY); //el ratolí fixa la ubicación
}