// Word Guesser

// default on all games
let gameOn = true

// alphabet
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// query selectors
const wrongAnswer = document.querySelector(".stickFigureBox")
const blankSpaces = document.querySelector(".blankSpaces")
const midScreen = document.querySelector(".midScreen")
const alphabetLetters = document.querySelector(".alphabet")
// const playAgainBox = document.querySelector(".playAgainContainer")

// start by inserting player's word
const chooseWord = document.querySelector(".wordChoice")
const input = document.querySelector("input")

let spaceDivs;
let spaces;
let inputCharacters;
let clickLetter;

// let guessWordBox = document.querySelector(".playAgain")

// checks the input word and generates blank lines for length of input word
chooseWord.addEventListener("click", (e) => {
  let wordValue = input.value.toLowerCase()
  inputCharacters = wordValue.split("")
  console.log(inputCharacters)
  guessWord.classList.remove("invisible")

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
const button = document.querySelectorAll(".letter")
let count = 0; //counting divs
let textCount = [] //pushing char of input word


  for (let i = 0; i < alphabet.length; i++) {
    // console.log(button[i]) //HTML element
    console.log(button[i].textContent) //text in HTML element
    button[i].addEventListener("click", (e) => {
      clickLetter = e.target.textContent.toLowerCase()
      // console.log(clickLetter)
      
    if (gameOn)  {
  // wrong answer function
    if (!inputCharacters.includes(clickLetter) && count < 6) {
        count ++
        // console.log(count)
        // 1. create element
        let hangPiece = document.createElement("div")
        // 2. give it a name
        hangPiece.classList.add("hangPiece")
        // 3. append or apply other methods
        wrongAnswer.append(hangPiece)
        hangPiece.append(count)
        if (count === 6) {
          gameOn = false
          hangPiece.replaceChildren("You Lose!")
          blankSpaces.replaceChildren(input.value.toUpperCase())
          // stop the game
        }
    } 
    
  // correct answer function
  for (let i = 0; i < inputCharacters.length; i++) {
    if (inputCharacters[i] === clickLetter) {
    spaceDivs[i].textContent = clickLetter.toUpperCase()
    textCount.push(spaceDivs[i].textContent)
    console.log(textCount.length)
    console.log(input.value.length)
      if (textCount.length === input.value.length) {
        gameOn = false
        // 1. create element
        let hangPiece = document.createElement("div")
        // 2. give it a name
        hangPiece.classList.add("hangPiece")
        // 3. append or apply other methods
        wrongAnswer.append(hangPiece)
        hangPiece.append("You Win!")
        // stop the game
      }
    }
      } 
      button[i].remove()
  }
      })
    }

    // problems: needs to be able to accept any cased words
    const guessWord = document.querySelector(".guessWord")
    guessWord.addEventListener("click", (e) => {
      let guess = prompt("Take a guess, you only get ONE chance!")
      if (guess === null) {
        guessWord.append()
      } else if (guess !== input.value) {
        blankSpaces.replaceChildren(`The word was ${input.value.toUpperCase()}! You Lose!`)
        guessWord.remove()
        gameOn = false
      } else if (guess === input.value) {
        blankSpaces.replaceChildren(`${input.value.toUpperCase()} is correct! You Win!`)
        guessWord.remove()
        gameOn = false
      }
    })

    //reloads the page
    const playAgain = document.querySelector(".playAgain")
    playAgain.addEventListener("click", (e) => {
      location.reload()
    })
    
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


// Logic Wireframe
// * = done
// 1. make alphabet box *
// 1.2. select letter from alphabet box to be removed, for either right or wrong *
// 2. make input for chosen word (either player can make up a word) *
// 2.1 inputted word should generate blank lines below alphabet box indicated by the length of the word *
  // 3 check if letters in word are in alphabet *
// 4. if correct letter, then show below on blank lines *
// 5. if incorrect letter, then hangman features are generated, up to 6 features *
// 6. You win if you guess the word correctly *
// 7. You lose if hangman has all features *
// 8. Round ends and next player can input a word *