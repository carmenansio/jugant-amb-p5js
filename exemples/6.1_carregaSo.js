function preload() {
sound1 = loadSound('assets/coin-sound.mp3'); //nom del arxiu de so
//inicialitzar so1
sound2 = loadSound('assets/jump-sound.mp3'); //nom del arxiu de so
//inicialitzar so2
}

function setup() {
//el tamany del teu canvas aquí
  createCanvas(500,500);
	background(0,0,255);
}

function keyPressed() {
  if ( key == 'k' || key == 'r') {
  sound1.play(); //activar el so
  fill(255); //emplenar les formes amb color
  strokeWeight(); //tria el gruix de la línia
  //del perímetre
  //dibuixa les formes aquí
  }
	//reprodueix el so2 i dibuixa un altre forma aquí
}

// loop for your draw/animation
function draw() {
  // put drawing code here
	noStroke();
	fill(255,255,0);
	ellipse(250,250,250,250);
}
