function setup() {  
	createCanvas(600, 400);
  person = new Person();
  textAlign(CENTER);
}

//defines the character and the variable to check jumping
var person;
var jumping = false;

//checks what scene it currently is
var scene1 = false;
var scene2 = false;
var scene3 = false;
var scene4 = true; 
var scene5 = false;

//platform properties

//character movement
function keyPressed() {
    if (keyPressed && key == 'ArrowUp' && jumping == false ){
    var jump = createVector(0, -5);
    person.applyForce(jump);
    jumping = true;   
  }
 if (keyPressed && key == 'ArrowLeft' && person.pos.y < height ){
    person.vel.x = -3;
 }
  
    if (keyPressed && key == 'ArrowRight' && person.pos.y < height){
    person.vel.x = 3;
  
    }
    
}

function keyReleased() {
	if (keyReleased && key == 'ArrowLeft' && person.pos.y < height ){
    person.vel.x = 0;
 }
  
    if (keyReleased && key == 'ArrowRight' && person.pos.y < height){
    person.vel.x = 0;
  
    }
}

//life counter

//score counter

//coin object

//title screen

function draw() {
  
  if (scene1 == true) {
    //title screen
    background(11, 57, 84);
    textSize(48);
    fill(255, 90, 79);
    text("platformer", 300, 100);
    noStroke();
    if (scene1 == true && mouseX > 50 && mouseX < 250 && mouseY > 250 && mouseY < 310) {
    fill(255, 151, 100);
    rect(50, 250, 200, 60);
    fill(255, 90, 79);
    rect(350, 250, 200, 60);
  	} else if (scene1 == true && mouseX > 350 && mouseX < 550 && mouseY > 250 && mouseY < 310) {
    fill(255, 151, 100);
    rect(350, 250, 200, 60);
    fill(255, 90, 79);
    rect(50, 250, 200, 60);
    }else if (scene1 == true){
    fill(255, 90, 79);
    rect(50, 250, 200, 60);
    rect(350, 250, 200, 60);
    }
    fill(11, 57, 84);
    textSize(31);
    text("play game", 150, 285);
    text("options", 450, 285);
    
  } else if (scene2 == true) { 
    //character selection
    background(11, 57, 84);
    textSize(48);
    fill(255, 90, 79);
    text("character select", 300, 75);
    fill(255,193,86);
    textSize(30);
    text("harry potter", 110, 350);
    text("tinkerbell", 292, 350);
    text("screen slaver", 488, 350);
    noStroke();
    fill(255, 90, 79);
    rect(39, 96, 142, 217);
    rect(221, 96, 142, 217);
    rect(417, 96, 142, 217);
    fill(11, 57, 84);
    rect(41, 98, 138, 213);
    rect(223, 98, 138, 213);
    rect(419, 98, 138, 213);
    fill(255);
    rectMode(CENTER);
    rect(110, 207, 20, 50);
    rect(292, 207, 20, 50);
    rect(488, 207, 20, 50);
    rectMode(CORNER);
    
  } else if(scene3 == true) {
    //options screen
    background(11, 57, 84);
    fill(255, 90, 79);
    textSize(40);
    text("options", 300, 50);
    fill(255, 90, 79);
    noStroke();
    rect(19, 25, 108, 50);
    fill(11, 57, 84);
    textSize(30);
    text("back", 73, 60);
    
  } else if(scene4 == true) {
    //game screen
    background(11, 57, 84);
    textSize(50);
    fill(255);
    text("tutorial", 100, 50);
    textSize(20);
    text("arrow keys to move,\n you can only move \n while jumping, collect \n the coins to move on", 100, 100);
    fill(255, 240, 93);
    ellipse(550, 370, 40, 40);
    fill(0);
    textSize(12);
    text("( ͡° ͜ʖ ͡°)", 550, 375);
    if (scene4 == true && person.pos.x > 530 - 20 && person.pos.x < 570) {
      fill(255);
    	rect(512, 300, 75, 25);
      fill(11, 57, 84);
      textSize(15);
      text("next level", 550, 315); 
    }
    var gravity = createVector(0, 0.1);
    person.applyForce(gravity);
    person.update();
    person.edges();
    person.display();
    
  } else if(scene5 == true) {
    //credits screen
  	background(11, 57, 84);
    fill(255, 90, 79);
    textSize(48);
    textAlign(CENTER);
    text("credits", 300, 52);
    fill(255, 193, 86);
		textSize(40);
    text("Saad Mazhar", 300, 150);
    text("Yunus Abu-Oshaibah", 300, 200);
    text("Max Huisman", 300, 250);
    text("Riley", 300, 300);
    text("Sadie", 300, 350);
  }
  
/*
  } else if (scene2 == true && mouseX > 39 && mouseX < 181 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene2 == true && mouseX > 221 && mouseX < 363 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene2 == true && mouseX > 417 && mouseX < 559 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene3 == true && mouseX > 19 && mouseX < 127 && mouseY > 25 && mouseY < 74 && mousePressed) {
    	scene1 = true;
    	scene3 = false;
  } else if (scene4 == true && mousePressed) {
    	scene5 = true;
    	scene4 = false;
  } else if (scene5 == true && mousePressed) {
    	scene1 = true;
    	scene5 = false;
  }
  */
  
}

//character movement

//changes button color on hover

//changes scenes based on mouse clicks and where the mouse clicks
function mousePressed() {
 if (scene1 == true && mouseX > 50 && mouseX < 250 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene2 = true;
   		scene1 = false;
  } else if (scene1 == true && mouseX > 350 && mouseX < 550 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene3 = true;
    	scene1 = true;
  } else if (scene2 == true && mouseX > 39 && mouseX < 181 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene2 == true && mouseX > 221 && mouseX < 363 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene2 == true && mouseX > 417 && mouseX < 559 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene3 == true && mouseX > 19 && mouseX < 127 && mouseY > 25 && mouseY < 74 && mousePressed) {
    	scene1 = true;
    	scene3 = false;
  } else if (scene4 == true && person.pos.x > 530 - 20 && person.pos.x < 570) {
    	scene5 = true;
    	scene4 = false;
  } else if (scene5 == true && mousePressed) {
    	scene1 = true;
    	scene5 = false;
  }}
