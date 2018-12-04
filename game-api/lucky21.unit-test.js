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

//isGameOver
test('if player guesses he has under 21 but gets over 21 then isGameOver should be true', () => {

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
test('if player guesses he has under 21 and has under 21 isGameOver should be false', () => {

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
test('if player guesses he has over 21 and gets over 21 then playerWon should be true', () => {
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
test('if player guesses under 21 and gets under 21 then playerWon should be false', () => {
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
test('if player guesses under 21 and gets 21 then playerWon should be true', () => {
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


//playerWon
test('if player guesses under 21 and gets 21 then playerWon should be true', () => {
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
test('if player draws the cards in this deck it should equal 21', () => {
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
test('sum of drawn cards should equal 18 ', () => {
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
test('sum of drawn cards should equal 21 ', () => {
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
test('the value of the card that should exceed 21 is 8  ', () => {
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
  game.guess21OrUnder(game);

  // Assert
  expect(game.getCardValue(game)).toEqual(8);

})


//getCardValue
test('the value of the card that should exceed 21 is undefined because it is less then 21  ', () => {
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





