// Assign Variables
var generateBtn = document.querySelector("#generate");
var dispText = document.querySelector("textarea");
var content = "";
var length = "";
var arrayLow = ["97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122"];
var arrayUp = ["65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90"];
var arrayNum = ["48","49","50","51","52","53","54","55","56","57"];
var arraySp = ["33","35","36","37","38","40","41","42","43","45","46","58","59","61","63","64","91","93","94","95","96","126"];
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
  var lowerCase = confirm("Use Lowercase in password?");
  if (lowerCase){
    arrayFinal = arrayLow;
  }
  //debugger;
  var upperCase = confirm("Use Uppercase in password?");
  if (upperCase){
    arrayFinal = arrayFinal.concat(arrayUp);
  }
  var numbers = confirm("Use Numbers in password?");
  if (numbers){
    arrayFinal = arrayFinal.concat(arrayNum);
  }
  var spChar = confirm("Use special characters in password?");
  if (spChar){
    arrayFinal = arrayFinal.concat(arraySp);
  }
}

// Generate random password
function generatePassword(){

  for (var i=0; i < length; i++) {

    //Set the parameter based on what user requires in terms of upper/lower case, special characters, etc.
    key = parseInt(arrayFinal[Math.floor(Math.random() * arrayFinal.length)]);
    console.log(key);
        
    //Converts coressponding ASCII number into printed character
    var res = String.fromCharCode(key);
    //debugger;
    //Add new character into existing character block
    newContent = content + res;
    //console.log(newContent);
    //debugger;
    //Update randomized password onto screen
    //dispText.textContent = newContent;
    dispText.append(newContent);

  }  

}

// Write password to the #password input
function writePassword() {
  newContent = "";
  content = "";
  userInput();
  
  //var password = generatePassword();
  generatePassword();
  
}


//--------------------------------------------------------------------------------------------------------
//EXECUTION
//------------------------------------------------------------------------------------------------------

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
