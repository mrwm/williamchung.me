//https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=state:*
//https://api.census.gov/data/2017/pep/population?get=GEONAME,POP&for=state:*
//https://api.census.gov/data/2016/pep/population?get=GEONAME,POP&for=state:*
//https://api.census.gov/data/2015/pep/population?get=GEONAME,POP&for=state:*

/*
YEAR |  LEAST   |  MOST
2015 |  586107  |  39144818
2016 |  585501  |  39250017
2017 |  579315  |  39536653
2018 | *577737  | *39557045

* - extremeties
*/

//hold all population data from 2015 to 2018 in an array
var populationList = new Array();
var filteredPop = new Array(); //hold the sorted data

const By = Object.freeze({state:1, population:2, statenumber:3});

function preload() {
  //get data from 2015 to 2018
  for (let i=0; i<4; ++i){
    populationList[i] = loadJSON("https://api.census.gov/data/201" + 
                              (i+5) + //make the increments add to 5, 6, 7, 8
                             "/pep/population?get=GEONAME,POP&for=state:*");
  }
}

function setup() {
  colorMode(HSB);
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  background(0);

  sortPopulationData(By.population);
  colorTheData(By.statenumber);

}

//function draw() {
//
//}
function colorTheData(sort){
  //workaround for bad practice setting enum value to zero
  let sortNum = sort -1;

  for (let i=filteredPop.length-1; i>0; i--){ //reverse the draw order
    let innerPopList = new Array(); //hold current data
    let popIndex = filteredPop[i] //which object list to filter thru
    let popSize = Object.keys(popIndex).length; //Can't length objects w/o keys

    for (let j=0; j<popSize; j++){

      let currentPop = parseInt(popIndex[j][sortNum]);
      let popHeight = 0;
      let jColorMap = 0;
      let jAlphaMap = 0;

      switch(sortNum){
        case 2: //state numbers aren't consistent, so map to array index instead
          popHeight = map(currentPop, 0, 72, 0, height);
          jColorMap = (255/i)/i;//map(currentPop, 0, 72, 0, 255);
          jAlphaMap = map(currentPop, 0, 72, 255, 0);
          break;
        default: //can't sort by state name, so only population or state number.
          popHeight = map(currentPop, 0, 39557045, 0, height);
          jColorMap = map(currentPop, 0, 39557045, 0, 255);
          jAlphaMap = map(currentPop, 0, 39557045, 255, 0);
          break;
      }

      //set the X position of each rectangle
      let jXposMap = map(j, 0, popSize, 0, width);

      fill(jColorMap, 100, 100, jAlphaMap);
      var r = rect(jXposMap, 0, width/popSize, popHeight)
    }
  }
}


function sortPopulationData(sort){
  //workaround for bad practice setting enum value to zero
  let sortNum = sort -1;

  for (let i=0; i<populationList.length; i++){
    let innerPopList = new Array(); //used to hold data for sorting later
    let popIndex = populationList[i] //which object list to filter thru
    let popSize = Object.keys(popIndex).length; //Can't length objects w/o keys

    for (let j=0; j<popSize; j++){

      switch(sortNum){
        case 2: 
          sortNum = 2;
          break;
        default: //can't sort by state name, so only population or state number.
          sortNum = 1;
          break;
      }

      // let javascript sort the values itself with array index
      let popArrayIndex = parseInt(popIndex[j][sortNum]); //sort by state #
      innerPopList[popArrayIndex] = popIndex[j];
    }

    //remove empty elements within arrays:
    //https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
    filteredPop[i] = innerPopList.filter(function(e){return e});
  }
}


