//create a deck of  52 cards
//deal 26 cards to two players from the deck
//the player who played the higher card gets 1 point
//if player1 and player2 have a tie award 0 points
//when cards = 0 declare the winner

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }
}

let player1 = new Player("ONE");
console.log("Player 1 score is:", player1.score);
let player2 = new Player("TWO");
console.log(player1, player2);

let suits = ["H", "D", "S", "C"];
console.log("These are suits:", suits.length);
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log("These are the ranks:", ranks.length);

class Card {
  constructor(suit, rank, score) {
    this.score = score;
    this.suit = suit;
    this.rank = rank;
  }
}
class Deck {
  constructor(cards, number) {
    this.number = 52;
    this.cards = [];
  }
  createDeck() {
    let suits = ["H", "D", "S", "C"];
    let ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    let score = 0;
    for (let i = 0; i < ranks.length; i++) {
      // console.log("Printing ranks:", ranks[i]);
      for (let j = 0; j < suits.length; j++) {
        // console.log("Printing suits:", suits[j]);
        switch (ranks[i]) {
          case "J":
            score = 11;
            break;
          case "Q":
            score = 12;
            break;
          case "K":
            score = 13;
            break;
          case "A":
            score = 14;
            break;
          default:
            score = parseInt(ranks[i]); //to parse the string and convert it to a integer
        }
        this.cards.push(new Card(suits[j], ranks[i], score));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  //method to deal the cards
  //use for loop to iterate through cards.length -26 /to split in half

  dealCards() {
    for (let i = 0; i < this.cards.length - 26; i++) {
      player1.cards = this.cards.slice(0, 26);
      console.log("Player1 hand is: ", player1.hand);
      for (let j = 0; j < this.cards.length - 26; j++) {
        player2.cards = this.cards.slice(26, 52);
        console.log("Player2 hand is: ", player2.hand);
      }
    }
  }
  playGame() {
    if (player1.cards[0].score > player2.cards[0].score) {
      player1.cards.push(player2.cards[0]);
      player1.cards.push(player1.cards[0]);
      player1.cards.shift();
      player2.cards.shift();
      console.log("Player 1 WINS!");
    }
    if (player1.cards[0].score < player2.cards[0].score) {
      player2.cards.push(player1.cards[0]);
      player2.cards.push(player2.cards[0]);
      player1.cards.shift(); //remove the first elem
      player2.cards.shift();
      console.log("Player 2 WINS!");
    } else {
      console.log("It's a tie!");
    }
  }
}
let deck = new Deck();
deck.createDeck();
console.log(deck);

deck.shuffle();
deck.dealCards();

console.log(player1);
console.log(player2);
