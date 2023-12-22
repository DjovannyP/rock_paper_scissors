
//value get from th computer
/*
Once I know there are 3 value to return, I will stuck them in a array.
*/
let arrayChoice = ["rock", "paper", "scissors"];

function getComputerChoice (arr){
 let choice = Math.floor(Math.random() * arr.length);
 return choice;
}

console.log(getComputerChoice(arrayChoice));