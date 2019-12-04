// Circle code taken and modified from here:
// https://editor.p5js.org/coloringchaos/sketches/SkZVaxF0-

/* ----- Main character ----- */
let cat, catf, catSt, catStF;    // Cat image + sitting image + flipped
let eatCount = 0;                // Amount of food eaten
let faceLeft = true;

/* ----- Sound ----- */
let noteC, noteE, noteG, meow;
// Credits to the meow: Battle cats game created by PONOS
// I do not own the sound effects. They were taken from the link below:
// https://www.youtube.com/watch?v=dd9ALQYYfn4

/* ----- Gyroscope ----- */
let gyro = false;                // Checking if gyroscope is going to be used
let a, b, g;                     // Accelerometer variables

/* ----- Environment ----- */
let bgColor = '#d1d1d1';         // Background color
let circles = [];                // Hold the spawned circles.
let rectDim = 20;                // Catfood size (rectangle)
let catFud;                      // Catfood image variable

/* ----- Food properties ----- */
let arrayN = 5;                  // Total of food to spawn
let foodX = new Array(arrayN);   // Store X position of cat food
let foodY = new Array(arrayN);   // Store Y position of cat food
let foodH = new Array(arrayN);   // Store color value of food

// Preparation for external files
function preload() {
  cat = loadAnimation('img/cat-0.png', 'img/cat-1.png', 'img/cat-2.png', 'img/cat-3.png', 'img/cat-4.png');
  catf = loadAnimation('img/cat-f0.png', 'img/cat-f1.png', 'img/cat-f2.png', 'img/cat-f3.png', 'img/cat-f4.png');
  catSt = loadAnimation('img/cat-sit.png');
  catStF = loadAnimation('img/cat-sit-f.png');
  catFud = loadImage('img/crouton.png');
  noteC = loadSound('sound/C.mp3');
  noteE = loadSound('sound/E.mp3');
  noteG = loadSound('sound/G.mp3');
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

  // default values for accelerometer
  a = 0;
  b = 0;
  g = 0;

  // Initialize the catfood
  catFood();
}

// Resize the canvas when the browser window is changed
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);           // Set the background color
  mX = pmouseX - cat.width;      // Offset the cat position to center
  mY = pmouseY - cat.height;     // Offset cat position to center

    if(mouseX>pmouseX)
      faceLeft = true;
    else if(mouseX<pmouseX)
      faceLeft = false;

    // Animation logic
    if(faceLeft && (pmouseX == mouseX))
      animation(catSt, pmouseX, pmouseY);
    else if(!faceLeft && (pmouseX == mouseX))
      animation(catStF, pmouseX, pmouseY);
    else if(!faceLeft && (pmouseX != mouseX))
      animation(catf, pmouseX, pmouseY);
    else if(faceLeft && (pmouseX != mouseX))
      animation(cat, pmouseX, pmouseY);

    // For visual debugging the collision detection
    //fill(50,0.5);
    //rect(pmouseX-(cat.getWidth()/2),pmouseY-(cat.getHeight()/2),cat.getWidth(),cat.getHeight());

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
    fill(foodH[i], 100, 100);
    noStroke();
    rect(foodX[i],foodY[i],rectDim,rectDim); // Draw cat food
    image(catFud,foodX[i],foodY[i],rectDim,rectDim); // Draw cat food
  }
}

// Spawn the cat food (constantly runs)
function catFoodShow(){
  for (let i=0; i < arrayN; i++) {
    fill(foodH[i], 100, 100);
    noStroke();
    rect(foodX[i],foodY[i],rectDim,rectDim);
    image(catFud,foodX[i],foodY[i],rectDim,rectDim); // Draw cat food
  }
}


// Make sure the cat is able to eat
function catEat(){

  for (var i=0; i < arrayN; i++) {
    // Oh boy, the logic below gave me a headache... pseudo detecting the
    // overlapping rectangle of the cat and cat food was annoying to write
    if ( (pmouseX+(cat.getWidth()/2)>foodX[i]) && (pmouseX-(cat.getWidth()/2)<(foodX[i]+rectDim)) &&
         (pmouseY+(cat.getHeight()/2)>foodY[i]) && (pmouseY-(cat.getHeight()/2)<(foodY[i]+rectDim))
       ){

      // Assign a new position once eaten
      foodX[i] = round( random(20, width-20) );
      foodY[i] = round( random(20, height-20) );
      foodH[i] = (random(0, 255));
      fill(foodH[i], 100, 100);
      rect(foodX[i],foodY[i],rectDim,rectDim);


      // For visual debugging
      //rect(pmouseX-(cat.getWidth()/2),pmouseY-(cat.getHeight()/2),cat.getWidth(),cat.getHeight());
      //console.log("chomp");

      // Show circles at where the food spawns
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(7, 15), foodH[i]));
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(22, 28), foodH[i]));
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(36, 43), foodH[i]));

      eatCount++; // Increase the count of food eaten

      // Play the note according to order of divisible by round(random(7, 10)), 2, 3, 1
      if (eatCount % round(random(7, 10)) == 0){
        circles.push(new Circle(pmouseX, pmouseY, random(7, 15), foodH[i]));
        circles.push(new Circle(pmouseX, pmouseY, random(22, 28), foodH[i]));
        circles.push(new Circle(pmouseX, pmouseY, random(36, 43), foodH[i]));
        meow.play()
      }
      else if (eatCount % 2 == 0){
        noteE.play()
      }
      else if (eatCount % 3 == 0){
        noteG.play()
      }
      else if (eatCount % 1 == 0){
        noteC.play()
      }
    }
  }
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
