const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.guess = null;
  }


}


module.exports = Round;
