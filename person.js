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

         if(this.pos.y >= ground.y - 1){

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
  

    
    this.death = function(lava1) {
  if (this.pos.x + 20 > lava1.x && this.pos.x < lava1.x + lava1.width &&
      this.pos.y > lava1.y && this.pos.y < lava1.y + lava1.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
      this.death2 = function(lava2) {
  if (this.pos.x + 20 > lava2.x && this.pos.x < lava2.x + lava2.width &&
      this.pos.y > lava2.y && this.pos.y < lava2.y + lava2.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
        this.death3 = function(lava3) {
  if (this.pos.x + 20 > lava3.x && this.pos.x < lava3.x + lava3.width &&
      this.pos.y > lava3.y && this.pos.y < lava3.y + lava3.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
          this.death4 = function(lava4) {
  if (this.pos.x + 20 > lava4.x && this.pos.x < lava4.x + lava4.width &&
      this.pos.y > lava4.y && this.pos.y < lava4.y + lava4.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
            this.death5 = function(lava5) {
  if (this.pos.x + 20 > lava5.x && this.pos.x < lava5.x + lava5.width &&
      this.pos.y > lava5.y && this.pos.y < lava5.y + lava5.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
              this.death6 = function(lava6) {
  if (this.pos.x + 20 > lava6.x && this.pos.x < lava6.x + lava6.width &&
      this.pos.y > lava6.y && this.pos.y < lava6.y + lava6.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
              this.death7 = function(lava7) {
  if (this.pos.x + 20 > lava7.x && this.pos.x < lava7.x + lava7.width &&
      this.pos.y > lava7.y && this.pos.y < lava7.y + lava7.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
              this.death8 = function(lava8) {
  if (this.pos.x + 20 > lava8.x && this.pos.x < lava8.x + lava8.width &&
      this.pos.y > lava8.y && this.pos.y < lava8.y + lava8.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
              this.death9 = function(lava9) {
  if (this.pos.x + 20 > lava9.x && this.pos.x < lava9.x + lava9.width &&
      this.pos.y > lava9.y && this.pos.y < lava9.y + lava9.height - 1){
    	life -= 1;
    	this.pos.x = 50;
    	
  	}  
	}
  
}
