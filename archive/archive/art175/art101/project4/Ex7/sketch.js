
var lollipop;

       /*
        // sample example
    var sampletoon = {
       "name":"Boris",
       "r":200,
       "g":160,
       "b":200,
       "head": 60,
       "torso": 33,
       "posX":50,
       "posY":90,
       "moveX":[5,-3,4,-6,-3,3,4,-2],
       "moveY":[2,4,4,6,-3,3,4,-2]
        }
        */


 var sx = 0;
 var sy = 0;


function preload() {
  lollipop = loadJSON("Ex7.json");
}

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);

  // this shows the whole lollipop json data package
  console.log(lollipop);
  noStroke();

}



function draw() {
  background(0);

  updateToon(lollipop.toons[0]);
  updateToon(lollipop.toons[1]);
  updateToon(lollipop.toons[2]);
  updateToon(lollipop.toons[3]);

}



function updateToon(obj) {
  push();
    if ( int(random(10)) > 8) {
     obj.nextX = int(random(obj.moveX.length));
     obj.nextY = int(random(obj.moveY.length));
    }
    obj.posX += obj.moveX[obj.nextX];
    obj.posY += obj.moveY[obj.nextY];
    // console.log(obj.posX);
    if (obj.posX > width) {
      obj.posX = 0;
    }
    if (obj.posX < 0) {
      obj.posX = width;
    }
    if (obj.posY > height) {
      obj.posY = 0;
    }
    if (obj.posY < 0) {
      obj.posY = height;
    }
    drawToon(obj);
  pop();
}



function drawToon( obj) {
  //  console.log(obj.posX[s]);
  push();
    translate(obj.posX , obj.posY);
    rotate(obj.rotation);
    scale(obj.scale);

    // head
    fill(obj.h,obj.s,obj.b);
    if(obj.headshape == "ellipse")
      ellipse(0,20,obj.head,obj.head);
    if(obj.headshape == "rect")
      rect(0,20,obj.head,obj.head);

    // stick
    fill(obj.h,obj.s,obj.b);
    if(obj.stickShape == "ellipse")
      ellipse(0,50,obj.width,obj.height);
    if(obj.stickShape == "rect")
      rect(0,50,obj.width,obj.height);

    //stick
    fill(255);
    textSize(20);
    text(obj.name,0,-20);
  pop();
}
