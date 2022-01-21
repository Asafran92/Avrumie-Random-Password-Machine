// Assignment code here

var upperCase
var lowerCase
var specialCharacter
var choices
var passwordLength

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//creating generate password function
var generatePassword = function() {
    passwordLength = window.prompt("Input the character length of your password. Must be between 8 and 128 characters.");
    if (passwordLength === null) {
    window.alert("You must enter a password length.");}
    //adding else statement
    else if(passwordLength > 128 || passwordLength < 8) {
      window.alert("You must choose a password between 8 and 128 characters.");
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
