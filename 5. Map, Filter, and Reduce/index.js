/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const doubled = numbers.map(item => item ** 2);
console.log(doubled);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const makeUppercase = words.map(words => words.toUpperCase());
console.log(makeUppercase);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const wordsWithMoreThanFourLetters = words.filter(word => word.length > 4);
console.log(wordsWithMoreThanFourLetters);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 

//Map: The map method is used to create a new array by applying a given function to each element of an existing array. 
//It transforms each element based on the provided function, resulting in a new array of the same length.

//Filter: The filter method is used to create a new array by selecting elements from an 
//existing array that satisfy a specified condition. It creates a subset of the original 
//array containing only the elements that meet the criteria defined in the provided function.

//Reduce: The reduce method is used to iterate over the elements of an array and accumulate a single result by applying 
//a given function. It takes an accumulator and the current value of the array, performing the specified operation 
//in each iteration. The final result is a single value, often representing a summary or aggregation of the array's elements.