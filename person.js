function Person() {
  this.pos = createVector(50, height , 20, 50);
  this.vel = createVector(0*0.95, 0);
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
  	if(jumping == true) {
    fill(random(255), random(255), random(255));
  } else if(jumping == false){
    fill(255);
  }
    noStroke();
    rect(this.pos.x, this.pos.y - 50, 20, 50);
  }

  this.edges = function(ground) {
  if (this.pos.x > ground.x && this.pos.x < ground.x + ground.width) {
    
    if (this.pos.y > ground.y) {
      this.vel.y *= 0;
      this.pos.y = ground.y;

         if(this.pos.y >= ground.y){

      		jumping = false;
          this.vel.x = 0;
         }
    } 

      if (this.pos.x < -10) {
        this.pos.x = -10;
      }
    } else {
      if (this.pos.y > height) {
        	this.vel.x *=0;
        	this.pos.y = height;
        
      if (this.pos.y >= height){
        	hit = true;
        	jumping = false;
          this.vel.x = 0;
      }
      }
      if (this.pos.x > width + 10) {

        this.pos.x = width - 10;
			}
		}
	}
  
    this.edges2 = function(ground2) {
  if (this.pos.x > ground2.x && this.pos.x < ground2.x + ground2.width) {
    
    if (this.pos.y > ground2.y) {
      this.vel.y *= 0;
      this.pos.y = ground2.y;

         if(this.pos.y >= ground2.y){
					hit = true
      		jumping = false;
          this.vel.x = 0;
         }
    } 

      if (this.pos.x < -10) {
        this.pos.x = -10;
      }
    } else {
      if (this.pos.y > height) {
        	this.vel.x *=0;
        	this.pos.y = height;
        
      if (this.pos.y >= height){
        	jumping = false;
          this.vel.x = 0;
        	hit = true;
      }
      }
      if (this.pos.x > width + 10) {

        this.pos.x = width - 10;
			}
		}
	}
  
    this.edges3 = function(ground3) {
  if (this.pos.x > ground3.x && this.pos.x < ground3.x + ground3.width) {
    
    if (this.pos.y > ground3.y) {
      this.vel.y *= 0;
      this.pos.y = ground3.y;

         if(this.pos.y >= ground3.y){

      		jumping = false;
          this.vel.x = 0;
          hit = true;
         }
    } 

      if (this.pos.x < -10) {
        this.pos.x = -10;
      }
    } else {
      if (this.pos.y > height) {
        	this.vel.x *=0;
        	this.pos.y = height;
        
      if (this.pos.y >= height){
        	jumping = false;
          this.vel.x = 0;
        	hit = true;
      }
      }
      if (this.pos.x > width + 10) {

        this.pos.x = width - 10;
			}
		}
	}
    
    this.edges4 = function(platform1) {
  if (this.pos.x > platform1.x && this.pos.x < platform1.x + platform1.width) {
    if (this.pos.y <= platform1.y) {
      this.vel.y *= 0;
      this.pos.y = platform1.y;

    } 

      if (this.pos.x < -10) {
        this.pos.x = -10;
      }
    } else {
      if (this.pos.y > height) {
        	this.vel.x *=0;
        	this.pos.y = height;
        
      if (this.pos.y >= height){
        	jumping = false;
          this.vel.x = 0;
        	hit = true;
      }
      }
      if (this.pos.x > width + 10) {

        this.pos.x = width - 10;
			}
		}
	}
    
    this.death = function(lava1) {
  if (this.pos.x + 20 > lava1.x && this.pos.x < lava1.x + lava1.width &&
      this.pos.y > lava1.y && this.pos.y < lava1.y + lava1.height){
    	life -= 1;
    	this.pos.x = 50;
  	}
	}
    
}
