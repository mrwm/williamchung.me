/*
  Make sure that the text value here match the value inside the links.
  To get the google doc link, go to File -> Publish to the web -> embed
  and copy the iframe code.
  
  Then take the iframe code and grab the link inside the src=... and paste it
  to the number that corresponds to the dictionary.
*/
let pageDict = { // Compare the text within the anchor tags to link index's
  "Home":               0,
  "Oblique Strategies": 1,
  "Reading 1":          2,
  "Tessellation":       3,
  "CAD Fun":            4,
  "Reading 2":          5,
  "Signs":              6,
  "Reading 3":          7,
  "Artifact":           8,
};
let linkDict = { // then use the index to grab the iframe link
  0: "#",
  1: "https://docs.google.com/document/d/e/2PACX-1vROtkArryPdhjb8y29kLv2U4bkA50-j5L8oB6LWLLHWXBWLzKXQhb4BHopTfag-CqnG5ZdCvUVHALHR/pub?embedded=true",
  2: "https://docs.google.com/document/d/e/2PACX-1vTZ17fHypkO-UfLQcB1qvqsmg2CZeI8caZ6Dszkf3c98cTo3_G1SGp92-DduA-hC3cPSj1zG27Os1hU/pub?embedded=true",
  3: "https://docs.google.com/document/d/e/2PACX-1vQ_Jh3vuOVIvn4sLLypf6ZRBGWbzBXDtqyoY4puPqVwU6PZr1mxFsP5VfT1sKl1xFrKPN6yUh-1Xtw-/pub?embedded=true",
  4: "https://docs.google.com/document/d/e/2PACX-1vSZksBqBl6vThp2JbtW3AMPnJlkuu3CUeAyGxrBT5R5hPip-4C9ghV1fRKwLoysDlj2oybmxyw9s3Mt/pub?embedded=true",
  5: "https://docs.google.com/document/d/e/2PACX-1vQUUCfq3-FNqE_xZ6AOJj24QDFbTcX2EAGp5KFGrWbDyOSlNBGQ1_Iua3AdHJxeqiVN__4oi_6y3_O3/pub?embedded=true",
  6: "https://docs.google.com/document/d/e/2PACX-1vQQnOVDFhbb2nrKC5hT1lt_FdGs6rWKaFynWDMd2V6idQEMK8Cs7cJf0DOBKIcwjXmgTkc4PaLe0n8S/pub?embedded=true",
  7: "https://docs.google.com/document/d/e/2PACX-1vTQDK2ZSwHNA-oyupIqs2FY-BeZcuUgSdY-OCkc390tI8mY2yoAc3u7S4ZMO92SfwUvgesuLxNbG3Ky/pub?embedded=true",
  8: "https://docs.google.com/document/d/e/2PACX-1vRuDHwPpOtkCa0NEkwaSc1YgdEZR5d0xxlMBJ8b4alq-ins4kPkAk02N6VS214qf4tRtNOKi4WnVkFO/pub?embedded=true",
};
function page(x){
  /*
    This function show/hides the homepage text and frame according to
    what is clicked. If a frame is shown, this function will change the
    frame source according to what is selected.

    eg: If page(1) is called, then the page 1 will be loaded.
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
    targetID = pageDict[decodeURI(x)]; //decodeURI() is used to change "%20" to spaces
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

  // Enlargen the details tag after clicking the link
  detailOpen(true);
  // Close the details tag
  document.getElementsByTagName("details")[0].removeAttribute("open");

  // Force reload the page to clear cache... hope this works?
  //location.reload(true);
}


function initialize(){
  /*
    This function is loaded whenever the page is loaded. This starts by
    checking the URL for any hashes (#) and sets the page accordingly.

    eg: If the page is loaded with #reading1 in the URL,
        the page reading1 will be loaded
  */

  // Look for any hashes in the URL
  let pageHash = window.location.hash.substr(1);

  // Set the value to null if there's no hash
  if (pageHash.length == 0)
    pageHash = 0;

  // Load the page selected in the hash
  page(pageHash);
}

// Update the page when the hash changes 
window.onhashchange = initialize;

function detailOpen(stat){
  /*
    This function counts the number of links and subtracts the combined
    height of those links from the frame height to keep the iframe in view
  */

  // Grab the iframe
  let frame = document.getElementById("frame");

  // Get the number of links available
  let aCount = document.getElementsByTagName("a").length;

  // Stat is only passed when passed from the header links,
  // so only shorten the iframe when the details tag is open.
  if (!document.getElementsByTagName("details")[0].hasAttribute("open") && stat == undefined){
    frame.style.height = "calc(100vh - var(--font-size) * (2.6 * " + aCount + ")";
  }
  else {
    //frame.style.height = "calc(100vh - " + fontSizeFloat + "em)";
    frame.style.height = "calc(100vh - var(--font-size) * 2.5";
  }
}

