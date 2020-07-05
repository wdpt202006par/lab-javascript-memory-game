class MemoryGame {
  constructor(cards){
    this.cards = cards;
		// add the rest of the class properties here
		this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
		// let i = this.cards.length;
		// let randomCard;
		// let shuffleCards;

		// while (--i > 0) {
		// 	randomCard = Math.floor(Math.random() * (i));
		// 	shuffleCards = this.cards[randomCard];
		// 	this.cards[randomCard] = this.cards[i];
		// 	shuffleCards = this.cards[i];
		// }

    //

    this.cards.sort(function (a, b) {
      return Math.random() - 0.5; // [-.5--0---.5]
    })
	}
  checkIfPair(card1, card2) {
		this.pairsClicked ++;
    if(card1 === card2){
      this.pairsGuessed ++;
      return true
    }else {
      return false
    }
	}
  isFinished() {
    // if (this.pairsGuessed=== (this.cards.length)/2){
    // return true
    // } else {
    //    return false
		// }
		return (this.pairsGuessed=== (this.cards.length)/2);
  }
}