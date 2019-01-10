function Person() {
  this.pos = createVector(50, height , 20, 50);
  // this.oldpos = createVector(50 )
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

         if(this.pos.y >= ground.x){

      		jumping = false;
          this.vel.x = 0;
         }
    } 

      if (this.pos.x < -10) {

        this.pos.x = -10;

      }

    }    else {
      if (this.pos.y > height) {
        this.vel.x *=0;
        this.pos.y = height;
        	 
        	if(this.pos.y >= height){
           jumping = false;
            this.vel.x = 0;
          }
      }
      if (this.pos.x > width + 10) {

        this.pos.x = width - 10;

      }
	}
}
}
