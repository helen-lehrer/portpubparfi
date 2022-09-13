
export default class Eventbrite {  
  static async getEvents() {
  return new Promise(function(resolve, reject) {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://www.eventbriteapi.com/v3/events/414488485217/');

  request.setRequestHeader('Authorization', 'Bearer ' + `${process.env.BEARER_TOKEN_EB}`);

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




// console.log('Status:', this.status);
// console.log('Headers:', this.getAllResponseHeaders());
// console.log('Body:', this.responseText);