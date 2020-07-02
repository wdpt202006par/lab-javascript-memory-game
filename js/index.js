const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
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

  // Bind the click event of each element to a function


  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if (memoryGame.checkIfPair(card1, card2) === false) {
        console.log('test')
        hideCard(card);
      } else {
        console.log('test2')
      }
    });
    // clique sur la première carte et je la montre 
    // cliquer sur la deuxième et je la montre 
    // si c'est les mêmes cartes (checkIfPair) > on les laisse tournées 
    // si c'est pas les mêmes > on les retourne 
    console.log(`Card clicked: ${card}`);
  });
});

function showCard($card) {
  $card.classList.add('turned');
}

function hideCard($card) {
  $card.classList.remove('turned');
}

function cardName($card) {
  // fonction qui retourne le nom de la $card, par ex: "the avengers" (écrit dans l'attribut data-card-name)
  // let cardName = document.getAttribute('data-card-name');
  // console.log(cardName);
  return $card.dataset.cardName;
}

let memoryBoard = memoryGame.querySelector('#memory-board')
console.log(memoryBoard);
// console.log(memoryBoard.getAttribute('data-card-name'))