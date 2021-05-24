

var count = 100;
var posX = new Array(count); 
var posY = new Array(count);
var speedX = new Array(count);
var speedY = new Array(count);
var createCanvasW = new Array(count);
var createCanvasH = new Array(count);
var colorsH = new Array(count);
var colorsS = new Array(count);
var colorsV = new Array(count);
var colorsA = new Array(count);


function setup() { 
  colorMode(HSB);
  createCanvas(600, 600);
  noStroke();
  for (var i=0; i < posX.length; i++) { 
    posX[i] = width/2; 
    posY[i] = height/2; 
    speedX[i] = random(-5, 5); 
    speedY[i] = random(-5, 5); 
    createCanvasW[i] = random(20, 25); 
    createCanvasH[i] = random(20, 100); 
    colorsH[i] = (random(0, 255));
    colorsS[i] = (random(0, 255));
    colorsV[i] = (random(0, 255));
    colorsA[i] = (random(0, 255));
  }
  filter(INVERT);

} 
function draw() { 
  if (frameCount < 500)
    //saveFrame("frames/line-######.png");
  background(116,70,255); 
  fill(255); 
  rect(40, 40, width-80, height-80); 
  for (var i = 0; i < posX.length; i++) { 
    //update all positions 
    posX[i] += speedX[i]; 
    posY[i] += speedY[i]; 
    //draw all balls 
    fill(colorsH[i],colorsS[i],colorsV[i],colorsA[i]); 
    ellipse(posX[i], posY[i], createCanvasW[i], createCanvasW[i]); 
    //check boundaries for all balls 

    if (posX[i] < 40+createCanvasW[i]/2)
      posX[i] = (width-40)-createCanvasW[i]/2;
    else if (posX[i] > (width-40)-createCanvasW[i]/2)
      posX[i] = 40+createCanvasW[i]/2;
    if (posY[i] < 40+createCanvasW[i]/2 || posY[i] > (height-40)-createCanvasW[i]/2) { 
      speedY[i] = -speedY[i];
    }
  }
} 
