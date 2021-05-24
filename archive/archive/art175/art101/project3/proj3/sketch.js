function clog(x){
  console.log(x);
}

var h, m, s; // Hour/minute/second

var colorH, colorM, colorS;
  /////////////////////////////////////
  // TIME EMULATION 
  /////////////////////////////////////
  var sec = 0;
  var mins = 0;
  var hrs = 0;

  function timeTrack(x){
    if (sec >= 59){
      sec = 0;
      mins++;
    }
    if (mins >= 59){
      mins = 0;
      hrs++;
    }
    if (hrs >= 59){
      hrs = 0;
    }
    if (frameCount % 60 == 0){
      sec++;
      //clog(hrs+":"+mins+":"+sec);
    }
  }
  /////////////////////////////////////

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth - (windowWidth/250), windowHeight - (windowHeight/250));
  background(20);
  //stroke(255);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  //timeTrack();
  background(0);

  push();
  let h = hour();
  //let h = hrs;
  let colorH = map(h,0,23,0,255);
  fill(colorH, 100, 100);
  //console.log(s);
  if(h > 11){
    translate(width/2, height);
    rotate(180);
  }
  else{
    translate(0, 0);
    rotate(0);
  }
  var hMap = map(h,0,23,0,height); // this scales up the values of 0-60 to 0-height
  //rotate(-90);  // offset rotate
  //rotate(hMap);
  rect(0,0,width/2,hMap);
  pop();

  push();
  let m = minute();
  //let m = mins;
  let colorM = map(m,0,60,0,255);
  fill(colorM, 100, 100);
  //console.log(colorM);
  translate(width/2, 0);
  var mMap = map(m,0,60,0,height); // this scales up the values of 0-60 to 0-width
  //rotate(-90);  // offset rotate
  //rotate(mMap);
  rect(0,0,width/2,mMap);
  pop();

/*
  push();
  //let s = second();
  let s = sec;
  let colorS = map(s,0,60,0,255);
  fill(colorS, 100, 100);
  //console.log(s);
  translate(width/2, height/2);
  var sMap = map(s,0,60,0,360); // this scales up the values of 0-60 to 0-360
  rotate(-90);  // offset rotate
  rotate(sMap);
  line(0,0,100,0);
  pop();
*/

  push();
  let s = second();
  //s = sec;
  colorS = map(s,0,60,0,255);
  fill(colorS, 100, 100);
  //console.log(s);
  var sMapW = map(s,0,60,0,width); // this scales up the values of 0-60 to 0-width
  var sMapH = map(s,0,60,0,height); // this scales up the values of 0-60 to 0-height
  rect(0,0,sMapW,width/100);
  rect(0,0,height/100,sMapH);
  pop();
}
