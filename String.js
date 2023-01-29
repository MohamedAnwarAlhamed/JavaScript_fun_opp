/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());


/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(5));

console.log(a.split("", 6));

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("l"));