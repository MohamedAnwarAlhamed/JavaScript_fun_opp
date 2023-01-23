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

  /*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperties(myObject, {
    c: {
      configurable: true,
      value: 3,
    },
    d: {
      configurable: true,
      value: 4,
    },
    e: {
      configurable: true,
      value: 5,
    },
  });
  
  console.log(myObject);
  
  console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
  console.log(Object.getOwnPropertyDescriptors(myObject));