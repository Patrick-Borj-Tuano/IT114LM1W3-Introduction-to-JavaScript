
// Todo 5.4.1 Create a function called add that takes in two numbers and returns their sum
function add(num1, num2) {
    return num1 + num2;
}
const result = add(3, 5);
console.log(result); // Output: 8

// Todo 5.4.2 Create a constant that contains the approximate value of PI 
const PI = Math.PI;

// Todo 5.4.3 Export the function and constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
module.exports = {
    add,
    PI
};
