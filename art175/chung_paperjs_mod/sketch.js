var mousePoint = null;//view.center;
var amount = 100;
var colors = ['red', 'white', 'blue', 'white'];
var increment = 0.1;

function setup(){
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw(event) {
  background(255); 
  translate(mouseX,mouseY);
  for (let i = 0; i < amount; i+=5) {
    var scale = (1 - i / amount) * 500;
    rotate(scale);
    fill(scale, 100, 100);
    rect(0, 0, scale, scale);
  }
  if (frameCount % 6 == 0){
    amount -= increment;
    if((amount >= 100)||(amount <= 0))
      increment = -increment;
  }
/*
  for (var i = 0, l = children.length; i < l; i++) {
    var item = children[i];
    var delta = (mousePoint - item.position) / (i + 5);
    item.rotate(Math.sin((event.count + i) / 10) * 7);
    if (delta.length > 0.1)
      item.position += delta;
  }
*/

}
