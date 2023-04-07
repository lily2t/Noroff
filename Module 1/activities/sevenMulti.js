/* let i = 0;
let numberArray = []
do {
    let number = parseInt(prompt('Enter a number: '))
    numberArray.push(number);
    i++;
} while (i < 10)

let arrlen = numberArray.length;
let j = 0;
while (j < arrlen) {
    if (numberArray[j] % 7 == 0) {
        document.write(`A number divisible by 7 is found and it is ${numberArray[j]} , `)
        break;
    }
    else {
        document.write(numberArray[j])
    }
    j++
} */

/* let deadLock = [3, 5, 6, 9];
let arrayleng = deadLock.length; */
let bool = true;

while (bool) {
    let userInput = parseFloat(prompt('Enter a number.'))

    if (userInput % 2 == 0) {
        alert(`The number you entered was even:  ${userInput}`)
        break;
    }
    else {
        continue;
    }
}

