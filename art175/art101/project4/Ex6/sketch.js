var face0 = [
[4, 3, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 3],
[4, 3, 3, 4, 4, 4, 3, 1, 0, 1, 3, 4, 4, 4, 3, 2],
[4, 2, 1, 1, 2, 2, 3, 1, 0, 1, 3, 2, 2, 1, 1, 3],
[4, 3, 2, 4, 4, 4, 2, 1, 0, 1, 2, 4, 4, 2, 1, 3],
[4, 1, 3, 3, 2, 2, 1, 1, 0, 1, 1, 2, 2, 3, 1, 1],
[4, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
[3, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 2],
[3, 2, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
[3, 2, 2, 1, 2, 3, 4, 2, 2, 4, 3, 1, 1, 1, 1, 2],
[0, 3, 2, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3],
[0, 3, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3],
[0, 3, 2, 1, 3, 4, 0, 0, 0, 0, 0, 4, 0, 2, 3, 3],
[0, 0, 3, 1, 2, 3, 0, 0, 0, 0, 3, 2, 0, 2, 3, 0],
[0, 0, 3, 2, 0, 2, 3, 3, 3, 3, 2, 1, 2, 3, 0, 0],
[0, 0, 0, 3, 0, 1, 2, 2, 2, 2, 1, 1, 2, 3, 0, 0],
[0, 0, 0, 3, 2, 0, 1, 1, 1, 1, 1, 2, 3, 0, 0, 0],
];

var fingers0 = [
[4, 4, 0, 0, 0, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0],
[1, 2, 4, 0, 0, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0],
[1, 1, 2, 4, 0, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0],
[0, 1, 2, 4, 0, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0],
[0, 1, 1, 2, 4, 0, 0, 0, 1, 2, 4, 0, 0, 0, 0, 0],
[0, 0, 1, 2, 4, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 2, 4, 0, 3, 2, 2, 3, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 2, 3, 3, 2, 1, 4, 4, 4, 0, 0, 0, 0],
[0, 0, 0, 1, 2, 3, 2, 1, 3, 2, 3, 4, 0, 0, 0, 0],
[0, 0, 0, 1, 3, 2, 1, 3, 3, 3, 4, 3, 2, 3, 0, 0],
[0, 0, 0, 0, 3, 1, 0, 2, 3, 3, 2, 2, 2, 2, 3, 0],
[0, 0, 0, 0, 2, 0, 1, 2, 3, 2, 2, 2, 2, 1, 3, 0],
[0, 0, 0, 2, 2, 1, 0, 1, 1, 0, 0, 3, 3, 0, 1, 3],
[0, 0, 0, 2, 1, 0, 2, 3, 4, 4, 4, 4, 3, 1, 0, 3],
[0, 0, 0, 2, 1, 0, 1, 2, 3, 4, 4, 3, 3, 1, 0, 2],
[0, 0, 0, 2, 1, 0, 1, 2, 3, 4, 4, 3, 1, 0, 1, 2],
]; 

var face1 = [
[2, 2, 2, 2, 2, 2, 2], 
[2, 0, 0, 0, 0, 0, 2], 
[2, 0, 4, 0, 4, 0, 2], 
[2, 0, 0, 0, 0, 0, 2], 
[2, 4, 0, 0, 0, 4, 2], 
[2, 4, 4, 4, 4, 4, 2], 
[2, 2, 2, 2, 2, 2, 2]
];
var face2 = [
['w', 'w', 'w', 'w', 'w', 'w', 'w'], 
['w', 'g', 'g', 'g', 'g', 'g', 'w'], 
['w', 'g', 'b', 'g', 'b', 'g', 'w'], 
['w', 'g', 'g', 'g', 'g', 'g', 'w'], 
['w', 'b', 'b', 'b', 'b', 'b', 'w'], 
['w', 'b', 'g', 'g', 'g', 'b', 'w'], 
['w', 'w', 'w', 'w', 'w', 'w', 'w']
];

function setup() { 

  createCanvas(1000, 500); 
  colorMode(HSB); // I'd prefer CMYK
  background(180,100,50); 
  noStroke();

  //first part
  drawarray(face0, "rect", 15, 15, 15);
  drawarray(fingers0, "ellipse", 15, 285, 23);

  //second part
  drawarray(face1, "rect", 15, 540, 15);
  drawarray(face2, "rect", 15, 540, 150);

  //third part
  push();
    translate(20, 300);
    drawarray(face1, "ellipse", 15, 0, 0);
  pop();

  push();
    translate(150, 300);
    rotate(radians(45));
    drawarray(face2, "rect", 15, 50, -50);
  pop();

  push();
    translate(600, 490);
    rotate(radians(180));
    scale(2);
    drawarray(face1, "rect", 15, 0, 0);
  pop();
}

function setGreyscale(c){
  switch(c) {
    case 0:
      fill(0, 0, 100); //white
      break;
    case 1:
      fill(0, 0, 75); //dark grey
      break;
    case 2:
      fill(0, 0, 50); //grey
      break;
    case 3:
      fill(0, 0, 25); //light grey
      break;
    case 'w':
      fill(0, 0, 100); //white
      break;
    case 'dg':
      fill(0, 0, 75); //dark grey
      break;
    case 'g':
      fill(0, 0, 50); //grey
      break;
    case 'lg':
      fill(0, 0, 25); //light grey
      break;
    default: // black (left out for 4)
      fill(0, 0, 0);
      break;
  }
}

function drawarray(array, shape, boxSize, xOffset, yOffset) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {

      setGreyscale(array[i][j]);

      // typical way of mapping out a grid (counter * scale) + offset
      // where counter is a var from the forloop
      // scale is value that will term the size/position of each drawing
      // offset is a relative movement to place
      // the grid collection around on the canvas

      //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
      if (shape == "rect"){
        rect((j * boxSize) + xOffset, (i * boxSize) + yOffset, boxSize, boxSize);
      }
      else if (shape == "ellipse"){
        ellipse((j * boxSize) + xOffset, (i * boxSize) + yOffset, boxSize, boxSize);
      }
    }
  }
}
