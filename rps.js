









//prompt the user either with win or lose of the battle

// Declare players score variables
let humanScore = 0;
let computerScore = 0;

//prompt user what their choice will be
function getHumanChoice (){
    let choice = prompt("rock, paper, or scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
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
        console.log(`It's a tie! ${humanChoice} vs. ${computerChoice}`);
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log(`You WIN! Paper beats Rock`);
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice == "rock") {
        console.log('You LOSE! Paper beats Rock')
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You LOSE! Rock beats Scissors`);
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice == "rock") {
        console.log('You WIN! Rock beats Scissors')
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You LOSE! Scissors beats Paper`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice == "scissors") {
        console.log('You WIN! Scissors beats Paper')
        humanScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);