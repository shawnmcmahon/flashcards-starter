const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;

  }

  start() {
    const createCards = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));
    const createDeck = new Deck(createCards);
    const createRound = new Round(createDeck);
    this.currentRound = createRound;

    this.printMessage(createDeck, createRound);
    this.printQuestion(createRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
