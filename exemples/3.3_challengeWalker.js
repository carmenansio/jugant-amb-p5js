function setup() {
  createCanvas(windowWidth, windowHeight) // creates a canvas the size of window
  background(200,0,100) // sets background color to grey
  
} 

function draw() {
	var choice = parseInt(random(6))
	if (choice == 0){

	} else if (choice == 1){
	
	} else if (choice == 2){
		iceCream()
	} else if (choice == 3){

	} else if (choice == 4){

	} else if (choice == 5){

	} else {

	} 
}
 
// below are the functions called in draw()
function goofyFace() {

  var x = random(width)    // creates a variable named x and store a random x-coordinate
  var y = random(height)   // creates a variable named y and store a random y-coordinate
    
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
  rect(x-5,y-5,10,10)
  rect(x+30,y-5,10,10) 

  // goofy face mouth
  fill(255,0,0)
  rect(x-8,y+33,33,3)
  
}

function nachos() {
 	var x = random(width)    // creates a variable named x and store a random x-coordinate
    var y = random(height)   // creates a variable named y and store a random y-coordinate
    
    fill(255,69,0)
	triangle(x,y, x-15,y +30,x +20,y +45)
}

function iceCream() {
	var x = random(width);    // creates a variable named x and store a random x-coordinate
    var y = random(height);   // creates a variable named y and store a random y-coordinate
   
    fill(255,195,77); // color of cone
		triangle(x,y, x-15,y -30,x +15,y -30); // cone
         
    fill(123,63,0); // color of chocolate ice cream
		arc(x,y-30, 25,25,PI,-PI); // ice cream
          
    fill(255,0,0); // color of cherry on top
		arc(x,y-43, 5,5,PI,-PI); // cherry on top

}

function lines() {
  var x = random(width);    // creates a variable named x and store a random x-coordinate
  var y = random(height);   // creates a variable named y and store a random y-coordinate
   
  strokeWeight(8);
  
  for(var i = 20; i<=260; i +=40){ 
		stroke(0,i,0);
    line(x+i,y+40,x+i,y+80);
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

// Below is the function template: use this template to create your own function:

//function funcTemplate() {
//          var x = random(width)// creates a variable named x and stores a random x-coordinate
//          var y = random(height)// creates a variable named y and stores a random y-coordinate
//         // put code for your object here
//}