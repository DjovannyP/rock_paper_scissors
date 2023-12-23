
let arrayChoice = ["rock", "paper", "scissors"];

function getComputerChoice (arr){
 let choice = Math.floor(Math.random() * arr.length);
 return arrayChoice[choice];
}


function playRound(playerSelection, computerSelection){

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

