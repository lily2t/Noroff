//Concepts of Object Oriented Programming

//Encapsulation

// Let's create a Car class

class Car {
    //Any private variables or methods should add declaration in the begnning of a class
    #_year  // this is private variable

    //constructor of our class
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }

    //Here we set year to default current year  if user enters fail year

    set year(newYear) {
        let date = new Date()
        //checks if the year is greater than current year
        //and assigns the current year if true (Encapsulation)
        if (newYear > date.getFullYear()) {
            this.#_year = date.getFullYear()
        }
        else {
            this.#_year = newYear;
        }
    }
    //Gets the Yeat()
    get year() {
        return this.#_year;
    }
    // calculates the age of the car 
    age() {
        let date = new Date();
        return date.getFullYear() - this.#_year;
    }

}

//creates an instance of the class
let newCar = new Car('Toyota', 2024)
document.write(`${newCar.year}<br>`);
document.write(`${newCar._year}`);
