'use strict';

//NOTE NOTE NOTE NOTE NOTE

// What is a first-class citizen functions

// polymorphism - when a method is not available in the current scope or __proto__ then it will look at the
// outside or inner __proto__

// data encapsulation and privacy

//NOTE NOTE NOTE NOTE NOTE

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
//class Car {
//  constructor(make, speed) {
//    this.make = make;
//    this.speed = speed;
//  }

//  accelerate() {
//    this.speed += 10;
//    console.log(`${this.make}'s speed is ${this.speed}`);
//  }

//  brake() {
//    this.speed -= 5;
//    console.log(`${this.make}'s speed is ${this.speed}`);
//  }

//  get speedUS() {
//    return this.speed / 1.6;
//  }

//  set speedUS(spd) {
//    this.speed = spd * 1.6;
//  }
//}

//const f = new Car('Ford', 300);

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

// START
//****************************************************
// INHERETENCE BETWEEN CLASS CONSTRUCTORS - 08.02.2021
//**************** 1 *********************************
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

//***********************************************
// CHALLANGE 3
//**************** 1 ****************************
//class Car {
//  constructor(make, speed) {
//    this.make = make;
//    this.speed = speed;
//  }

//  accelerate() {
//    this.speed += 10;
//    console.log(`${this.make} is going at ${this.speed} km/h speed`);
//  }

//  brake() {
//    this.speed -= 5;
//    console.log(`${this.make} is going at ${this.speed} km/h speed`);
//    return this;
//  }
//}

//class EV extends Car {
//  #charge;
//  constructor(make, speed, charge) {
//    super(make, speed);
//    this.#charge = charge;
//  }

//  chargeBattery(chargeTo) {
//    this.#charge += chargeTo;
//    return this;
//  }

//  accelerate() {
//    this.speed += 20;
//    this.#charge--;
//    console.log(
//      `${this.make} is going at ${this.speed} km/h, with a charge of ${
//        this.#charge
//      }%`
//    );
//    return this;
//  }
//}

//const rivian = new EV('Rivian', 120, 23);

//console.log(rivian);
//console.log(rivian.__proto__.__proto__);

//console.log(rivian instanceof Object);
//console.log(rivian instanceof Car);
//console.log(rivian instanceof EV);

//rivian
//  .accelerate()
//  .brake()
//  .chargeBattery(70)
//  .accelerate()
//  .brake()
//  .chargeBattery(40)
//  .accelerate();

//**************** 2 ****************************
//class Car {
//  constructor(make, speed) {
//    this.make = make;
//    this.speed = speed;
//  }

//  accelerate() {
//    this.speed += 10;
//    console.log(`${this.make}'s speed is ${this.speed}`);
//  }

//  brake() {
//    this.speed -= 5;
//    console.log(`${this.make}'s speed is ${this.speed}`);
//    return this;
//  }

//  get speedUS() {
//    return this.speed / 1.6;
//  }

//  set speedUS(spd) {
//    this.speed = spd * 1.6;
//  }
//}

//class EV extends Car {
//  #charge;
//  constructor(make, speed, charge) {
//    super(make, speed);
//    this.#charge = charge;
//  }

//  chargeBattery(chargeTo) {
//    this.#charge += chargeTo;
//    return this;
//  }

//  accelerate() {
//    this.speed += 20;
//    this.#charge--;
//    console.log(
//      `${this.make} is going at ${this.speed} km/h speed with ${
//        this.#charge
//      }% charge...`
//    );
//    return this;
//  }
//}

//const rivian = new EV('Rivian', 120, 23);

//console.log(rivian);
//console.log(rivian.__proto__);
//console.log(rivian.__proto__.__proto__);

//console.log(rivian instanceof EV);
//console.log(rivian instanceof Car);
//console.log(rivian instanceof Object);

//rivian
//  .accelerate()
//  .accelerate()
//  .accelerate()
//  .chargeBattery(53)
//  .brake()
//  .accelerate();

//**************** 3 ****************************
//class Car {
//  constructor(make, speed) {
//    this.make = make;
//    this.speed = speed;
//  }

//  accelerate() {
//    this.speed += 10;
//    console.log(`${this.make}'s speed is ${this.speed}`);
//  }

