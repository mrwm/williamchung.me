function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);

  rect(0, (height/4)*1 + 5, width, -20);
  rect(0, (height/4)*2 + 50, width, -70);
  rect(0, (height/4)*3 + 50, width, -70);

  textAlign(CENTER);
  text("Cat is hungry. Guide cat around for cat to eat with the mouse cursor", width/2, (height/4)*1);

  let a = createA('cat.html', 'Click here to start');
  a.position(width/3, (height/4)*2);

  let b = createA('index.html', 'Click here to go back');
  b.position(width/3, (height/4)*3);
  //text("click here for help", width/2, (height/4)*3);
}


// Resize the canvas when the browser window is changed
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

