







//move input into a variable
//get computer's choice
//compare who won the rock paper, or scissors battle
//prompt the user either with win or lose of the battle


//prompt user what their choice will be
function getHumanChoice (){
    prompt("Rock, Paper, or Scissors?");
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

getHumanChoice();