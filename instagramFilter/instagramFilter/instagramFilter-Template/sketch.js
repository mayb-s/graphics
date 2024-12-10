// Image of Husky Creative commons from Wikipedia:
// https://en.wikipedia.org/wiki/Dog#/media/File:Siberian_Husky_pho.jpg

var imgIn;
var matrix = [
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64],
    [1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64, 1/64]
];



/////////////////////////////////////////////////////////////////
function preload() {
    imgIn = loadImage("assets/husky.jpg");
}
/////////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2), imgIn.height);
}
/////////////////////////////////////////////////////////////////
function draw() {
    background(125);
    image(imgIn, 0, 0);
    image(earlyBirdFilter(imgIn), imgIn.width, 0);

    //my code starts here
    fill(255);
    rect(imgIn.width, 0, imgIn.width, imgIn.height);
    //my code ends here

    noLoop();
}
/////////////////////////////////////////////////////////////////
function mousePressed(){
  loop();
}
/////////////////////////////////////////////////////////////////
function earlyBirdFilter(img)
{
  var resultImg = createImage(imgIn.width, imgIn.height);

  resultImg = sepiaFilter(imgIn);
  resultImg = darkCorners(resultImg);
  resultImg = radialBlurFilter(resultImg);
  resultImg = borderFilter(resultImg);
  return resultImg;
  
}


//my code starts here
function sepiaFilter(img)
{

  var resultImg=createImage(img.width, img.height);

  resultImg.loadPixels();
  img.loadPixels();

  for (var i=0; i< img.width; i++)
  {
    for (var j=0; j< img.height; j++)
    {

      c=img.get(i,j);
      oldRed=red(c);
      oldGreen= green(c);
      oldBlue=blue(c);

      newRed = (oldRed * .393) + (oldGreen *.769) + (oldBlue * .189);
      newGreen = (oldRed * .349) + (oldGreen *.686) + (oldBlue * .168);
      newBlue = (oldRed * .272) + (oldGreen *.534) + (oldBlue * .131);

      resultImg.set(i,j,color(newRed, newGreen, newBlue));
  
      }
    
  }
 
  resultImg.updatePixels();

  return resultImg;

}


function darkCorners(img)
{
  var resultImg=createImage(img.width, img.height);
  resultImg.loadPixels();
  img.loadPixels();
  for (var i=0; i< img.width; i++)
  {
    for (var j=0; j< img.height; j++)
    {

      var dynLum;

      c=img.get(i,j);

      oldRed=red(c);
      oldGreen= green(c);
      oldBlue=blue(c);

      distance = map(dist(img.width/2, img.height/2, i, j), 0, 500, 400, 0);

      dynLum = (constrain(distance*0.4, distance*0, distance*1))/100;

      newRed = oldRed*dynLum; 
      newGreen = oldGreen*dynLum;
      newBlue = oldBlue*dynLum;

      resultImg.set(i,j,color(newRed, newGreen,newBlue));

  
      }
    
  }
  
  resultImg.updatePixels();
  return resultImg;

 }
 
 

function radialBlurFilter(img)
{

    var resultImg=createImage(img.width, img.height);
    var matrixSize = matrix.length;

    resultImg.loadPixels();
    img.loadPixels();

    for (var x=0; x< img.width; x++)
    {
      for (var y=0; y< img.height; y++)
      {
        
        var dynBlur;
        distance = map(dist(mouseX, mouseY, x, y), 100, 300, 0, 1);
        dynBlur = (constrain(distance, 0, 1));

        var index = (y*img.width+x)*4;

        var c = convolution(x, y, matrix,matrixSize, img );

        r=resultImg.pixels[index]= c[0];
        g=resultImg.pixels[index+1]= c[1];
        b=resultImg.pixels[index+2]= c[2];
        a=resultImg.pixels[index+3]= 255;

        resultImg.pixels[index + 0] = c[0]*dynBlur + r*(1-dynBlur);

      }
    }

    resultImg.updatePixels();
    return resultImg;

}



function convolution(x, y, matrix, matrixSize, img)
{

  var sumR = 0;
  var sumG = 0;
  var sumB = 0;

  var offset = floor(matrixSize/2)

  for(var i=0; i<matrixSize; i++)
  {
    for(var j=0; j<matrixSize; j++)
      {

        var xloc = x+i-offset;
        var yloc = y+j-offset;

        var index = (img.width*yloc+xloc)*4;

        index = constrain(index, 0, img.pixels.length-1);

        sumR+=img.pixels[index+0]*matrix[i][j];
        sumG+=img.pixels[index+1]*matrix[i][j];
        sumB+=img.pixels[index+2]*matrix[i][j];

      }
  }

  return [sumR, sumG, sumB];

}

function borderFilter(img)
{
  img.loadPixels();

  img=image(img, img.width, 0);

  fill(255);
  noStroke()
  rect(img.width, 0, img.width, img.height, 100);

  var buffer=createGraphics(img.width, img.height);
  
  image(buffer, 150, 75);
  
  buffer.updatePixels();

  return buffer;

}

//my code ends here
