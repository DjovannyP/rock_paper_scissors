

let arrayChoice = ["rock", "paper", "scissors"];

function getComputerChoice(arr){
 let choice = Math.floor(Math.random() * arr.length); //random computer choice
 return arrayChoice[choice];
}


function playRound(playerSelection, computerSelection){ 

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") {
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

    let count = 0;
    let playerSelection;
    let computerSelection ;

    
    

 function game(){

    while(count < 5){
        playerSelection = prompt("make your choice: Rock, Paper or Scissors :").toLowerCase();
        computerSelection = getComputerChoice(arrayChoice); 
        if(playerSelection === computerSelection){
            count--;
        }
        console.log(playRound(playerSelection, computerSelection));
        count++;
    }
}

console.log(game());