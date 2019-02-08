function setup () {
    createCanvas(920,640)
    }
    function draw () {
    background(255);
    target(width/4,height/2); //crida
    target(width/2+200,height/2); //crida
    }
    function target(x,y) { //definició
    fill(255);
    ellipse(x,y,300,300);
    fill(0);
    ellipse(x,y,250,250);
    fill(72,196,253);
    ellipse(x,y,200,200);
    fill(255);
    ellipse(x,y,150,150);
    fill(255,255,0);
    ellipse(x,y,100,100);
}