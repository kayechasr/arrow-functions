//Using a for loop for multipling the array without changing it
let nums = [1,2,3,4,5];
let results = [];
    for (let anyWord of nums){ //In for of loop, you can use anything in front of let but use the variable the array is assigned to
        results.push (anyWord * 2);
    }

console.log(results);

//Using a map method for multipling the array without changing it - THIS IS THE PREFERRED MORE CONCISE WAY OF WRITING

const mapResult= nums.map(anyWord => anyWord * 2);
console.log(mapResult);

const students = [
{
    id:"1",
    name: "Mark",
    profession:"Developer"
    skill: "JavaScript"

},

{
    id:"2",
    name: "Ariel",
    profession:"Developer"
    skill: "HTML"

},
{
  id:"3",
    name: "Jason",
    profession:"Designer"
    skill: "CSS"
},
];