const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Round', () => {
  let game, round, turn, deck, card1, card2, card3;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  })

  it('Should contain a method that returns the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('Should assign a guess property that is an instance of Turn', function() {
    round.takeTurn('sea otter');
    expect(round.guess).to.be.an.instanceof(Turn);

  });

  it('Should contain a takeTurn method with a default value of 0', function() {
    expect(round.turns).to.equal(0)
  });

  it('Should contain a takeTurn method that updates the turn count', function() {
    expect(round.turns).to.equal(0)
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('Should have next card become current card after takeTurn', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.equal(card2);
  });


  it('Should evaluate the guess and not store a correct guess into the incorrectGuess array', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.incorrectGuesses.length).to.eql(0);
  });

  it('Should evaluate the guess and a store incorrect guess into the incorrectGuess array', function() {
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
    expect(round.incorrectGuesses.length).to.eql(1);
  });

  it('Should contain a method that calculates the percent correct', function() {
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.equal(50);

  });

  it('Should contain a method that notifies the user the round is over', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    //expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
  });



})
