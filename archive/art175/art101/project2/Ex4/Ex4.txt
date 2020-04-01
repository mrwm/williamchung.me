float counter = 0.0;
float speed = .50;
float sizeX = width/10;
float sizeY = sizeX*1.5;
// Simple oopA example
Blob[] myBlob0 = new Blob[10];
Blob myBlob1;

void setup() {
  size(500,500);
  // Parameters go inside the parentheses when the object is constructed.
  color col = color(255,0,0);
  myBlob1 = new Blob(col,0,100); 


  for (int i = 0; i < myBlob0.length; i++) {
      
   myBlob0[i] = new Blob(color( int(random(200)), int(random(200)),int(random(200)),255-int(random(150)) ),random(250),random(500));
 
 
  }
}

void draw() {
  if (frameCount < 1000)
    saveFrame("frames/out.######.tif");
  background(255);
  myBlob1.wcUpdater();
  for (int i = 0; i < myBlob0.length; i++) {
  myBlob0[i].wcUpdater();
  myBlob0[i].wcMatrix();
  }
  counter+=speed;
  
  if (counter > width || counter<0 ) {
    speed = -speed;
  }
}

// The class defination is the template in which we can make different 
// copies or many objects.
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
    stroke(0);
    fill(c);
    rectMode(CENTER);
    ellipse(xpos,counter,random(sizeX,sizeX+5),random(sizeY-5,sizeY));
    xpos += random(-1,1);
    ypos += random(-1,1);

  }
  void wcMatrix(){

    pushMatrix();
    translate(counter,50);
    fill(c);
    rotate(radians(counter));
    rect(xpos - counter,ypos,random(sizeX,sizeX+5),random(sizeY-5,sizeY)); 
    rotate(radians(counter));
    popMatrix();
  }
}
