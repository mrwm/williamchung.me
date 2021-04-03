/*
  Compare the text within the anchor tags to link index's,
  then use the index to grab the iframe link. 

  pageDict -> linkDict

*/

let pageDict = {
  "Home":               0,
  "Oblique Strategies": 1,
  "Reading #1":         2,
  "Tessellation":       3,
  "CAD Fun":            4,
  "Reading #2":         5,
  "Signs":              6,
};
let linkDict = {
  0: "#",
  1: "https://docs.google.com/document/d/e/2PACX-1vROtkArryPdhjb8y29kLv2U4bkA50-j5L8oB6LWLLHWXBWLzKXQhb4BHopTfag-CqnG5ZdCvUVHALHR/pub?embedded=true",
  2: "https://docs.google.com/document/d/e/2PACX-1vTZ17fHypkO-UfLQcB1qvqsmg2CZeI8caZ6Dszkf3c98cTo3_G1SGp92-DduA-hC3cPSj1zG27Os1hU/pub?embedded=true",
  3: "https://docs.google.com/document/d/e/2PACX-1vQ_Jh3vuOVIvn4sLLypf6ZRBGWbzBXDtqyoY4puPqVwU6PZr1mxFsP5VfT1sKl1xFrKPN6yUh-1Xtw-/pub?embedded=true",
  4: "https://docs.google.com/document/d/e/2PACX-1vSZksBqBl6vThp2JbtW3AMPnJlkuu3CUeAyGxrBT5R5hPip-4C9ghV1fRKwLoysDlj2oybmxyw9s3Mt/pub?embedded=true",
  5: "https://docs.google.com/document/d/e/2PACX-1vQUUCfq3-FNqE_xZ6AOJj24QDFbTcX2EAGp5KFGrWbDyOSlNBGQ1_Iua3AdHJxeqiVN__4oi_6y3_O3/pub?embedded=true",
  6: "https://docs.google.com/document/d/e/2PACX-1vQQnOVDFhbb2nrKC5hT1lt_FdGs6rWKaFynWDMd2V6idQEMK8Cs7cJf0DOBKIcwjXmgTkc4PaLe0n8S/pub?embedded=true",
};

function page(x){
  /*
    This function show/hides the homepage text and frame according to
    what is clicked. If a frame is shown, this function will change the
    frame source according to what is selected.
  */

  // Remove all currentNav classes from the page
  let nav = document.getElementsByClassName("currentNav");
  for (i=0; i < nav.length; i++){
    nav[i].classList.remove("currentNav");
  }

  // Prepare to get content of 'x'
  let inHTML   = null;
  let targetID = null;

  if (x !== null && x.tagName !== undefined){
    // Then add the currentNav to the item clicked
    x.classList.add("currentNav");

    // Grab the text inside the a tag, then set the link accordingly.
    inHTML   = x.innerHTML;
    targetID = pageDict[inHTML];
  }
  else {
    // Set targetID to whatever value x was passed
    targetID = x;
    document.getElementById(targetID).classList.add("currentNav");
  }

  // Grab the content and frame.
  let init  = document.getElementById("init");
  let frame = document.getElementById("frame");

  // Setup the frame text
  frame.src = linkDict[targetID];

  // hide the homepage text and show frame if home page is not selected
  if (targetID != 0){
    init.classList.add("hidden");
    frame.classList.remove("hidden");
  }
  // otherwise, hide the frame and show the home page
  else {
    frame.src = linkDict[targetID];
    frame.classList.add("hidden");
    init.classList.remove("hidden");
  }

  // Close the details tag
  document.getElementsByTagName("details")[0].removeAttribute("open");
}

function initialize(){
  /*
    This function is loaded whenever the page is loaded. This starts by
    checking the URL for any hashes (#) and sets the page accordingly
  */

  // Look for any hashes in the URL
  let pageHash = window.location.hash.substr(1);

  // Set the value to null if there's no hash
  if (pageHash.length == 0){
    pageHash = 0;
  }
  // Load the page selected in the hash
  page(pageHash);
}

