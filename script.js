const playerSelections = document.querySelectorAll(".choice");
const result = document.getElementById("result")
const roundCount = document.createElement("div")
const winCount = document.createElement("div")
const lostCount = document.createElement("div")

let humanScore = 0;
let computerScore = 0;
let round = 0;

playerSelections.forEach(choice => {
  choice.addEventListener("click", function() {
    const winner = playRound(choice.id);
    if (winner === "human"){
        humanScore++;
    } else if (winner === "pc") {
        computerScore++;
    }
    console.log(round)
    roundCount.textContent = round;
    round++; 
  });
});

function playGame (){
    // Declare players score variables
    let humanScore = 0;
    let computerScore = 0;
    
    // End of game did you win?
    if (humanScore > computerScore){
        // alert(`You WON! NPC: ${computerScore} You: ${humanScore}`);

    } else if (humanScore < computerScore) {
        alert(`You LOST! NPC: ${computerScore} You: ${humanScore}`)
    } else {
        alert(`It's a TIE NPC:${computerScore} You:${humanScore}`)
    }
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
function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie (${humanChoice} vs. ${computerChoice})`
        console.log(`It's a tie! ${humanChoice} vs. ${computerChoice}`);
        return "tie"
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        result.textContent = `You WIN! Paper Beats Rock`
        console.log(`You WIN! Paper beats Rock`);
        return "human"
    } else if (computerChoice === "paper" && humanChoice == "rock") {
        result.textContent = `You LOSE! Paper Beats Rock`
        console.log('You LOSE! Paper beats Rock')
        return "pc"
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        result.textContent = `You LOSE! Rock Beats Scissors`
        console.log(`You LOSE! Rock beats Scissors`);
        return "pc"
    } else if (computerChoice === "scissors" && humanChoice == "rock") {
        result.textContent = `You WIN! Rock Beats Scissors`
        console.log('You WIN! Rock beats Scissors')
        return "human"
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        result.textContent = `You LOSE! Scissors Beats Paper`
        console.log(`You LOSE! Scissors beats Paper`);
        return "pc"
    } else if (computerChoice === "paper" && humanChoice == "scissors") {
        result.textContent = `You WIN! Scissors Beats Paper`
        console.log('You WIN! Scissors beats Paper')
        return "human"
    }
}