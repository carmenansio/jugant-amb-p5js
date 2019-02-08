var hue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  hue = 0;
}

function draw() {
  // background(220);
}

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue += 10;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  if (keyCode == 82) {
      hue = 0;
  }
}