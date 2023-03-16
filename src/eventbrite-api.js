
export default class Eventbrite {  
  static async getEvents(eventInput) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.open('GET', `https://www.eventbriteapi.com/v3/events/${eventInput}/`);

      request.setRequestHeader('Authorization', 'Bearer ' + "W3BNEPRXAGYGSBQ32G62");

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
