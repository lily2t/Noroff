/*//create a class named person
class Student {
    name;
    surName;
    age;
    //The constructor of the class person
    constructor(name, surname, age) {
        this.name = prompt('Enter your first name');
        this.surname = prompt('Enter your surname.');
        //checks if the user enters a valid number data type
        if (isNaN(age)) {
            while (isNaN(age)) {
                age = prompt("Invalid input. Please enter a number:");
            }
        } else {
            this.age = parseInt(prompt('Enter your birthyear'));
        }

    }
    //create method greeting
    greetings() {
        return `Hello my name is ${this.name} ${this.surname}`;
    }
    //method birth year calculates and returns the age of the person
    birthYear() {
        const currentYear = new Date();
        return currentYear.getFullYear() - this.age;
    }
}
// Create four Student objects
const student1 = new Student();
const student2 = new Student();
const student3 = new Student();
const student4 = new Student();

// Call the greetings and birthYear methods on each object
document.writeln(student1.greetings());
document.writeln(student1.birthYear());
document.writeln(student2.greetings());
document.writeln(student2.birthYear());
document.writeln(student3.greetings());
document.writeln(student3.birthYear());
document.writeln(student4.greetings());
document.writeln(student4.birthYear());

*/
//inheritance Example
//create a pizza class
class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    info() {
        return 'I am basic pizza:' + this.name + 'I cost:' + this.price;
    }
}
//class ItalianPizza extends(inherits) class  Pizza
class ItalianPizza extends Pizza {
    constructor(name, region, price) {
        super(name, price)
        this.region = region;
    }
    info() {
        return super.info() + 'i am from europe.' + this.region
    }

}

//class AmericanPizza extends(inherits) class  Pizza
class AmericanPizza extends Pizza {
    constructor(name, sauce, price) {
        super(name, price)
        this.sauce = sauce;
    }
    info() {
        return super.info() + 'I use american sauce.' + this.sauce
    }

}

//create pizza objects

const pizzaItalia = new ItalianPizza('Very delicious', 5)
const pizzaAmerica = new AmericanPizza('Wonderful', 4)
console.log(pizzaAmerica.info())
console.log(pizzaItalia.info())
