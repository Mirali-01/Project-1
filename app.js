// Guess the Word!

// fix text so that it supposed to appear after you win/lose for the random word function
// Hints in Guess the Word! - give a random letter or first letter in the random word
// Audio in the background
// Maybe a sign in, maybe???

// audio on click
// const clickAudio = new Audio();
// clickAudio.src = "audio/click.mp3";
// let click = document.getElementsByClassName("button")[0];
// click[0].onclick = function () {
//   clickAudio.play();
// };

// dark mode
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// Modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// sidenav
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});

// default on all games
let gameOn = true;

// alphabet
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const keyDown = (e) => {
  key = e.keyCode;
  //space pressed
  if ((key >= 32 && key < 65) || key >= 91) {
    //space
    e.preventDefault();
  }
};

// query selectors
const wrongAnswer = document.querySelector(".stickFigureBox");
const blankSpaces = document.querySelector(".blankSpaces");
const midScreen = document.querySelector(".midScreen");
const alphabetLetters = document.querySelector(".alphabet");

// start by inserting player's word
const submitWord = document.querySelector(".submitWord");
const input = document.querySelector("input");

// undeclared variables to store info from functions *beneficial to remember*
let spaceDivs;
let spaces;
let inputCharacters;
let clickLetter;

// checks the input word and generates blank lines for length of input word
submitWord.addEventListener("click", (e) => {
  if (input.value === "") {
    e.preventDefault();
    return;
  }
  let wordValue = input.value.toLowerCase();
  inputCharacters = wordValue.split("");
  // console.log(inputCharacters);
  guessWord.classList.remove("invisible");

  for (let i = 0; i < wordValue.length; i++) {
    // 1. create element
    spaces = document.createElement("div");
    // spaces.setAttribute("class", "space") adds inline
    // 2. give it a name
    spaces.classList.add("space"); //creates an array of classes and adds a name to the array
    // 3. append or apply other methods
    blankSpaces.append(spaces);
    midScreen.remove();
    spaceDivs = [...document.querySelectorAll(".space")];
  }
});

// checks if clicked letter is a letter of the alphabet and is a letter in the index of the input word *
const button = document.querySelectorAll(".letter");
let count = 0; //counting divs
let textCount = []; //pushing char of input word

// for all letter buttons
for (let i = 0; i < alphabet.length; i++) {
  // console.log(button[i]) //HTML element
  // console.log(button[i].textContent) //text in HTML element
  button[i].addEventListener("click", (e) => {
    clickLetter = e.target.textContent.toLowerCase();

    if (gameOn) {
      // wrong answer function
      if (inputCharacters === undefined) {
        return;
      }

      if (!inputCharacters.includes(clickLetter) && count < 6) {
        count++;
        // console.log(count)
        // 1. create element
        let hangPiece = document.createElement("div");
        // 2. give it a name
        hangPiece.classList.add("hangPiece");
        // 3. append or apply other methods
        wrongAnswer.append(hangPiece);
        hangPiece.append(count);
        if (count === 6) {
          gameOn = false;
          hangPiece.replaceChildren("You Lose!");
          blankSpaces.replaceChildren(input.value.toUpperCase());
          guessWord.remove();
          // stop the game
        }
      }

      // correct answer function
      for (let i = 0; i < inputCharacters.length; i++) {
        if (inputCharacters[i] === clickLetter) {
          spaceDivs[i].textContent = clickLetter.toUpperCase();
          textCount.push(spaceDivs[i].textContent);
          // console.log(textCount.length);
          // console.log(input.value.length);
          if (textCount.length === input.value.length) {
            gameOn = false;
            // 1. create element
            let hangPiece = document.createElement("div");
            // 2. give it a name
            hangPiece.classList.add("hangPiece");
            // 3. append or apply other methods
            wrongAnswer.append(hangPiece);
            hangPiece.append("You Win!");
            guessWord.remove();
            // stop the game
          }
        }
      }
      button[i].remove();
    }
  });
}

// ---------------------------------------------

