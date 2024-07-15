
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
let resultdiv = document.querySelector("#result");

/* Event listeners */



function getComputerChoice() {
    const compOpts = ["rock", "paper", "scissors"];
    let compChoice = compOpts[Math.floor(Math.random() * compOpts.length)];
    return compChoice;
}


function playRound(playerSelect) {
    let computerChoice = getComputerChoice();
    if(playerSelect == "rock" && computerChoice == "scissors" ||
        playerSelect == "scissors" && computerChoice == "paper" ||
        playerSelect == "paper" && computerChoice == "rock"
    ) {
        humanScore++;
        result = `You win! Computer choice: ${computerChoice}; your points: ${humanScore}, computer points: ${computerScore}`;
    } else if (playerSelect == "rock" && computerChoice == "paper" ||
                playerSelect == "paper" && computerChoice == "scissors" ||
                playerSelect == "scissors" && computerChoice == "rock"
     ) {
        computerScore++;
        result = `You lose! Computer choice: ${computerChoice}; your points: ${humanScore}, computer points: ${computerScore}`;
    }
    resultdiv.innerHTML = result;
    return
}

playRound();

/*
function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
} */
/*
function getResults(result) {
    if(computerScore < humanScore) {
        winner.innerHTML = "You won!";
    } else if(computerScore > humanScore) {
        winner.innerHTML = "You lose!";
    } else {
        winner.innerHTML = "Draw!";
    }
    return result;
} */

/* playGame(); */
buttons.forEach(button => {
    button.addEventListener("click", function(){playRound(button.value)});
})