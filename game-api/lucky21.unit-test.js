const deckConstructor = require('./deck.js');
const dealerConstructor = require('./dealer.js');
const lucky21Constructor = require('./lucky21.js');

test('a new game should have 50 cards left in the deck', () => {
  let deck = deckConstructor();

  let dealer = dealerConstructor();

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  expect(game.state.deck.length).toEqual(50);
});

test('a new game should have 2 drawn cards', () => {
  let deck = deckConstructor();

  let dealer = dealerConstructor();

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  expect(game.state.cards.length).toEqual(2);
});

//isGameOver
test('isGameOver should be true because player guesses under 21 and gets over 21', () => {

  // Arrange
  let deck = deckConstructor();
  deck = [
    '05D', '09S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.isGameOver(game)).toEqual(true);

})

//isGameOver
test('isGameOver should be false because player guesses under 21 and has under 21 ', () => {

  // Arrange
  let deck = deckConstructor();
  deck = [
    '04D', '05S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.isGameOver(game)).toEqual(false);

})

//playerWon
test('playerWon should be true because player guesses over 21 and gets over 21', () => {
  let deck = deckConstructor();
  deck = [
    '05D', '09S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.playerWon(game)).toEqual(true);

})

//playerWon
test('playerWon should be false because player guesses under 21 and gets under 21 ', () => {
  let deck = deckConstructor();
  deck = [
    '01D', '04S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.playerWon(game)).toEqual(false);

})

//playerWon
test('playerWon should be true because player guesses 21 and gets 21 ', () => {
  let deck = deckConstructor();
  deck = [
    '01D', '10S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.playerWon(game)).toEqual(true);

})

//getCardsValue
test('getCardsValue should be equal to 21', () => {
  let deck = deckConstructor();
  deck = [
    '01D', '10S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(21);

})


//getCardsValue
test('getCardsValue should be equal to 18', () => {
  let deck = deckConstructor();
  deck = [
    '02D', '05S', '01H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(18);

})

//getCardsValue
test('getCardsValue should be equal to 21', () => {
  let deck = deckConstructor();
  deck = [
    '01D', '13S', '13H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardsValue(game)).toEqual(21);

})

//getCardValue
test('getCardValue that exceeds 21 should be 8  ', () => {
  let deck = deckConstructor();
  deck = [
    '08D', '09S', '05H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(8);

})

//getCardValue
test('getCardValue that exceeds 21 should be undefined because it is less then 21  ', () => {
  let deck = deckConstructor();
  deck = [
    '02D', '09S', '05H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(undefined);

})

//getTotalValue
test('getTotalValue should equal 25', () => {
  let deck = deckConstructor();
  deck = [
    '05D', '10S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getTotalValue(game)).toEqual(25);

})

//getTotalValue
test('getTotalValues should equal 18', () => {
  let deck = deckConstructor();
  deck = [
    '02D', '06S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getTotalValue(game)).toEqual(18);

})

//getCards
test('getCards should equal [02D, 06S, 10H]', () => {
  let deck = deckConstructor();
  deck = [
    '02D', '06S', '10H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCards(game)).toEqual(['02D', '06S', '10H']);

})

//getCard
test('getCard should exceed 21 is 08D', () => {
  let deck = deckConstructor();
  deck = [
    '08D', '09S', '05H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guessOver21(game);

  // Assert
  expect(game.getCardValue(game)).toEqual('08D');

})

//getCard
test('getCard should exceed 21 is undefined because it is less then 21  ', () => {
  let deck = deckConstructor();
  deck = [
    '02D', '09S', '05H',
  ];

  let dealer = dealerConstructor();

  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(undefined);

})

//guess21OrUnder
test('guess21OrUnder should draw the next card', () => {
  // Arrange
  let deck = deckConstructor();
  deck = [
    '05C', '01D', '09S', '10H',
  ];
  let dealer = dealerConstructor();
  // Override the shuffle to do nothing.
  dealer.shuffle = (deck) => { };

  // Inject our dependencies
  let game = lucky21Constructor(deck, dealer);

  // Act
  game.guess21OrUnder(game);

  // Assert
  expect(game.state.cards.length).toEqual(3);
  expect(game.state.cards[2]).toEqual('01D');
});


