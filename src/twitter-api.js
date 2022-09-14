
// export default class Twitter {  
//   static async getTweets() {
//     return fetch(`https://api.twitter.com/2/tweets/search/recent?query=from%3Apdxevents&tweet.fields=geo,text&expansions=author_id`, {"method": "GET", 
//     "headers": {"Authorization":process.env.BEARER_TOKEN}}
//     )
//       .then(function(response) {
//         if (!response.ok) {
//           const errorMessage = `${response.status} ${response.statusText}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })      
//       .catch(function(error) {
//       return error;
//       });
//     }
// }

// export default class Twitter {  
//   static async getTweets() {
//   return new Promise(function(resolve, reject) {
//   var request = new XMLHttpRequest();

//   request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets/search/recent?query=from%3Apdxevents&tweet.fields=geo,text&expansions=author_id');

//   request.setRequestHeader('Authorization', 'Bearer ' + `${process.env.BEARER_TOKEN}`);

//   request.addEventListener("loadend", function(){
//     const response = JSON.parse(this.responseText);
//     if(this.status === 200) {
//       resolve([response]); 
//     } else {
//       reject([this, response]);
//     }
//     })
//     request.send(); 
//     });
// }
// }
