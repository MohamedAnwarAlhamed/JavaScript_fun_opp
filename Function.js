/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
    // console.log(Array.isArray(numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Result Is ${result}`;
  }
  
  console.log(calc(10, 20, 10, 30, 50, 30));

  /*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
    return num1 + num2;
  };
  
  console.log(calculator(10, 20));
  
  function sayHello() {
    console.log("Hello Osama");
  }
  
  document.getElementById("show").onclick = sayHello;
  document.getElementById("show").onclick = function () {
    console.log("Hello Osama");
  }
  
  setTimeout(function elzero() {
    console.log("Good");
  }, 2000);

  /*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function () {
  return 10;
};

let print = () => 10;

let print = function (num) {
  return num;
};

let print = num => num;

let print = function (num1, num2) {
  return num1 + num2;
};

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));