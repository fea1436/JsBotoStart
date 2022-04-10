class Car {
    constructor (name, color, speed) {
        this.name = name;
        this.color = color;
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

const firstCar = new Car('Benz', 'Black', 280);
firstCar.speedGo();
firstCar.colorChange('Red');
firstCar.speedGo();

console.log(firstCar.name);
console.log(firstCar.color);
console.log(firstCar.speed);