//  brake() {
//    this.speed -= 5;
//    console.log(`${this.make}'s speed is ${this.speed}`);
//    return this;
//  }

//  get speedUS() {
//    return this.speed / 1.6;
//  }

//  set speedUS(spd) {
//    this.speed = spd * 1.6;
//  }
//}

//const EV = function (make, speed, charge) {
//  Car.call(this, make, speed);
//  this.charge = charge;
//};

//EV.prototype = Object.create(Car.prototype);

//EV.prototype.chargeBattery = function (chargeTo) {
//  this.charge = chargeTo;
//};

//EV.prototype.accelerate = function () {
//  this.speed += 20;
//  this.charge--;
//  console.log(
//    `${this.make} is going at ${this.speed} km/h speed, with charge of ${this.charge}`
//  );
//};

//class EV extends Car {
//  #charge;
//  constructor(make, speed, charge) {
//    super(make, speed);
//    this.#charge = charge;
//  }

//  chargeBattery(chargeTo) {
//    this.#charge += chargeTo;
//    return this;
//  }

//  accelerate() {
//    this.speed += 20;
//    this.#charge--;
//    console.log(
//      `${this.make} is going at ${this.speed} km/h speed with a charge of ${
//        this.#charge
//      }%`
//    );
//    return this;
//  }
//}

//const rivian = new EV('Rivian', 120, 23);

//console.log(rivian);
//console.log(rivian.__proto__);
//console.log(rivian.__proto__.__proto__);

//console.log(rivian instanceof EV);
//console.log(rivian instanceof Car);
//console.log(rivian instanceof Object);

//rivian.accelerate().accelerate().brake().chargeBattery(77).accelerate();

//***********************************************
// INHERITANCE BETWEEN CLASSES (E6)
//**************** 1 ****************************
//class Person {
//  constructor(fullName, birthYear) {
//    this.fullName = fullName;
//    this.birthYear = birthYear;
//  }

//  calcAge() {
//    console.log(2021 - this.birthYear);
//  }

//  greet() {
//    console.log(`Hey ${this.fullName}`);
//  }

//  get fullName() {
//    return this.fullName;
//  }

//  set fullName(name) {
//    if (name.includes(' ')) this._fullName = name;
//    else alert(`${name} does not include space..`);
//  }

//  get fullName() {
//    return this._fullName;
//  }

//  static hey() {
//    alert(`Hey ${this.fullName}`);
//  }
//}

//class Student extends Person {
//  constructor(fullName, birthYear, department) {
//    super(fullName, birthYear);
//    this.department = department;
//  }

//  introduce() {
//    console.log(
//      `My name is ${this.fullName} and I'm ${2021 - this.birthYear} old`
//    );
//  }

//  calcAge() {
//    console.log(
//      `I'm ${
//        2021 - this.birthYear
//      } years old, even I'm a student I feel like a ${
//        2021 - this.birthYear + 10
//      } years old man.`
//    );
//  }
//}

//const ilyas = new Student('İlyas Usta', 1992, 'Computer Science');
//console.log(ilyas);

//ilyas.introduce();
//ilyas.greet();
//ilyas.calcAge();

//**************** 2 ****************************
//class Person {
//  constructor(fullName, birthYear) {
//    this.fullName = fullName;
//    this.birthYear = birthYear;
//  }

//  calcAge() {
//    console.log(2021 - this.birthYear);
//  }

//  greet() {
//    console.log(`Hey ${this.fullName}`);
//  }

//  get age() {
//    return new Date().getFullYear() - this.birthYear;
//  }

//  set fullName(name) {
//    if (name.includes(' ')) this._fullName = name;
//    else {
//      this._fullName = 'nothingsOwner';
//      alert(`${name} is not a full name!!`);
//    }
//  }

//  get fullName() {
//    return this._fullName;
//  }
//}

//class Student extends Person {
//  constructor(fullName, birthYear, depart) {
//    super(fullName, birthYear);
//    this.depart = depart;
//  }

//  introduce() {
//    console.log(
//      `My name is ${this.fullName} and I'm ${
//        new Date().getFullYear() - this.birthYear
//      } years old...`
//    );
//  }

