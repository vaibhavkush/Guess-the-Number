let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resetGame = document.getElementById('resetGame');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        message.style.color = 'green';
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }
});

resetGame.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    guessInput.value = '';
    message.textContent = '';
    message.style.color = '#333';
    submitGuess.disabled = false;
});

function endGame() {
    submitGuess.disabled = true;
}
