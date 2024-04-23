var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this._make = make;
        this._model = model;
    }
    Object.defineProperty(Vehicle.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.startEngine = function () {
        console.log("Vroom! Engine is started");
    };
    return Vehicle;
}());
//Define a subclass called "car" inherits from "vehicle"
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, numberOfDoors) {
        var _this = _super.call(this, make, model) || this;
        _this._numberOfDoors = numberOfDoors;
        return _this;
    }
    Object.defineProperty(Car.prototype, "numberOfDoors", {
        get: function () {
            return this._numberOfDoors;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}(Vehicle));
// Create a new instance of "car" Class
var myCar = new Car("Toyota", "Corolla", 4);
console.log("Make: ".concat(myCar.make));
console.log("Model: ".concat(myCar.model));
console.log("Number of doors: ".concat(myCar.numberOfDoors));
myCar.startEngine();
