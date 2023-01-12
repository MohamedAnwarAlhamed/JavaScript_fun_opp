/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function () {
      return `Hello`;
    },
  };
  
  console.log(user.theName);
  console.log(user.theAge);
  console.log(user.sayHello());

  /*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country