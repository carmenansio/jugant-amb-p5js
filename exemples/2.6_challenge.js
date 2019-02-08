function setup(){
	createCanvas(300,300);
	// background color goes here
}
 
function draw(){
// nacho color goes here
		for(var x = 20; x<=300; x +=45){ //creates triangles across the canvas
      // second loop to create triangles up and down canvas goes here
			triangle(x,0, x-15,0 +30,x +20,0 +45);
  }
 }