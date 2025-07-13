// 🟥 Part 1: Basics of Arrays
console.log("---- Part 1: Basics ----");

// Task 1
let numbers = [10, 20, 30, 40, 50];
console.log("Array of numbers:", numbers);

// Task 2
let colors = ["Red", "Green", "Blue"];
console.log("Favorite color 1:", colors[0]);
console.log("Favorite color 2:", colors[1]);
console.log("Favorite color 3:", colors[2]);

// Task 3
let fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
console.log("Fruits:", fruits);

// Task 4
let mixed = ["Alice", 25, true, null];
console.log("Length of mixed array:", mixed.length);

// Task 5
let lastElement = numbers[numbers.length - 1];
console.log("Last element:", lastElement);

// Task 6
console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Task 7
console.log("Using for...of:");
for (let fruit of fruits) {
  console.log(fruit);
}

// Task 8
console.log("Type of array:", typeof colors);
console.log("Is array?", Array.isArray(colors));

// Task 9
let nested = [[1, 2], [3, 4], [5, 6]];
console.log("Access nested value:", nested[1][0]);

// Task 10
colors[1] = "Yellow";
console.log("Updated colors:", colors);

// 🟧 Part 2: Modifying Arrays
console.log("\n---- Part 2: Modifying Arrays ----");

// Task 11
colors.push("Purple");
console.log("After push:", colors);

// Task 12
let removed = colors.pop();
console.log("Popped item:", removed);
console.log("After pop:", colors);

// Task 13
colors.unshift("Pink");
console.log("After unshift:", colors);

// Task 14
let shifted = colors.shift();
console.log("Shifted item:", shifted);
console.log("After shift:", colors);

// Task 15
console.log("Array length:", colors.length);

// Task 16
function addUniqueItem(arr, item) {
  if (!arr.includes(item)) {
    arr.push(item);
  }
}
addUniqueItem(colors, "Orange");
addUniqueItem(colors, "Blue");
console.log("After addUniqueItem:", colors);

// Task 17
let reversed = [...colors].reverse();
console.log("Reversed array:", reversed);

// Task 18
let nums = [40, 10, 100, 50];
nums.sort((a, b) => a - b);
console.log("Sorted numbers:", nums);

// Task 19
let animals = ["Dog", "Cat", "Bird", "Fish", "Horse"];
animals.splice(2, 2);
console.log("After splice:", animals);

// Task 20
let sliced = animals.slice(1, 3);
console.log("Sliced array:", sliced);

// 🟩 Part 3: Array Methods
console.log("\n---- Part 3: Array Methods ----");

// Task 21
let originalNums = [1, 2, 3, 4];
let doubled = originalNums.map(n => n * 2);
console.log("Doubled:", doubled);

// Task 22
let evenNums = originalNums.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNums);

// Task 23
let total = originalNums.reduce((sum, n) => sum + n, 0);
console.log("Total sum:", total);

// Task 24
let largeNums = [20, 60, 80, 30];
let firstAbove50 = largeNums.find(n => n > 50);
console.log("First number > 50:", firstAbove50);

// Task 25
let fruitList = ["apple", "banana", "mango"];
console.log("Contains 'banana'?", fruitList.includes("banana"));

// Task 26
console.log("Index of 'apple':", fruitList.indexOf("apple"));

// Task 27
let words = ["Hello", "world", "from", "JavaScript"];
console.log("Joined sentence:", words.join(" "));

// Task 28
let mixedArray = [1, 2, "3"];
let allNumbers = mixedArray.every(item => typeof item === "number");
console.log("All items are numbers?", allNumbers);

// Task 29
let values = [5, -1, 3];
let hasNegative = values.some(n => n < 0);
console.log("Has negative?", hasNegative);

// Task 30
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined1 = arr1.concat(arr2);
let combined2 = [...arr1, ...arr2];
console.log("Concat result:", combined1);
console.log("Spread result:", combined2);
