let pageDict = {
  "Home":               0,
  "Oblique Strategies": 1,
  "Reading #1":         2,
  "Tessellation":       3,
  "CAD Fun":            4,
  "Reading #2":         5,
  "Signs":              6,
};

function page(x){
  // Remove all currentNav classes from the page
  let nav = document.getElementsByClassName("currentNav");
  for (i=0; i < nav.length; i++){
    nav[i].classList.remove("currentNav");
  }
  // Then add the currentNav to the item clicked
  x.classList.add("currentNav");

  let inHTML = x.innerHTML;

  let targetID = null;
  targetID = pageDict[inHTML];

  let other = document.getElementsByClassName("content");
  let target = document.getElementById(targetID);

  // Hide all page content
  for (i=0; i < other.length; i++){
    other[i].classList.add("hidden");
  }
  // Then show the correnct content
  target.classList.remove("hidden");

  document.getElementsByTagName("details")[0].removeAttribute("open");
}


