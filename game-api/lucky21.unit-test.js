const deckConstructor = require('./deck.js');
const dealerConstructor = require('./dealer.js');
const lucky21Constructor = require('./lucky21.js');

// 1
test('a new game should have 50 cards left in the deck', () => {
  // Arrange
  const deck = deckConstructor();
  const dealer = dealerConstructor();

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Assert
  expect(game.state.deck.length).toEqual(50);
});

// 2
test('a new game should have 2 drawn cards', () => {
  // Arrange
  const deck = deckConstructor();
  const dealer = dealerConstructor();

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Assert
  expect(game.state.cards.length).toEqual(2);
});

// 3
// isGameOver
test('isGameOver should be true because player guesses under 21 and gets over 21', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['05D', '09S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.isGameOver(game)).toEqual(true);
});

// 4
// isGameOver
test('isGameOver should be false because player guesses under 21 and has under 21 ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['10S', '04D', '05S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.isGameOver(game)).toEqual(false);
});

// 5
// Testing empty deck
test('isGameOver should be true because all the cards in the deck are finished ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['01D', '09S', '05H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.isGameOver(game)).toEqual(true);
});

// 6
// playerWon
test('playerWon should be true because player guesses over 21 and gets over 21', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['05D', '09S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.playerWon(game)).toEqual(true);
});

// 7
// playerWon
test('playerWon should be false because player guesses under 21 and gets under 21 ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['01D', '04S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.playerWon(game)).toEqual(false);
});

// 8
// playerWon
test('playerWon should be true because player guesses 21 and gets 21 ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['01D', '10S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.playerWon(game)).toEqual(true);
});

// 9
// getCardsValue
test('getCardsValue should be equal to 21', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['01D', '10S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(21);
});

// 10
// getCardsValue
test('getCardsValue should be equal to 14', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['05D', '01S', '08H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(14);
});

// 11
// getCardsValue
test('getCardsValue should be equal to 18', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['02D', '05S', '01H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(18);
});

// 12
// getCardsValue
test('getCardsValue should be equal to 21', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['01D', '13S', '13H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(21);
});

// 13
// getCardValue
test('getCardValue that exceeds 21 should be 8  ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['08D', '09S', '05H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(8);
});

// 14
// getCardValue
test('getCardValue that exceeds 21 should be undefined because it is less then 21  ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['02D', '09S', '05H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(undefined);
});

// 15
// getTotalValue
test('getTotalValue should equal 25', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['05D', '10S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.getTotal(game)).toEqual(25);
});

// 16
// getTotalValue
test('getTotalValues should equal 18', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['02D', '06S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getTotal(game)).toEqual(18);
});

// 17
// getCards
test('getCards should equal [10H, 06S, 02D]', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['02D', '06S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCards(game)).toEqual(['10H', '06S', '02D']);
});

// 18
// getCard
test('getCard should exceed 21 is 08D', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['08D', '09S', '05H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.getCard(game)).toEqual('08D');
});

// 19
// getCard
test('getCard should exceed 21 is undefined because it is less then 21  ', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['02D', '09S', '05H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(undefined);
});

// 20
// guess21OrUnder
test('guess21OrUnder should draw the next card', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['05C', '01D', '09S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.state.cards.length).toEqual(3);
  expect(game.state.cards[2]).toEqual('01D');
});

// 21
// guess21OrUnder
test('guess21OrUnder should draw the next card', () => {
  // Arrange
  let deck = deckConstructor();
  deck = ['05C', '02D', '09S', '10H'];
  const dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => {};

  // Inject our dependencies
  const game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.state.cards.length).toEqual(3);
  expect(game.state.cards[2]).toEqual('02D');
});
