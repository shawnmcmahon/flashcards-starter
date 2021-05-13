const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Card', function() {

  it('Should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('Should be an instance of a Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('Should contain a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('Should contain an array of answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should contain the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
});
