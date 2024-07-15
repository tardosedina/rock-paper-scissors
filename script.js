
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");
let resultdiv = document.querySelector("#result");
let winnerdiv = document.querySelector("#winner");

function btnDisable() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function showRules() {
    let x = document.getElementById("rules");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function getComputerChoice() {
    const compOpts = ["rock", "paper", "scissors"];
    let compChoice = compOpts[Math.floor(Math.random() * compOpts.length)];
    return compChoice;
}


function playRound(playerSelect) {
    let computerChoice = getComputerChoice();
    if(playerSelect == "Rock" && computerChoice == "scissors" ||
        playerSelect == "Scissors" && computerChoice == "paper" ||
        playerSelect == "Paper" && computerChoice == "rock"
    ) {
        humanScore++;
        result = `You win! Computer choice: ${computerChoice}; your points: ${humanScore}, computer points: ${computerScore}`;
    } else if (playerSelect == "Rock" && computerChoice == "paper" ||
                playerSelect == "Paper" && computerChoice == "scissors" ||
                playerSelect == "Scissors" && computerChoice == "rock"
     ) {
        computerScore++;
        result = `You lose! Computer choice: ${computerChoice}; your points: ${humanScore}, computer points: ${computerScore}`;
    } else if(computerChoice === playerSelect) {
        result = `It's a draw! Your points: ${humanScore}, computer points: ${computerScore}`;
    }
    if(humanScore == 5 || computerScore == 5) {
        winner = " Game over!";
        winnerdiv.innerHTML = winner;
        btnDisable();
    } 
    resultdiv.innerHTML = result;
    
    return
}


playRound();

buttons.forEach(button => {
    button.addEventListener("click", function(){playRound(button.value)});
})