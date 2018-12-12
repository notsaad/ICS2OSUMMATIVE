size(600, 400);

//checks what scene it currently is
var currentScene = 1;

//life counter

//score counter

//coin object

//title screen
  var drawScene1 = function() {
    background(11, 57, 84);
    textSize(48);
    fill(255, 90, 79);
    text("platformer", 184, 100);
    noStroke();
    rect(50, 250, 200, 60);
    rect(350, 250, 200, 60);
    fill(11, 57, 84);
    textSize(31);
    text("play game", 73, 290);
    text("options", 399, 290);
    currentScene = 1;
  };
  
    drawScene1();
    
//character selection screen
  var drawScene2 = function() {
    background(11, 57, 84);
    textSize(48);
    fill(255, 90, 79);
    text("character select", 130, 75);
    fill(255,193,86);
    textSize(30);
    text("harry potter", 30, 350);
    text("tinkerbell", 230, 350);
    text("screen slaver", 400, 350);
    fill(255, 90, 79);
    noStroke();
    rect(39, 96, 142, 217);
    rect(221, 96, 142, 217);
    rect(417, 96, 142, 217);
    fill(11, 57, 84);
    rect(41, 98, 138, 213);
    rect(223, 98, 138, 213);
    rect(419, 98, 138, 213);
    currentScene = 2;
  };

    //drawScene2();

//options screen
  var drawScene3 = function() {
    background(11, 57, 84);
    fill(255, 90, 79);
    textSize(40);
    text("options", 230, 50);
    fill(255, 90, 79);
    noStroke();
    rect(19, 25, 108, 49);
    fill(11, 57, 84);
    textSize(30);
    text("back", 38, 57);
    currentScene = 3;
  };
  
  //drawScene3();


// first level of the game
  var drawScene4 = function() {
    background(158, 214, 212);
    fill(255, 255, 255);
    text("scene 4", 200, 200);
		fill(11, 57, 84);
		new Platform(10, 10, 100, 40);
    currentScene = 4;
  };

 var drawScene5 = function() {
    background(11, 57, 84);
    fill(255, 90, 79);
    textSize(48);
    text("credits", 215, 52);
    for (var a = 400; a < 80; a--) {
        fill(255, 193, 86);
        text("Saad Mazhar", 180, a);
        text("Yunus Abu-Oshaibah", 120, a + 100);
        text("Max Huisman", 180, a + 200);
        text("Riley", 190, a + 300);
        text("Sadie", 190, a + 400);
   }
    currentScene = 5;
  };

	//tutorial
	//var drawScene 6 = function() {
		//background(158, 214, 212);
		//fill(11, 57, 84);
		//textSize(36);
		//text("tutorial", 20, 20);
		//currentScene  = 6;
	//};

//drawScene5();

//character movement
	
//changes scenes based on mouse clicks and where the mouse clicks
mouseClicked = function() {
  if (currentScene === 5 ) {
    drawScene1();
  } else if (currentScene === 1 && mouseX > 50 && mouseX < 250 && mouseY > 250 && mouseY < 310 && mouseClicked) {
    drawScene2();
  } else if (currentScene === 1 && mouseX > 350 && mouseX < 550 && mouseY > 250 && mouseY < 310 && mouseClicked) {
    drawScene3();
  } else if (currentScene === 2 && mouseX > 39 && mouseX < 181 && mouseY > 96 && mouseY < 313 && mouseClicked) {
    drawScene4();
  } else if (currentScene === 2 && mouseX > 221 && mouseX < 363 && mouseY > 96 && mouseY < 313 && mouseClicked) {
    drawScene4();
  } else if (currentScene === 2 && mouseX > 417 && mouseX < 559 && mouseY > 96 && mouseY < 313 && mouseClicked) {
    drawScene4();
  } else if (currentScene === 3 && mouseX > 19 && mouseX < 127 && mouseY > 25 && mouseY < 74 && mouseClicked) {
    drawScene1();
  } else if (currentScene === 4 && mouseClicked) {
    drawScene5();
		 } else if (currentScene === 5 && mouseClicked) {
    drawScene6();
  }};
