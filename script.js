// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = "!@,#$%&*{}[]/\\+="

function enterpassword() {
  var password = generatepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

debugger;
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() { 
  var result = "";
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword
  }
  if(length<8 || length>128){
    alert("How long would you like your password to be? (between 8 - 128)");
    return generatePassword()
  }

  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(!hasUpper&&hasLower&!hasNumbers&&!hasSpecial){
    alert("You have to choose atleast 1 character type!");
    return generatePassword()
  }
  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }
  if(hasNumbers){
    chosenCharacters += numbers
  }
  if(hasSpecial){
    chosenCharacters += special
  }
for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
