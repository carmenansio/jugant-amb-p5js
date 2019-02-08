// launch your canvas
function setup() {
  // put setup code here
  // init your variables
  createCanvas(displayWidth, displayHeight);
  // bg color
  background(0);
}

// loop for your draw/animation
function draw() {
  // put drawing code here
  strokeWeight(8)
  for (var i = 20; i<=displayWidth; i +=40){
    for  (var j = 20; j<=displayHeight; j +=40) {
      stroke(j/2,i/2,0);
      line(i, j+20,i,j+40);
    }
  }
}
