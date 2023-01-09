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