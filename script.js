function getComputerChoice() {
    const compOpts = ["rock", "paper", "scissors"];
    let compChoice = compOpts[Math.floor(Math.random() * compOpts.length)];
    return compChoice;
}

function getHumanChoice() {
    let humChoiceOrig = prompt("Enter your choice:");
    let humChoice = humChoiceOrig.toLowerCase();
    return humChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
}