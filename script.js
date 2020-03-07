// Assign Variables
var generateBtn = document.querySelector("#generate");
var dispText = document.querySelector("textarea");
var content = "";
var length = "";
var arrayLow = [];
var arrayNum = ["48","49","50","51","52","53","54","55","56","57"];
var arrayFinal = [];

//-------------------------------------------------------------------------------------------------------------
//FUNCTIONS
//-------------------------------------------------------------------------------------------------------------

//Random function that generates a number between a low and high value (excluse of high value)
function random(low, high){
  return Math.random()*(high-low) + low;
}

//Prompt user for Password length between 8 - 128 characters
function userInput() {
  //Set length of password and convert to integer value
  var inputLength = prompt("Please select password length - 8 characters minimum)");
  length = parseInt(inputLength);
  //Conditions from user
  //var lowerCase = confirm("Use Lowercase in password?");
  //var upperCase = confirm("Use Uppercase in password?");
  //var numbers = confirm("Use Numbers in password?");
  //var spChar = confirm("Use special characters in password?");
}

// Generate random password
function generatePassword(){

  for (var i=0; i < length; i++) {

    //Set the parameter based on what user requires in terms of upper/lower case, special characters, etc.
    key = parseInt(arrayNum[Math.floor(Math.random() * arrayNum.length)]);
    console.log(key);
        
    //Converts coressponding ASCII number into printed character
    var res = String.fromCharCode(key);
    debugger;
    //Add new character into existing character block
    newContent = content + res;
    console.log(newContent);
    debugger;
    //Update randomized password onto screen
    //dispText.textContent = content;
    dispText.append(newContent);

  }  

}

// Write password to the #password input
function writePassword() {
  content = "";
  userInput();
  
  //var password = generatePassword();
  generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.textContent = password;
  //document.write(passwordText);
  //dispText.append("password");
}


//--------------------------------------------------------------------------------------------------------
//EXECUTION
//------------------------------------------------------------------------------------------------------

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
