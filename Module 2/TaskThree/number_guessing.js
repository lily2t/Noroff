function numGuessingGame(callback) {
    const myNumber = 17;
    do {
        var userGuess = parseFloat(prompt('Enter your guess.'))
    } while (isNaN(userGuess) || userGuess < 0)
    if (myNumber === userGuess) {
        alert('Congratulation! You are the winner. Welcome back')
    }
    else {
        setTimeout(() => {
            numGuessingGame(callback)
        }, 5000)

    }
}
function endGame() {
    alert('Thank You for playing come back.')
}
numGuessingGame(endGame)