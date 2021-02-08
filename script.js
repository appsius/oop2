'use strict';

//FIX - What is a first-class citizen functions

//const Person = function (firstName, birthYear) {
//  this.name = firstName;
//  this.age = 2021 - birthYear;
//};

//const jonas = new Person('Jonas', 2012);
//const hll = new Person('Hll', 1992);
//const ilo = new Person('ilo', 1990);

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

//***********************************************
// INHERETENCE BETWEEN CLASS CONSTRUCTORS
//**************** 1 ****************************
//const Person = function (firstName, birthYear) {
//  this.firstName = firstName;
//  this.birthYear = birthYear;
//};

//Person.prototype.calcAge = function () {
//  return 2020 - this.birthYear;
//};

//const Student = function (firstName, birthYear, course) {
//  Person.call(this, firstName, birthYear);
//  this.course = course;
//};

//Student.prototype = Object.create(Person.prototype);

//Student.prototype.introduce = function () {
//  console.log(`My name is ${this.firstName}, I am studying at ${this.course}`);
//};

//const mik = new Student('Mik', 1999, 'Computer Sci.');

//console.log(mik);

//mik.introduce();
//console.log(mik.calcAge());

//console.log(mik instanceof Person);
//console.log(mik instanceof Student);
//console.log(mik instanceof Object);

//console.log(mik.__proto__);
//console.log(mik.__proto__.__proto__);

//********************* 2 ****************************
//const Person = function (firstName, birthYear) {
//  this.firstName = firstName;
//  this.birthYear = birthYear;
//};

//Person.prototype.calcAge = function () {
//  console.log(2021 - this.birthYear);
//};

//const Student = function (firstName, birthYear, course) {
//  Person.call(this, firstName, birthYear);
//  this.course = course;
//};

//Student.prototype = Object.create(Person.prototype);

//Student.prototype.introduce = function () {
//  console.log(
//    `my name is ${this.firstName} and my department is ${this.course}`
//  );
//};

//const mk = new Student('Mike', 1999, 'Political Science');

//console.log(mk);
//mk.calcAge();
//mk.introduce();
//console.log(mk.__proto__);
//console.log(mk.__proto__.__proto__);
//console.log(mk instanceof Student);
//console.log(mk instanceof Person);
//console.log(mk instanceof Object);

//********************* 3 ****************************
//const Person = function (firstName, birthYear) {
//  this.firstName = firstName;
//  this.birthYear = birthYear;
//};

//const Student = function (firstName, birthYear, course) {
//  Person.call(this, firstName, birthYear);
//  this.course = course;
//};

//Person.prototype.calcAge = function () {
//  return 2021 - this.birthYear;
//};

//Student.prototype = Object.create(Person.prototype);

//Student.prototype.introduce = function () {
//  console.log(`my name is ${this.firstName} and my age is ${this.calcAge()}`);
//};

//const il = new Student('İlyas', 1994, 'Computer Science');

//console.log(il);
//console.log(il.calcAge());
//il.introduce();

//console.log(il.__proto__);
//console.log(il.__proto__.__proto__);

//console.log(il instanceof Student);
//console.log(il instanceof Person);
//console.log(il instanceof Object);
