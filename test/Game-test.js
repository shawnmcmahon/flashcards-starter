const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game, round, deck, card1, card2, card3;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);

  })

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('Should be an instance of a Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('Should have a default current round of undefined', () => {
    expect(game.currentRound).to.equal(undefined);
  });

  it('Should have currentRound become an instance of Round when game begins', () => {
    //game.start();
    //expect(game.currentRound).to.be.an.instanceOf(Round);
  });


});
