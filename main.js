const readlineSync = require('readline-sync');

let userName = readlineSync.question('What is your name? ');
let numInput = readlineSync.question('Pick a number between 0 and ' + [userName.length - 1 ]+ ': ');
console.log("The character in your name at position " + numInput + " is " + userName[numInput] + ".");

//Should add validation to make sure the user inputs a number within the range and also not a letter.