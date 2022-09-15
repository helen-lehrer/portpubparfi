// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
//import Twitter from './twitter-api.js';
import Eventbrite from './eventbrite-api.js';
import Localevents from './localevents-api.js';

// Business Logic

async function getEvents(eventInput) {
  let promise = Eventbrite.getEvents(eventInput);
  promise.then(function(response) {
    printEvents(response);
  }, function(errorArray) {
    printError(errorArray);
  });
}

async function getLocalEvents() {
  let promise = Localevents.getLocalEvents();
  promise.then(function(response) {
    console.log(response);
    printLocal(response);
  }, function(error) {
    printError(error)
  })
}



// UI Logic

function handleLocalEvents(event) {
  event.preventDefault();
  getLocalEvents();
}

function handleFormSubmission(event) {
  event.preventDefault();
  const resDisp = document.getElementById("search-result-eventB");
  resDisp.innerHTML = null
  const userSearch = document.getElementById('cat-select').value;
  if(userSearch.includes('travel')) {
    getEvents(399000068947);
  } else if (userSearch.includes('business')){
    getEvents(417060217337);
  }  else if (userSearch.includes('health')){
    getEvents(381936210487);
  }  else if (userSearch.includes('bar-crawl')){
    getEvents(366457352807);
  }  else if (userSearch.includes('house-party')){
    getEvents(415156011807);
  }  else if (userSearch.includes('performance')){
    getEvents(336054075787);
  }  else if (userSearch.includes('outdoor')){
    getEvents(416986607167);
  } else {
    const errorMessage = `No events matching search term ${userSearch}`;
    return errorMessage;
  }
}

function printLocal(response) {
  const divResult = document.getElementById('result1');
  let i = 0;
  let date = new Date();
  for (i = 0; i<response[0].results.length; i++) {
  divResult.append('Event Name: ' + response[0].results[i].title + '\n');

  if (!response[0].results[i].entities[0]) {
    divResult.append('The address is not listed.' + '\n'); 
  } else {
    divResult.append('Location: ' + response[0].results[i].entities[0].name + '\n');
  }

  if (!response[0].results[i].start) {
    divResult.append('The event time is not listed' + '\n\n'); 
  } else {
    divResult.append( 'Start Time: ' + (response[0].results[i].start) + '\n\n');
  }

  }
}


function printEvents(response) {
  const resDisp = document.getElementById("search-result-eventB");
  const div1 = document.createElement('div');
  const h2 = document.createElement("h2");
  const p1 = document.createElement("p");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const image = response[0].logo.original.url;
  const eventName = response[0].name.text;
  const eventText = response[0].description.text;
  const eventUrl = response[0].url;

  img.setAttribute("src", image);
  img.setAttribute("width", "600px")
  img.setAttribute("height", "300px")
  resDisp.append(div1);
  div1.append(h2);
  h2.append(eventName);
  h2.after(img);
  img.after(p1);
  p1.append(eventText);
  p1.after(a);
  a.setAttribute("href", eventUrl);
  a.append(`Find on Eventbrite`);
}

function printError(response) {
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'displayresult');
  const error = response;
  div2.append(error);
}

window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
  document.getElementById('form2').addEventListener('submit', handleLocalEvents);
});
