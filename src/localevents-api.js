
export default class Localevents {  
  static async getLocalEvents(category) {
  return new Promise(function(resolve, reject) {
  var request = new XMLHttpRequest();

  request.open('GET', `https://api.predicthq.com/v1/events/?place.scope=PDX&active.gte=2022-09-14&active.lte=2022-10-31&sort=rank&category=${category}`);

  request.setRequestHeader('Authorization', 'Bearer ' + `${process.env.BEARER_TOKEN_LE}`);

  request.addEventListener("loadend", function(){
    const response = JSON.parse(this.responseText);
    if(this.status === 200) {
      resolve([response]); 
    } else {
      reject([this, response]);
    }
    })
    request.send(); 
    });
}
}
