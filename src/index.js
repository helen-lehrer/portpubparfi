// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import Twitter from './twitter-api.js';

// Business Logic

async function getTweets() {
  const response = await Twitter.getTweets();
  if (response.main) {
    printTweets(response);
  } else {
    printError(response);
  }
}




// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  getTweets();
}

function printTweets(response) {
  for (let i = 0 ; i < response.data.length ; i++){
    const resDisp = document.getElementById("res-disp");
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'displayresult');
    const p = document.createElement("p");
    const tweet = response.data[i].text;
    resDisp.append(div1);
    div1.append(p);
    p.append(tweet);
  }
}

function printError(response) {
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'displayresult');
  const error = response[0].status;
  div2.append(error);
}



window.addEventListener("load", function(){
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});