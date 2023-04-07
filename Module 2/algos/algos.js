//The two crucial techniques used in many algorithms

//1.Recursion example

//to find a factorial of user defined number

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1); //recursion: calling itself with deferent values 
    }
}
let isValidInput = false;
let userInput = parseFloat(prompt('Enter the number you want to factorize.'))
while (!isValidInput) {
    if (isNaN(userInput) || userInput < 0) {
        userInput = parseFloat(prompt('Please enter a valid number'));
    }
    else {
        isValidInput = true;
    }
}
let result = factorial(userInput);
alert(`The factorial of the number you entered is ${result}`);

//2. Dynamic programming(divide and conquer)
//find out n-th  fibonacci og a user defined number.

function fibonacci(num) {
    let fibo = []
    fibo[0] = 0
    fibo[1] = 1

    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[num]
}
//let fibArray = fibonacci(userInput);
//let fibString = fibArray.toString();
for (let i = 0; i <= userInput; i++) {
    fibString += fibArray[i] + ", ";
}
alert("The Fibonacci sequence up to " + userInput + " is: " + fibString);