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
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
