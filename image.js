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
