class Car {
    constructor(make, model, year, color, speed = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = speed;
    }

    accelerate(amount) {
        this.speed += amount;
    }

    decelerate(amount) {
        this.speed = Math.max(0, this.speed - amount); 
    }

    getInfo() {
        return `${this.make} ${this.model} (${this.year}), Kolor: ${this.color}, Prędkość: ${this.speed} km/h`;
    }
}

const cars = [
    new Car('Toyota', 'Corolla', 2020, 'Czerwony', 100),
    new Car('Honda', 'Civic', 2018, 'Niebieski', 90),
    new Car('Ford', 'Focus', 2019, 'Czarny', 90),
    new Car('BMW', 'X5', 2020, 'Biały', 140),
    new Car('Audi', 'A4', 2021, 'Szary', 150),
    new Car('Peugeot', '208', 2013, 'Czarny', 100)
];


const averageSpeed = cars.reduce((acc, car) => acc + car.speed, 0) / cars.length;
console.log(`Średnia prędkość samochodów: ${averageSpeed} km/h`);


const specifiedYear = 2020;
const carsInYear = cars.filter(car => car.year === specifiedYear);
console.log(`Samochody wyprodukowane w roku ${specifiedYear}:`);
carsInYear.forEach(car => console.log(`${car.make} ${car.model}`));
