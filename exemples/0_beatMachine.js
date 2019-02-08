//*****************************************************************************//
//							VISUAL BEAT MACHINE TEMPLATE					   //
// Welcome to the visual beat machine template! You will use this template     //
// to create your own visual beat machine! Basically, the way it works is by   //
// creating a 'visual' or shape and a 'beat' or sound for a certain key press. //
//																			   //
// The beat machine template consists of 4 major functions:					   //
// 		1. preload() 	--  call your 'beat'					   	   		   //
//		2. setup()  	--  specify the canvas size, background, etc.          //
//		3. draw() 	 	--  loops indefinitely, calls functions to make shapes //
//		4. keyPressed() --  is only called if a key is pressed				   //
//*****************************************************************************//

//*****************************************************************************//
//									PRELOAD 								   //
//Later we will learn how to load sound files in a special 'preload' function  // 
// and call them in the main part of our code!								   //
//*****************************************************************************//
function preload() { 
	sound1 = loadSound('assets/coin-sound.mp3');
	//initialize sound2
    // etc...
}

//*****************************************************************************//
//									SETUP 								   	   //
// You've seen setup() before ... Let's specify the canvas size and background //
//*****************************************************************************//
function setup() {
	createCanvas(displayWidth,displayHeight);
	background(0,255,0);
}

//*****************************************************************************//
//									DRAW									   //
// You've seen draw() before ... this lets us run our code forever.            //
//*****************************************************************************//
function draw() {
  	frameRate(4);
    
  	// call functions continuously here. E.g.:
  	randRect();

}

//*****************************************************************************//
//							   	  KEYPRESSED								   //
// The keyPressed() is called when a key on the keyboard is pressed.           //
// Inside keyPressed, we can use if statements to check and see if a specific  //
// key is pressed. We can create the visual beat machine by calling a specific //
// 'visual' and 'beat' at the same time a certain key is pressed.    		   //
// In the 'if' statement below, we check to see if  key 's' is pressed. 	   //
// Hint: add other 'if' statements, 'visuals,' and 'beats' with other keys!    //  
// Hint: call functions in the 'if' statements that we've made in other classes//
//*****************************************************************************//
function keyPressed() {
  
    // this code is only called if 's' is pressed
	if (key == 'S' || key == 's') {
      
		// 1. call 'beat':
		sound1.play();
        
		// 2. call 'visual':
        randEllipse();
	}
  
  	// insert code here to check if other keys are pressed:
}

//*****************************************************************************//
//							ADDITIONAL FUNCTIONS							   //
// If you choose to add additional functions to your beat machine, define them //
// below:																   	   //
//*****************************************************************************//

// Example function 1: randRect
function randRect() {
  fill(0,random(255),random(255));
  rect(random(displayWidth),random(displayHeight),100,100);
}

// Example function 2: randEllipse
function randEllipse() {
  fill(255,0,0);
  ellipse(random(displayWidth),random(displayHeight),100,100);
}