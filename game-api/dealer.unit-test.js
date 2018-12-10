const dealerConstructor = require('./dealer.js');
const deckConstructor = require('./deck.js');
const randomConstructor = require('./random.js');

const newRandom = (randomReturnValues) => {
  let i = 0;
  return {
    randomInt: (min, max) => {
      return randomReturnValues[i++];
    },
  };
};

const newDealer = (randomReturnValues) => {
  let random = undefined;
  if (randomReturnValues == undefined) {
    random = randomConstructor();
  }
  else {
    random = newRandom(randomReturnValues);
  }
  const dependencies = {
    random: (context) => random,
  };
  return dealerConstructor((name) => dependencies[name]);
};

describe('dealer - shuffle', () => {
  test('should shuffle cards', () => {
    const dealer = newDealer([2, 1]);
    const deck = ['a', 'b', 'c'];
    dealer.shuffle(deck);
    expect(deck).toEqual(['c', 'b', 'a']);
  });

  test('should contain all and only the original cards', () => {
    const dealer = newDealer(undefined);
    const deck = deckConstructor();
    dealer.shuffle(deck);
    expect(deck.length).toEqual(52);
    expect(deck.sort()).toEqual(deckConstructor().sort());
  });

  test('empty deck should yield an empty deck', () => {
    const dealer = newDealer([]);
    const deck = [];
    dealer.shuffle(deck);
    expect(deck).toEqual([]);
  });
});

describe('dealer - draw', () => {
  test('should return the last element from the deck', () => {
    expect(newDealer([]).draw(['a', 'b', 'c'])).toEqual('c');
  });

  test('should remove the last element from the deck', () => {
    const dealer = newDealer([]);
    const deck = ['a', 'b', 'c'];
    dealer.draw(deck);
    expect(deck).toEqual(['a', 'b']);
  });
});
