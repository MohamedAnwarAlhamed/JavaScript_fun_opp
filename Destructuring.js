/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);


////////////////////////////////////////
/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
  };
  
  // console.log(user.theName);
  // console.log(user.theAge);
  // console.log(user.theTitle);
  // console.log(user.theCountry);
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountry = user.theCountry;
  
  // console.log(theName);
  // console.log(theAge);
  // console.log(theTitle);
  // console.log(theCountry);
  
  // ({ theName, theAge, theTitle, theCountry } = user);
  const { theName, theAge, theCountry } = user;
  
  console.log(theName);
  console.log(theAge);
  console.log(theCountry);

  /*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  const {
    theName: n,
    theAge: a,
    theCountry,
    theColor: co = "Red",
    skills: { html: h, css },
  } = user;
  
  console.log(n);
  console.log(a);
  console.log(theCountry);
  console.log(co);
  console.log(`My HTML Skill Progress Is ${h}`);
  console.log(`My CSS Skill Progress Is ${css}`);
  
  const { html: skillOne, css: skillTwo } = user.skills;
  
  console.log(`My HTML Skill Progress Is ${skillOne}`);
  console.log(`My CSS Skill Progress Is ${skillTwo}`);