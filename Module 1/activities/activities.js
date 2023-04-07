//for loop
/*let arr = ['some', 'people', 'are', 'stupid', 'in', 'this', 'world']
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ')

}
//the for of loop
let text = "<br>Some pretty long string.";
for (value of text) {
    document.write(value);
}
// the while loop
let isLessThanTen = true;
let i = 0;
while (isLessThanTen) {
    i++;
    if (i < 10) {
        isLessThanTen = true;
    }
    else {
        isLessThanTen = false;
    }
    document.write(isLessThanTen + '  ');
}

while loop activity

const numbers = [1, 3, 5, 2, 7, 9, 21, 45, 65, 49];
let j = 0;
while (j < numbers.length && numbers[i] % 7 !== 0) {
    document.write(numbers[i]);
    j++;
}
if (i < numbers.length) {
    document.write(`The first multiple of 7 found is ${numbers[i]}`);
}*/

/*let sum
function addNums(num1, num2, num3) {
    return num1 + num2 + num3
}
function multi(x,y,z) {
    /*let mul = 0
    for (let i = 0; i < arguments.length; i++) {
        mul *= arguments[i]
    }
    return x * y * z;
}*/


let numbers = []
let x = parseInt(prompt("Enter the first number"))
let y = parseInt(prompt("Enter the second number"))
let z = parseInt(prompt("Enter the third number"))

numbers.push(x)
numbers.push(y)
numbers.push(z)

numbers = numbers.slice(0, 1).concat(numbers.slice(2))


let mean = (numbers[0] + numbers[1]) / 2

document.write(mean)