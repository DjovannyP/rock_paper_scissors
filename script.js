
//value get from th computer
/*
Once I know there are 3 value to return, I will stuck them in a array.
*/
let arrayChoice = ["rock", "paper", "scissors"];

function getComputerChoice (arr){
 let choice = Math.floor(Math.random() * arr.length);
 return arrayChoice[choice];
}


function playRound(playerSelection, computerSelection){ // I tried to calculate each posibilities but 
    //it's a little to much work. I wanted to use the switch statement but I don't understand it yet.

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    } else {
        return "TIES!";
    }
}

function game(){

   for(i = 0; i < 5; i ++){
    console.log(playRound(playerSelection, computerSelection));
   }
    
        

}

 let input = prompt("make your choice: Rock, Paper or Scissors :");
//those variables going to be use all around the program.
let playerSelection = input.toLowerCase();
let computerSelection = getComputerChoice(arrayChoice); 

let result = game();
console.log(result);