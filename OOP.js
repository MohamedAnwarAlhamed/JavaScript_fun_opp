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