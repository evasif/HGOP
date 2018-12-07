function newRandom(randomReturnValues) {
  let i = 0;
  return {
    randomInt: (min, max) => {
      return randomReturnValues[i++];
    },
  };
}

test('dealer should should shuffle cards', () => {
  // Arrange
  const dependencies = {
    random: newRandom([2, 1]),
  };
  const newDealer = require('./dealer.js');
  const dealer = newDealer((name) => {
    return dependencies[name];
  });
  const deck = ['a', 'b', 'c'];

  // Act
  dealer.shuffle(deck);

  // Assert
  expect(deck).toEqual(['c', 'b', 'a']);
});

test('if the deck the is empty shuffle should return an empty deck', () => {
  const dependencies = {
    random: newRandom([2, 1]),
  };
  const newDealer = require('./dealer.js');
  const dealer = newDealer((name) => {
    return dependencies[name];
  });
  const deck = [];
  dealer.shuffle(deck);
  expect(deck).toEqual([]);
});

test('dealer draw should return next card in array', () => {
  const deck = ['01H', '10C', '09D'];
  const newDealer = require('./dealer.js');
  const dealer = newDealer();
  expect(dealer.draw(deck)).toEqual('09D');
});

test('dealer draw should return undefined if the deck is empty', () => {
  const deck = [];
  const newDealer = require('./dealer.js');
  const dealer = newDealer();
  expect(dealer.draw(deck)).toEqual(undefined);
});
