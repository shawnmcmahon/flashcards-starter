const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.guess = null;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const card = this.currentCard;
    const turn = new Turn(guess, card);
    this.guess = turn;
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }

    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const score = (this.turns - this.incorrectGuesses.length) / this.turns * 100;
    return score;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    //return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

}

module.exports = Round;
