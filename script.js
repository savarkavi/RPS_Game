const playerDisplay = document.querySelector('.playerScore');
const computerDisplay = document.querySelector('.computerScore');
const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let result;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        console.log(playerChoice);
        getComputerChoice();
        getResult();
    });
});

function getComputerChoice () {
    const random = Math.floor(Math.random()*3+1);
    if(random === 1) {
        computerChoice = 'rock';
    }else if(random === 2) {
        computerChoice = 'paper';
    }else if(random === 3) {
        computerChoice = 'scissors';
    }
};

function getResult () {
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = ' Its a draw';
    }else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
              (playerChoice === 'paper' && computerChoice === 'scissors') ||
              (playerChoice === 'scissors' && computerChoice === 'rock')) {
              resultDisplay.textContent = "You lost";
              computerScore++;
              computerDisplay.textContent = `Computer Score: ${computerScore}`;
    }else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock') ||
              (playerChoice === 'scissors' && computerChoice === 'paper')) {
              resultDisplay.textContent = "You win";
              playerScore++;
              playerDisplay.textContent = `Player Score: ${playerScore}`;
}
};




