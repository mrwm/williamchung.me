/*------------------------------------------------------------------------------
                                  API examples

https://www.strava.com/api/v3/athletes/11865000/stats?access_token=66096461ead04dbc949d54c063e602b65ab70607

http://www.strava.com/oauth/authorize?client_id=40946&response_code=type&redirect_uri=http://localhost:8000/exchange_token&approval_prompt=force&scope=activity:read_all

http://www.strava.com/oauth/authorize?client_id=40946&response_type=code&redirect_uri=http://localhost:8000/index.html&exchange_token&approval_prompt=force&scope=activity:read_all

------------------------------------------------------------------------------*/


//https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript/21210643#21210643
//save data into strava
let strava = {}
location.search.substr(1).split("&").forEach(function(item) {strava[item.split("=")[0]] = item.split("=")[1]})
/*
code: ??? <--That's what we want!!! (strava.code)
scope: read,activity:read_all
state: ""
*/

//Reference code for strava api example
//https://yizeng.me/2017/01/11/get-a-strava-api-access-token-with-write-permission/

//Reference code for using XMLHttpRequest()
//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

//Reference code to learn how to use XMLHttpRequest()
//https://stackoverflow.com/questions/49383982/how-to-convert-curl-to-javascript-post-request/49384293#49384293 

//Reference code to convert code from api docs (curl -> js)
//https://stackoverflow.com/questions/44097797/how-to-convert-this-curl-command-to-xmlhttprequest-in-javascript/44098794#44098794
var accessToken; //we don't have the access_token yet
var athleteID; //we don't have the ID either
let request = new XMLHttpRequest() //open an ajax request
let baseURL = 'https://www.strava.com/oauth/token'; //URL to grab access_token
let beforeDate = 1546300800; //search for activities before Jan 1, 2019 (epoch)
//let access_token = '8ac76d6a0cbf94d418f4e5b805373f7b403fa6ea';

let client_id = 40946; //taken from personal settings
//client_secret was supposed to be here, but removed in the git repo
let grant_type = 'grant_type=authorization_code';//has to be this no matter what

//create a form for grabbing the access key
let formData = new FormData();
//add all the data above into the form:
formData.append('client_id',client_id);
formData.append('client_secret',client_secret);
formData.append('code',strava.code);
formData.append('grant_type','authorization_code');

request.open('POST', baseURL , true);//open the link
request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
//    data.forEach(this => {
      //console.log("this");
      //console.log(this);
//    })
//  } else {
    //console.log(data.access_token)
    accessToken = data.access_token;
    athleteID = data.athlete.id;
    getData();
  }
}

request.send(formData);

