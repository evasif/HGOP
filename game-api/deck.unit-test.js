const deckConstructor = require('./deck.js');

// Still trying
test('the deck should contain 52 cards', () => {
  // Arrange
  const deck = deckConstructor();

  // Assert
  expect(deck.length).toEqual(52);
});
