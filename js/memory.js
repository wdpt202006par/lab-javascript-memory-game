class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0 ;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (typeof this.cards === undefined) {
      return undefined;
    }
    var copy = [], n = this.cards.length, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(this.cards.splice(i, 1)[0]);
  }

  return copy;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
}}