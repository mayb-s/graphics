//Added extension, start gives random face and key pressed gives random face instead of just the firs one

var imgs = [];
var avgImg;
var numOfImages = 30;
//my code starts here
var d;
//my code ends here
//////////////////////////////////////////////////////////
function preload() 
{ 
    //my code starts here
    // preload() runs once

    for( var i=0; i<30; i++)
    {

        var filename = 'filename';
        filename = 'assets/' + i + '.jpg';
        imgs[i]= loadImage(filename);

    }
    //my code ends here

}
//////////////////////////////////////////////////////////
function setup() 
{

    //my code starts here
    createCanvas(2*512, 512);
    avgImg = createGraphics(width/2, height);
    //my code ends here

    d = pixelDensity(1);

}
//////////////////////////////////////////////////////////
function draw() 
{

    background(125);

    //my code starts here

    //EXTENSION starts
    image(imgs[int(random(0,29))],0,0);
    //EXTENSION ends

    for (var i=0; i< imgs.length; i++)
    {
        imgs[i].loadPixels();
        avgImg.loadPixels();
    
    }



    for (var i=0; i < imgs[0].width; i++)
    {
        for (var j=0; j < imgs[0].height; j++)
        {

            imgs[0].pixels[i][j]= avgImg.set(i,j,color(255,0,0));

            var sumR = 0;
            var sumG = 0;
            var sumB = 0;
            for (var k=0; k < imgs.length; k++)
            {

                var c;
                c= imgs[k].get(i,j);

                sumR+=red(c);
                sumG+=green(c);
                sumB+=blue(c);

            }
            
            avgImg.set(i,j,color(sumR/30,sumG/30,sumB/30));
           
        }
       
    }

    avgImg.updatePixels();
    image(avgImg, 512, 0, width/2, height);

    noLoop();

}

  //EXTENSION starts
function keyPressed() 
{
    if (keyPressed==true) {
        image(imgs[int(random(0,29))],0,0);
    } 
    else 
    {
        false;
    }
} 

//EXTENSION ends

//my code ends here