let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

//Console.log(generateTarget());

function getAbsoluteDistance(guess, target) {
    Math.abs(target - guess);
};

function compareGuesses(humanGuessInput, computerGuess, target) {
    if (humanGuessInput > 9) {
        window.alert("I'm sorry, your number is out of range. Please choose number between 0 and 9.");
    }

    if (Math.abs(humanGuessInput - target) <= Math.abs(computerGuess - target)) {
        return true;
    }
    if (Math.abs(humanGuessInput - target) >= Math.abs(computerGuess - target)) {
        return false;
    }
};

function updateScore(winner) {
    if (winner === 'human') {
        return humanScore++;
    } else if (winner === "computer") {
        return computerScore++;
    } else {

    }
};

function advanceRound() {
    return currentRoundNumber++;
};