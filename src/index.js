// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
//import Twitter from './twitter-api.js';
import Eventbrite from './eventbrite-api.js';

// Business Logic

// async function getTweets() {
//   let promise = Twitter.getTweets();
//   promise.then(function(response) {
//     printTweets(response);
//     console.log(response);
//   }, function(errorArray) {
//     printError(errorArray);
//   });
// }

async function getEvents() {
  let promise = Eventbrite.getEvents();
  promise.then(function(response) {
    printEvents(response);
    console.log(response);
  }, function(errorArray) {
    printError(errorArray);
  });
}


// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  // getTweets();
  getEvents();
}

function printEvents(response) {
  const resp = response[0].description.text;
  console.log(resp);
  document.getElementById("result").innerText = resp
}


function printError(response) {
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'displayresult');
  const error = response;
  div2.append(error);
}

// function printTweets(response) {
//   for (let i = 0 ; i < response.data.length ; i++){
//     const resDisp = document.getElementById("res-disp");
//     const div1 = document.createElement('div');
//     div1.setAttribute('class', 'displayresult');
//     const p = document.createElement("p");
//     const tweet = response.data[i].text;
//     resDisp.append(div1);
//     div1.append(p);
//     p.append(tweet);
//   }
// }


window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});