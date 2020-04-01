/*

This js file assigns a random class to the grid elements and adds a random 
column span. It also allows users to scroll horizontally with the vertical 
scroll wheel. Lastly, it makes the page expand infinitely as long as the user 
continues to scroll

*/


var items = 40;

// click code
// hides the div that is clicked
document.addEventListener('click', function (event) {
  if (event.target.className.includes("item") && !(/^([1-9]|10)$/.test(event.target.innerHTML))){
    event.target.remove();}
    //event.target.style = "display: none;"} //old code that hides as opposed to delete
}, false);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

var scrollAmount; // save amount scrolled


// Create a list of images for random generation
var imgList = new Array();

/* Idea + some code taken from here:
https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
*/

imgList[0] = new Image();
imgList[0].src = 'img/bat.jpg';
imgList[0].alt = 'Happy Bat';
imgList[0].title = 'Happy Bat';

imgList[1] = new Image();
imgList[1].src = 'img/broom.jpg';
imgList[1].alt = 'Broom';
imgList[1].title = 'Broom';

imgList[2] = new Image();
imgList[2].src = 'img/candy.png';
imgList[2].alt = 'Inedible Candy';
imgList[2].title = 'Inedible Candy';

imgList[3] = new Image();
imgList[3].src = 'img/ghost.png';
imgList[3].alt = 'Happy Ghost';
imgList[3].title = 'Happy Ghost';

imgList[4] = new Image();
imgList[4].src = 'img/hat.jpg';
imgList[4].alt = 'Witch Hat';
imgList[4].title = 'Witch Hat';

imgList[5] = new Image();
imgList[5].src = 'img/pumpkin.jpg';
imgList[5].alt = 'Happy Pumpkin';
imgList[5].title = 'Happy Pumpkin';

imgList[6] = new Image();
imgList[6].src = 'img/skeleton.jpg';
imgList[6].alt = 'Happy Skeleton';
imgList[6].title = 'Happy Skeleton';

imgList[7] = new Image();
imgList[7].src = 'img/spider.png';
imgList[7].alt = 'Happy Spider';
imgList[7].title = 'Happy Spider';

imgList[8] = new Image();
imgList[8].src = 'img/web.jpg';
imgList[8].alt = 'Spider Web';
imgList[8].title = 'Spider Web';

// End of image list

// side scroll
f = document.getElementById('grid');
f.onwheel = function(e){ 
  f.scrollLeft += e.deltaY * Math.abs(e.deltaY);
  scrollAmount = f.scrollLeft;
  var scrollProgress = Math.round((scrollAmount / f.scrollWidth) * 100);
  //console.log(scrollProgress+"%");


  // Choose a random item and clone it to the end of the page
  // once you scroll past 40% of the page
  if (scrollProgress > 40){
    var e = f.children[getRandomInt(10)].cloneNode(true);
    items++;
    var imgNumber = getRandomInt(8);
    e.innerHTML = items + "<img src='"
                                  + imgList[imgNumber].src
                                  + "' alt='"
                                  + imgList[imgNumber].alt
                                  + "' title='"
                                  + imgList[imgNumber].title
                                  + "'>";

    f.appendChild(e);
  }
}

// Sets a random span for each div item
// return a weird error in forfox for some reason (a bug? imaginary element?)
for (var i = 0; f.children.length; i++){
  //console.log(f.children[i]);
  var nameOfClass = "span"+getRandomInt(10);
  var spanAmount = "grid-column-end: span "+getRandomInt(2)+" ;";
  f.children[i].classList.add(nameOfClass);
  f.children[i].style = spanAmount;
  var imgNumber = getRandomInt(8);
  f.children[i].innerHTML = i + "<img src='"
                                + imgList[imgNumber].src
                                + "' alt='"
                                + imgList[imgNumber].alt
                                + "' title='"
                                + imgList[imgNumber].title
                                + "'>";
  //console.log(spanAmount);
}
