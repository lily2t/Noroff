//illustrates the inheritance nature of javascript

//create a template class to be used as a blueprint(parent class)

class House {
    // constructor
    constructor(name) {
        this.name = name;
    }
    //method which can be used by all subclasses
    info() {
        return `This house is:  ${this.name} . <br>`
    }
    static greeting(){
        return 'Hello i am the static method.'
    }
}
//creates a subclass which uses the properties of parent class
class Villa extends House {
    //takes the name property of the parent class
    constructor(name, prestige) {
        super(name)
        this.prestige = prestige;
    }
    // inherits the parent method and add it's own info to it
    info() {
        return `${super.info()} And it has ${this.prestige} out of 10 `
    }

}
//another subclass which inherits only the properties of parent class
class DetachedHouse extends House {
    constructor(name, hasGarden) {
        super(name)
        this.DetachedHouse = hasGarden;
    }
}
// create objects of the classes
let villa = new Villa('Not so beautiful', 1)
let detachedHouse = new DetachedHouse('Small house but with a garden', true)

//display the output
document.writeln(villa.info())
document.write(detachedHouse.info())