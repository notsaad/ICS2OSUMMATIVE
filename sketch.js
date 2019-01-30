function preload() {
	 song = loadSound("skate.mp3");
}

//basic setup
function setup() {
  song.play();
	createCanvas(600, 400);
  
  person = new Person();
  
  var Platform = [
  ground =  new platform(0, 380, 600, 20),
  lava1 = new lava(200, 365, 150, 15),
  lava2 = new lava(100, 365, 150, 15),
  lava3 = new lava(300, 365, 150, 15),
  lava4 = new lava(190, 365, 230, 15),
  lava5 = new lava(70, 295, 25, 15),
  lava6 = new lava(170, 329, 20, 50),
  lava7 = new lava(230, 365, 100, 14),
  lava8 = new lava(370, 339, 20, 40),
  lava9 = new lava(430, 319, 20, 60),
  ];
    
  coin1 = new coin(550, 350);
  coin2 = new coin(550, 350);
  coin3 = new coin(550, 350);
  coin4 = new coin(550, 350);

  
  textAlign(CENTER);
}

//defines the character and the variable to check jumping
var person;
var jumping = false;
var hit = false;
var ground;
var ground2;
var ground3;
var score = 0;
var life = 3;
var song;

//checks what scene it currently is
var scene1 = true; //start screen
var scene2 = false; //about screen
var scene3 = false;	//options screen
var scene4 = false;	//first game screen
var scene5 = false;	//game won screen
var scene6 = false;  //second game screen
var scene7 = false;	//credits screen
var scene8 = false; //game over screen
var scene9 = false; //third game screen
var scene0 = false; //fourth game screen
var scenea = false; //fifth game screen

//platform properties

