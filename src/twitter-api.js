
export default class Twitter {
  static getTweets() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url =`https://api.twitter.com/2/Oauth/${process.env.ACCESS_TOKEN}/tweets/search/recent?query=from%3Apdxevents&start_time=2022-09-07T00:00:00.000Z&end_time=2022-09-12T00:00:00.000Z&tweet.fields=author_id,geo,text`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
        resolve([response]);
      } else {
        reject([this, response]);
      }
    });
    request.open("GET", url, true);
    request.send();
  });
}
}

//export default class Twitter {  
  //static getTweets() {
    //return fetch(`https://api.twitter.com/2/tweets/search/recent?query=from%3Apdxevents&start_time=2022-09-07T00:00:00.000Z&end_time=2022-09-12T00:00:00.000Z&tweet.fields=author_id,geo,text`, {
      //headers: {'Authorization': 'Bearer ' + ACCESS_TOKEN}
    //}
      //.then(function(response) {
       // if (!response.ok) {
         // const errorMessage = `${response.status} ${response.statusText}`;
         // throw new Error(errorMessage);
       // } else {
       //   return response.json();
       // }
     // })      
     // .catch(function(error) {
      //  return error;
    //  });
 // }
//}

