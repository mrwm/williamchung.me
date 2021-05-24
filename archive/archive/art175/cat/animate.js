let cat, cat_sheet;

function preload(){
  cat = loadAnimation('img/cat-0.png', 'img/cat-1.png', 'img/cat-2.png', 'img/cat-3.png', 'img/cat-4.png');
  //cat = loadAnimation(cat_sheet);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  animation(cat, 100,100);
}
