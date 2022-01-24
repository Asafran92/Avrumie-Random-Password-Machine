// Assignment code here
var yourChoices //need to have user choices
var passwordLength //needs to be 8-128

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-+"

var generatePassword = function() {
    passwordLength = window.prompt("Input the character length of your password. Must be between 8 and 128 characters.");
    if (passwordLength == null) {
    window.alert("You must enter a password length.");}
    //adding else statement
    else if(passwordLength > 128 || passwordLength < 8) {
      window.alert("You must choose a password between 8 and 128 characters.");
    }
    else {
        var randomcharacter = "";
        for(var i = 0; i <= characters.length; i++) {
            var randomeCharacterInteger = Math.floor(Math.random() * (0,characters.length)+1);
            randomcharacter += characters.charAt(randomeCharacterInteger);
        }
        return randomcharacter;
    }
}    


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
