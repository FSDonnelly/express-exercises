// Functions

// Function Declaration
// function greeting() {
//   console.log('Hello World');
// }

// Function Expression
// let greeting = function() {
//   console.log('Hello World');
// };

// // Arrow Function
// let greeting = () => {
//   console.log('Hello World');
// };

// let greeting = () => console.log('Hello World');

// Example 2
// let sum = function(a, b, c) {
//   return a + b + c;
// };

let sum = (a, b, c) => a + b + c;
console.log(sum(2, 3, 4));

// Example 3
let square = function(x) {
  return x * x;
};

let square = x => x * x;
