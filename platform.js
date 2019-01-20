//platform object
function platform (x,y,width,height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height  =  height;


this.show = function(){
    fill(0);
  	rect(this.x, this.y, this.width, this.height);
}
}

function lava (x,y,width,height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height  =  height;


this.show = function(){
    fill(255, 90, 79);
  	rect(this.x, this.y, this.width, this.height);
}
}

//coin object
function coin (x,y) {
  this.x = x;
  this.y = y;
  
  this.show = function(){
    fill(255, 240, 93);
    ellipse(this.x, this.y, 40, 40);
		fill(0);
    textSize(12);
    text("( ͡° ͜ʖ ͡°)", this.x, this.y + 5);
    }
    }

