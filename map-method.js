//Using a for loop for multipling the array without changing it
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let anyWord of nums) {
  //In for of loop, you can use anything in front of let but use the variable the array is assigned to
  results.push(anyWord * 2);
}

console.log(results);

//Using a map method for multipling the array without changing it - THIS IS THE PREFERRED MORE CONCISE WAY OF WRITING

const mapResult = nums.map((anyWord) => anyWord * 2);
console.log(mapResult);

const students = [
  {
    id: "1",
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
  },

  {
    id: "2",
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: "3",
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

//returning name and id without the object properties
const studentsWithIds = students.map((student) => [student.name, student.id]);
console.log(studentsWithIds);


//returning id and name with the object property
const studentsWithIds2 = students.map((students) => {
    return {
        id: students.id,
        name: students.name,
    };
});
console.log(studentsWithIds2);

//adding an age property to each student and returning the array with -  NO YOU CANT USE PUSH because it adds to the original array (map updates and creats a new array)
const studentsWithAge = students.map((students) => {
  return {
      ...students,
      age: Math.floor(Math.random() * 10 + 30)
  };
});
console.log(studentsWithAge);

//Exercise
let students2 = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 93, maths: 77, art: 95 },
  },
  {
    name: "Fran",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 87, art: 95 },
  },
];

let [john, ...rest] = students2.map((students2) => {
    return [students2.name, students2.results ];
});

console.log(john);
console.log(rest);
