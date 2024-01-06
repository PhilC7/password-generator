// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // while loop to validate input for password length
  var passwordLength = Number(prompt(`Select password length. (Must be between 8-128 characters).`));

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    console.log(`Password length = ${passwordLength}`);

    //alert when generator is cancelled.
    if (passwordLength == false) {
      alert(`Password generation cancelled!`);
      return false;
    }
    console.log(passwordLength);

    // validation of input
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert(`Please enter a valid number between 8-128.`)
      console.log(passwordLength);
      passwordLength = Number(prompt(`Select password length. (Must be between 8-128 characters).`));
    }
  }

  // set variables for each character options
  var lowercase = confirm("Would you like to lowercase characters?");
  var uppercase = confirm("Would you like to uppercase characters?");
  var numeric = confirm("Would you like to numeric characters?");
  var special = confirm("Would you like to special characters?");

  //if user says no to all, restart function
  if (!lowercase && !uppercase && !numeric && !special) {
    alert(`At least one of the character types must be selected.`)
    return getPasswordOptions();
  }

  return {
    passwordLength,
    lowercase,
    uppercase,
    numeric,
    special
  }
}

// console.log(getPasswordOptions());


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions); //change back to writePassword once all functions are made

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


