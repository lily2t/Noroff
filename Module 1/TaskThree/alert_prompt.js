//accept input from user
let x = parseFloat(prompt("Please enter a number between 0 and 1"));

//check the input and generates repeated alert if not correct
while (true) {



    /* if (isNaN(x) || x < 0 || x > 1) {
        x = prompt("Invalid number! Please enter a number between 0 and 1");
    }
    else if (x < 0 || x > 0.5) {
        alert("The number you entered was not correct.");
    }
    else {
        alert('Your number was:' + ' ' + x);
    } */

    x = (isNaN(x) || x < 0 || x > 1)
        ? prompt("Invalid number! Please enter a number between 0 and 1")
        : (x < 0 || x > 0.5)
            ? alert("The number you entered was not correct.")
            : alert('Your number was:' + ' ' + x)

}

