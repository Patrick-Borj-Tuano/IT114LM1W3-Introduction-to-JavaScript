/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
let firstNum = numbers[0]
let fifthNum = numbers[4]
let lastNum = numbers[numbers.length-1]

console.log(firstNum)
console.log(fifthNum)
console.log(lastNum)

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
let sum = numbers.reduce((acc, num) => acc + num, 0);
let averageValue = sum / numbers.length;

console.log('Minimum Value:', minValue);
console.log('Maximum Value:', maxValue);
console.log('Average Value:', averageValue);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
//Python lists dynamically resize, allowing flexibility, while JavaScript arrays have a fixed size. 
//Both offer built-in methods, but syntax variations require adaptation. Python supports mixed data 
//types, and JavaScript handles various types. Differences in indexing and slicing syntax exist.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let exampleObject = {
    courseCode: "IT114L",
    name: "Web Dev",
    units: 3,
    noOfStud: 30,
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
exampleObject.profName = "Job Lipat";
console.log(exampleObject.profName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    {
        courseCode: "IT114L",
        name: "Web Development",
        units: 3,
        professor: "Job Lipat"
    },
    {
        courseCode: "CS120",
        name: "Structure of Programming Languages",
        units: 3,
        professor: "Aurelia Shane",
    },
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = courses[0].units + courses[1].units;
console.log(totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
//In Python, the equivalent of JavaScript objects is dictionaries. 
//Both serve as mutable structures to store key-value pairs, allowing for the association of values with specific keys. 
//While their syntax and certain behaviors may differ, the fundamental concept of representing collections of data 
//through key-value mappings is shared between JavaScript objects and Python dictionaries.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let additionalNumber = 99;
let newArray = [...numbers, additionalNumber];
console.log(newArray);


// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units, ...rest } = courses[0];
console.log("Course Code:", courseCode);
console.log("Units:", units);
console.log("Rest of the properties:", rest);
