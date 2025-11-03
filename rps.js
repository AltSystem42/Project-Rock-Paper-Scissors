









//prompt the user either with win or lose of the battle

// Declare players score variables
let humanScore = 0;
let computerScore = 0;

//prompt user what their choice will be
function getHumanChoice (){
    let choice = prompt("rock, paper, or scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log(choice);
        return choice;
    } else {
        alert("Choose only 'rock', 'paper', or 'scissors'");
    };
}

// Will return the computer's choice of rock, paper, or scissors
function getComputerChoice() {
    let random = Math.round(((Math.random() * 2)));
    if(random === 0) {
        return "rock"
    } else if (random === 1 ){
        return "paper"
    } else if (random === 2 ){
        return "scissors"
    };
    
}
//play a round of rock paper scissors
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);