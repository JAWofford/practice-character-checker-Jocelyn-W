//password validator

const readlineSync = require('readline-sync');

//check if a string contains at least one capital letter.
function containsCapital(passwordInput){
    for(const char of passwordInput){
        if (char === char.toUpperCase()){
           return true; //capital letter found, exit loop
        } 
    }
    return false; //no capital letter found
}

//check if a string contains at least one number.
function containsNumber(passwordInput){
    for(const char of passwordInput){
        if(!isNaN(char)){
            return true; //had to look up isNan.  number found, exit loop
        }
    }
    return false; //no number found
}


//prompt the user for a password
//check to make sure the password is at least 8 characters long
//check to make sure it contains at least one capital letter
//check to make sure it contains at least one number.

function passwordValidation(){
    let password;
    do{
         password = readlineSync.question('Please enter a valid password:  ');
    
    }while (password.length<8 || containsCapital(password)!== true || containsNumber(password)!== true);
 
    console.log ("Your password is valid");
}

passwordValidation();