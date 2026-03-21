let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

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

function getHumanChoice()
{
    value = prompt('Please enter rock, paper or scissors');
    return value.toLowerCase();
}


function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        console.log("its a draw");
    }
    else if(humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore++;
        console.log("HUMAN WINS ROCK BEATS SCISSORS")
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore++;
        console.log("HUMAN WINS PAPER BEATS ROCK")
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        console.log("HUMAN WINS SCISSORS BEATS PAPER")
    }
    else{
        computerScore++;
        console.log("COMPUTER WINS")
    }
    rounds++;
}

playRound(humanChoice, computerChoice)


console.log(getComputerChoice())
console.log(humanScore, computerScore);
console.log(rounds)
