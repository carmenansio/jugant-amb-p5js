function setup() {
  createCanvas(480,120);
  background (180,255,255);
}

function draw() {
  strokeWeight (8)
  for( var i = 20; i<=260; i +=40 ){
  stroke (0,i,0);
  line (i,40,i,80); //esta línea
  //continuará dibujándose
  //siempre y cuando i sea
  //menor o igual a 260.
  }
}