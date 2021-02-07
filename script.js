'use strict';

const Person = function (firstName, birthYear) {
  this.name = firstName;
  this.age = 2021 - birthYear;
};

const jonas = new Person('Jonas', 2012);
const hll = new Person('Hll', 1992);
const ilo = new Person('ilo', 1990);

//console.log(jonas);
//console.log(hll);
//console.log(ilo);

//console.log(ilo instanceof Person);
//console.log(cemal instanceof Person);

// Prototypes
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();

BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
