// get computer choice
// create array of rock paper scissors
// math.random to select a choice of that array
// return that value

let humanScore = 0;

let computerScore = 0;

const roundNumberDiv = document.querySelector(".round-number");
const resultDiv = document.querySelector(".result");

let roundNumber = 1;

let humanScoreDiv = document.querySelector(".human");
let computerScoreDiv = document.querySelector(".computer");

const choices = document.querySelectorAll("button");

choices.forEach(button => button.addEventListener("click", handleMove));


function handleMove(e){

    let humanChoice = e.target.className;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    roundNumber++;
    console.log(roundNumber);
    if(roundNumber > 5){
        roundNumberDiv.innerText = "5";
        if(humanScore > computerScore){
            resultDiv.innerText = "Game Over You Win!";
        } else if (computerScore > humanScore){
            resultDiv.innerText = "Game Over You Win!";
        } else {
            resultDiv.innerText = "Game Over It Is A Draw!";
        }
    } else {
        roundNumberDiv.innerText = roundNumber;
    }
}

function getComputerChoice(){

    const moves = ["rock", "paper", "scissors"];

    let choice = Math.floor(Math.random() * moves.length);

    return moves[choice];

}


function playRound(humanChoice, computerChoice){

    switch(humanChoice){
        case "rock":
            switch(computerChoice){
                case "scissors":
                    resultDiv.innerText = "You win!";
                    humanScore++;
                    humanScoreDiv.innerText = humanScore;
                    break;
                
                case "paper":
                    resultDiv.innerText = "Computer win!";
                    computerScore++;
                    computerScoreDiv.innerText = computerScore;
                    break;

                case "rock":
                    resultDiv.innerText = "A draw!";
                    break;
                    
                default:
                    alert("Invalid!");
                    break;
            }

            break;

        case "paper":
            switch(computerChoice){
                case "rock":
                    resultDiv.innerText = "You win!";
                    humanScore++;
                    humanScoreDiv.innerText = humanScore;
                    break;
                
                case "paper":
                    resultDiv.innerText = "A draw!";
                    break;

                case "scissors":
                    resultDiv.innerText = "Computer win!";
                    computerScore++
                    computerScoreDiv.innerText = computerScore;
                    break;

                default:
                    alert("Invalid!");
                    break;
            }

            break;

        case "scissors":
            switch(computerChoice){
                case "rock":
                    resultDiv.innerText = "Computer win!";
                    computerScore++;
                    computerScoreDiv.innerText = computerScore;

                    break;
                
                case "paper":
                    resultDiv.innerText = "You win!";
                    humanScore++;
                    humanScoreDiv.innerText = humanScore;
                    break;

                case "scissors":
                    resultDiv.innerText = "A draw!";
                    break;

                default:
                    alert("Invalid!");
                    break;
            }

            break;

        default:
            alert("Invalid");
            break;
    }

}
