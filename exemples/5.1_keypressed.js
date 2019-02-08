function setup() {
    createCanvas (windowWidth, windowHeight);
    background (0);
}

function keyPressed (){
    if ( key == 'a' || key == 'A ') {
        strokeWeight( 0 )
        fill( random(150,255),0,random(150,255), random(255));
        ellipse( random(windowWidth),random(windowHeight),90,90);
    }

    if ( key == ' ') {
        clear();
    }
}