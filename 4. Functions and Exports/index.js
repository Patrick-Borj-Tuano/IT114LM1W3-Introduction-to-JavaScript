/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name){
    console.log("Hello", name );
}
greet("Patrick");

// Your code here

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declarations are hoisted entirely, allowing you to call the function before its declaration in the code, 
//while function expressions are hoisted only with their variable or property declarations. 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
function calculateArea(width, length){
    let area = width * length;
    return area;
}
console.log(calculateArea(5,5));


// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
function square(number, callback) {
    const result = number * number;
    // Call the callback function with the squared result
    callback(result);
}

// Callback function to handle the squared result
function handleResult(result) {
    console.log("The squared result is:", result);
}
// Using the square function with the handleResult callback
square(5, handleResult);


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(arr, modifyFunction) {
    const modifiedArray = [];
    for (let i = 0; i < arr.length; i++) {
        modifiedArray.push(modifyFunction(arr[i]));
    }
    return modifiedArray;
}
const numbers = [1, 2, 3, 4, 5];
const incrementByOne = (num) => num + 1;
const modifiedArray = modifyArray(numbers, incrementByOne);
console.log(modifiedArray);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const { add, PI } = require('./mathUtils');

// Example usage:
const result = add(3, 5);
console.log(result); // Output: 8
console.log(PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const isPalindrome = require('./isPalindrome');

const word1 = "radar";
const word2 = "hello";
console.log(isPalindrome(word1)); // Output: true
console.log(isPalindrome(word2)); // Output: false

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 

//The require function and module.exports variable are essential features in Node.js, 
// providing a practical way to structure and share code. With require, modules can be easily 
// imported, promoting code reuse and modular development. On the flip side, module.exports 
// allows developers to specify what parts of a module should be accessible to other parts of the application.

// In practical terms, CommonJS (using require and module.exports) is a well-established approach in Node.js 
// development, offering a familiar and widely adopted solution. It supports dynamic loading of modules,
//  providing flexibility in various scenarios. While ECMAScript modules have gained popularity, CommonJS 
//  remains a robust choice, especially in environments where it is the default or where compatibility with 
//  existing Node.js code is crucial.

// In conclusion, the choice between CommonJS and ECMAScript modules depends on factors such as the project's 
// environment, team familiarity, and specific features required by the application. Both approaches are valid, 
// and the decision should be based on the context of the project and its needs.