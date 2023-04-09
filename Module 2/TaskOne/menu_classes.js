//create the main/parent class

class Menu {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    info() {
        return `This is ${this.name} and the price is ${this.price} `;
    }


}
//pizza class is a child of Menu
class Pizza extends Menu {
    constructor(name, price, ingredients) {
        super(name, price)
        this.ingredients = ingredients;

    }
    info() {
        return super.info() + ` and the content is ${this.ingredients}`
    }

}
//pancake class is a child of Menu
class Pancake extends Menu {
    constructor(name, price, sweet) {
        super(name, price)
        this.sweet = Boolean(sweet);

    }

    //this method checks wether the pancake should be served sweet or not.
    info() {
        if (this.sweet) {
            return super.info() + 'The pancake has to be served sweet.'
        }
        else {
            return super.info() + 'The pancake has to be served without sweet.'
        }
    }

}
//pasta class is a child of Menu
class Pasta extends Menu {
    #_isVegetarian;
    constructor(name, price, isVegetarain) {
        super(name, price)
        this.isVegetarain = Boolean(isVegetarain);
    }

    //this method checks whether the pasta has meat or not
    info() {
        if (this.isVegetarain) {
            return super.info() + 'Your pasta is vegetarian'
        }
        else {
            return super.info() + 'Your pasta is not vegetarian'
        }
    }

}

//create an instances of our classes
const pizza = new Pizza('Pizza Margherita', 10, ['tomato sauce', 'mozzarella cheese']);
console.log(pizza.info());

const pancake = new Pancake('Sweet pancake', 5, true);
console.log(pancake.info());

const pasta = new Pasta('Spaghetti Bolognese', 8, false);
console.log(pasta.info());
