//destructuring arrays, objects and combining it with rest operator

//destructuring lets you reduce the normal 3 variable assignment to just one line
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant",
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, JohnSecondary, johnPrimary] = languages; //ES6 assigns each value to the the array above
console.log(johnNative, JohnSecondary, johnPrimary);

let [, , , maryNative, marySecondary] = languages; //placing a comma in front will skip a value in the array (each comma represent a value skipped in the array)
console.log(maryNative, marySecondary);

let languages2 = {
  firstlanguage: "english",
  secondlanguage: "french",
  thirdlanguage: "german",
  fourthlanguage: "japanese",
};
let { firstlanguage, thirdlanguage } = languages2; // for objects values in the object are represented by their property names. you can destructure the values that you need by using thier property names`
console.log(firstlanguage, thirdlanguage);

//Using the rest Syntax while destructing
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...otherfruits] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(otherfruits);

let favoritePeople = {
  firstPerson: "Brian",
  secondPerson: "Ade",
  thirdPeson: "Daniel",
  fourthPerson: "Luke",
  fifthperson: "Manny",
};
let { secondPerson, fourthPerson, ...otherFavorite } = favoritePeople;
console.log(`my fav person is ${secondPerson}`);
console.log(`my second fav person is ${fourthPerson}`);
console.log(otherFavorite);

// to print out the value of the otherFavorite you will need to use the "object.values and "join()" methods - Example below

let favoritePeople2 = {
  firstPerson2: "Brian",
  secondPerson2: "Ade",
  thirdPeson2: "Daniel",
  fourthPerson2: "Luke",
  fifthperson2: "Manny",
};
let { secondPerson2, fourthPerson2, ...otherFavorite2 } = favoritePeople2;
console.log(`my fav person is ${secondPerson2}`);
console.log(`my second fav person is ${fourthPerson2}`);
console.log(`the rest of my favorite people are ${Object.values(otherFavorite2).join(", ")}`);

/**
 * To add an "and" before the last name, you need to do this
 * console.log(`the rest of my favorite people are ${Object.values(otherFavorite2).slice(0, -1).join(", ")} and ${Object.values(otherFavorite2).slice(-1)}`);

 */

