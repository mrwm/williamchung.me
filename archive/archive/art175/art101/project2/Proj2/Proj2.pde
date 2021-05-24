float counter = 0.0;
float speed = .50;
float sizeX = width/10;
float sizeY = sizeX*1.5;

//99999 is when it start lagging
Blob[] myBlob0 = new Blob[9];

void setup() {
  size(1248,720);
  background(255);
  noStroke();
  smooth();
  for (int i = 0; i < myBlob0.length; i++) {
    myBlob0[i] = new Blob(color( int(random(200)), int(random(200)),int(random(200)),255-int(random(150)) ),random(250),random(500)); 
  }
}
 
void draw() {
  saveFrame("frames/out.######.tif");
    if (frameCount > 5000)exit();
  for (int i = 0; i < myBlob0.length; i++) {
  myBlob0[i].wcUpdater();
  myBlob0[i].wcMatrix();
  }

  // use frameCount to move x, use modulo to keep it within bounds
  counter = frameCount % width;
 
  // use millis() and a timer to change the y every .5 seconds
  if (millis() - counter >= 500) {
    sizeX = random(height);
    counter = millis();
    //println(counter);
  }
 
  // use frameCount and noise to change the red color component
  float r = noise(frameCount * 0.01) * 255;
 
  // use frameCount and modulo to change the green color component
  float g = frameCount % 255;
 
  // use frameCount and noise to change the blue color component
  float b = 255 - noise(1 + frameCount * 0.025) * 255;
 
  // use frameCount and noise to change the radius
  float radius = noise(frameCount * 0.01) * 100;
 
  color c = color(r, g, b);
  fill(c);
  ellipse(counter, sizeY, radius, radius);
}


class Blob { 
  // class variables that are unique to each instance of a class.
  color c;
  float xpos;
  float ypos;
 
  // The Constructor is like setup and helps defines the details of the object
  Blob(color tempC, float tempXpos, float tempYpos) { 
    // tempC, tempXpos, etc. are the argument vars that pass data to the class vars
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
   
  }
  // functions inside of Classes are called methods
  // This one is designed to go in the draw loop and called 
  // repeatly
  void wcUpdater() {
    fill(c);
    rectMode(CENTER);
    ellipse(xpos,counter,random(sizeX,sizeX+5),random(sizeY-5,sizeY));
    xpos += random(-1,1);
    ypos += random(-1,1);

  }
  // This function is what pushes the maxtrix of the things inside the class.
  void wcMatrix(){

    pushMatrix();
    translate(counter+(width/2),50);
    fill(c);
    rotate(radians(counter));
    rect(xpos - counter,ypos,random(sizeX,sizeX+5),random(sizeY-5,sizeY)); 
    rotate(radians(counter));
    popMatrix();
  }
}
