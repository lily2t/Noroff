//Even Odd checker
function evenOdd() {

    do {
        var userInput = parseFloat(prompt('Enter the number you want to check: '))
    } while (userInput < 0 || isNaN(userInput))

    if (userInput % 2 === 0) {
        document.write(`The number you entered ${userInput}:  even`)
    } else {
        document.write(`The number you entered ${userInput}:  odd`)
    }

}
evenOdd()