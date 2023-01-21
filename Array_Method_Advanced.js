/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(Array.from(mySet));

// console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));


/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);