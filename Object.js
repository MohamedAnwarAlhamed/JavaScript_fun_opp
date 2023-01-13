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


/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());



/*
  Object
  - Create With New Keyword new Object();
*/

let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
  return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());