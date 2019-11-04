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

function setup() { 

  createCanvas(1000, 500); 
  colorMode(HSB); // I'd prefer CMYK
  background(0); 
  noStroke();

  for (let i = 0; i < 16; i++) { 
    for (let j = 0; j < 16; j++) { 

      switch(face0[i][j]) {
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
        default: // black (left out for 4)
          fill(0, 0, 0);
          break;
      }

      // typical way of mapping out a grid (counter * scale) + offset 
      // where counter is a var from the forloop 
      // scale is value that will term the size/position of each drawing 
      // offset is a relative movement to place 
      // the grid collection around on the canvas 

      let boxSize = 15;
      let boxOffset = 15;
      //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
      rect((j * boxSize) + boxOffset, (i * boxSize) + boxOffset, boxSize, boxSize);


      switch(fingers0[i][j]) {
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
        default: // black (left out for 4)
          fill(0, 0, 0);
          break;
      }

      // typical way of mapping out a grid (counter * scale) + offset 
      // where counter is a var from the forloop 
      // scale is value that will term the size/position of each drawing 
      // offset is a relative movement to place 
      // the grid collection around on the canvas 

      //let boxSize = 15;
      boxOffset = 500;
      //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
      rect((j * boxSize) + boxOffset, (i * boxSize) + 15, boxSize, boxSize);

    }
  }
} 
