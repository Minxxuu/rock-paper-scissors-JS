let humanScore = 0;
let computerScore = 0;
let rounds = 1;

const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener("click", () =>playRound("rock", getComputerChoice()))

const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click" ,() => playRound("paper", getComputerChoice()))

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click",() => playRound("scissors", getComputerChoice()))

const roundsDiv = document.querySelector("#rounds")

const score1 = document.querySelector("#humanScore")
const score2 = document.querySelector("#computerScore")
const result = document.querySelector("#result")

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;    
    if (choice == 1)
    {
        return 'rock';
    }
    else if (choice == 2)
    {
        return 'paper';
    }
    else if (choice == 3)
    {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice)
    {
        result.textContent = "DRAW!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore++;
        result.textContent = "HUMAN WINS ROCK BEATS SCISSORS"
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore++;
        result.textContent = "HUMAN WINS PAPER BEATS ROCK"
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        result.textContent = "HUMAN WINS SCISSORS BEATS PAPER"
    }
    else{
        computerScore++;
        result.textContent = "COMPUTER WINS"
    }
    score1.textContent = humanScore;
    score2.textContent = computerScore;
    rounds++;
    roundsDiv.textContent = rounds;
    roundCheck();

}
function roundCheck()
{
    if(rounds === 6)
    {
        rockBtn.setAttribute("disabled" , "");
        paperBtn.setAttribute("disabled" , "");
        scissorsBtn.setAttribute("disabled" , "");

        if(humanScore === computerScore)
        {
            result.textContent = "ITS A MATCH DRAW"
        }
        else if(humanScore > computerScore)
        {
            result.textContent = "Human wins"
        }
        else{
            result.textContent = "computer wins"
        }
        restart.removeAttribute("disabled" , "")
        restart.addEventListener("click", () => rockBtn.removeAttribute("disabled" , "")
                                            ,paperBtn.removeAttribute("disabled" , "")
                                            ,scissorsBtn.removeAttribute("disabled" , ""))
    }
}

const restart = document.createElement("button")
restart.setAttribute("disabled" , "")
restart.textContent = "PLAY AGAIN?"
document.body.appendChild(restart)
        
// function playGame()
// {
//     for(let i = 6; rounds < i; rounds++)
//     {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//         console.log("The human chose " + humanChoice + " " + " The computer chose " + computerChoice)
//         console.log(humanScore, computerScore);
//         console.log(rounds)
//     }
// }


//playGame();


// console.log("Would you like to play again?")
// let answer = prompt().toLowerCase();
// if(answer == "yes")
// {
//     playGame();
// }
// else
// {
//     console.log("GOODBYE");
// }

