function setup() {
	createCanvas(600, 400);
  person = new Person();
  ground =  new platform(0, 380, 600, 20);
  ground2 = new platform(0, 380, 200, 20);
  ground3 = new platform(400, 380, 200, 20);
  platform1 = new platform(300, 300, 140, 20);
  lava1 = new lava(200, 385, 200, 15);
  coin1 = new coin(550, 350);
  coin2 = new coin(550, 350);
  textAlign(CENTER);
}

//defines the character and the variable to check jumping
var person;
var jumping = false;
var ground;
var ground2;
var ground3;
var score = 0;
var life = 3;

//checks what scene it currently is
var scene1 = true; //start screen
var scene2 = false;	//character selection screen
var scene3 = false;	//options screen
var scene4 = false;	//first game screen
var scene5 = false;	//game won screen
var scene6 = false;	//second game screen
var scene7 = false;	//credits screen
var scene8 = false; //game over screen

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
		if (scene2 == true && mouseX > 39 && mouseX < 181 && mouseY > 96 && mouseY < 313) {
    fill(255, 151, 100);
  	rect(39, 96, 142, 217);
    fill(255, 90, 79);
    rect(221, 96, 142, 217);
		rect(417, 96, 142, 217);
		fill(11, 57, 84);
    rect(41, 98, 138, 213);
    rect(223, 98, 138, 213);
    rect(419, 98, 138, 213);
	} else if (scene2 == true && mouseX > 221 && mouseX < 363 && mouseY > 96 && mouseY < 313) {
		fill(255, 151, 100);
		rect(221, 96, 142, 217);
    fill(255, 90, 79);
		rect(39, 96, 142, 217);
		rect(417, 96, 142, 217);
	} else if (scene2 == true && mouseX > 417 && mouseX < 559 && mouseY > 96 && mouseY < 313) {
		fill(255, 151, 100);
		rect(417, 96, 142, 217);
		fill(255, 90, 79);
		rect(221, 96, 142, 217);
		rect(39, 96, 142, 217);
	} else if (scene2 == true){
		fill(255, 90, 79);
		rect(221, 96, 142, 217);
		rect(39, 96, 142, 217);
		rect(417, 96, 142, 217);
    }
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
		textSize(40);
		noStroke();
		if (scene3 == true && mouseX > 19 && mouseX < 127 && mouseY > 25 && mouseY < 75){
			fill(255, 151, 100);
			rect(19, 25, 108, 50);
		} else if (scene3 == true){
			fill(255, 90, 79);
			rect(19, 25, 108, 50);
		}
    fill(255, 90, 79);
    text("options", 300, 50);
    fill(11, 57, 84);
    textSize(30);
    text("back", 73, 60);

  } else if(scene4 == true) {
    //game screen
    background(11, 57, 84);
    ground.show();
    textSize(50);
    fill(255, 90, 79);
    text("tutorial", 100, 50);
    textSize(20);
    text("arrow keys to move,\n you can only move \n while jumping, collect \n the coins to move on", 100, 100);
    coin1.show();
    var gravity1 = createVector(0, 0.1);
    person.applyForce(gravity1);
    person.update();
    person.edges(ground);
    person.display();
  
    
    if(person.pos.x > coin1.x - 40 && person.pos.x < coin1.x + 20 && person.pos.y > coin1.y - 20 && person.pos.y < coin1.y + 20){
      scene4 = false;
      scene6 = true;
      person.pos.x = 50;
      score+=1;
    }
    
    
  } else if(scene5 == true){
    //game won screen
  	background(11, 57, 84);
    fill(255, 90, 79);
    textSize(60);
    textAlign(CENTER);
    text("you win!", 300, 100);
    fill(255, 193, 86);
		textSize(40);
    text("score: " + score, 300, 300);
    text("lives left: " + life, 300, 350);

  } else if(scene6 ==  true){
		//game screen 2
    background(11, 57, 84);
    ground2.show();
    ground3.show();
    platform1.show();
    lava1.show();
    textSize(25);
    fill(255, 90, 79);
    text("score: " + score, 50, 25);
    text("lives: " + life, 555, 25);
    coin2.show();
    var gravity2 = createVector(0, 0.1);
    person.applyForce(gravity2);
    person.update();
    person.edges2(ground2);
    person.edges3(ground3);
    person.edges4(platform1);
    person.display();
    person.death(lava1);
    if(person.pos.x > coin2.x - 40 && person.pos.x < coin2.x + 20){
      scene6 = false;
      scene5 = true;
      person.pos.x = 50;
      score+=1;
    }	else if (life == 0){
     	scene8 = true;
      scene6 = false;
      person.pos.x = 50;
    }
		
} else if(scene7 == true){
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
  
  } else if(scene8 == true){
    //game over screen
  	background(11, 57, 84);
    fill(255, 90, 79);
    textSize(48);
    textAlign(CENTER);
    text("game\nover", 300, 70);
    fill(255, 193, 86);
		textSize(40);
    text("score: " + score, 300, 200);
    fill(255, 90, 79);
    rect(240, 280, 120, 50);
    fill(11, 57, 84);
    text("retry", 300, 315);
  }
  
  //changes scenes based on mouse clicks and where the mouse clicks
function mousePressed(){
 if (scene1 == true && mouseX > 50 && mouseX < 250 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene2 = true;
   		scene1 = false;
  } else if (scene1 == true && mouseX > 350 && mouseX < 550 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene3 = true;
    	scene1 = false;
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
  } else if (scene4 == true && person.pos.x > 530 - 20 && person.pos.x < 570 && mouseX > 512  && mouseX < 587 && mouseY > 300 && mouseY < 325 && mousePressed) {
    	scene6 = true;
    	scene4 = false;
			person.pos.x = 50;
  } else if (scene5 == true && mousePressed) {
    	scene1 = true;
    	scene5 = false;
	} else if (scene8  == true && mousePressed) {
		scene1 = true;
		scene8 = false;
  }}
}
  
//character movement

//changes scenes based on mouse clicks and where the mouse clicks
