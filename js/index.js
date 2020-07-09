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

  function cardName($card) {
    return $card.dataset.cardName;
  }

  let $playingCard; // `$playingCard` is the card we are trying to find
  document.querySelectorAll('.card').forEach($card => {
    $card.onclick = function() {
      console.log('Card clicked: ', $card);

      // We turn over the card in any case
      showCard($card);

      if ($playingCard) {
        // We compare our `card` with `$playingCard`
        if (memoryGame.checkIfPair(cardName($card), cardName($playingCard))) {
          console.log('yes!');
        } else {
          console.log('no!');

          //
          // Let's hide to 2 cards in 0.5s
          //
          let $playingCardCopy = $playingCard; // we make a copy because `$playingCard` is about to be `undefined` and will in 1000ms
          setTimeout(function () {
            hideCard($playingCardCopy);
            hideCard($card);
          }, 500);
        }

        $playingCard = undefined; // we reset `$playingCard`
      } else {
        // let's define our new `$playingCard` (the one we will try to find the next click)
        $playingCard = $card;
      }

      //
      // re-render score
      //

      document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;

      //
      //
      //

      if (memoryGame.isFinished()) {
        alert('You win!');
      }
    };
  });
});
