function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);

  rect(0, (height/4)*1 + 5, width, -20);
  rect(0, (height/4)*2 + 50, width, -70);
  rect(0, (height/4)*3 + 50, width, -70);

  textAlign(CENTER);
  text("Cat", width/2, (height/4)*1);

  let a = createA('cat.html', 'Click here to start');
  a.position(width/2, (height/4)*2);

  let b = createA('help.html', 'Click here for help');
  b.position(width/2, (height/4)*3);
  //text("click here for help", width/2, (height/4)*3);
}


// Resize the canvas when the browser window is changed
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

