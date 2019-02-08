// launch your canvas
function setup() {
  createCanvas(400,350);
  background(255,255,51);
}

// loop for your draw/animation
function draw() {
  // put drawing code here
  
  // hair
  fill(0);
  stroke(0);
  strokeWeight(20);
  ellipse(166,169,255,230);

  // galtes
  stroke(0);
  strokeWeight(4);
  fill(255,195,121);
  ellipse(220,220,320,180);

  // mouth
  fill(124,10,2);
  ellipse(295,285, 50,60);

  // ear
  fill(255,195,121);
  ellipse(50,230,80,100);

  // head
  fill(255,195,121);
  stroke(255,195,121);
  ellipse(180,167,230,220);

  // patilles
  fill(0);
  stroke(0);
  rect(46,123,15,57);

  // pestanyes
  fill(255,195,121);
  stroke(0);
  ellipse(145,170,90,90);
  ellipse(245,140,88,88);

  // tall de pestanyes
  fill(255,195,121);
  stroke(255,195,121);
  ellipse(145,180,106,80);
  ellipse(245,150,106,80);

  // eyes
  fill(0);
  stroke(0);
  ellipse(150,180,70,60);
  ellipse(250,150,68,58);

  // pupil·les
  fill(255);
  stroke(255);
  ellipse(150,180,30,26);
  ellipse(250,150,28,24);

  // eyebrown
  stroke(0);
  strokeWeight(20);
  line(85,130,110,90);
  line(110,90,150,110);
  line(190,100,220,60);
  line(220,60,260,80);
}