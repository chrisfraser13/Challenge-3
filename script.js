// Assignment Code
var generateBtn = document.querySelector("#generate");


var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!", "@" , "#", "$", "%", "&", "*", "{", "}", "[", "]", "/", "\\", "+","="]



function passwordOptions() { 
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return passwordOptions()
  }
  if(length<8 || length>128){
    alert("How long would you like your password to be? (between 8 - 128)");
    return passwordOptions()
  }

  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(!hasUpper&&!hasLower&!hasNumbers&&!hasSpecial){
    alert("You have to choose atleast 1 character type!");
    return passwordOptions()
  }
var passwordPerms = {
  length: length, 
  hasUpper: hasUpper,
  hasLower: hasLower,
  hasNumbers: hasNumbers,
  hasSpecial: hasSpecial,
}
return passwordPerms
}
function getRandom(chosenCharacters) {
var randomIndex = (Math.floor(Math.random() * chosenCharacters.length));
var randomElement = chosenCharacters[randomIndex]
return randomElement
}
function generatePassword() {
  var options = passwordOptions()
  var results = []
  var possibleCharacters = []
  var guranteeCharacters = []
  if (options.hasUpper) {
    possibleCharacters = possibleCharacters.concat(upper)
  guranteeCharacters.push(getRandom(upper))
  }
  if (options.hasLower) {
    possibleCharacters = possibleCharacters.concat(lower)
  guranteeCharacters.push(getRandom(lower))
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers)
  guranteeCharacters.push(getRandom(numbers))
  }
  if (options.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(special)
  guranteeCharacters.push(getRandom(special))
  }
for (var i = 0; i<options.length; i++) {
  var possCharacter = getRandom(possibleCharacters)
  results.push (possCharacter)
}
for (var i = 0; i<guranteeCharacters.length; i++) {
  results[i] = guranteeCharacters[i]
}
return results.join ("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
