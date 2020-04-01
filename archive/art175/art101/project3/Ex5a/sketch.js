var b;
var b2;
var b3;


var imgIndex = 0;
var value = 0;
var increment = 5;
var size = 10;
var colorSwitch = false;
var brushToggle = false;
var recToggle = false;
var shape = "rect";

var width = 600;
var height = width;

function preload() {
  b = loadImage("data/RSmile.png");
    filter(INVERT);
  b2 = loadImage("data/GSmile.png");
    filter(INVERT);
  b3 = loadImage("data/YSmile.png");
    filter(INVERT);

}

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noStroke();

  image(b, 0, 0, width/4, height/4);
  fill(0);
}

var limitThingy = height;
var limitThingx = width;
function draw() {
  fill(value);
  if(colorSwitch){
    wcValueChange();
    fill(value);
  }
  if (shape == "ellipse"){
    ellipse(limitThingx, limitThingy, size, size);
  }
  else if (shape == "rect"){
    rect(limitThingx, limitThingy, size, size);
  }
  else if (shape == "img"){
    if (imgIndex == 0){
      image(b2, limitThingx, limitThingy, size, size);
      imgIndex = 1;
    }
    else if (imgIndex == 1){
      image(b3, limitThingx, limitThingy, size, size);
      imgIndex = 2;
    }
    else if (imgIndex == 2){
      image(b, limitThingx, limitThingy, size, size);
      imgIndex = 0;
    }
  }


  if (limitThingy > height)
    limitThingy = 0;
  else if (limitThingy < 0)
    limitThingy = height;
  if (limitThingx > width)
    limitThingx = 0;
  else if (limitThingx < 0)
    limitThingx = width;
} 

function mouseMoved() {
  if (!brushToggle){
    wcValueChange();
  }
}

function keyPressed() { 

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
  if ( keyCode == UP_ARROW ) {
    limitThingy -= size;
  }
  if ( keyCode == DOWN_ARROW ) {
    limitThingy += size;
  }
  if ( keyCode == LEFT_ARROW ) {
    limitThingx -=size;
  }
  if ( keyCode == RIGHT_ARROW ) {
    limitThingx += size;
  }
}


function wcFlip(i){
  if (i > 255){
    return true;
  }
  if (i < 1){
    return true;
  }
  return false;
}

function wcValueChange(){
  value += increment;
  if (wcFlip(value)){
    increment *= -1;
  }
}

function wcSizeLimit(i){
  if (i > 1){
    size--;
  }
  return 2;
}

function wcSwitchColor(){
  colorSwitch = !colorSwitch;
  //println(colorSwitch+" "+value);
}

function wcToggleBrush(){
  brushToggle = !brushToggle;
}

function wcRecToggle(){
  recToggle = !recToggle;
}

function wcShapeChange(s){
  shape = s;
}

