/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
      resolveFunction("Connection Established");
    } else {
      rejectFunction(Error("Connection Failed"));
    }
  });
  
  console.log(myPromise);
  
  let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
  let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);
  
  myPromise.then(resolver, rejecter);
  
  myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
  );
  
  myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
  );


  /*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = [];
    if (employees.length === 4) {
      resolveFunction(employees);
    } else {
      rejectFunction(Error("Number Of Employees Is Not 4"));
    }
  });
  
  myPromise
    .then((resolveValue) => {
      resolveValue.length = 2;
      return resolveValue;
    })
    .then((resolveValue) => {
      resolveValue.length = 1;
      return resolveValue;
    })
    .then((resolveValue) => {
      console.log(`The Choosen Emplyee Is ${resolveValue}`);
    })
    .catch((rejectedReason) => console.log(rejectedReason))
    .finally(console.log("The Operation Is Done"));


    /*
  Promise And XHR
*/

const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
      let myRequest = new XMLHttpRequest();
      myRequest.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(Error("No Data Found"));
        }
      };
  
      myRequest.open("GET", apiLink);
      myRequest.send();
    });
  };
  
  getData("https://api.github.com/users/elzerowebschool/repos")
    .then((result) => {
      result.length = 10;
      return result;
    })
    .then((result) => console.log(result[0].name))
    .catch((rej) => console.log(rej));


    /*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
.then((result) => {
  console.log(result);
  let myData = result.json();
  console.log(myData);
  return myData;
})
.then((full) => {
  full.length = 10;
  return full;
})
.then((ten) => {
  console.log(ten[0].name);
});

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));