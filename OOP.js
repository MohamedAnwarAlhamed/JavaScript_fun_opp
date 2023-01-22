/*
  Constructor Function
*/

function User(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
  
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "Hassan", 6000);
  let userThree = new User(102, "Sayed", 7000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userTwo.i);
  console.log(userTwo.u);
  console.log(userTwo.s);
  
  console.log(userThree.i);
  console.log(userThree.u);
  console.log(userThree.s);
  
  // const userOne = {
  //   id: 100,
  //   username: "Elzero",
  //   salary: 5000,
  // };
  
  // const userTwo = {
  //   id: 101,
  //   username: "Hassan",
  //   salary: 6000,
  // };
  
  // const userThree = {
  //   id: 102,
  //   username: "Sayed",
  //   salary: 7000,
  // };


  /*
  Constructor Function
  - New Syntax
*/

class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary + 1000;
    }
  }
  
  let userOne = new User(100, "Elzero", 5000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userOne instanceof User);
  console.log(userOne.constructor === User);


  /*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
    constructor(id, username, salary) {
      // Properties
      this.i = id;
      this.u = username || "Unknown";
      this.s = salary < 6000 ? salary + 500 : salary;
      this.msg = function () {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
      };
    }
    // Methods
    writeMsg() {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "", 6000);
  
  console.log(userOne.u);
  console.log(userOne.s);
  console.log(userOne.msg());
  console.log(userOne.writeMsg());
  
  console.log(userTwo.u);
  console.log(userTwo.s);
  console.log(userTwo.msg); // Native Code
  console.log(userTwo.writeMsg); // Native Code


  /*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateName("Osama");
console.log(userOne.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);


/*
  Class
  - Static Properties And Methods
*/

class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.u);
console.log(userTwo.u);
console.log(userOne.count);
console.log(User.count);
console.log(User.sayHello());
console.log(User.countMembers());