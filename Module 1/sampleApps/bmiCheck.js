//Accepts an input from user and checks for validity
function check_BMI() {
    let userOne_height, userOne_weight, userTwo_height, userTwo_weight;
    do {
        userOne_weight = parseFloat(prompt('Enter your weight one: '))
    } while (userOne_weight < 0 || isNaN(userOne_weight))
    do {
        userOne_height = parseFloat(prompt('Enter your height one: '))
    } while (userOne_height < 0 || isNaN(userOne_height))
    do {
        userTwo_weight = parseFloat(prompt('Enter your weight two: '))
    } while (userTwo_height < 0 || isNaN(userTwo_height))
    do {
        userTwo_height = parseFloat(prompt('Enter your height two: '))
    } while (userTwo_weight < 0 || isNaN(userTwo_weight))

    //calculates for BODY MASS INDEX
    let userOneBMI, userTwoBMI, higherBMI;
    userOneBMI = userOne_weight / (userOne_height ** 2);
    userTwoBMI = userTwo_weight / (userTwo_height ** 2);

    // checks whose BMI is higher and displays the highest one

    if (userOneBMI > userTwoBMI) {
        document.write(`The BMI of user one is ${userOneBMI} and it is the highest one.`)
    }
    else {
        document.write(`The BMI of user Two is ${userTwoBMI} and it is the highest one.`)
    }

}
check_BMI()