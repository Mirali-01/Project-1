// Word Guesser

// Logic Wireframe
// 1. make alphabet box
// 2. make input for chosen word (either player can make up a word)
// 2.1 inputted word should generate blank lines below alphabet box indicating the length of the word
  // 2.2 check if letters in word are in alphabet
// 3. select letter from alphabet box to be removed, for either right or wrong
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

// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// console.log(alphabet);

// // generate hangman with each incorrect answer
// const hangmanImg = ["head", "body", "arm 1", "arm 2", "leg 1", "leg 2"];

// if (letter === true) {
//   console.log(hangmanImg[0]);
// } else {
//   console.log(letter);
// }


// inserting player's word

const wordChoice = document.querySelector(".wordChoice")
const blankSpaces = document.querySelector(".blankSpaces")
const midScreen = document.querySelector(".midScreen")
const alphabetLetters = document.querySelector(".alphabet")

let chooseWord = () => {
  let input = document.querySelector("input")
  let wordValue = input.value
  console.log(wordValue)
  for (let i = 0; i < wordValue.length; i++) {
    let spaces = document.createElement('div')
    // spaces.setAttribute("class", "space") adds inline
    spaces.classList.add("space") //creates an array of classes and adds a name to the array
    blankSpaces.append(spaces)
    midScreen.remove()
  }
}

alphabetLetters.addEventListener("click", (e) => {
  e.target.remove() //target child elements when linked with parent
})
