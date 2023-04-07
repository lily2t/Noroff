
//Accepts user input and push them to a user defined sized array
function getInput() {
    let userArray = [];
    let useInput = '';
    while (useInput !== null || isNaN(useInput)) {
        useInput = prompt('Please enter some input: ');
        if (useInput !== null) {
            userArray.push(useInput)
        }
    }
    return userArray;
}

//Accepts the user array and returns their multiplied value
const multiply = function () {
    let multi = 1;
    for (let i = 0; i < arguments.length; i++) {
        let numbers = parseFloat(arguments[i]);
        if (!isNaN(numbers)) {
            multi *= numbers;
        }
    }
    return multi;
}
document.write(multiply(...getInput()))