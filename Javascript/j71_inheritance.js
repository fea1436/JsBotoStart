class Vehicle {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }

    move() {
        console.log('I Move');
    }
}

class Car extends Vehicle {
    constructor (name, color, speed) {
        super(name, color);
        this.speed = speed;
    }

    speedGo() {
        console.log(`Car name is: ${this.name}`);
        console.log(`Car color is: ${this.color}`);
        console.log(`I going ${this.speed} km/hour`);
    }

    colorChange(newColor) {
        this.color = newColor;
    }
}

const firstCar = new Car("Banz", "Black", 280);
firstCar.speedGo();
firstCar.move();