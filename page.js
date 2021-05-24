/*
  Make sure that the text value here match the value inside the links.
  To get the google doc link, go to File -> Publish to the web -> embed
  and copy the iframe code.
  
  Then take the iframe code and grab the link inside the src=... and paste it
  to the number that corresponds to the dictionary.
*/
let pageDict = { // Compare the text within the anchor tags to link index's
  "Portfolio":          0,
  "Resume":             1,
};
let linkDict = { // then use the index to grab the iframe link
  0: "https://docs.google.com/document/d/e/2PACX-1vTMD6Gq-1vUf08oe4Ne9xhj-q2qgnei__JpT6_5MSVJAFxFeoPBwrGlBCiO_zm4lF2M8OpTcSCnW5DI/pub?embedded=true",
  1: "https://docs.google.com/document/d/e/2PACX-1vRLZVevLyyjMT3rQdcrPZm8eOx3P5-TG1LsP_EjfP5FggyBL-OU-VHwMhOFJ9MHB-PsXkEZsfCgCqne/pub?embedded=true",
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

  //// hide the homepage text and show frame if home page is not selected
  //if (targetID != 0){
  //  init.classList.add("hidden");
    frame.classList.remove("hidden");
  //}
  //// otherwise, hide the frame and show the home page
  //else {
  //  frame.src = linkDict[targetID];
  //  frame.classList.add("hidden");
  //  init.classList.remove("hidden");
  //}

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

