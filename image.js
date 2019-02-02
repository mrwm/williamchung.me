var modal = document.getElementById("imgModal");

function imageThis(_this){
  var captionText = document.getElementById("caption");
  var modalImg = document.getElementById("imgMod");
  modal.style.display = "block";
  modalImg.src = _this.src;
  captionText.innerHTML = _this.alt;
}

var closeScrn = document.getElementById("closeScreen");
var closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = function() { 
  modal.style.display = "none";
}
closeScrn.onclick = function() { 
  modal.style.display = "none";
}
