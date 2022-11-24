let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');
let gameOver = document.querySelector('.gameover');

let playerScore = 0;
let computerScore = 0;

let scoreboard = document.querySelector('.score');
scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

const buttons = document.querySelectorAll('#btn');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.className);
    })
})

function scoreKeeper(a, b){
    if (a == 3){
        gameOver.textContent = "GAME OVER, COMPUTER WINS";
        let playerScore = 0;
        let computerScore = 0;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

        buttons.forEach(button => {
            button.addEventListener('click', function(){
                location.reload();
            })
        })
    } else if (b == 3){
        gameOver.textContent = "YOU WIN!";
        let playerScore = 0;
        let computerScore = 0;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

        buttons.forEach(button => {
            button.addEventListener('click', function(){
                location.reload();
            })
        })
    } else {
        return
    }
}

function playRound(playerSelection){

    let computerSelection = getComputerChoice();
    gameOver.textContent = "";

    if (playerSelection === computerSelection){
        console.log("TIE GAME!");
        gameOver.textContent = "TIE!!!";

    }   else if (playerSelection == ("ROCK") && (computerSelection == ("PAPER"))){
        console.log("COMPUTER WINS");
        computerScore++;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        scoreKeeper(computerScore, playerScore);

    }   else if (playerSelection == ("ROCK") && (computerSelection == ("SCISSORS"))){
        console.log("PLAYER WINS");
        playerScore++;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        scoreKeeper(computerScore, playerScore);

    }   else if (playerSelection == ("PAPER") && (computerSelection == ("SCISSORS"))){
        console.log("COMPUTER WINS");
        computerScore++;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        scoreKeeper(computerScore, playerScore);

    }   else if (playerSelection == ("PAPER") && (computerSelection == ("ROCK"))){
        console.log("PLAYER WINS");
        playerScore++;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        scoreKeeper(computerScore, playerScore);

    }   else if (playerSelection == ("SCISSORS") && (computerSelection == ("ROCK"))){
        console.log("COMPUTER WINS");
        computerScore++;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        scoreKeeper(computerScore, playerScore);

    }   else if (playerSelection == ("SCISSORS") && (computerSelection == ("PAPER"))){
        console.log("PLAYER WINS");
        playerScore++;
        scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        scoreKeeper(computerScore, playerScore);

    }   else {
        console.log("lol");
    };

};

function getComputerChoice(){
    number = Math.floor(Math.random() * 10);
    if (number < 3){
        return ("ROCK");
    }   else if (number > 6){
        return ("PAPER");
    }   else {
        return ("SCISSORS");
    };
};



