/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);


/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());