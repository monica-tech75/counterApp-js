// // let firstCardComputer = Math.floor(Math.random() * 11) + 1;
// // let secondCardComputer = Math.floor(Math.random() * 11) + 1;
// //let computerBet = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let cards = [];


let message = "";
let messageEl = document.getElementById("message-el");
let totalEl = document.querySelector(".total");
let cardsEl = document.querySelector(".cards");
console.log(cards);

function randomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    let arr = [1, 11];
    return arr[Math.floor(Math.random() * arr.length)];
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards.push(firstCard, secondCard);
  userBet = firstCard + secondCard;
  renderGame();
}

function renderGame() { 
  totalEl.textContent = "Total: " + userBet;
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " - ";
  }
  if (userBet <= 20) {
    message = "Do you want more cards";
  } else if (userBet === 21) {
    message = "Congratulation";
  } else {
    message = "You lost";
  }
  messageEl.textContent = message;
}


function newCard() {
  let newCards = randomCard();
  
  cards.push(newCards);
  userBet += newCards;
  renderGame();

  //cardsEl.textContent = 'Cards: ' + cards[0] + '-' + cards[1] + '-' + cards[2];
}

// console.log(message);
