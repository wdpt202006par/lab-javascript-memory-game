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
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  function showCard($card) {
    $card.classList.add('turned')
  }
  function hideCard($card) {
    $card.classList.remove('turned')
  }
  function cardName($card) { // prend un element html en paramètre
    return $card.dataset.cardName;
  }

  // Bind the click event of each element to a function
  let playingCard;
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      showCard(card);
      if (playingCard) {
        if (memoryGame.checkIfPair(cardName(card), cardName(playingCard))) {
          playingCard = undefined;// OK et nouveau tour de jeu
        } else {
          setTimeout(function(){
            hideCard(playingCard);
            hideCard(card);
            playingCard = undefined; // NO et nouveau tour de jeu
          }, 500);
        }
      } else {
        // let's define our new `playingCard` (the one we will try to find the next click)
        playingCard = card;
      }
      // re-render score
        let click = document.getElementById('pairs-clicked');
        click.innerHTML = memoryGame.pairsClicked;

        let pairs = document.getElementById('pairs-guessed');
        pairs.innerHTML = memoryGame.pairsGuessed;
      
      // Quand le jeu est terminé
      if (memoryGame.isFinished()) {
        alert('You win!');
      }
    });
  });
});
