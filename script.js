
//computer choice
const arrayChoice = ["rock", "paper", "scissors"];

//['Rock', 'Paper', 'Scissors]
const buttons = document.querySelectorAll('button');

function getComputerChoice(arr){
 let choice = Math.floor(Math.random() * arr.length); 
 return arrayChoice[choice];
}
//display
const result = document.querySelector('.result-screen h1');
const playerScoreDisplay = document.querySelector('#player-score p');
const computerScoreDisplay = document.querySelector('#computer-score p');
//player and computer selection
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){ 
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++;
        return "You lose! Paper beats rock ";
        
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
        return "It's a TIES!";
    }
}

function gameStop(){
    if(playerScore > computerScore){
        return "Congratulation! You win!";
    }else{
        return " You lose! Take your revenge!"
    }
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e) =>{
        playerSelection = e.target.value;
        computerSelection = getComputerChoice(arrayChoice);
        result.textContent = playerScore == 5 || computerScore == 5 ? gameStop() : playRound(playerSelection, computerSelection);
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    });
    
}

    



