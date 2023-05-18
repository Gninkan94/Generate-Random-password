// Assignment Code
var generateBtn = document.querySelector("#generate");



//---- Let me start by saying this code is totally optional and if you want to go in a completely different direction I support it. Go with your gut and what works for you because it will help you figure out your thought process.Let us know if you have any questions and don't be afraid to start a dialogue with fellow students!  ----------------------- Delete this before you push your code to github LOL 




function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // YOU WILL NEED MORE CODE IN HERE!~!!!!!!!!-----------------------------------

  var hasUperCase = confirm(
    'Click OK to confirm including uper case characters.'
  );

  var haslowerCase = confirm(
    'Click OK to confirm including lower case characters.'
  );
  var hasNumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasUperCase: hasUperCase,
    haslowerCase: haslowerCase,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    // add more properties and values here
  }

  return passwordOptions;
}

// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  var randIndex = 10;
  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var hasUperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
  var haslowerCase = ["a","b","c"];
  var hasNumbers = ["0","2","3"];
  var hasSpecialCharacters = ["!","$","%"];
  var result = [getRandom(hasSpecialCharacters),getRandom(hasNumbers), getRandom(hasUperCase),getRandom(haslowerCase),getRandom(hasSpecialCharacters),getRandom(hasNumbers), getRandom(hasUperCase),getRandom(haslowerCase)];

  // Array to store types of characters to include in password
  var possibleCharacters = ["hasSpecialCharacters", "hasNumbers", "hasUperCase", "haslowerCase"];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = ["hasNumbers", "hasSpecialCharacters", "hasUperCase", "haslowerCase"];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

// Conditional statement that adds array of special characters into array of possible characters based on user input
// Push new random special character to guaranteedCharacters
if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(hasSpecialCharacters);
  guaranteedCharacters.push(getRandom(hasSpecialCharacters));
  possibleCharacters = possibleCharacters.concat(hasNumbers);
  guaranteedCharacters.push(getRandom(hasNumbers));
  possibleCharacters = possibleCharacters.concat(hasUperCase);
  guaranteedCharacters.push(getRandom(hasUperCase));
  possibleCharacters = possibleCharacters.concat(haslowerCase);
  guaranteedCharacters.push(getRandom(haslowerCase));
}

// Transform the result into a string and pass into writePassword
return result.join('');
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

