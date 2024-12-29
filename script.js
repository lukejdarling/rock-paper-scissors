// get computer choice
// create array of rock paper scissors
// math.random to select a choice of that array
// return that value

let humanScore = 0;
let computerScore = 0;

let roundNumber = 1;

function getComputerChoice(){

    const moves = ["rock", "paper", "scissors"];

    let choice = Math.floor(Math.random() * moves.length);

    return moves[choice];

}

function getHumanChoice(){
    
    while(true){

        let choice = prompt("What is your choice? Rock, Paper or Scissors?").toLowerCase();

        if(choice === "rock" || choice === "paper" || choice === "scissors"){
            return choice;

        } else {
            alert("Enter Rock, Paper or Scissors.");
        }
    }
    
}

function playRound(humanChoice, computerChoice){

    switch(humanChoice){
        case "rock":
            switch(computerChoice){
                case "scissors":
                    alert("You win!");
                    humanScore++;
                    break;
                
                case "paper":
                    alert("You lose!");
                    computerScore++;
                    break;

                case "rock":
                    alert("Draw!");
                    break;
                    
                default:
                    alert("Invalid!");
                    break;
            }

            break;

        case "paper":
            switch(computerChoice){
                case "rock":
                    alert("You win!");
                    humanScore++;
                    break;
                
                case "paper":
                    alert("Draw!");
                    break;

                case "scissors":
                    alert("You lose!");
                    computerScore++
                    break;

                default:
                    alert("Invalid!");
                    break;
            }

            break;

        case "scissors":
            switch(computerChoice){
                case "rock":
                    alert("You lose!");
                    computerScore++;
                    break;
                
                case "paper":
                    alert("You win!");
                    humanScore++;
                    break;

                case "scissors":
                    alert("Draw!");
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

function playGame(){
    while (roundNumber <= 5){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        if(roundNumber === 5){
            if(humanScore > computerScore){
                alert(`Game over! You win! Your score is ${humanScore} and the computer scored ${computerScore}`)
            } else if (humanScore < computerScore){
                alert(`Game over! You lose! Your score is ${humanScore} and the computer scored ${computerScore}`)
            } else {
                alert(`Game over! Draw! Your score is ${humanScore} and the computer scored ${computerScore}`)
            }
            
        }
            roundNumber++
    }

}


playGame();


