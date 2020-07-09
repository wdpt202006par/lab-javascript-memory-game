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

  let playingCard; // undefined
  let count = 0;

  // Bind the click event of each element to a function
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (count < 2) {
        showCard(card);
        count++;
        if (playingCard) {
          let nameOfPlayingCard = cardName(playingCard);
          let nameOfCurrentCard = cardName(card);
          let result = memoryGame.checkIfPair(nameOfPlayingCard, nameOfCurrentCard);
          let countPairsClicked = document.querySelector("#pairs-clicked");
          countPairsClicked.innerHTML = memoryGame.pairsClicked;
          if (result === true) {
            // rester ouvert add blocked
            playingCard.classList.add("blocked");
            card.classList.add("blocked");
            playingCard=undefined;
            count = 0;
            let countPairsGuessed = document.querySelector("#pairs-guessed");
            countPairsGuessed.innerHTML = memoryGame.pairsGuessed;
            let check = memoryGame.isFinished();
            if (check) {
              setTimeout(function () {
                alert(`You win after ${memoryGame.pairsClicked} pairs clicked`);
              },1000);
            }
          } else {
            setTimeout(function () {
              hideCard(card);
              hideCard(playingCard);
              playingCard = undefined;
              count = 0;

            },800);
          }
        } else {
          playingCard = card;
        }
      };
    });
  });
});


function showCard($card) {
  // TODO: ajouter la classe "turned" à $card
  $card.classList.add('turned');
}
function hideCard($card) {
  // TODO: retirer la classe "turned" à $card
  $card.classList.remove('turned');
}
function cardName($card) {
  // fonction qui retourne le nom de la $card, par ex: "the avengers" (écrit dans l'attribut data-card-name)
  return $card.dataset.cardName; 
}