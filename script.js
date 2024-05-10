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
    if(humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        computerScore++;
        console.log(`Your choice: ${humanChoice}, computer choice: ${computerChoice}`);
        console.log(`Your points: ${humanScore}, computer points: ${computerScore}`);
        return "You lose";
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        console.log(`Your choice: ${humanChoice}, computer choice: ${computerChoice}`);
        console.log(`Your points: ${humanScore}, computer points: ${computerScore}`);
        return "You win";
    } else {
        return "Draw";
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    playRound(humanSelection, computerSelection);
    
}

console.log(playGame());