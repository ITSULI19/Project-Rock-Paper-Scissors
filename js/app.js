// This is a simple Rock-Paper-Scissors game where the user plays against the computer.

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (!choices.includes(choice));
    return choice;
}


function playRound(humanChoice, computerChoice, scores){
    let humanChoiceNormalized = humanChoice.toLowerCase();
    let computerChoiceNormalized = computerChoice.toLowerCase();

    if (humanChoiceNormalized === computerChoiceNormalized) {
        console.log("It's a tie!");
        return 0;
    } else if (
        (humanChoiceNormalized === "rock" && computerChoiceNormalized === "scissors") ||
        (humanChoiceNormalized === "paper" && computerChoiceNormalized === "rock") ||
        (humanChoiceNormalized === "scissors" && computerChoiceNormalized === "paper")
    ) {
        console.log("You win!");
        scores.human++;
        return 1;
    } else {
        console.log("Computer wins!");
        scores.computer++;
        return -1;
    }
}


function playGame(){

    const scores = { human: 0, computer: 0 };

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection, scores);
        console.log(`Score: You ${scores.human} - Computer ${scores.computer}`);
    }

    if (scores.human > scores.computer) {
        console.log("You win the game!");
    } else if (scores.computer > scores.human) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();