//character movement
function keyPressed() {
    if (keyPressed && key == 'ArrowUp' && jumping == false){
    var jump = createVector(0, -5);
    person.applyForce(jump);
    jumping = true;
  }
 if (keyPressed && key == 'ArrowLeft' && person.pos.y < ground.y ){
    person.vel.x = -3;
 }

    if (keyPressed && key == 'ArrowRight' && person.pos.y < ground.y){
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

//game screens
function draw(){

  if (scene1 == true) {
    //title screen
    background(11, 57, 84);
    textSize(48);
    fill(255, 90, 79);
    text("jumper", 300, 100);
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

  } else if(scene2 == true) {
    
  	background(11, 57, 84);
  	fill(255, 90, 79);
    textSize(46);
  	text("about", 300, 50);
    textSize(14);
    text("this was a project that I did in grade 10 computer science. \n I made this game in roughly 2 months, and has ~1000 line of code at the time of writing. \n Overall, this project was fairly hard however, \n I did learn how to code somewhat along the way \n that's all on my end, hope you enjoy the game!", 300, 150);
    textSize(24);
    
    rectMode(CENTER);
    noStroke();
    
    if(scene2 == true && mouseX > 240 && mouseX < 360 && mouseY > 280 && mouseY < 320){
    fill(255, 151, 100);
    rect(300, 300, 120, 40);
    } else if (scene2 == true){
    fill(255, 90, 70);
    rect(300, 300, 120, 40);
    }
    
    fill(11, 57, 84);
    text("back", 300, 305)
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
    
    if (scene3 == true && mouseX > 150 && mouseX < 280 && mouseY > 200 && mouseY < 240){
    	fill(255, 151, 100);
    	rect(150, 200, 130, 40);
    } else if (scene3 == true) {
    	fill(255, 90, 79);
    	rect(150, 200, 130, 40); 
    }
    
    if (scene3 == true && mouseX > 350 && mouseX < 480 && mouseY > 200 && mouseY < 240){
      fill(255, 151, 100);
    	rect(350, 200, 130, 40);
    } else if(scene3 == true){
      fill(255, 90, 79);
    	rect(350, 200, 130, 40);
    }
    
    fill(11, 57, 84);
    text("about", 215, 230);
    text("credits", 415, 230);

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
    score = 0;
    life = 3;
  
    
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
    textSize(30);
    text("thanks for playing!", 300, 150);
    fill(255, 193, 86);
		textSize(40);
    text("score: " + score, 300, 300);
    text("lives left: " + life, 300, 350);

  } else if(scene6 ==  true){
		//game screen 2
    background(11, 57, 84);
    ground.show();
    lava1.show();
    textSize(25);
    fill(255, 90, 79);
    text("score: " + score, 50, 25);
    text("lives: " + life, 555, 25);
    coin2.show();
    var gravity2 = createVector(0, 0.1);
    
   	person.applyForce(gravity2);
    person.update();
    person.edges(ground);
    
    person.display();
    person.death(lava1);
    if(person.pos.x > coin2.x - 40 && person.pos.x < coin2.x + 20 && person.pos.y > coin2.y - 20 && person.pos.y < coin2.y + 20){
      scene6 = false;
      scene9 = true;
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
    text("lives left: " + life, 300, 250);
    
    if(scene8 == true && mouseX > 240 && mouseX < 360 && mouseY > 280 && mouseY < 330){
    	fill(255, 151, 100);
      rect(240, 280, 120, 50);
    } else if(scene8 == true){
    	fill(255, 91, 79);
      rect(240, 280, 120, 50);
    }
      
    fill(11, 57, 84);
    text("retry", 300, 315);
    
  } else if(scene9 == true){
    //third game screen
 		background(11, 57, 84);
    ground.show();
    lava2.show();
    lava3.show();
    textSize(25);
    fill(255, 90, 79);
    text("score: " + score, 50, 25);
    text("lives: " + life, 555, 25);
    coin3.show();
    var gravity3 = createVector(0, 0.1);
   	person.applyForce(gravity3);
    person.update();
    person.edges(ground);
    person.display();
    person.death2(lava2);
    person.death3(lava3);
    if(person.pos.x > coin3.x - 40 && person.pos.x < coin3.x + 20 && person.pos.y > coin3.y - 20 && person.pos.y < coin3.y + 20){
      scene9 = false;
      scene0 = true;
      person.pos.x = 50;
      score+=1;
    }	else if (life == 0){
     	scene8 = true;
      scene9 = false;
      person.pos.x = 50;
    }
    
  } else if(scene0 == true){
    //third game screen
  	background(11, 57, 84);
    ground.show();
    lava4.show();
    textSize(25);
    fill(255, 90, 79);
    text("score: " + score, 50, 25);
    text("lives: " + life, 555, 25);
    coin3.show();
    var gravity4 = createVector(0, 0.1);
   	person.applyForce(gravity4);
    person.update();
    person.edges(ground);
    person.display();
    person.death4(lava4);
    if(person.pos.x > coin4.x - 40 && person.pos.x < coin4.x + 20 && person.pos.y > coin4.y - 20 && person.pos.y < coin4.y + 20){
      scene0 = false;
      scenea = true;
      person.pos.x = 50;
      score+=1;
    }	else if (life == 0){
     	scene8 = true;
      scene0 = false;
      person.pos.x = 50;
    }
    
  } else if(scenea == true){
    //third game screen
  	background(11, 57, 84);
    ground.show();
    lava5.show();
    lava6.show();
    lava7.show();
    lava8.show();
    lava9.show();
    textSize(25);
    fill(255, 90, 79);
    text("score: " + score, 50, 25);
    text("lives: " + life, 555, 25);
    coin3.show();
    var gravity5 = createVector(0, 0.1);
   	person.applyForce(gravity5);
    person.update();
    person.edges(ground);
    person.display();
    person.death5(lava5);
    person.death6(lava6);
    person.death7(lava7);
    person.death8(lava8);
    person.death9(lava9);
    if(person.pos.x > coin3.x - 40 && person.pos.x < coin3.x + 20 && person.pos.y > coin3.y - 20 && person.pos.y < coin3.y + 20){
      scenea = false;
      scene5 = true;
      person.pos.x = 50;
      score+=1;
    }	else if (life == 0){
     	scene8 = true;
      scene9 = false;
      person.pos.x = 50;
    }
  }
}
  
//scene changer
function mousePressed(){
 if (scene1 == true && mouseX > 50 && mouseX < 250 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene4 = true;
   		scene1 = false;
  } else if (scene1 == true && mouseX > 350 && mouseX < 550 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene3 = true;
    	scene1 = false;
  } else if (scene2 == true && mouseX > 240 && mouseX < 360 && mouseY > 280 && mouseY < 320){
    	scene3 = true;
    	scene2 = false;
  } else if (scene3 == true && mouseX > 19 && mouseX < 127 && mouseY > 25 && mouseY < 74 && mousePressed) {
    	scene1 = true;
    	scene3 = false;
  } else if (scene3 == true && mouseX > 150 && mouseX < 280 && mouseY > 200 && mouseY < 240 && mousePressed){
    	scene2 = true;
  		scene3 = false;
  } else if (scene3 == true && mouseX > 350 && mouseX < 480 && mouseY > 200 && mouseY < 240 && mousePressed){
    	scene7 = true;
    	scene3 = false;
  } else if (scene4 == true && person.pos.x > 530 - 20 && person.pos.x < 570 && mouseX > 512  && mouseX < 587 && mouseY > 300 && mouseY < 325 && mousePressed) {
    	scene6 = true;
    	scene4 = false;
			person.pos.x = 50;
  } else if (scene5 == true && mousePressed) {
    	scene7 = true;
    	scene5 = false;
  } else if (scene7 == true && mousePressed) {
    	scene1 = true;
    	scene7 = false;
	} else if (scene8  == true && mouseX > 240 && mouseX < 360 && mouseY > 280 && mouseY < 330 && mousePressed) {
			scene1 = true;
			scene8 = false;
  }}
