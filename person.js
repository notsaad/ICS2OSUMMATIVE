function Person() {
  this.pos = createVector(50, height, 20, 50);
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
  
  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
      
         if(this.pos.y >= height){
     
      		jumping = false;
          this.vel.x = 0;
      
    	}
      
      if (this.pos.x > width + 10) {
       
        this.pos.x = width - 10;
        
      }
      
      if (this.pos.x < -10) {
       
        this.pos.x = -10;
        
      }
    }
	} 
}

/*class Coin {
  constructor(pos, basePos, wobble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wobble = wobble;
  }

  get type() { return "coin"; }

  static create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(basePos, basePos,
                    Math.random() * Math.PI * 2);
  }
}
*/
