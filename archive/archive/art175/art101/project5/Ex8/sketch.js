/*
  Shorthand method of writing conditionals.
  This...
      if (condition)
        run code; //the semicolon acts like the closing curled bracket
  Is the same thing as this...
      if (condition){
        run code;
      }
  The only downside is that it's only limited to one line.
*/



//play / lead to song / color -> note

// Circle code taken and modified from here:
// https://editor.p5js.org/coloringchaos/sketches/SkZVaxF0-

/* ----- Main character ----- */
let cat;                         // Cat image
let eatCount = 0;                // Amount of food eaten
let xpos, ypos;                  // Position of the cat

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

/* ----- Food properties ----- */
let arrayN = 5;                  // Total of food to spawn
let foodX = new Array(arrayN);   // Store X position of cat food
let foodY = new Array(arrayN);   // Store Y position of cat food
let foodH = new Array(arrayN);   // Store color value of food

// Preparation for external files
function preload() {
//  cat = loadImage('img/cat.svg'); // Spawn the cat!
  cat = "cat";                      // Spawn the cat!
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
  mX = pmouseX - cat.width;      // Offset the cat position to center
  mY = pmouseY - cat.height;     // Offset cat position to center

  // Taken and modified from the kadenze code
  let easing = 0.5;
  let diffX, diffY;
  if (!gyro){ // Use cursor position if gyroscope isn't enabled.
    diffX = (mX) - xpos;
    diffY = (mY) - ypos;
  }
  else{                          // Use gyroscope if checked
    diffX = g - xpos;
    diffY = b - ypos;
  }
  xpos += diffX * easing;
  ypos += diffY * easing;


  // The code for moving the cat around
  //push();
    //translate(xpos,ypos);
    //image(cat, cat.width/2, cat.height/2); // Offset the cat to be centered
    //text(cat, xpos, ypos); // Offset the cat to be centered
    text('cat', xpos, ypos); // Offset the cat to be centered

    // For visual debugging the collision detection
    //fill(50,0.5);
    //rect(cat.width/2, cat.height/2,cat.width,cat.height)
  //pop();

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
    let rectDim = 20;            // Setup rectangle dimentions
    rect(foodX[i],foodY[i],rectDim,rectDim); // Draw cat food
  }
}

// Spawn the cat food (constantly runs)
let rectDim = 20; // We can declare the same variable because of the variable scope using 'let'
function catFoodShow(){
  for (let i=0; i < arrayN; i++) {
    fill(foodH[i], 100, 100);
    rect(foodX[i],foodY[i],rectDim,rectDim);
  }
}


// Make sure the cat is able to eat
function catEat(){
  // Setup an offset 'coz rectmode is in the corner and cursor is in the center
  let detectX = xpos + 0;//cat.width;
  let detectY = ypos + 0;//cat.height;

  for (var i=0; i < arrayN; i++) {
    // Oh boy, the logic below gave me a headache... pseudo detecting the
    // overlapping rectangle of the cat and cat food was annoying to write
//    if ( (detectX+cat.width/2>foodX[i]) && (detectX-cat.width/2<(foodX[i]+rectDim)) &&
//         (detectY+cat.height/2>foodY[i]) && (detectY-cat.height/2<(foodY[i]+rectDim))
//       ){
    if ( (detectX+0/2>foodX[i]) && (detectX-0/2<(foodX[i]+rectDim)) &&
         (detectY+0/2>foodY[i]) && (detectY-0/2<(foodY[i]+rectDim))
       ){

      // Assign a new position once eaten
      foodX[i] = round( random(20, width-20) );
      foodY[i] = round( random(20, height-20) );
      foodH[i] = (random(0, 255));
      fill(foodH[i], 100, 100);
      rect(foodX[i],foodY[i],rectDim,rectDim);


      // For visual debugging
      //rect(detectX-cat.width/2,detectY-cat.height/2,cat.width,cat.height);
      //console.log("chomp");

      // Show circles at where the food spawns
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(7, 15), foodH[i]));
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(22, 28), foodH[i]));
      circles.push(new Circle(foodX[i] + rectDim/2, foodY[i] + rectDim/2, random(36, 43), foodH[i]));

      eatCount++; // Increase the count of food eaten

      // Play the note according to order of divisible by round(random(7, 10)), 2, 3, 1
      if (eatCount % round(random(7, 10)) == 0){
        circles.push(new Circle(xpos + 0, ypos + 0, random(7, 15), foodH[i]));
        circles.push(new Circle(xpos + 0, ypos + 0, random(22, 28), foodH[i]));
        circles.push(new Circle(xpos + 0, ypos + 0, random(36, 43), foodH[i]));
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


// https://coursescript.com/notes/interactivecomputing/mobile/gyroscope/
// Gyroscope Data
window.addEventListener('deviceorientation', function(e) 
{
  // Use the gyroscope by default if detected
  if ((e.alpha!=null) && (e.beta!=null) && (e.gamma!=null))
    gyro = true;

  // Map the tilt degree so we don't go too far into the rotation
  if (e.alpha!=null)
    a = map(e.alpha, -180, 180, -90, 90); // Probably rotation counter/clockwise?

  // Over compensate to be able to reach the screen edges without flipping the phone upside down
  if (e.beta!=null)
    b = map(e.beta, -180, 180, -height/2, height+(height/4)); // Face phone (up/down)
  if (e.gamma!=null)
    g = map(e.gamma, -180, 180, -width/2, width+(width/4)); // Face phone (tilt left/right)
});
