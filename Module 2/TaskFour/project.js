function randomName() {
    // generates a random string of 5 lowercase letters
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

function getRandomInt(min, max) {
    // returns a random integer between min (inclusive) and max (exclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const tableCount = 15; // number of tables in the restaurant
let tableSizes = Array.from(Array(tableCount).keys()).map(() => getRandomInt(2, 10));
// declares how many people can seat at table of certain index
// initializes tableSizes with an array of random integers between 2 and 9 (inclusive) for each table

let customers = []; // array to store information about customers

let sneakyAttackId = 0;
function sneakyAttack() {
    sneakyAttackId = setInterval(() => {
        // every 30 seconds, a new customer is added to the customers array with a random name and a random table index
        customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
        console.log("Shhhhhhhh");
        return;
    }, 30000);
    console.log();
}

function stopSneakyAttack() {
    if (sneakyAttackId != 0) {
        clearInterval(sneakyAttackId); // stops the interval set by sneakyAttack function
        console.log("Sneaky attack stopped.");
    }
}

function newCustomer() {
    const name = prompt("Hello, what is your name?");
    let size = 0;
    let askAboutTableSize = "";
    while (true) {
        if (size == 0) {
            askAboutTableSize = "Hello " + name + "! Table for how many people?";
        } else {
            askAboutTableSize = "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
        }
        size = parseInt(prompt(askAboutTableSize));
        if (size != 0 && Math.max(...tableSizes) >= size) {
            break;
        }
    }
    // assigns a table to the new customer based on their requested size and table availability
    let tableNumber = 0;
    if (tableSizes.indexOf(size) >= 0) {
        tableNumber = tableSizes.indexOf(size);
    } else {
        tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
    }
    alert("You got a table of number: " + tableNumber + ", which by default can fit " + tableSizes[tableNumber] + " people.");
    // adds the new customer to the customers array with their name and assigned table index
    customers.push([name, tableNumber]);
    console.log(customers);
}

function freeTable() {
    // prompts the user for the index of the table they want to free up
    let index = parseInt(prompt("Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
    while (index < 0 || index >= tableCount) {
        // prompts the user again if the input is invalid
        index = parseInt(prompt("Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
    }
    console.log(customers);
    // removes all customers seated at the specified table index
    for (let i = customers.length - 1; i >= 0; i--) {
        if (customers[i][1] == index)
            customers.splice(i, 1);
    }
    console.log(customers);
}
