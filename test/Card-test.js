const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Card', function() {
  let card;
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  })

  it('Should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('Should be an instance of a Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('Should contain a question', () =>  {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('Should contain an array of answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('Should contain the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });
});
