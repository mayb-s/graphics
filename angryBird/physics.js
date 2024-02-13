////////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true, angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround(){
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller(){
  // your code here
  fill(255);
  propeller = Bodies.rectangle(150,480,200,15,{
    isStatic: true, angle: 0 });

  World.add(engine.world, [propeller]);

}

 
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller(){
  push();
  // your code here
  
  fill(255);
  drawVertices(propeller.vertices);
  
  Body.setAngle(propeller,angle);
  
  angle += angleSpeed;

  pop();
}
////////////////////////////////////////////////////////////////
function setupBird(){
  var bird = Bodies.circle(mouseX, mouseY, 20, {friction: 0,
      restitution: 0.95 });
  Matter.Body.setMass(bird, bird.mass*10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds(){
  push();
  //your code here
  fill(255,0,0);
  for (var i=0; i<birds.length;i++)
  {
    drawVertices(birds[i].vertices);
    if (isOffScreen(birds[i]))
    {
      removeFromWorld(birds[i]);
      birds.splice(i,1)
      i--;

    }


  }


  pop();
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower(){
  //you code here
  
  for (var i=0; i<3;i++)
  {

    for (var j=0; j<6;j++)
    {
      boxes = Bodies.rectangle(200+(i+80),480-(j*80),80,80,{restitution: 0.8, friction: 0.5});
    
      World.add(engine.world, [boxes]);

      //colors = Bodies.color(0,(255),0, {isStatic: true, angle: 0 });

      //World.add(engine.world, [colors]);

      //colors.push(colors[i]);

      //boxes.push(World.add(engine.world, [boxes]));

    }
  }


}
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower(){
  push();
  //your code here
  for (var i=0; i < boxes.length; i++)
  {
    //fill(colors[i]);
    drawVertices(boxes[i].vertices);

  }


  pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot(){
//your code here
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot(){
  push();
  // your code here
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction(){
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}
