class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    //console.log(getRandomInt(100));
    let i = this.cards.length
    while (i > 0){
      i--;
      let j = getRandomInt(i)
      this.cards[i] = this.cards[j]
      this.cards[j] = this.cards[i] 
    }

  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if(card1 === card2){
      this.pairsGuessed++;
      return true
    }
    return false

  }
  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)){
      return true
    }
    return false
  }
}