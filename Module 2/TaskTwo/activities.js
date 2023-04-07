//Set data structure 
//declaration 

//assigning an array at declaration
const firstNames = new Set(['Aman', 'Mearig', 'Temelso', 'Measho', 'Hani'])

//create empty set then assign it values

const lastNames = new Set()

//adding elements to the empty set
lastNames.add('Gezhie');
lastNames.add('Fitsum');
lastNames.add('Tes');
lastNames.add('Guish')
lastNames.add('Zare')

//check the size of a set

console.log(lastNames.size)

//check if our set contains  a given value

console.log(lastNames.has('Tes'))

//two ways to display the values of a set
//1.using foreach loop

firstNames.forEach(function (value) {
    console.log('The first name is: ' + value)
})

//2. using for-of loop
for (const x of lastNames.values()) {
    console.log(x)
}


//displaying the values of two set together

/*let fullNames = [];

for (let i = 0; i < firstNames.length && i < lastNames.length; i++) {

    const fullName = `${firstNames[i]}  ${lastNames[i]}`;
    fullNames.push(fullName)

}
console.log(fullNames)

let i = 0;
for (const firstName of firstNames) {
    const lastName = Array.from(lastNames)[i]; // Convert lastNames set to an array and get the value at index i
    const fullName = `${firstName} ${lastName}`;
    fullNames.push(fullName);
    i++;
}*/


//MAP(other type of data structure)
//declaration

const menu = new Map([
    ['Hamburger', 10],
    ['CheeseBurger', 12],
    ['Crispy chicken', 4],
    ['Fries', 6]
])

//to get the price we use get() method

let price = menu.get('CheeseBurger')
console.log(price)

//Display the values of menu

menu.forEach(function (value, key) {
    console.log("Dish: " + key + ", Price: " + value);
})

//storing the values of a map in a string

let text = ''
for (const y of menu.entries()) {
    text = text + '   ' + y;
}
console.log(text)