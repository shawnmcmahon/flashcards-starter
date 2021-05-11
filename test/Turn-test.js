const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('User\'s guess', card);
  });

  it('Should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('Should be an instance of the Round class', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('Should store a guess from a user as a property', () => {
    expect(turn.guess).to.equal('User\'s guess');
  })

  it('Should store a card object for the current card', () => {
    expect(turn.card).to.be.an.instanceof(Card);
  })

  it('Should contain a method that returns the guess', () => {
    expect(turn.returnGuess()).to.equal('User\'s guess')
  })

  it('Should contain a method that returns the current card', () => {
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  })

  it('Should contain a method evalutes the guess', () => {
    expect(turn.evaluateGuess()).to.equal(false);
    const turn2 = new Turn('sea otter', card)
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('Should contain a method that returns either ‘incorrect!’ or ‘correct!', function() {
    expect(turn.returnFeedback()).to.equal('incorrect!');

    const turn2 = new Turn('sea otter', card);
    expect(turn2.returnFeedback()).to.equal('correct!');
  });




});
