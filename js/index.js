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
    // TODO: ajouter la classe "turned" à $card
    $card.classList.add('turned');
  }

  function hideCard($card) {
    // TODO: retirer la classe "turned" à $card
    $card.classList.remove("turned");
  }

  function cardName($card) {
    // fonction qui retourne le nom de la $card, par ex: "the avengers" (écrit dans l'attribut data-card-name)
    return $card.dataset.cardName; 
  }

  let firstCard; // undefined

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here

      if (firstCard) {
        showCard(card);
        memoryGame.checkIfPair(firstCard, card);

        //si bon
        if (memoryGame.checkIfPair === true) {
          //rien, puisque incremente dans fonction checkIfPair
          //puis laisser show, pour retenir que la paire est OK
        } else {
          hideCard(card);
          hideCard(firstCard);
          firstCard = undefined;
        }

      } else {
        showCard(card);
        firstCard = card;
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});