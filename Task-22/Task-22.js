// Variable Declarations and Scope — Tasks 1-10

// Declare a variable using var and assign your name to it. Log it.
var myName = "AI Assistant";
console.log("My name (var):", myName);

// Create a variable using let to store your age. Log it and then reassign it.
let myAge = 1;
console.log("My age (initial let):", myAge);
myAge = 2;
console.log("My age (reassigned let):", myAge);

// Declare a constant const to store your birth year. Try reassigning it and observe the error.
const myBirthYear = 2023;
console.log("My birth year (const):", myBirthYear);
// Uncommenting the line below will throw an error: "TypeError: Assignment to constant variable."
// myBirthYear = 2024;

// Declare three variables (name, age, isStudent) using appropriate keywords (let, const) and log them.
const personName = "John Doe";
let personAge = 30;
const isStudent = false;
console.log("Person details:", personName, personAge, isStudent);

// Use let to store a score. Update it twice and print each time.
let score = 100;
console.log("Score (initial):", score);
score = 150;
console.log("Score (first update):", score);
score = 200;
console.log("Score (second update):", score);

// Use var to create a global variable. Log it inside and outside a block scope.
var globalVar = "I am global";
{
  console.log("Inside block (var):", globalVar);
}
console.log("Outside block (var):", globalVar);

// Create a block and declare a variable with let inside it. Try logging it outside the block and note the result.
{
  let blockVar = "I am block-scoped";
  console.log("Inside block (let):", blockVar);
}
// Uncommenting the line below will throw an error: "ReferenceError: blockVar is not defined"
// console.log("Outside block (let):", blockVar);

// Create two constants and try adding them. Store the result in another variable and log it.
const num1 = 5;
const num2 = 10;
const sum = num1 + num2;
console.log("Sum of two constants:", sum);

// Try declaring the same variable twice using var and let. Note the behavior.
var duplicateVar = "First declaration with var";
var duplicateVar = "Second declaration with var"; // No error, `var` allows re-declaration
console.log("Duplicate var:", duplicateVar);

let anotherVar = "First declaration with let";
// Uncommenting the line below will throw an error: "SyntaxError: Identifier 'anotherVar' has already been declared"
// let anotherVar = "Second declaration with let";
console.log("Another var:", anotherVar); // Will not be reached if the above line is uncommented

/*
Explanation of var, let, and const:
- var: Function-scoped or globally-scoped. Can be re-declared and re-assigned. Hoisted to the top of its scope. Generally discouraged in modern JavaScript due to potential for bugs.
- let: Block-scoped. Cannot be re-declared in the same scope but can be re-assigned. Not hoisted in a way that allows use before declaration (Temporal Dead Zone). Use when you expect a variable's value to change.
- const: Block-scoped. Cannot be re-declared or re-assigned. Must be initialized at declaration. Use for values that will not change throughout the program's execution.
*/

// ---

// Data Types — Tasks 11–20

// Create and log a variable of type String with your favorite movie name.
const favoriteMovie = "Inception";
console.log("Favorite movie (String):", favoriteMovie);

// Create a Number type variable to represent your height in cm.
const myHeightCm = 175;
console.log("My height (Number):", myHeightCm);

// Create a Boolean variable isLoggedIn and set it to false.
let isLoggedIn = false;
console.log("Is logged in (Boolean):", isLoggedIn);

// Declare a variable and assign it null. Check and log its type.
let nullVar = null;
console.log("Null variable value:", nullVar, "Type:", typeof nullVar); // typeof null is 'object' (a known JavaScript quirk)

// Declare a variable without assigning it and log its value and type.
let undefinedVar;
console.log("Undefined variable value:", undefinedVar, "Type:", typeof undefinedVar);

// Create a Symbol with description 'id' and log it.
const mySymbol = Symbol('id');
console.log("My Symbol:", mySymbol);

// Create an object with name, age, and email properties. Log it.
const person = {
  name: "Jane Doe",
  age: 25,
  email: "jane.doe@example.com"
};
console.log("Person object:", person);

