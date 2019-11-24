//`data` is the variable holding the json

function preload() {
  //most of the json has been handled by the browser through the api script
}

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background(0);

  noStroke();

}

let sec = 6;
let txt="starting in "
let startDrawing = false;
function draw() {
  background(0);
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

function drawRects(){
  for(let i=0; i<data.length; i++){
    let rectWidth = map(i, 0, data.length, 0, width); //map the rect width to available width
    let rectHeight = map(data[i].distance, maxDistArr[0]/2, maxDistArr[(maxDistArr.length - 1)], 0, height); //map height to distance

    let elev = data[i].elev_high - data[i].elev_low;
    let fillC = map(elev, maxElevArr[0], maxElevArr[(maxElevArr.length - 1)], 0, 255);
    fill(fillC,100,100);

    rect(i*rectWidth, height - rectHeight, rectWidth, rectHeight);
  }
}
