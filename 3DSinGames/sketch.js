//my code starts here
var distance;
var length;
var wave;
var confLocs = [];
var confTheta = [];
//my code ends here

function setup() 
{
    createCanvas(900, 800, WEBGL);

    //my code starts here
    for (let i=0; i < 200; i++)
    {
        confLocs.push(new p5.Vector(random(-500, 500), random(-800,0), random(-500, 500)));
        confTheta.push(random(0,360));
        
    }
    //my code ends here

}

function draw() 
{
    background(125);
    angleMode(DEGREES);
    
    //my code starts here
    normalMaterial();
    camera(800*cos(frameCount), -600, 800*sin(frameCount), 10, 0, 0, 0, 1, 0);

    for (let i = -400; i <= 400; i+=50) 
    {
        for (let j = -400; j <= 400; j+=50) 
        {
            push();

            strokeWeight(2);
            stroke(0);

            translate(i,0,j);
            box(50, 50+length, 50);
               
            distance= dist(0,0, i, j);

            distance+=frameCount;

            length = sin((i/300)+(j/300)+distance/2)*250;

            pop();
               
        }
        
        confetti();
        
    }  
    
    function confetti()
    {
        for (let i=0; i< confLocs.length; i++)
        {
            
            push();

            translate(confLocs[i]);
            rotate(confTheta[i]+=1);
            rotate(45, confLocs[i]);
            
            plane(15,15);
            
            confLocs[i].y=confLocs[i].y + 0.2;

            if (confLocs[i].y>0)
            {
                confLocs[i].y= -800;
            }

            pop();
            
        }

    }

    //my code ends here

}
