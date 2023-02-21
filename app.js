//

// Logic Wireframe
// 1. make alphabet box
// 2. make input for chosen word (either player can make up a word)
// 2.1 inputted word should generate empty lines below alphabet box indicating the length of the word
// 3. select letter from alphabet box to appear below box and removed from alphabet box, for either right or wrong
// 4. if correct letter then show below
// 5. if incorrect letter hangman features are generated, up to 6 features
// 6. You win if you guess the word correctly
// 7. You lose if hangman has all features
// 8. Round ends and next player can input a word

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
console.log(alphabet);

// generate hangman with each incorrect answer
const hangmanImg = ["head", "body", "arm 1", "arm 2", "leg 1", "leg 2"];

if (letter === true) {
  console.log(hangmanImg[0]);
} else {
  console.log(letter);
}