//  calcAge() {
//    console.log(
//      `I'm a ${
//        new Date().getFullYear() - this.birthYear
//      } years old Cezeri Code School ${this.depart} student...`
//    );
//  }
//}

//const ilyas = new Student('İlyas Usta', 1992, 'Computer Science');

//console.log(ilyas);
//ilyas.calcAge();
//ilyas.introduce();

//**************** 3 ****************************
//class Person {
//  constructor(fullName, birthYear) {
//    this.fullName = fullName;
//    this.birthYear = birthYear;
//  }

//  calcAge() {
//    console.log(new Date().getFullYear() - this.birthYear);
//  }

//  greet() {
//    console.log(`Merhaba ${this.fullName}`);
//  }

//  get age() {
//    return new Date().getFullYear() - this.birthYear;
//  }

//  set fullName(name) {
//    if (name.includes(' ')) this._fullName = name;
//    else {
//      this._fullName = 'nothingOwner';
//      alert(`You comes with a name called ${this._fullName}`);
//    }
//  }

//  get fullName() {
//    return this._fullName;
//  }

//  static hey() {
//    console.log('Merhaba Beyefendi...');
//  }
//}

//class Student extends Person {
//  constructor(fullName, birthYear, department) {
//    super(fullName, birthYear);
//    this.department = department;
//  }

//  introduce() {
//    console.log(
//      `My name is ${this.fullName} and I'm a junior third year developer...`
//    );
//  }

//  calcAge() {
//    console.log(
//      `I'm a ${
//        new Date().getFullYear() - this.birthYear
//      } years old CC School student...`
//    );
//  }
//}

//const kul = new Student('Allah Dostu', 1994, 'Developlment');

//console.log(kul);
//kul.introduce();
//kul.calcAge();

//****************************************************
// CLASS INHERITANCE - Object.create()
//**************** 1 *********************************
//const PersonProto = {
//  calcAge() {
//    console.log(new Date().getFullYear - this.birthYear);
//  },

//  init(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  },
//};

//const StudentProto = Object.create(PersonProto);

//StudentProto.init = function (firstName, birthYear, course) {
//  PersonProto.init.call(this, firstName, birthYear);
//  this.course = course;
//};

//StudentProto.introduce = function () {
//  console.log(
//    `My name is ${this.firstName} and I'm a ${
//      new Date().getFullYear() - this.birthYear
//    } years old person...`
//  );
//};

//const bendeniz = Object.create(StudentProto);

//bendeniz.init('Ben Deniz', 1994, 'CS');

//console.log(bendeniz);
//bendeniz.introduce();

//**************** 2 *********************************
//const PersonProto = {
//  calcAge() {
//    console.log(`${new Date().getFullYear() - this.birthYear}`);
//  },

//  init(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  },
//};

//const StudentProto = Object.create(PersonProto);

//StudentProto.init = function (firstName, birthYear, course) {
//  PersonProto.init.call(this, firstName, birthYear);
//  this.course = course;
//};

//StudentProto.introduce = function () {
//  console.log(
//    `My name is ${this.firstName} and my age is ${2021 - this.birthYear}`
//  );
//};

//const newbee = Object.create(StudentProto);
//newbee.init('İlyas', 1993, 'Computer Science');

//console.log(newbee);
//newbee.introduce();
//newbee.calcAge();

//**************** 3 *********************************
//const PersonProto = {
//  calcAge() {
//    console.log(new Date().getFullYear() - this.birthYear);
//  },

//  init(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  },
//};

//const StudentProto = Object.create(PersonProto);
//StudentProto.init = function (firstName, birthYear, course) {
//  PersonProto.init.call(this, firstName, birthYear);
//  this.course = course;
//};

//StudentProto.introduce = function () {
//  console.log(`My name is ${this.firstName} and my age is ${this.birthYear}`);
//};

//const il = Object.create(StudentProto);
//il.init('İlyas Usta', 1995, 'Data Science');

//console.log(il);
//il.introduce();
//il.calcAge();

// START
//******************************************************************
// Class Example, Property protection, Method Chaining - 09.02.2021
//**************** 1 ***********************************************
//class Account {
//  //  Public fields (instances)
//  locale = navigator.language;

