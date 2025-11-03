







//move input into a variable
//get computer's choice
//compare who won the rock paper, or scissors battle
//prompt the user either with win or lose of the battle


//prompt user what their choice will be
function getHumanChoice (){
    let choice = prompt("rock, paper, or scissors?");
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

let human = getHumanChoice();
console.log(human);