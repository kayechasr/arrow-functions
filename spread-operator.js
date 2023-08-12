
// THE SPREAD OPERATOR - USE 3 DOTS FOR SPEAD ARRAY LIKE THIS - ...)
/**
 * The spread operator in JavaScript is like a magic wand that can take the contents of one thing and spread it out into another thing.
 * Imagine you have a backpack, and you want to move everything from the backpack into your room. Instead of taking things out one by one and putting them in your room,
 * you can just use the magic spread operator to instantly move everything.
 */

//HOW TO USE IT IN AN ARRAY
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log("Second array is now", arr2);
// console.log("First array is now", arr1);

// let arr3 = [4, 5, 6];
// let arr4 = [...arr3];
// arr4.push(7);
// console.log("Second array is now", arr3);
// console.log("First array is now", arr4);

//HOW TO USE IT IN AN OBJECT

let object1 = { a: 1, b: 2, c: 3 };
let object2 = { ...object1, d: 4 }; //add an object using spread
let object3 = { ...object1, b: 5 }; //overwriting object using spread

console.log("first", object1);
console.log("Second", object2);
console.log("Second", object3);

