let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const result = document.querySelector('#result-message');
const yourChoice = document.querySelector('#your-choice');
const computerChoice = document.querySelector('#computer-choice');
let userScoreDisplay = document.querySelector('#user-score');
let computerScoreDisplay = document.querySelector('#computer-score');
const resetButton = document.querySelector('#reset-button');

const getCompChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

const drawGame = () => {
    result.textContent = "It's a draw!";
    result.style.color = 'black';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        result.textContent = `You win! ${userChoice} beats ${compChoice}`;
        result.style.color = 'green';
    } else {
        computerScore++;
        result.textContent = `You lose! ${compChoice} beats ${userChoice}`;
        result.style.color = 'red';
    }
}

const updateScores = (result) => {
    userScoreDisplay.textContent = `User Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

const playGaame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock' ) {
            userWin = compChoice !== 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice !== 'scissors' ? false : true;
        } else if (userChoice === 'scissors') {
            userWin = compChoice !== 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
        updateScores(result);
        
    }
        //yourChoice.innerText = `You chose: ${userChoice}`;
        //computerChoice.innerText = `Computer chose: ${compChoice}`;
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    playGaame(userChoice);
  });
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    result.textContent = "Game reset! Make your choice.";
    result.style.color = 'black';
    userScoreDisplay.textContent = `User Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
});
