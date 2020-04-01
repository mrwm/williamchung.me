/*
Keyboard Shortcuts : what it does
[ : decrease brush size
] : increase brush size
d : toggle brush
c : toggle color change
e : use ellipses
r : use rectangle
w : toggle frame recording


*/

PFont f;
PImage b;
PImage b2;
PImage b3;


int imgIndex = 0;
int value = 0;
int increment = 5;
int size = 10;
boolean colorSwitch = false;
boolean brushToggle = false;
boolean recToggle = false;
String shape = "rect";
void setup() {
  size(600, 600);
  rectMode(CENTER);
  noStroke();

  b = loadImage("RSmile.png"); 
  b2 = loadImage("GSmile.png");
  b3 = loadImage("YSmile.png");
  f = createFont("Georgia", 24);
  textFont(f);
  image(b, 0, 0, width/4, height/4);
  fill(0);
  text("[ : decrease brush size", 24, height - 24);
  text("] : increase brush size", 24, height - 24*2);
  text("d : toggle brush", 24, height - 24*3);
  text("c : toggle color change", 24, height - 24*4);
  text("e : use ellipses", 24, height - 24*5);
  text("r : use rectangle", 24, height - 24*6);
  text("w : toggle frame recording", 24, height - 24*7);
  text("i : draw with smiles", 24, height - 24*8);

}
void draw() {
  wcThisFunction(mouseX, mouseY);
  if(recToggle){
    saveFrame("frames/line-######.png");
  }
} 

void mouseMoved() {
  if (!brushToggle){
    wcValueChange();
  }
}

void keyPressed() { 

  if ( key == 'b' || key == 'B' ) { 
    fill(value);
    rect(width/2, height/2, width, height);
    // example of toggle logic 
    if (value == 0) { 
      value = 255;
    } else { 
      value = 0;
    }
  }
  if ( key == '[') { 
    wcSizeLimit(size);
  }
  if ( key == ']') { 
    size++;
  }
  if ( key == 'c' || key == 'C' ) {
    wcSwitchColor();
  }
  if ( key == 'r' || key == 'R' ) {
    wcShapeChange("rect");
  }
  if ( key == 'e' || key == 'E' ) {
    wcShapeChange("ellipse");
  }
  if ( key == 'd' || key == 'D' ) {
    wcToggleBrush();
  }
  if ( key == 'w' || key == 'W' ) {
    wcRecToggle();
  }
  if ( key == 'i' || key == 'I' ) {
    wcShapeChange("img");
  }
}

void wcThisFunction(int x, int y ) {
  fill(value);
  if (mousePressed){
    wcDrawThis(x, y);
  }
  else if (brushToggle){
    wcDrawThis(x, y);
  }
}

boolean wcFlip(int i){
  if (i > 255){
    return true;
  }
  if (i < 1){
    return true;
  }
  return false;
}

void wcValueChange(){
  value += increment;
  if (wcFlip(value)){
    increment *= -1;
  }
}

int wcSizeLimit(int i){
  if (i > 1){
    size--;
  }
  return 2;
}

void wcSwitchColor(){
  colorSwitch = !colorSwitch;
  //println(colorSwitch+" "+value);
}

void wcToggleBrush(){
  brushToggle = !brushToggle;
}

void wcRecToggle(){
  recToggle = !recToggle;
}

void wcShapeChange(String s){
  shape = s;
}

void wcDrawThis(int x, int y){
  if(colorSwitch){
    wcValueChange();
    fill(value);
  }
  if (shape == "ellipse"){
    ellipse(x, y, size, size);
  }
  else if (shape == "rect"){
    rect(x, y, size, size);
  }
  else if (shape == "img"){
    if (imgIndex == 0){
      image(b2, x, y, size, size);
      imgIndex = 1;
    }
    else if (imgIndex == 1){
      image(b3, x, y, size, size);
      imgIndex = 2;
    }
    else if (imgIndex == 2){
      image(b, x, y, size, size);
      imgIndex = 0;
    }
  }
}
