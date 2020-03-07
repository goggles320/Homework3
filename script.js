// Assign Variables
var generateBtn = document.querySelector("#generate");
var dispText = document.querySelector("textarea");
var content = "";
var length = "";
//set the ASCII values for all required characters
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
  //Conditions from user:
  //Check if user wants lower case in password, if yes - add array of character to final array
  var lowerCase = confirm("Use Lowercase in password?");
  if (lowerCase){
    arrayFinal = arrayLow;
  }
  //Check if user wants upper case in password, if yes - add array of character to final array
  var upperCase = confirm("Use Uppercase in password?");
  if (upperCase){
    arrayFinal = arrayFinal.concat(arrayUp);
  }
  //Check if user wants numbers in password, if yes - add array of character to final array
  var numbers = confirm("Use Numbers in password?");
  if (numbers){
    arrayFinal = arrayFinal.concat(arrayNum);
  }
  //Check if user wants special in password, if yes - add array of character to final array
  var spChar = confirm("Use special characters in password?");
  if (spChar){
    arrayFinal = arrayFinal.concat(arraySp);
  }
}

// Function to generate password
function generatePassword(){
  //Runs iterations based from prompt command in above userInput() Function
  for (var i=0; i < length; i++) {

    //Randoms a character in the final array and converts into integer
    key = parseInt(arrayFinal[Math.floor(Math.random() * arrayFinal.length)]);
       
    //Converts coressponding ASCII number into printed character
    var res = String.fromCharCode(key);
    
    //Add new character into existing character block
    newContent = content + res;
    
    //Update randomized password onto screen
    dispText.append(newContent);

  }  

}

//Write password to the #password input
function writePassword() {
  //clear the existing password generated
  newContent = "";
  content = "";
  userInput();
  
  //var password = generatePassword();
  generatePassword();
  
}


//--------------------------------------------------------------------------------------------------------
//EXECUTION
//------------------------------------------------------------------------------------------------------

//Add event listener to execute function when button is clicked
generateBtn.addEventListener("click", writePassword);
