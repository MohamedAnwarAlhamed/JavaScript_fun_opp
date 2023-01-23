/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }
  
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  
  console.log(User.prototype);
  
  let strOne = "Elzero";
  
  console.log(String.prototype);


  /*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }
  
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  console.log(User.prototype);
  console.log(userOne);
  
  User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };
  
  Object.prototype.love = "Elzero Web School";
  
  String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`;
  };
  
  let myString = "Elzero";


  /*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
  });
  
  // Object.defineProperty(myObject, "c", {
  //   writable: false,
  //   enumerable: true,
  //   configurable: true, <= Cannot redefine property
  //   value: 3,
  // });
  
  myObject.c = 100;
  
  console.log(delete myObject.c);
  
  for (let prop in myObject) {
    console.log(prop, myObject[prop]);
  }
  
  console.log(myObject);