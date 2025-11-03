


// Play 5 rounds of rock paper scissors
function playGame (){
    // Declare players score variables
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i ++){
        // Get choices from players
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    // will determine who gets a point
    if (winner === "pc"){
        computerScore++;
    } else if (winner == "human"){
        humanScore++;
    } 
    }
    // End of game did you win?
    if (humanScore > computerScore){
        alert(`You WON! NPC: ${computerScore} You: ${humanScore}`);
    } else if (humanScore < computerScore) {
        alert(`You LOST! NPC: ${computerScore} You: ${humanScore}`)
    } else {
        alert(`It's a TIE NPC:${computerScore} You:${humanScore}`)
    }
}

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
        return "human"
    } else if (computerChoice === "paper" && humanChoice == "rock") {
        console.log('You LOSE! Paper beats Rock')
        return "pc"
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You LOSE! Rock beats Scissors`);
        return "pc"
    } else if (computerChoice === "scissors" && humanChoice == "rock") {
        console.log('You WIN! Rock beats Scissors')
        return "human"
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You LOSE! Scissors beats Paper`);
        return "pc"
    } else if (computerChoice === "paper" && humanChoice == "scissors") {
        console.log('You WIN! Scissors beats Paper')
        return "human"
    }
}



playGame();