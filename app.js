// Word Guesser

// Logic Wireframe
// * = done
// 1. make alphabet box *
// 1.2. select letter from alphabet box to be removed, for either right or wrong *
// 2. make input for chosen word (either player can make up a word) *
// 2.1 inputted word should generate blank lines below alphabet box indicated by the length of the word *
  // 3 check if letters in word are in alphabet
// 4. if correct letter, then show below on blank lines
// 5. if incorrect letter, then hangman features are generated, up to 6 features
// 6. You win if you guess the word correctly
// 7. You lose if hangman has all features
// 8. Round ends and next player can input a word

// special feature: Can guess the word ONCE, without selecting any letters
// if correct you win, if incorrect you lose instantly


// for loop: inputted word save the length of the word chosen and length === # of blank spaces

// letters as button but no alphabetbox
  // see if letter chosen in word is in word chosen
  // counter: word.length
// alphabet

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// console.log(alphabet);

// // generate hangman with each incorrect answer
// const hangmanImg = ["head", "body", "arm 1", "arm 2", "leg 1", "leg 2"];


// inserting player's word

const wrongAnswer = document.querySelector(".stickFigureBox")
const wordChoice = document.querySelector(".wordChoice")
const blankSpaces = document.querySelector(".blankSpaces")
const midScreen = document.querySelector(".midScreen")
const alphabetLetters = document.querySelector(".alphabet")


const chooseWord = document.querySelector(".wordChoice")
const input = document.querySelector("input")

chooseWord.addEventListener("click", (e) => {
  let wordValue = input.value
  console.log(wordValue)
  for (let i = 0; i < wordValue.length; i++) {
    let spaces = document.createElement('div')
    // spaces.setAttribute("class", "space") adds inline
    spaces.classList.add("space") //creates an array of classes and adds a name to the array
    blankSpaces.append(spaces)
    midScreen.remove()
  }
})

// 3 check if letters in word are in alphabet, this function should go in alphabetLetters event listener

const letters = document.querySelectorAll(".letter")

// letters.forEach(button => {
//   button.addEventListener("click", () =>  button.remove())
// })

for (let i = 0; i < alphabet.length; i++) {
  letters[i].addEventListener("click", () => {
    if (input.value.split("").includes(alphabet[i].toLowerCase())) {
      console.log(true)
    } else {
      console.log(false)
    }
    letters[i].remove()
    console.log(alphabet[i])
  })
}

  
  //target child elements when linked with parent
  // let wordContents = input.value.split("")
  // let alphabetContents = alphabetLetters.textContent.toLowerCase()
  // if (wordContents.includes(alphabetContents)) {
  //   console.log("true")
  // } else {
  //   e.target.remove() 
  // }


// setTimeout(() => {
//   let someFunction = () => {

//   }
// }, 1000)