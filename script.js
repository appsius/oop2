'use strict';

const Person = function (firstName, birthYear) {
  this.name = firstName;
  this.age = 2021 - birthYear;
};

const jonas = new Person('Jonas', 2012);
const hll = new Person('Hll', 1992);
const ilo = new Person('ilo', 1990);

console.log(jonas);
console.log(hll);
console.log(ilo);

console.log(ilo instanceof Person);
console.log(cemal instanceof Person);
