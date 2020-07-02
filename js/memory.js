class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      this.cards[i] = this.cards[j];
    }
  }
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  isFinished() {
    return this.pairsGuessed >= (this.cards.length / 2);
    // if (this.pairsGuessed === 0) {
    //   return false;
    // } else if (this.pairsGuessed < 8) {
    //   return false;
    // } else {
    //   return true;
    // }
  }
}