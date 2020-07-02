class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    // melanger : trier aleatoiremetn

    this.cards.sort(function (a, b) {
      return Math.random() - 0.5; // [0-----1] -> [-.5-----.5]
    })
  }



  checkIfPair(card1, card2) {
    this.pairsClicked++; //quand on va cliquer, ça va rajouter +1
    if (card1 === card2) {
      this.pairsGuessed += 1; // On a trouvé une paire
    }
    return card1 === card2; // Va retourner vrai si c'est les mêmes
  }


  isFinished() {
    let begin = false;
    if (this.pairsGuessed === this.cards.length / 2) {
      begin = true;
    } else {
      begin = false;
    }
    return begin;
  }

}