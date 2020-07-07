const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  memoryGame.shuffleCards(cards);

  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // console.log(`html: ${html}`);

  // Add all the divs to the HTML
  
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
<<<<<<< HEAD
  let clic=0;
  document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
      showCard(card);
      memoryGame.pickedCards.push(card);
      clic++
      if(clic===2){
        
        const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');
        let isPair=memoryGame.checkIfPair(card1, card2);
        if(isPair){
          document.querySelector('#pairs-clicked').textContent= `${memoryGame.pairsClicked}`;
          document.querySelector('#pairs-guessed').textContent=`${memoryGame.pairsGuessed}`;
          memoryGame.pickedCards=[];
          clic=0;
          if(memoryGame.isFinished()){
          alert('You won!!!')
          }
        }else {
          document.querySelector('#pairs-clicked').textContent= `${memoryGame.pairsClicked}`;
          hideCard(card);
          
          memoryGame.pickedCards=[];
          clic=0
        }
      }
=======
	// let click=0;
	
  document.querySelectorAll('.card').forEach(card => {
		card.addEventListener('click', () => {
			// TODO: write some code here
			card.classList.toggle('turned');
			memoryGame.pickedCards.push(card);

			if (memoryGame.pickedCards.length === 2) {
				const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
				const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');
				console.log(card1, card2);

			const isMatch = memoryGame.checkIfPair(card1, card2);
			
				if (isMatch) {
					memoryGame.pickedCards = [];
				} else {
					memoryGame.pickedCards.forEach(card => card.classList.remove('turned'));
					memoryGame.pickedCards = [];
				}
			}
>>>>>>> 61dd90f92c73f36fdaaeed551bc8e45f4eae7ecf
    });
  })
});
function showCard(card) {
  // TODO: ajouter la classe "turned" à $card
  card.classList.toggle('turned');
  console.log(`Card clicked: ${card}`);
}
function hideCard(card) {
  // TODO: retirer la classe "turned" à $card
  memoryGame.pickedCards.forEach(card => card.classList.remove('turned'));
  
}