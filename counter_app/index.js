// Initialize count as 0
// listen for clicks on the increment button
// Increment the count variable by one when the button is clicked and log it out
// change the count element in the HTML to reflect the new count
let count = 0;
const counter = document.getElementById('counter');
const lastCounts = document.getElementById('lastCounts');
//const welcomeEl = document.getElementById('welcome');

// let firstName = prompt('What is your name?');
// let greetings = `Welcome ${firstName}, nice to see you again!`;
// welcomeEl.innerText = greetings;
// welcomeEl.innerText += " 💕";


function increment() {
  count+= 1;
  counter.textContent = count;
};

function save() {
  let countStr = '  ' + count + ' - ';
  lastCounts.textContent += countStr;
  counter.textContent = 0;
  count = 0;
};






