/////////////////////////////////////////
// This section is for the image modal //
/////////////////////////////////////////

var modal = document.getElementById("imgModal");

// This works with the img tags
function imageThis(_this){
  var captionText = document.getElementById("caption");
  var modalImg = document.getElementById("imgMod");
  modal.style.display = "block";
  modalImg.src = _this.src;
  captionText.innerHTML = _this.alt;
}


// This works for the picture tags and uses the fallback jpg/png
function imageThisP(_this){
  var captionText = document.getElementById("caption");
  var modalImg = document.getElementById("imgMod");
  modal.style.display = "block";
  modalImg.src = _this.childNodes[3].src;
  captionText.innerHTML = _this.childNodes[3].alt;
}


var closeScrn = document.getElementById("closeScreen");
var closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = function() { 
  modal.style.display = "none";
}
closeScrn.onclick = function() { 
  modal.style.display = "none";
}

////////////////////////////////////////////////
// This section is for resizing the nav links //
////////////////////////////////////////////////

var navs = document.getElementsByTagName("nav");
for(var i=0; i<navs.length; i++) {
  if (navs[i].nodeName.toLowerCase() == 'nav') {
    var n = 100/navs[i].childElementCount;
    var nodes = navs[i].childNodes;
    for(var j=0; j<nodes.length; j++) {
      if (nodes[j].nodeName.toLowerCase() == 'a') {
        nodes[j].style.width = n + '%';
      }
    }

  }
}

