const touchBoard= ""
let pickedWord
let lives = 6
let splitWord
let touchedKey = ""
let currentWordIndex;



const keys = [
  "Q","W","E","R","T","Y","U","I","O","P",
  "A","S","D","F","G","H","J","K","L",
  "Z","X","C","V","B","N","M",
  "Space","Back"
];

const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
    "watermelon", "xigua", "yam", "zucchini", "apricot", "blackberry", "blueberry", "cantaloupe", "dragonfruit", "guava",
    "huckleberry", "jujube", "lime", "mulberry", "olive", "peach", "pear", "pineapple", "plum", "pomegranate",
    "starfruit", "tomato", "walnut", "almond", "pecan", "cashew", "pistachio", "hazelnut", "macadamia", "brazilnut"
];


// function that picks random word from words arr
// when I click: check if letter is in the word

// console.log(reset)
// console.log(hangman-box)


function pickRandomWord(){
// Math.random() for picking random word from 
  pickedWord = words[Math.floor(Math.random() * words.length)]
  splitWord = pickedWord.split('')
  console.log(splitWord)
  
  emptyWord= splitWord.map((letter)=>{
    return '_'
  })

  console.log(emptyWord)
}


pickRandomWord()
// in thee functtion below teh main purpose is,
// to check if the picked letter is matching
// the randolmy pciked looped letter in the word
function checkLetterInWord(event) {
  const clickedLetter = event.target.textContent.toLowerCase();
  console.log(clickedLetter);

let matchFound = false;

for (let i = 0; i < splitWord.length; i++) {
  if (splitWord[i] === clickedLetter) {
    emptyWord[i] = clickedLetter;
    dashesContainerElement.children[i].textContent = clickedLetter;
    matchFound = true;
    // break;
  }
}

if (!matchFound) {
  lives--;
  hangmanImageElement.src = `./images/hangman${lives}.png`
  console.log("Lives left: " + lives);

  if (lives === 0) {
    messageElement.textContent = "Game Over! The word was: " + pickedWord;
    console.log("Game Over! The word was: " + pickedWord);
    stopGame();
  }
}
event.target.disabled = true;

// Check if all letters are revealed (no more underscores)
for (let i = 0; i < emptyWord.length; i++) {
  if (!emptyWord.includes('_')) {
  console.log("You Won!");
  messageElement.textContent = "Congratulations! You win. the word is: " + pickedWord;
  stopGame();
  break;
  }

}
}










//   currentWordIndex = val;


//     if(splitWord.includes(currentWordIndex)){
//     console.log("hey")

// }

  

// if (words[currentWordIndex].includes(touchedKey.toLowerCase())){
//     console.log("Hey");






/*----------------------------- Constants -----------------------------*/
const touchBoard1 = document.querySelectorAll('.letter')
const output = document.getElementById('output');
const erase = document.getElementById('reset')
const dashesContainerElement = document.querySelector('#dashes-container')
const gameWinner = document.getElementById('.winner')
const losingGame = document.getElementById('.loser')
const messageElement = document.getElementById('message')
const hangmanImageElement = document.getElementById('hangman-pic')


/*-------------------------------- Functions --------------------------------*/

// function myFunction(){
//    console.log(letter)
//  }
function stopGame(){
  if (lives === 0 || !emptyWord.includes('_')){
    touchBoard1.forEach((letter)=>{ 
      letter.disabled = true
    })
  }
}

splitWord.forEach((letter)=>{
  const newElement = document.createElement('p')
  newElement.textContent = '_'
  newElement.className = 'dashes'
  dashesContainerElement.appendChild(newElement)
  
})

/*-------------------------------- Event lsitener --------------------------------*/



touchBoard1.forEach(letter => {
  letter.addEventListener('click', (event) => {
    console.log(event.target.textContent.toLowerCase())
    checkLetterInWord(event)
    const pressedLetter = letter.textContent; 
    output.textContent += pressedLetter;
  });
});

erase.addEventListener('click', () => {// reset function
  output.textContent = '';
  location.reload();
});
