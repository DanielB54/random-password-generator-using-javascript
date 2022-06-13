// Assignment Code
// password can have uppercase letters
var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
console.log(upperCase);
// password can contain lowrcase letters
var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
console.log(lowerCase);
// password can contain numbers
var numbers = "0 1 2 3 4 5 6 7 8 9"
console.log(numbers);
// password can contain special characters
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
console.log(specialCharacters);

// password length must be no less than 8 characters and no more than 128 characters

var generateBtn = document.querySelector("#generate");

// validate input meets acceptable criteria

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// print password in display box

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);