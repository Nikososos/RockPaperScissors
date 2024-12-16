let computerChoice = Math.random();

function getComputerChoice() {
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "scissors";
        } else 
        { computerChoice = "paper";
        }
}

getComputerChoice()


function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?")

}

getHumanChoice()


