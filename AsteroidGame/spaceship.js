class Spaceship {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width/2, height/2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.bulletSys = new BulletSystem();
    this.size = 50;
  }

  run(){
    this.bulletSys.run();
    this.draw();
    this.move();
    this.edges();
    this.interaction();
  }

  draw(){
    fill(125);
    triangle(this.location.x - this.size/2, this.location.y + this.size/2,
        this.location.x + this.size/2, this.location.y + this.size/2,
        this.location.x, this.location.y - this.size/2);
  }

  move(){
      // YOUR CODE HERE (4 lines)

    
    
      for (var i=0; i< this.maxVelocity; i++)
      {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(-1);

      }
      

  
  }

  applyForce(f){
    this.acceleration.add(f);
  }

  interaction(){
      if (keyIsDown(LEFT_ARROW)){
        this.applyForce(createVector(-0.1, 0));
      }
      if (keyIsDown(RIGHT_ARROW)){
      // YOUR CODE HERE (1 line)
        this.applyForce(createVector(0.1, 0));

      }
      if (keyIsDown(UP_ARROW)){
      // YOUR CODE HERE (1 line)
        this.applyForce(createVector(0, -0.1));

      }
      if (keyIsDown(DOWN_ARROW)){
      // YOUR CODE HERE (1 line)
        this.applyForce(createVector(0, 0.1));

      }
  }

  fire(){
    this.bulletSys.fire(this.location.x, this.location.y);
  }

  edges(){
    if (this.location.x<0) this.location.x=width;
    else if (this.location.x>width) this.location.x = 0;
    else if (this.location.y<0) this.location.y = height;
    else if (this.location.y>height) this.location.y = 0;
  }

  setNearEarth(){
    //YOUR CODE HERE (6 lines approx)

        stroke(255,0,0);
        line(spaceship.location.x, spaceship.location.y, earthLoc.x, earthLoc.y);
        triangle(width/2, height, width/2-5, height-10, width/2+5, height-10);
        spaceship.acceleration.sub(0,-0.05);
        spaceship.acceleration.sub(0,0.0016666);
        line(spaceship.location.x, spaceship.location.y, earthLoc.x, spaceship.location.y-50);
        triangle(width/2, spaceship.location.y-55, width/2-3, spaceship.location.y-50, width/2+3, spaceship.location.y-50)
        noStroke();
        
    








  }
}
