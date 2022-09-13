import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const formSubmit = (event) => {
  event.preventDefault();
  const searchKeyword = document.getElementById("tweet-search").value;
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
  twitterHeading.append(`You are searching Twitter for ${searchKeyword}.`);
  resultsForTwitter.append(twitterHeading);

  // Search result for EventBrite
  const resultsForEventBrite = document.getElementById("search-result-eventB");
  const evntBriteHeading = document.createElement("h3");
  resultsForEventBrite.innerText = null;
  const eventBLogo = document.createElement("img");
  eventBLogo.setAttribute("src", "./assets/img/eventbrite.png");
  resultsForEventBrite.append(eventBLogo);
  evntBriteHeading.append(`You are searching EventBrite for ${searchKeyword}.`);
  resultsForEventBrite.append(evntBriteHeading);

  // Search result for Facebook
  const resultsForFacebook = document.getElementById("search-result-facebook");
  const facebookHeading = document.createElement("h3");
  resultsForFacebook.innerText = null;
  const facebookLogo = document.createElement("img");
  facebookLogo.setAttribute("src", "./assets/img/facebook.png");
  resultsForFacebook.append(facebookLogo);
  facebookHeading.append(`You are searching Facebook for ${searchKeyword}.`);
  resultsForFacebook.append(facebookHeading);

  /*window.scrollTo({
    top: 435,
    left: 0,
    behavior: "smooth"
  });
  */
  document.getElementById("search-submit").reset();
};

window.addEventListener("load", function () {
  document.getElementById("search-submit").addEventListener("submit", formSubmit);
});