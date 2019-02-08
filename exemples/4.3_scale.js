function setup() {
    createCanvas (500,500);
    stroke(255);
    background(0);
}

function draw() {
    var i = 250
    var j = 250

    translate(i,j);
    scale (500/60);
    fill(random(255),0,random(255));
    rotate(radians(random(360)));
    rect(0,0,20,20);
}