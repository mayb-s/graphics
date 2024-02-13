var stepSize = 20;

function setup() {
  createCanvas(500, 500);
  
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
  
 
  
  
  for (var i=0; i< 25; i++)
  {
    for (var j=0; j< 25; j++)
    {
      //noise(i*j*0.01, frameCount);
      red = color(255,0,0);
      green = color(0,225,0);

      x=stepSize*i;
      y=stepSize*j;
      
      n = noise(x,y,frameCount)*0.9;

      c=lerpColor(red, green, n);
      
      fill(c);
      
      
      noStroke();
      rect(stepSize*i, stepSize*j, stepSize, stepSize);

      
      
      
      


      
     
      
    }
    
  }
  


}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here

  frameRate(1)

  for (var i=0; i< 25; i++)
  {
    
    for (var j=0; j< 25; j++)
    {
      

      x=stepSize*i+(stepSize/2);
      y=stepSize*j+(stepSize/2);
      n = noise(x,y,frameCount);

      c=map(n, 0, 720, 0, 720);
      
      rotate(c);
      stroke(0);
      line(x, y, x, stepSize*j-stepSize);
      
  
  
      
    }
    
  }






}
