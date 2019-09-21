/////////////////////////////////////////
// This section is for the image modal //
/////////////////////////////////////////

// Get the modal
var modal = document.getElementById("imgModal");

function imageThis(_this){
  modal.style.display = "block";
  var captionText = document.getElementById("caption");
  var modalImg = document.getElementById("img01");
  modalImg.src = _this.src;
  captionText.innerHTML = _this.alt;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

function closeModal(){
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
  modal.style.display = "none";
}
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if(evt.key === "Escape") {
    modal.style.display = "none";
  }
  //console.log(evt);
};
