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

  var passwordLength = prompt(`Select password length. (Must be between 8-128 characters).`);

  // while loop to validate input for password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    console.log(passwordLength)
    //alert when generator is cancelled.
    if (passwordLength === null) {
      alert(`Password generation cancelled!`);
      console.log('generation cancelled');
      return;
    }

    parseInt(passwordLength)
    // validation of input
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert(`Please enter a valid number between 8-128.`)
      console.log(passwordLength);
      passwordLength = parseInt(prompt(`Select password length. (Must be between 8-128 characters).`));
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

  //return object of password options
  var passwordOptions = {
    length: passwordLength,
    lower: lowercase,
    upper: uppercase,
    number: numeric,
    specialChar: special
  }
  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var getRandomEl = Math.floor(Math.random() * arr.length)
  var randomEl = arr[getRandomEl];
  return randomEl;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return ""; // Return an empty string if options are not valid
  }

  //new array for selected characters
  var possibleCharacters = [];

  //variable with empty string for password to be added to
  var generatedPassword = "";

  // Add selected character types to the possible characters array
  if (options.specialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  if (options.number) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }

  if (options.lower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  if (options.upper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  // Generate the password
  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(possibleCharacters);
    generatedPassword += randomCharacter;
  }

  return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