// Check the type of typeof null and typeof undefined in the console.
console.log("Type of null:", typeof null); // Outputs 'object'
console.log("Type of undefined:", typeof undefined); // Outputs 'undefined'

// Create an array of 5 numbers and log it with typeof.
const numbersArray = [10, 20, 30, 40, 50];
console.log("Numbers array:", numbersArray, "Type:", typeof numbersArray); // typeof array is 'object'

// Use Array.isArray() to check if a variable is an array.
console.log("Is numbersArray an array?", Array.isArray(numbersArray));
let notAnArray = "hello";
console.log("Is notAnArray an array?", Array.isArray(notAnArray));

// ---

// Operators — Tasks 21–30

// Arithmetic + Assignment

// Declare two numbers and use +, -, *, /, % operators. Log all results.
const numA = 15;
const numB = 4;
console.log("Addition:", numA + numB);
console.log("Subtraction:", numA - numB);
console.log("Multiplication:", numA * numB);
console.log("Division:", numA / numB);
console.log("Modulus:", numA % numB);

// Calculate area of a rectangle using variables for width and height.
const width = 10;
const height = 5;
const area = width * height;
console.log("Area of rectangle:", area);

// Use shorthand assignment operators: +=, -=, *=, /=, %=
let val = 20;
val += 5; // val = 25
console.log("Shorthand +=:", val);
val -= 10; // val = 15
console.log("Shorthand -=:", val);
val *= 2; // val = 30
console.log("Shorthand *=:", val);
val /= 3; // val = 10
console.log("Shorthand /=:", val);
val %= 3; // val = 1
console.log("Shorthand %=:", val);

// Create a counter variable. Use ++ and -- to increment and decrement it.
let counter = 0;
counter++; // counter = 1
console.log("Counter incremented:", counter);
counter--; // counter = 0
console.log("Counter decremented:", counter);

// Comparison + Logical

// Compare two numbers using >, <, >=, <= and log results.
const x = 7;
const y = 12;
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);

// Use == and === on '5' and 5. Note the difference.
const stringFive = '5';
const numberFive = 5;
console.log("== ('5' == 5):", stringFive == numberFive); // true (loose equality, performs type coercion)
console.log("=== ('5' === 5):", stringFive === numberFive); // false (strict equality, checks both value and type)

// Use != and !== and explain the output in comments.
console.log("!= ('5' != 5):", stringFive != numberFive); // false (loose inequality, '5' is equal to 5 after coercion)
console.log("!== ('5' !== 5):", stringFive !== numberFive); // true (strict inequality, '5' is not strictly equal to 5 because types differ)
// != (loose inequality) checks if values are not equal, performing type coercion if necessary.
// !== (strict inequality) checks if values are not equal OR if types are not equal.

// Create two conditions: isUser = true, isAdmin = false. Use &&, ||, ! to combine them.
const isUser = true;
const isAdmin = false;
console.log("isUser && isAdmin:", isUser && isAdmin); // false (both must be true)
console.log("isUser || isAdmin:", isUser || isAdmin); // true (at least one must be true)
console.log("!isUser:", !isUser); // false (negates the boolean value)

// Use ternary operator to log "Adult" if age >= 18, otherwise "Minor".
const personCurrentAge = 22;
const ageStatus = (personCurrentAge >= 18) ? "Adult" : "Minor";
console.log("Age status:", ageStatus);

// Combine all: declare a variable, assign a value, check type, use operators, and log a final message.
let finalResult = 10;
console.log("Initial finalResult (type " + typeof finalResult + "):", finalResult);
finalResult += 5; // Use assignment operator
console.log("After += 5:", finalResult);
const isEven = (finalResult % 2 === 0); // Use modulus and strict equality
console.log("Is finalResult even?", isEven);
console.log("Final message: The result is " + finalResult + " and it is " + (isEven ? "even" : "odd") + ".");