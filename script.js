let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let choice;
    if(num === 1) {
        choice = "rock";
        return choice;
    }
    else if(num === 2) {
        choice = "paper";
        return choice;
    }else {
        choice = "scissors";
        return choice;
    }
}

function game() {
    for(i=0; i<5; i++) {
        let playerSelection = prompt("chose"); 
        let computerSelection = getComputerChoice();
        function playRound(playerSelection, computerSelection) {
            if((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "rock")) {
                    computerScore++;
                    console.log("you lose");
            }
            else if((playerSelection === "rock" && computerSelection === "scissors") ||
                    (playerSelection === "paper" && computerSelection === "rock") ||
                    (playerSelection === "scissors" && computerSelection === "paper")) {
                        playerScore++;
                        console.log("you win");
            }else {
                        console.log("it's a draw");
            }
        }
        playRound(playerSelection, computerSelection);
        console.log(`player: ${playerScore}`);
        console.log(`computer: ${computerScore}`);
    }
}

game();



