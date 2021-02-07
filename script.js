'use strict';

//FIX - What is a first-class citizen functions

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

// Prototypes - //
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}'s speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}'s speed is ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spd) {
    this.speed = spd * 1.6;
  }
}

const f = new Car('Ford', 300);

//f.accelerate();
//f.accelerate();
//f.accelerate();
//f.accelerate();
//f.accelerate();
//f.accelerate();
//f.brake();
//f.brake();
//f.brake();

//console.log(f.speedUS);

//f.speedUS = 600;
//console.log(f.speed);
//console.log(f.speed);
//console.log(f.speed);
//console.log(f.speed);
//console.log(f.speed);
