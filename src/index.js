import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Eventbrite from './eventbrite-api.js';

// Business Logic

async function getEvents(eventInput) {
  let promise = Eventbrite.getEvents(eventInput);
  promise.then(function(response) {
    printEvents(response);
  }, function(errorArray) {
    printError(errorArray);
  });
}

// UI Logic

const formSubmit = (event) => {
  event.preventDefault();
  let catSelect = document.getElementById("cat-select").value;
  const searchResultSocial = document.getElementById("search-result-social");
  searchResultSocial.removeAttribute("class", "hidden");
  //This method is Element.scrollIntoView()
  searchResultSocial.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  // Search result for twitter
  const resultsForTwitter = document.getElementById("search-result-twitter");
  const twitterHeading = document.createElement("h3");
  twitterHeading.innerText = null;
  resultsForTwitter.innerText = null;
  const twitterLogo = document.createElement("img");
  twitterLogo.setAttribute("src", "./assets/img/twitter.png");
  resultsForTwitter.append(twitterLogo);
  twitterHeading.append(`You are searching Twitter for ${catSelect}.`);
  resultsForTwitter.append(twitterHeading);

  // Search result for EventBrite
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

  // const resultsForEventBrite = document.getElementById("search-result-eventB");
  // const evntBriteHeading = document.createElement("h3");
  // resultsForEventBrite.innerText = null;
  // const eventBLogo = document.createElement("img");
  // eventBLogo.setAttribute("src", "./assets/img/eventbrite.png");
  // resultsForEventBrite.append(eventBLogo);
  // evntBriteHeading.append(`You are searching EventBrite for ${catSelect}.`);
  // resultsForEventBrite.append(evntBriteHeading);

  // Search result for Facebook
  const resultsForFacebook = document.getElementById("search-result-facebook");
  const facebookHeading = document.createElement("h3");
  resultsForFacebook.innerText = null;
  const facebookLogo = document.createElement("img");
  facebookLogo.setAttribute("src", "./assets/img/facebook.png");
  resultsForFacebook.append(facebookLogo);
  facebookHeading.append(`You are searching Facebook for ${catSelect}.`);
  resultsForFacebook.append(facebookHeading);

  /*window.scrollTo({
    top: 435,
    left: 0,
    behavior: "smooth"
  });
  */
  /*catSelect.style.fontStyle = "italic";*/
  document.getElementById("search-submit").reset();
};

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
};

function printError(response) {
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'displayresult');
  const error = response;
  div2.append(error);
};

window.addEventListener("load", function () {
  document.getElementById("search-submit").addEventListener("submit", formSubmit);
});