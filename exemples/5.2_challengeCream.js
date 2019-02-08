function setup() {
  createCanvas(windowWidth, windowHeight) // creates a canvas the size of window
  background(200,0,100); // sets background color to grey
  
} 

function draw() {
  mouseCoordinates() // this function calls displays the x&y coordinates of your mouse pointer

  // write code here for shapes to be drawn
  
}

function keyPressed() {

   if (key == ' ') { 		// clears canvas if spacebar is pressed
    	clear()
   }
  
  if (key == 'd' || key == 'D') {     // press 'd' key to draw a target at a random point
    	iceCream()
  }
  
  if (key == 'i' || key == 'I') {     // press 'i' key to draw a target at a random point

  }
  
  if (key == 'y' || key == 'Y') {     // press 'y' key to draw a target at a random point

  }
  
 
  if (key == 'g' || key == 'G') {     // press 'g' key to draw a smiley face at a random point

  }
 
  
  if (key == 'r' || key == 'R') {     // press 'r' key to draw 9 dots logo at a random point

  }
  
  if (key == 'l' || key == 'L') {     // press 'l' key to draw 9 dots logo at a random point

  }
  
  if (key == 's' || key == 'S') {     // press 's' key to draw 9 dots logo at a random point

  }
}

function goofyFace() {

  var x = random(width);    // creates a variable named x and store a random x-coordinate
  var y = random(height);   // creates a variable named y and store a random y-coordinate
    
  //goofy face shape
  fill(0,255,255);
  ellipse(x,y,100,100);

  // goofy face sclera
  strokeWeight(2); // step 5
  fill(0,255,0); // step 6
  ellipse(x,y,25,25);
  ellipse(x+33,y,25,25); 

  // goofy face pupils
  fill(0,0,0); // step 8
  rect(x-5,y-5,10,10);
  rect(x+30,y-5,10,10);

  // goofy face mouth
  fill(255,0,0);
  rect(x-8,y+33,33,3);
  
}

function nachos() {
 		var x = random(width);   // creates a variable named x and store a random x-coordinate
    var y = random(height);   // creates a variable named y and store a random y-coordinate
    
  	fill(255,69,0);
		triangle(x,y, x-15,y +30,x +20,y +45);
}

function iceCream() {
		var x = random(width);    // creates a variable named x and store a random x-coordinate
    var y = random(height);   // creates a variable named y and store a random y-coordinate
   
    fill(255,195,77) // color of cone
		triangle(x,y, x-15,y -30,x +15,y -30); // cone
         
    fill(123,63,0) // color of chocolate ice cream
		arc(x,y-30, 25,25,PI,-PI); // ice cream
          
    fill(255,0,0) // color of cherry on top
		arc(x,y-43, 5,5,PI,-PI); // cherry on top

}

function lines() {
  var x = random(width);    // creates a variable named x and store a random x-coordinate
  var y = random(height);   // creates a variable named y and store a random y-coordinate
   
  	strokeWeight(8);
  for(var i = 20; i<=260; i +=40){ 
		stroke(0,i,0);
    line(x+i,y+40,x+i,y+80)M
  }
  
  strokeWeight(2); //reset back to defaults
  stroke(0); // reset back to defaults
}

function circles() {
  
  var x = random(width);    // creates a variable named x and store a random x-coordinate
  var y = random(height);   // creates a variable named y and store a random y-coordinate
  var b = 45;
  
  strokeWeight(3);
  fill(7,185,255);
  ellipse (x+75, y, b, b);
  fill(255,0,40);
  ellipse (x+175, y, b, b);
  fill(140,255,0);
  ellipse (x+275, y, b, b);
}

function circles2() {
  
  var x = random(width);    // creates a variable named x and store a random x-coordinate
  var y = random(height);   // creates a variable named y and store a random y-coordinate
  var b = 45;
  
  strokeWeight(3);
  fill(0,0,255);
  ellipse (x, y+75, b, b);
  fill(100,0,180);
  ellipse (x, y+175, b, b);
  fill(255,0,0);
  ellipse (x, y+275, b, b);
}

function walker () { // walker is a function we use to actually draw our walker on the screen
  
    var x = random(width);    // creates a variable named x and store a random x-coordinate
    var y = random(height);   // creates a variable named y and store a random y-coordinate
    
	ellipse(x,y,30,30); // head
	line(x,y+15,x,y+45); // body
	line(x,y+30,x-10,y+15); // left arm
	line(x,y+30,x+10,y+15); //right arm
	line(x,y+45,x-10,y+60); //left leg
	line(x,y+45,x+10,y+60); //right leg
}


// mouseCoordinates is a function that shows the x and y coordinates of your mouse. 
// You will see a text box in the lower right corner.
// note that this function is not called in keyPressed() and that it is already called in function draw
function mouseCoordinates() {
  	strokeWeight(1);
  	fill(0); // fill rectangle with black
  	rect(width-100, height-80, 100, 80); // rectangle for text box
  	fill(255); // text is white
  	textSize(23); // text size is 23 pixels
  	text("X: " +mouseX, width-90, height-50); // displays coordinate of mouseX
  	text("Y: " +mouseY, width-90, height-20); // displays coordinate of mouseY
  
}