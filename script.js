// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! Why did you click me?");
  var length = 8,
      charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  
  var length = Number(prompt("How many characters would you like your password to be?"));
  (length) || lenght < 8 || length > 128) length = Number(prompt("length must be 8-128 characters. How many characters would you like your password to be?"));

  var uppers = confirm("Would you like to use uppercase letters?");

  return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
