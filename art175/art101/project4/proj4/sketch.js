//`data` is the variable holding the json

function preload() {
  //most of the json has been handled by the browser through the api script
}

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background(0);

//  noStroke();

}

let sec = 4;
let txt="starting in "
let startDrawing = false;
function draw() {
  background('#16161d');
  fill(255);

  if (frameCount % 60 == 0){
    sec--;
    if (sec<1){//start after 5 seconds
      startDrawing = true;
      txt="";
      fill(0);
    }
    txt="starting in "+sec;
  }

  if (startDrawing)
    drawRects();
  else
    text(txt, width/2, height/2);
}


let prevHeight, prevWidth, rectWidth, rectHeight, elev, fillC;
let distY;
function drawRects(){
  for(let i=0; i<data.length; i++){
    rectWidth = i*(width/data.length); //map the rect width to available width
    rectHeight = map(data[i].distance, maxDistArr[0]/2, maxDistArr[(maxDistArr.length - 1)], 0, height); //map height to distance
    if(i!=0){
      prevWidth = (i-1)*(width/data.length); //map the rect width to available width
      prevHeight = map(data[i-1].distance, maxDistArr[0]/2, maxDistArr[(maxDistArr.length - 1)], 0, height); //map height to distance
    }

    elev = data[i].elev_high - data[i].elev_low;
    fillC = map(elev, maxElevArr[0], maxElevArr[(maxElevArr.length - 1)], 0, 255);

    fill(fillC,100,100);
    stroke(fillC,100,100);
    strokeWeight(4);

    if(i!=0){
      line(rectWidth, height - rectHeight, prevWidth, height - prevHeight);
    }


    if ((mouseX > prevWidth) && (mouseX < rectWidth)
    ){
      distY = dist(mouseX, height - rectHeight, mouseX, height - prevHeight);
      if(elev > 500)
        fill('#e9e9e2');
      //rect(mouseX,mouseY,-10,-10);
      noStroke();
      if (mouseX > width/2)
        textAlign(RIGHT);
      if (mouseX < width/2)
        textAlign(LEFT);
      text(prevHeight+"m (distance)",mouseX,height - prevHeight);
      text(elev+"m (elevation)",mouseX,mouseY-10);
      //frameRate(1);
      //console.log(elev);
    }
  }
}
