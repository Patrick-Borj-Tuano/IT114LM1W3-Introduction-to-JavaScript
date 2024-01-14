/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
console.log (randomNumber)
if(randomNumber > 50){
    console.log("More than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if(randomNumber % 2 === 0){
    console.log("Even");
}
else{
    console.log ("Odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 5 === 0 && randomNumber && 3 === 0){
    console.log("FizzBuzz");
}
else if(randomNumber % 3 === 0){
    console.log("Fizz");
}
else if (randomNumber % 5 === 0){
    console.log("Buzz");
}
else{
    console.log(randomNumber);
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber % 2 == 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay)

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: A switch block should be used because it is much more readable and maintainable than chained if-else statements.
// switch (expression) {
//     case label1:
//       statements1;
//       break;
//     case label2:
//       statements2;
//       break;
//     // …
//     default:
//       statementsDefault;
//   }

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i =1; i < (n+1); i++){
    console.log (i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
var k = 0;
while (k < list.length){
    console.log(list[k]);
    k++;
}

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: We use the "do" keyword to indicate that the loops starts doing the block of statement and then
//         put a "while" keyword to indicate the condition.Do while always ensures that the loop starts at least once.
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const element of list) {
    console.log(element);
  }

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (value in list){
    console.log(list[value]);
}
// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach((element) => console.log(element));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: We should use for in or for each only when we want to iterate throughout all the elements of the list.
//  While we should use for of when we want to get to a specific element.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


try{
    const quotient = numerator / denominator;
    if (denominator === 0){
        throw Error("Division by zero")
    }
}
catch(error){
    console.log("Error")
}
finally{
    console.log("Cleaning up resources")
}

