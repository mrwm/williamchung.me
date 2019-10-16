// Example 3.4
///////////////////////////
// Adjustable Array Version

int count = 50;
float[] posX = new float[count]; 
float[] posY = new float[count];
float[] speedX = new float[count];
float[] speedY = new float[count];
float[] sizeW = new float[count];
float[] sizeH = new float[count];
int[] colorsH = new int[count];
int[] colorsS = new int[count];
int[] colorsV = new int[count];
int[] colorsA = new int[count];


void setup() { 
  colorMode(HSB);
  size(600, 600);
  noStroke();
  for (int i=0; i < posX.length; i++) { 
    posX[i] = width/2; 
    posY[i] = height/2; 
    speedX[i] = random(-5, 5); 
    speedY[i] = random(-5, 5); 
    sizeW[i] = random(20, 25); 
    sizeH[i] = random(20, 100); 
    colorsH[i] = int(random(0, 255));
    colorsS[i] = int(random(0, 255));
    colorsV[i] = int(random(0, 255));
    colorsA[i] = int(random(0, 255));
  }
} 
void draw() { 
  if (frameCount < 500)
    saveFrame("frames/line-######.png");
  background(116,70,255); 
  fill(255); 
  rect(40, 40, width-80, height-80); 
  for (int i = 0; i < posX.length; i++) { 
    //update all positions 
    posX[i] += speedX[i]; 
    posY[i] += speedY[i]; 
    //draw all balls 
    fill(colorsH[i],colorsS[i],colorsV[i],colorsA[i]); 
    ellipse(posX[i], posY[i], sizeW[i], sizeW[i]); 
    //check boundaries for all balls 

    if (posX[i] < 40+sizeW[i]/2)
      posX[i] = (width-40)-sizeW[i]/2;
    else if (posX[i] > (width-40)-sizeW[i]/2)
      posX[i] = 40+sizeW[i]/2;
    if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) { 
      speedY[i] = -speedY[i];
    }
  }
} 
