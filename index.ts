class Vehicle {
    private _make: string;
    private _model: string;

    constructor(make: string, model: string) {
        this._make = make;
        this._model = model;
    }
    public get make(): string {
        return this._make;
    }
    public get model(): string {
        return this._model;
    }
    public startEngine(): void {
        console.log("Vroom! Engine is started");
    }
}

//Define a subclass called "car" inherits from "vehicle"

class Car extends Vehicle {
    private _numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number) {
        super(make, model);
        this._numberOfDoors = numberOfDoors;
    }
    public get numberOfDoors(): number {
        return this._numberOfDoors;
    }
}
// Create a new instance of "car" Class
const myCar = new Car("Toyota", "Corolla", 4);
console.log(`Make: ${myCar.make}`);
console.log(`Model: ${myCar.model}`);
console.log(`Number of doors: ${myCar.numberOfDoors}`);
myCar.startEngine();