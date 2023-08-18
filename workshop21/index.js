//Write code that defines a constructor function called Car that creates a new object with the following properties: make, model, and year.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
}
getDescription () {
    return `${this.year} ${this.make} ${this.model}`;
}
}
  

//Define the ElectricCar function as a subclass of Car. Include an additional property called range that represents the range of the electric car in miles.

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year); 
        this.range = range;
    }

    getDescription() {
        return `${super.getDescription()} Range: ${this.range} miles`;
    }
}

//Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300,

const TeslaS = new ElectricCar('Tesla', 'Model S', 2019, 300);

const print = TeslaS.getDescription();

console.log(print);
