
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
let resultdiv = document.querySelector("#result");
let winnerdiv = document.querySelector("#winner");

function btnDisable() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}


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
    } else if(computerChoice === playerSelect) {
        result = `It's a draw! Your points: ${humanScore}, computer points: ${computerScore}`;
    }
    resultdiv.innerHTML = result;  
    return
}


playRound();

buttons.forEach(button => {
    button.addEventListener("click", function(){playRound(button.value)});
})