//create a person class
class Person {

    constructor() {

        // Validate name input
        let name = '';
        const nameRegex = /^[a-zA-Z\s]*$/;
        do {
            name = prompt('Enter your name or press cancel to exit.');
        } while (!nameRegex.test(name));

        // Validate age input
        let age = 0;
        const ageRegex = /^\d+$/;
        do {
            const ageString = prompt('Enter your age or press cancel to exit.');
            if (ageString === null) {
                return;
            }
            age = parseInt(ageString);
        } while (!ageRegex.test(age) || age < 1 || age > 120);

        // Validate gender input
        let gender = '';
        const genderRegex = /^(male|female)$/i;
        do {
            gender = prompt('Enter your gender (male or female) or press cancel to exit.').toLowerCase();
        } while (!genderRegex.test(gender));

        // Set instance properties
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    speak() {
        return `<p>Hello my name is ${this.name}.</p><p>I am ${this.age} years old.</p>`;
    }

    getGender() {
        return `<p>And my gender is ${this.gender}.</p>`;
    }


}
//create instances of the class
const person1 = new Person()
const person2 = new Person()

//output results
document.write(`${person1.speak()}  ${person1.getGender()}`)
document.write(`${person2.speak()}  ${person2.getGender()}`)