let humanScore = 0;
let computerScore = 0;
let rounds = 1;

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
    if(humanChoice == computerChoice)
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

}

function playGame()
{
    for(let i = 6; rounds < i; rounds++)
    {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("The human chose " + humanChoice + " " + " The computer chose " + computerChoice)
        console.log(humanScore, computerScore);
        console.log(rounds)
    }
}


playGame();

if(rounds === 6)
{
    if(humanScore === computerScore)
    {
        console.log("ITS A MATCH DRAW")
    }
    else if(humanScore > computerScore)
    {
        console.log("Human wins")
    }
    else{
        console.log("computer wins")
    }
}

console.log("Would you like to play again?")
let answer = prompt().toLowerCase();
if(answer == "yes")
{
    playGame();
}
else
{
    console.log("GOODBYE");
}

