//asynchronous function
function print(text) {
    document.getElementById('displayer').innerHTML = text;
}
/*
setTimeout(() => {  //helps to track the execution sequence 
    print('HELLO')  //by using nested timeout built-in function
    setTimeout(() => {
        print("My");
        setTimeout(() => {
            print("Dear");
            setTimeout(() => {
                print("Hello friend");
            }, 3000)
        }, 3000)
    }, 3000)
}, 3000)


//CALLBACK in javascript

//let's try to illustrate the use of callbacks with a simple calculator app

//uses a callback to call all the other functions
function calculator(num1, num2, operations) {
    return operations(num1, num2)
}

//returns the sum of the two numbers 
function add(num1, num2) {
    return num1 + num2
}

//returns the subtraction of the  two numbers
function subtraction(num1, num2) {
    return num1 - num2
}

//returns the multiplication of the two numbers
function multi(num1, num2) {
    return num1 * num2;
}

//returns the division of the two numbers
function divide(num1, num2) {
    return num1 / num2
}


//Accepts two numbers from user
let num1 = parseFloat(prompt('Enter the first number.'))
let num2 = parseFloat(prompt('Enter the second number.'))

//calls the four functions to do the four arithmetic operations on the two numbers 
let result = calculator(num1, num2, add)
let result1 = calculator(num1, num2, subtraction)
let result2 = calculator(num1, num2, multi)
let result3 = calculator(num1, num2, divide)


//displays the results on the page 
document.write(`The sum of the numbers is ${result} <br >`)
document.write(`The subtraction of the numbers is ${result1} <br >`)
document.write(`The multiplication of the numbers is ${result2} <br >`)
document.write(`The division of the numbers is ${result3}`)


//INTERVAL method in javascript

//break reminder app with interval method

let intervalId;
function startBreakReminder() {
    intervalId = setInterval(() => {    //sets the interval time
        displayBreakReminder();
    }, 500)
}
//displays the reminder
function displayBreakReminder() {
    document.write("Let\'s have lunch. <br >")
}
//stops the reminder
function stopIntervalReminder() {
    clearInterval(intervalId);
}

//starts the reminder
startBreakReminder();

//stop the reminder with timeout method

setTimeout(() => {
    stopIntervalReminder();
    document.write('The reminder is stopped.')
}, 1000)

//Promises in javascript

//create  the promise object
let myPromise = new Promise((resolve, reject) => {
    let x = 1;

    //executes if the condition is right and the execution is successful
    if (x == 0) {
        resolve('THIS IS RIGHT')
    }
    //executes if the execution is failed
    else {
        reject('THIS IS WRONG.')
    }
});
//this is how we access the promise object
myPromise.then(message => {
    document.write(message)
}).catch(error => {
    document.write(error)
});
*/
//Async/Await in javascript

async function display() {
    let my_promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('HELLO MEARIG.')
        }, 2000)
    })
    const result = await my_promise;
    print(result);
    document.write(`${result} <br >`);
    document.write(JSON.stringify(my_promise))
}
display();