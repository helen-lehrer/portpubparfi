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
  const twitterLogo = document.createElement("img");
  twitterLogo.setAttribute("src", "./assets/images/twitter.png");
  resultsForTwitter.append(twitterLogo);
  twitterHeading.append(`You are searching Twitter for ${searchKeyword}.`);
  resultsForTwitter.append(twitterHeading);

  // Search result for EventBrite
  const resultsForEventBrite = document.getElementById("search-result-eventB");
  resultsForEventBrite.innerText = null;
  const evntBriteHeading = document.createElement("h3");
  resultsForEventBrite.append(evntBriteHeading);
  evntBriteHeading.append(`You are searching EventBrite for ${searchKeyword}.`);

  // Search result for Facebook
  const resultsForFacebook = document.getElementById("search-result-facebook");
  resultsForFacebook.innerText = null;
  const facebookHeading = document.createElement("h3");
  resultsForFacebook.append(facebookHeading);
  facebookHeading.append(`You are searching Facebook for ${searchKeyword}.`);

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