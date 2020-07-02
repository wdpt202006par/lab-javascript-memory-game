class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }
  shuffleCards() {

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    } 
    shuffle(this.cards);
    console.log(this.cards);
  }


  checkIfPair(card1, card2) {
    // Verifier si card1 === card2
    if(card1===card2){
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }
  
  isFinished() {
    //verifier que le nombre de pair est egale au nombre cartes divisé par 2
    var pair = this.cards.length/2;
   return this.pairsGuessed >= pair
    
  }
};

