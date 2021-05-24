//play / lead to song / color -> note

// Circle code taken and modified from here:
// https://editor.p5js.org/coloringchaos/sketches/SkZVaxF0-

/* ----- Main character ----- */
let cat, catW, catH;             // Cat + cat properties
let eatCount = 0;                // Amount of food eaten
let xpos, ypos;                  // Position of the cat

/* ----- Sound ----- */
let noteC, noteD, noteE, noteF, noteG, noteA, meow;
// Credits to the meow: Battle cats game created by PONOS
// I do not own the sound effects. They were taken from the link below:
// https://www.youtube.com/watch?v=dd9ALQYYfn4

/* ----- Environment ----- */
let bgColor = '#d1d1d1';         // Background color
let circles = [];                // Hold the spawned circles.

/* ----- Food properties ----- */
let arrayN = 5;                  // Total of food to spawn
let foodX = new Array(arrayN);   // Store X position of cat food
let foodY = new Array(arrayN);   // Store Y position of cat food
let foodH = new Array(arrayN);   // Store color value of food
let rectDim = 50; // Catfood size

// Preparation for external files
function preload() {
  cat = "cat";                      // Spawn the cat!
  noteC = loadSound('sound/C.mp3');
  noteD = loadSound('sound/D.mp3');
  noteE = loadSound('sound/E.mp3');
  noteF = loadSound('sound/F.mp3');
  noteG = loadSound('sound/G.mp3');
  noteA = loadSound('sound/A.mp3');
  meow = loadSound('sound/meow.mp3');
}

function setup() {
  // Can't play audio without initializing
  // https://p5js.org/reference/#/p5.sound/userStartAudio
  let myDiv = createDiv('click to start audio');
  myDiv.position(0, 0);

  userStartAudio().then(function() {
    myDiv.remove();              // Remove the message once clicked
  });

  colorMode(HSB);                // I like using HSB
  createCanvas(windowWidth, windowHeight); // Fullscreen the canvas!
  background(bgColor);           // Set the background white

  // Initial position of the cat
  xpos = 0;
  ypos = 0;

  // Initialize the catfood
  catFood();
}

// Resize the canvas when the browser window is changed
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);           // Set the background color
  //mX = pmouseX - cat.width;      // Offset the cat position to center
  //mY = pmouseY - cat.height;     // Offset cat position to center
  mX = pmouseX;// - cat.width;      // Offset the cat position to center
  mY = pmouseY;// - cat.height;     // Offset cat position to center

  // Taken and modified from the kadenze code
  let easing = 0.25;
  let diffX, diffY;
  diffX = pmouseX - xpos;
  diffY = pmouseY - ypos;
  xpos += diffX * easing;
  ypos += diffY * easing;

  //fill(0);
  textSize(48);
  catW = textWidth(cat);
  catH = textAscent();
  text(cat, xpos - (catW/2), ypos + (catH/4));

  //*
  fill(50)
  text(cat, pmouseX - (catW/2), pmouseY + (catH/4));
  fill(100)
  text(cat, mouseX - (catW/2), mouseY + (catH/4));
  //*/

  // Visual debugging
  //line(mouseX,mouseY+catH/4,mouseX,mouseY-catH/4);
  //line(mouseX-(catW/2),mouseY,mouseX+(catW/2),mouseY);

  // Update and display our circles everytime draw loops
  for(var i= 0; i<circles.length; i++){
    circles[i].update();
    circles[i].ellipse();

    // If circle has reached it's lifespan, then delete it
    if(circles[i].lifespan <= 0){
      circles.splice(i, 1);
    }
  }


  catFoodShow();                 // Draw the cat food
  catEat();                      // Constantly check if food is touched
}

// Initialize the cat food
function catFood(){
  for (let i=0; i < arrayN; i++) { // Best practice to use `let` instead of `var` (variable scoping)
    foodX[i] = round( random(20, width-20) );  // Limit the food from spawning
    foodY[i] = round( random(20, height-20) ); // too close to the border
    foodH[i] = (random(0, 255)); // Set a random color
    noStroke();
    fill(foodH[i], 100, 100);
    rect(foodX[i],foodY[i],rectDim,rectDim); // Draw cat food
    //text("food",foodX[i],foodY[i]);
  }
}

// Spawn the cat food (constantly runs)
function catFoodShow(){
  for (let i=0; i < arrayN; i++) {
    noStroke();
    fill(foodH[i], 100, 100);
    rect(foodX[i],foodY[i],rectDim,rectDim);
    //text("food",foodX[i],foodY[i]);
  }
}


// Make sure the cat is able to eat
function catEat(){
  // Setup an offset 'coz rectmode is in the corner and cursor is in the center
  let detectX = xpos + 0;
  let detectY = ypos + 0;

  for (var i=0; i < arrayN; i++) {
    if ( (detectX+catW/2>foodX[i]) && (detectX-catW/2<(foodX[i]+rectDim)) &&
         (detectY+catH/4>foodY[i]) && (detectY-catH/4<(foodY[i]+rectDim))
       ){

      /* useless in grabbing the fill color of food + cat
      let grabCat = get(xpos, ypos);
      let grabFood = get(foodX[i], foodY[i]);
      console.log(grabCat+":"+grabFood);
      */

      // Assign a new position once eaten
      foodX[i] = round( random(rectDim, width-rectDim) );
      foodY[i] = round( random(rectDim, height-rectDim) );
      foodH[i] = (random(0, 255));
      noStroke();
      fill(foodH[i], 100, 100);
      rect(foodX[i],foodY[i],rectDim,rectDim);
      //text("food",foodX[i],foodY[i]);

      // Show circles at where the food spawns
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(7, 15), foodH[i]));
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(22, 28), foodH[i]));
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(36, 43), foodH[i]));

      eatCount++; // Increase the count of food eaten


      // Tune: abc song
      switch(eatCount){
        case 1:
          noteC.play();
          break;
        case 2:
          noteC.play();
          break;
        case 3:
          noteG.play();
          break;
        case 4:
          noteG.play();
          break;
        case 5:
          noteA.play();
          break;
        case 6:
          noteA.play();
          break;
        case 7:
          noteG.play();
          break;
        case 8:
          noteF.play();
          break;
        case 9:
          noteF.play();
          break;
        case 10:
          noteE.play();
          break;
        case 11:
          noteE.play();
          break;
        case 12:
          noteD.play();
          break;
        case 13:
          noteD.play();
          break;
        case 14:
          noteC.play();
          break;
        default:
          meow.play();
          if(eatCount != 0)
            eatCount = 0;
          break;
      }

    } // If detection
  } // For loop
}

// Making the circles
function Circle(x, y, s, h){
  //set any properties
  this.x = x;                    //x position
  this.y = y;                    //y position
  this.s = s;                    //circle size
  this.h = h;                    //circle size

  //give each circle a lifespan
  this.lifespan = 30;
  
  //define methods 
  
  //this draws the ellipse
  this.ellipse = function(){
    // Define visual propoerties of the ellipse
    push();
    stroke(this.h, 100, 100);
    strokeWeight(3);
    noFill();
    
    // Draw the ellipse
    ellipse(this.x, this.y, this.s);
    pop();
  }
  
  // This makes it grow
  this.update = function(){
    this.s = this.s + 3;
    this.lifespan--;
  }
}
