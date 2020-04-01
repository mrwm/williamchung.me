/*------------------------------------------------------------------------------
                                  API examples

https://www.strava.com/api/v3/athletes/11865000/stats?access_token=66096461ead04dbc949d54c063e602b65ab70607

http://www.strava.com/oauth/authorize?client_id=40946&response_code=type&redirect_uri=http://localhost:8000/exchange_token&approval_prompt=force&scope=activity:read_all

http://www.strava.com/oauth/authorize?client_id=40946&response_type=code&redirect_uri=http://localhost:8000/index.html&exchange_token&approval_prompt=force&scope=activity:read_all

------------------------------------------------------------------------------*/
var data;

function getData(){
//https://www.strava.com/api/v3/athletes/11865000/activities?before=1546300800&after=1514764800&per_page=100&access_token=b279d02109103cd33feb8e4976c8a399ae544477
  let dataRequest = new XMLHttpRequest() //open an ajax request

  let baseURL = "https://www.strava.com/api/v3/athletes/";

  let beforeDate = 1546300800;//Jan1 2019
  let afterDate = 1514764800;//Jan1 2018
  let page = 1; //# of pages
  let perPage = 100;//activities per page

  let compiledURL = baseURL + athleteID + "/activities?before=" + beforeDate
                    + "&after=" + afterDate + "&page=" + page + "&per_page=" + perPage
                    + "&access_token=" + accessToken;

  dataRequest.open('GET', compiledURL , true);
  dataRequest.onload = function() {
    //console.log(this);
    //console.log(this.response);
    // Begin accessing JSON data here
    data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
//      data.forEach(movie => {
//        console.log(movie.title)
//      })
//    } else {
//      console.log(data);
      compileData();
    }
  }
  dataRequest.send();
}

var maxDistArr = new Array();
var maxElevArr = new Array();
function compileData(){
  let innerDistList = new Array();
  let innerElevList = new Array();

  let distance = 0;
  let elevation = 0;
  for(let i=0; i<data.length; i++){
    distance += data[i].distance;//total distance
    elevation += (data[i].elev_high - data[i].elev_low);//total elevation

    let distIndex = parseInt(data[i].distance);
    innerDistList[distIndex] = data[i].distance;//sort distance

    let elevIndex = parseInt((data[i].elev_high - data[i].elev_low));
    innerElevList[elevIndex] = (data[i].elev_high - data[i].elev_low);//sort elevation
  }
  maxDistArr = innerDistList.filter(function(e){return e});
  maxElevArr = innerElevList.filter(function(e){return e});
//  console.log(distance +":"+ elevation);
}















