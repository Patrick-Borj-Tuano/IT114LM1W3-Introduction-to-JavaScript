/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var number = 1;
console.log(number);


// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let number2 = 2;
console.log(number2);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const string1 = "Hello String";
console.log(string1)
//When reassigning a variable it returns a error because const's values cannot be changed


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
// Variables declared by let are only available inside the block where they’re defined. 
// Variables declared by var are available throughout the function in which they’re declared. 
// Variavles declared by const are available globally or throughout the function but its value cannot be changed.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
var firstNum = 10;
var secondNum = 2;
var total;

total = firstNum + secondNum;
console.log(total);

firstNum -= 5;
console.log(firstNum);

secondNum += 3;
console.log(secondNum);

// Checkpoint 1.2 What operators did you use?
// Answer: The operators that I used is the addition and subtraction operators.
// Your code here  variable1 + variable2 or variable1 += variable 2

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
var firstString;

firstString = "Add" + "String";
console.log(firstString);

// Checkpoint 1.3 What operators did you use?
// Answer:  I used the + operator or the += operator to contatenate the strings.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
var age = 15;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

const a2 = true && false;
console.log(a2);


// Checkpoint 1.4 What operators did you use?
// Answer:  Conditional (ternary) operator


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees); 
3 in trees; 
6 in trees; 
"bay" in trees; 
"length" in trees; // returns true (length is an Array property)



// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] is truthy, but it's also loosely equal to false. [] == false evaluate to true because the array is empty.
// Your code here
console.log([] == false);