

let arrayChoice = ["rock", "paper", "scissors"];

function getComputerChoice(arr){
 let choice = Math.floor(Math.random() * arr.length); //random computer choice
 return arrayChoice[choice];
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const result = document.querySelector('.result-screen h1');
const playerScoreDisplay = document.querySelector('#player-score p');
const computerScoreDisplay = document.querySelector('#computer-score p'); 
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){ 
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++;
        return "You lose! Paper beats rock";
        
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore ++;
        return "You win! Paper beats Rock";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++;
        return "You win! Rock beats Scissors";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore ++;
        return "You lose! Rock beats Scissors";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beat Paper";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beat Paper";
    } else {
        return "TIES!";
    }
}
//score display



//player and computer selection
let playerSelection;
let computerSelection;


const buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons);

for(let i = 0; i < buttonsArray.length; i++){
    buttonsArray[i].addEventListener('click', (e) =>{
        playerSelection = e.target.value;
        computerSelection = getComputerChoice(arrayChoice);
        result.textContent = playRound(playerSelection, computerSelection);
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore
    
    });
}

    //rock