//  //  Private fileds (instances)
//  #movements = [];
//  #pin;

//  constructor(owner, currency, pin, locale) {
//    this.owner = owner;
//    this.currency = currency;
//    this.#pin = pin;
//  }

//  //  Public methods
//  getMovements() {
//    return this.#movements;
//  }

//  deposit(val) {
//    this.#movements.push(val);
//    console.log(this.#movements);
//    return this;
//  }

//  withdraw(val) {
//    this.deposit(-val);
//    return this;
//  }

//  _approveLoan(val) {
//    return true;
//  }

//  loanRequest(val) {
//    //if (this.#approveLoan(val)) {
//    if (this._approveLoan(val)) {
//      this.deposit(val);
//      console.log(`${val} loan approved...`);
//      return this;
//    }
//  }

//  //  Private methods
//  #approveLoan(val) {
//    return true;
//  }

//  //Static methods
//  static helper() {
//    console.log('Helper...');
//  }
//}

//const ilyas = new Account('İlyas', 'TRY', 1111);

//console.log(ilyas);
//ilyas.deposit(100);
//ilyas.withdraw(30);
//ilyas.loanRequest(4000);
//console.log(ilyas.getMovements());
//Account.helper();

//ilyas.deposit(300).deposit(100).loanRequest(20000).withdraw(400).withdraw(500);

////console.log(ilyas.#pin);
////ilyas.#approveLoan();

//**************** 2 *********************************
//class Account {
//  //Public fields (instances)
//  locale = navigator.language;

//  //Private fields (instances)
//  #movements = [];
//  #pin;

//  constructor(owner, curreny, pin) {
//    this.owner = owner;
//    this.curreny = curreny;
//    this.#pin = pin;
//  }

//  // Public methods
//  getMovements() {
//    return this.#movements;
//  }

//  deposit(val) {
//    this.#movements.push(val);
//    console.log(this.#movements);
//    return this;
//  }

//  withdraw(val) {
//    this.deposit(-val);
//    return this;
//  }

//  reqLoan(val) {
//    if (this.#approveLoan(val)) {
//      this.deposit(val);
//      console.log(`${val} (loan) is approved...`);
//    }
//  }

//  // Private methods
//  #approveLoan(val) {
//    return true;
//  }

//  // Static methods
//  static helper() {
//    console.log('Helper...');
//  }
//}

//const agaAhmet = new Account('Ahmet', 'TRY', 2222);

//console.log(agaAhmet);
//agaAhmet.deposit(333);
//agaAhmet.withdraw(444);
//agaAhmet.reqLoan(111);
//console.log(agaAhmet.getMovements());
//Account.helper();

////console.log(agaAhmet.#movements);
////agaAhmet.#approveLoan();

//agaAhmet.deposit(300).deposit(100).withdraw(400).withdraw(40).reqLoan(5000);

//**************** 3 *********************************
//class Account {
//  // Public fields (instances)
//  locale = navigator.language;

//  // Private fieilds (instances)
//  #movements = [];
//  #pin;

//  constructor(owner, currency, pin) {
//    this.owner = owner;
//    this.currency = currency;
//    this.#pin = pin;
//  }

//  // Public methods
//  getMovements() {
//    return this.#movements;
//  }

//  deposit(val) {
//    this.#movements.push(val);
//    console.log(this.#movements);
//    return this;
//  }

//  withdraw(val) {
//    this.deposit(-val);
//    return this;
//  }

//  reqLoan(val) {
//    if (this.#approveLoan(val)) this.deposit(val);
//    console.log(`Loan (${val}) is approved...`);
//    return this;
//  }

//  // Private methods
//  #approveLoan(val) {
//    return true;
//  }

//  static helper() {
//    console.log('Helper!');
//  }
//}

//const hll = new Account('Hll', 'TRY', 3333);
//console.log(hll);

//hll.deposit(5555);
//hll.withdraw(2222);
//hll.reqLoan(3333);
//console.log(hll.getMovements());
//Account.helper();

//hll.deposit(100).deposit(200).withdraw(400).reqLoan(500).withdraw(50);