// Guessing a word
const guessWord = document.querySelector(".guessWord");
guessWord.addEventListener("click", (e) => {
  let guess = prompt("Take a guess, you only get ONE chance!");
  if (guess === null) {
    guessWord.append();
  } else if (guess.toUpperCase() !== input.value.toUpperCase()) {
    blankSpaces.replaceChildren(
      `The word was ${input.value.toUpperCase()}! You Lose!`
    );
    guessWord.classList.add("invisible");
    gameOn = false;
  } else if (guess.toUpperCase() === input.value.toUpperCase()) {
    blankSpaces.replaceChildren(
      `${input.value.toUpperCase()} is correct! You Win!`
    );
    guessWord.classList.add("invisible");
    gameOn = false;
  }
});

// instead of reload, reset/reinitialize variables
//reloads the page
const playAgain = document.querySelector(".playAgain");
playAgain.addEventListener("click", (e) => {
  location.reload();
});

// --------------------------------- Random word function

const randomWord = document.querySelector(".randomWord");
randomWord.addEventListener("click", (e) => {
  let word = fetch("words.json")
    .then((response) => response.json())
    .then((data) => {
      word = data;
      const random = Math.floor(Math.random() * word.length);
      // console.log(word, random);
      const randomGuessWord = document.createElement("button");
      randomGuessWord.innerHTML = "Guess Word";
      randomGuessWord.classList.add("randomGuessWord");
      guessWord.replaceWith(randomGuessWord);
      randomGuessWord.classList.remove("invisible");
      for (let i = 0; i < word[random].length; i++) {
        // 1. create element
        spaces = document.createElement("div");
        // spaces.setAttribute("class", "space") adds inline
        // 2. give it a name
        spaces.classList.add("space"); //creates an array of classes and adds a name to the array
        // 3. append or apply other methods
        blankSpaces.append(spaces);
        midScreen.remove();
        spaceDivs = [...document.querySelectorAll(".space")];
      }

      let count = 0; //counting divs
      let textCount = []; //pushing char of input word

      // for all letter buttons
      for (let i = 0; i < alphabet.length; i++) {
        // console.log(button[i]) //HTML element
        // console.log(button[i].textContent) //text in HTML element
        button[i].addEventListener("click", (e) => {
          clickLetter = e.target.textContent.toLowerCase();
          // console.log(clickLetter)

          if (gameOn) {
            // wrong answer function
            if (!word[random].split("").includes(clickLetter) && count < 6) {
              count++;
              // console.log(count)
              // 1. create element
              let hangPiece = document.createElement("div");
              // 2. give it a name
              hangPiece.classList.add("hangPiece");
              // 3. append or apply other methods
              wrongAnswer.append(hangPiece);
              hangPiece.append(count);
              if (count === 6) {
                gameOn = false;
                hangPiece.replaceChildren("You Lose!");
                blankSpaces.replaceChildren(word[random].toUpperCase());
                randomGuessWord.remove();
                // stop the game
              }
            }

            // correct answer function
            for (let i = 0; i < word[random].length; i++) {
              if (word[random][i] === clickLetter) {
                spaceDivs[i].textContent = clickLetter.toUpperCase();
                textCount.push(spaceDivs[i].textContent);
                // console.log(textCount.length);
                // console.log(word[random].length);
                if (textCount.length === word[random].length) {
                  gameOn = false;
                  // 1. create element
                  let hangPiece = document.createElement("div");
                  // 2. give it a name
                  hangPiece.classList.add("hangPiece");
                  // 3. append or apply other methods
                  wrongAnswer.append(hangPiece);
                  hangPiece.append("You Win!");
                  randomGuessWord.remove();
                  // stop the game
                }
              }
            }
            button[i].remove();
          }
        });
      }

      // ---------------------------------------------

      // Guessing a word
      randomGuessWord.addEventListener("click", (e) => {
        let guess = prompt("Take a guess, you only get ONE chance!");
        if (guess === null) {
          randomGuessWord.append();
        } else if (guess.toUpperCase() !== word[random].toUpperCase()) {
          blankSpaces.replaceChildren(
            `The word was ${word[random].toUpperCase()}! You Lose!`
          );
          randomGuessWord.classList.add("invisible");
          gameOn = false;
        } else if (guess.toUpperCase() === word[random].toUpperCase()) {
          blankSpaces.replaceChildren(
            `${word[random].toUpperCase()} is correct! You Win!`
          );
          randomGuessWord.classList.add("invisible");
          gameOn = false;
        }
      });
    });
});
