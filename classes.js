// console.clear();

// class User {
//   interests;
//   static name = "Test";

//   #privateVariable = "privateVar";

//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.interests = ["Swimming"];
//   }

//   get getPrivateVar() {
//     return this.#privateVariable;
//   }

//   get milliyet() {
//     return this.nationality;
//   }

//   set setMilliyet(milliyet) {
//     this.nationality = milliyet;
//   }

//   getNationality() {
//     return this.nationality;
//   }

//   setNationality(nationality) {
//     this.nationality = nationality;
//   }

//   static callUser() {
//     console.log(this.name);
//   }
// }

// const user = new User("Sabir", "Quliyev", 24);

// console.log(user.getPrivateVar);

class Car {
  engine;
  year;

  constructor(engine, year) {
    this.engine = engine;
    this.year = year;
  }

  pressBreak() {
    console.log("Break pressed");
  }
}

class BMW extends Car {
  constructor(engine, year) {
    super(engine, year)
  }
}

class Mercedes extends Car {
  constructor(engine, year) {
    super(engine, year);
  }
}

const x6 = new BMW(4.4, 2020);
// const CLA = new Mercedes(2.4, 2022);

// console.log(CLA.engine);
