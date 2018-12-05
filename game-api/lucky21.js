module.exports = (deck, dealer) => {
    dealer.shuffle(deck);
    let card0 = dealer.draw(deck);
    let card1 = dealer.draw(deck);
    let state = {
        deck: deck,
        dealer: dealer,
        cards: [
            card0,
            card1,
        ],
        // The card that the player thinks will exceed 21.
        card: undefined,
    };
    return {
        state: state,
        // Is the game over (true or false).
        isGameOver: (game) => {

            //If player wins
            if (game.playerWon(game) === true) {
                return true;
            }

            //If player guesses 21OrUnder but goes over 21
            else if (game.getCardValue(game) === undefined && game.getTotal(game) > 21) {
                return true;
            }
            //If player guesses Over21 but goes under 21
            else if (game.getCardValue(game) !== undefined && game.getTotal(game) < 21) {
                return true;
            }
            //If player guesses Over21 and gets 21
            else if (game.getCardValue(game) !== undefined && game.getCardsValue(game) === 21) {
                return true;
            }
            // If the player has finished all the cards in the deck
            else if (state.deck.length === 0) {
                return true;
            }
            //Else the game is not finished
            else {
                return false;
            }
        },
        // Has the player won (true or false).
        playerWon: (game) => {

            //If player guesses Over21 and goes over 21

            if (game.getCardValue(game) !== undefined && game.getTotal(game) > 21) {
                return true;
            }
            //If player guesses 21OrUnder and gets 21
            else if (game.getCardValue(game) === undefined && game.getTotal(game) === 21) {
                return true;
            }
            //Else he has not won
            else {
                return false;
            }
        },
        // The highest score the cards can yield without going over 21 (integer).
        // síðasta value áður en það sprakk
        getCardsValue: (game) => {
            let cards = state.cards;
            let value = 0;

            // Going through our array of cards
            cards.forEach(card => {
                //Fetching the first two characters of the string, which represent the value of cards
                let numberString = card.slice(0, 2);
                //Parsing string to int
                let number = parseInt(numberString);

                //If the card is Jack, Queen and King we change their value to 10
                if (number > 10) {
                    number = 10;
                }
                //If the card is an ace we make it worth 11 points unless that would yield a total higher than 21 then it's value is 1
                if (number == 1) {
                    number = 11;
                    if (value + number > 21) {
                        number = 1;
                    }
                }

                if ((number + value) <= 21) {
                    value += number;
                }
            });

            return value;
        },
        // The value of the card that should exceed 21 if it exists (integer or undefined).
        // Spilið sem hann heldur að sprengji 
        getCardValue: (game) => {


            let card = state.card;
            if (card === undefined) {
                return undefined;
            }
            else {
                //Fetching the first two characters of the string, which represent the value of cards
                let numberString = card.slice(0, 2);
                //Parsing string to int
                let number = parseInt(numberString);
                return number;
            }

        },
        getTotal: (game) => {
            let cards = state.cards;
            let value = 0;

            // Going through our array of cards
            cards.forEach(card => {
                //Fetching the first two characters of the string, which represent the value of cards
                let numberString = card.slice(0, 2);
                //Parsing string to int
                let number = parseInt(numberString);

                //If the card is Jack, Queen and King we change their value to 10
                if (number > 10) {
                    number = 10;
                }
                //If the card is an ace we make it worth 11 points unless that would yield a total higher than 21 then it's value is 1
                if (number == 1) {
                    number = 11;
                    if (value + number > 21) {
                        number = 1;
                    }
                }

                //Adding value of cards together
                value += number;
            });

            return value;
        },
        // The player's cards (array of strings).
        getCards: (game) => {
            return state.cards;
        },
        // The player's card (string or undefined).
        getCard: (game) => {
            return state.card;
        },
        // Player action (void).
        guess21OrUnder: (game) => {
            // Draga
            // Pusha í cards
            // Tékka á winner og gameover
            let card = state.dealer.draw(state.deck);
            state.cards.push(card);

            let gameover = game.isGameOver(game);

            let playerWon = game.playerWon(game);



        },
        // Player action (void).
        guessOver21: (game) => {

            // Draga
            // Pusha í cards
            // Tékka á winner og gameover
            // Bæta við í card

            let card = state.dealer.draw(state.deck);
            state.cards.push(card);

            state.card = card;

            let gameover = game.isGameOver(game);

            let playerWon = game.playerWon(game);

        },
    };
};