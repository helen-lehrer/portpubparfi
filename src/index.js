import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const formSubmit = (event) => {
  event.preventDefault();
  const tweetSearch = document.getElementById("tweet-search").value;
  const searchResultTwt = document.getElementById("search-result-twt");
	document.getElementById("search-result-twt").innerHTML = null;
  const resultDisplay = document.createElement("h3");
  searchResultTwt.append(resultDisplay);
  resultDisplay.append(`You are searching twitter for ${tweetSearch}.`);
  window.scrollTo({
    top: 850,
    left: 0,
    behavior: "smooth"
  });
  document.getElementById("search-submit").reset();
};

window.addEventListener("load", function () {
  document.getElementById("search-submit").addEventListener("submit", formSubmit);
});