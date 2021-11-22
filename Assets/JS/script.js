// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  console.log("Hey! you clicked the button!");
  var criteria1 = confirm(
    "Would you like to use lowercase characeters in your password?"
  );
  var criteria2 = confirm(
    "Would you like to use uppercase characeters in your password?"
  );
  var criteria3 = confirm(
    "Would you like to use numeric characters in your password?"
  );
  var criteria4 = confirm(
    "Would you like to use special characters in your password?"
  );
  var passwordLength = prompt(
    "How many characters long would you like your password to be?"
  );
  // const lowercaseAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  // const uppercaseAlphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // const nummericArray = "123456789".split("");

  const generatedPasswordArray = [];

  if (criteria1 === true) {
    generatedPasswordArray.push(
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    );
  }
  if (criteria2 === true) {
    generatedPasswordArray.push(
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
      "Z"
    );
  }
  if (criteria3 === true) {
    generatedPasswordArray.push(
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    );
    console.log(generatedPasswordArray);
  }
  if (passwordLength > 8 || passwordLength < 128) {
    for (let index = 0; index < JSON.parse(passwordLength); index++) {
      const newGeneratedPasswordArray = generatedPasswordArray[index];
      console.log();
    }
  }
  let newGeneratedPasswordArray = Math.floor(
    Math.random() * generatedPasswordArray.length
  );

  console.log(generatedPasswordArray[newGeneratedPasswordArray]);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
