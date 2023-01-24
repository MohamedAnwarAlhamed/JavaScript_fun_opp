/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");


/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
    console.log("Web API");
  }, 0);
  
  function one() {
    console.log("One");
  }
  function two() {
    one();
    console.log("Two");
  }
  function three() {
    two();
    console.log("Three");
  }
  
  three();
  
  /*
  =================================
  console.log("One");
  =================================
  function one() {
    console.log("One");
  }
  =================================
  function two() {
    one();
    console.log("Two");
  }
  =================================
  function three() {
    two();
    console.log("Three");
  }
  =================================
  */
  
  console.log("#####");
  console.log("One");
  console.log("Two");
  console.log("Three");