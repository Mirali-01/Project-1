// Word Guesser

// Logic Wireframe
// * = done
// 1. make alphabet box *
// 1.2. select letter from alphabet box to be removed, for either right or wrong *
// 2. make input for chosen word (either player can make up a word) *
// 2.1 inputted word should generate blank lines below alphabet box indicated by the length of the word *
  // 3 check if letters in word are in alphabet *
// 4. if correct letter, then show below on blank lines *
// 5. if incorrect letter, then hangman features are generated, up to 6 features *
// 6. You win if you guess the word correctly
// 7. You lose if hangman has all features
// 8. Round ends and next player can input a word

// special feature: Can guess the word ONCE, without selecting any letters
// if correct you win, if incorrect you lose instantly


// alphabet
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// query selectors
const wrongAnswer = document.querySelector(".stickFigureBox")
const blankSpaces = document.querySelector(".blankSpaces")
const midScreen = document.querySelector(".midScreen")
const alphabetLetters = document.querySelector(".alphabet")


// start by inserting player's word
const chooseWord = document.querySelector(".wordChoice")
const input = document.querySelector("input")

let spaceDivs;
let spaces;
let inputCharacters;
let clickLetter;

// checks the input word and generates blank lines for length of input word
chooseWord.addEventListener("click", (e) => {
  let wordValue = input.value
  inputCharacters = wordValue.split("")
  console.log(inputCharacters)
  for (let i = 0; i < wordValue.length; i++) {
      // 1. create element
    spaces = document.createElement('div')
    // spaces.setAttribute("class", "space") adds inline
      // 2. give it a name
    spaces.classList.add("space") //creates an array of classes and adds a name to the array
      // 3. append or apply other methods
    blankSpaces.append(spaces)
    midScreen.remove()
    spaceDivs = [...document.querySelectorAll(".space")]
  }
})

// checks if clicked letter is a letter of the alphabet and is a letter in the index of the input word *
const letters = document.querySelectorAll(".letter")

// const answer  = () => {
  for (let i = 0; i < alphabet.length; i++) {
    letters[i].addEventListener("click", (e) => {
      clickLetter = e.target.textContent.toLowerCase()
      console.log(clickLetter)
    
  // incorrect answer function
  if (!inputCharacters.includes(clickLetter)) {
        // wrong answer function
        // 1. create element
        let hangPiece = document.createElement("div")
        // 2. give it a name
        hangPiece.classList.add("hangPiece")
        // 3. append or apply other methods
        wrongAnswer.append(hangPiece)
  }

  // correct answer function
  for (let i = 0; i < inputCharacters.length; i++) {
  if (inputCharacters[i] === clickLetter) {
    // spaceDivs[inputCharacters.indexOf(clickLetter)].textContent = clickLetter.toUpperCase()
    spaceDivs[i].textContent = clickLetter.toUpperCase()
  } 
    } 
      letters[i].remove()
    })
  }


// Reference for repeating characters in a string
// const word = "happy"
// const chars = word.split("")

// for (let i = 0; i < chars.length; i++) {
//   console.log(chars[i], chars.indexOf(chars[i], i))
// }


// extra stuff that I might use later
// setTimeout(() => {
//   let someFunction = () => {

//   }
// }, 1000)

// letters.forEach(button => {
//   button.addEventListener("click", () =>  button.remove())
// })