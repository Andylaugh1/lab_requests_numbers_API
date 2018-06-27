const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const Number = function () {
  this.text = null;
}

Number.prototype.receiveData = function () {
  PubSub.subscribe('NumberFormView:submit', (event) => {
    var enteredNumber = event.detail;
    console.log(enteredNumber);
  })
};

Number.prototype.getNumberData = function () {
  const request = new Request('http://numbersapi.com/1?json');

  request.get((numberData) => {
    this.text = numberData.text;
    PubSub.publish('Number:number-loaded', this.text)
    // console.log(this.text);
  })
}


// Joke.prototype.getData = function () {
//   const request = new Request('https://icanhazdadjoke.com');
//
//   request.get((jokeData) => {
//     this.text = jokeData.joke;
//     PubSub.publish('Joke:joke-loaded', this.text)
//
//   });
// };

module.exports = Number;
