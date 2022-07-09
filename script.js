// Assignment Code
// password can contain uppercase letters

var upperCase = [
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

// password can contain lowrcase letters
var lowerCase = [
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
  "z",
];

// password can contain numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn;
// password can contain special characters
var specialCharacters = [
  "!",
  ",",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var passwordLength;
// password length must be no less than 8 characters and no more than 128 characters
function generatePassword() {
  passwordLength = prompt(
    "Please enter your desired password length, no less than 8 characters and no greater than 128 characters."
  );

  passwordLength = parseInt(passwordLength);

  if (
    passwordLength === "" ||
    isNaN(passwordLength) ||
    passwordLength <= 7 ||
    passwordLength >= 129
  ) {
    alert(
      "Please enter a number no less than 8 and no greater than 128. Click Generate Password button to try again."
    );
    return;
  }
  var characters = [];
  let wantsUpperCase = confirm(
    "would you like your password to contain uppercase letters?"
  );

  if (wantsUpperCase) {
    characters.concat(upperCase);
  }
  console.log(characters);
  let wantsLowerCase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  if (wantsLowerCase) {
    characters.concat(lowerCase);
  }

  let wantsNumbers = confirm(
    "Would you like your password to contain numbers?"
  );
  if (wantsNumbers) {
    characters.concat(numbers);
  }

  let wantsSpecial = confirm(
    "Would you like your password to contain special characters?"
  );
  if (wantsSpecial) {
    characters.concat(specialCharacters);
  }

  return "X";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// print password in display box

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
