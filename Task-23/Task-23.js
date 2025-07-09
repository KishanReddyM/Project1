<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Fundamentals Program</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles for better aesthetics and readability */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8; /* Light blue-gray background */
            color: #334155; /* Darker text color */
        }
        .container {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #ffffff;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .section-title {
            color: #1e3a8a; /* Dark blue for section titles */
            border-bottom: 2px solid #bfdbfe; /* Light blue border */
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .input-group {
            margin-bottom: 1rem;
        }
        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #475569; /* Slightly darker label color */
        }
        .input-group input[type="number"],
        .input-group input[type="text"] {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #cbd5e1; /* Light gray border */
            border-radius: 0.5rem;
            outline: none;
            transition: border-color 0.2s;
        }
        .input-group input[type="number"]:focus,
        .input-group input[type="text"]:focus {
            border-color: #3b82f6; /* Blue on focus */
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
        }
        .btn {
            background-color: #3b82f6; /* Blue button */
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            transition: background-color 0.2s, transform 0.1s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            border: none;
        }
        .btn:hover {
            background-color: #2563eb; /* Darker blue on hover */
            transform: translateY(-1px);
        }
        .btn:active {
            transform: translateY(0);
            box-shadow: none;
        }
        .output-area {
            background-color: #e2e8f0; /* Lighter gray for output */
            padding: 1rem;
            border-radius: 0.5rem;
            min-height: 50px;
            overflow-y: auto;
            max-height: 300px; /* Limit height and add scroll */
            border: 1px solid #cbd5e1;
            white-space: pre-wrap; /* Preserve whitespace and wrap text */
        }
        .output-area p {
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
        .output-area p:last-child {
            margin-bottom: 0;
        }
    </style>
</head>
<body class="p-4">
    <div class="container">
        <h1 class="text-4xl font-extrabold text-center mb-8 text-gray-800">JavaScript Fundamentals Showcase</h1>

        <!-- Output Area -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold section-title">Output:</h2>
            <div id="output" class="output-area">
                <p>Results will appear here...</p>
            </div>
            <button onclick="clearOutput()" class="btn mt-4 bg-red-500 hover:bg-red-600">Clear Output</button>
        </div>

        <!-- Part 1: Conditionals -->
        <h2 class="text-3xl font-bold section-title mb-6">Part 1: Conditionals</h2>

        <!-- Task 1: Positive or Negative -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">1. Check Positive or Negative</h3>
            <div class="input-group">
                <label for="numPosNeg">Enter a number:</label>
                <input type="number" id="numPosNeg" class="form-input">
            </div>
            <button onclick="checkPositiveNegative()" class="btn">Check</button>
        </div>

        <!-- Task 2: Even or Odd -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">2. Check Even or Odd</h3>
            <div class="input-group">
                <label for="numEvenOdd">Enter a number:</label>
                <input type="number" id="numEvenOdd" class="form-input">
            </div>
            <button onclick="checkEvenOdd()" class="btn">Check</button>
        </div>

        <!-- Task 3: Age Category -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">3. Age Category (Minor, Adult, Senior)</h3>
            <div class="input-group">
                <label for="userAge">Enter your age:</label>
                <input type="number" id="userAge" class="form-input">
            </div>
            <button onclick="checkAgeCategory()" class="btn">Check Age</button>
        </div>

        <!-- Task 4: Leap Year -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">4. Check Leap Year</h3>
            <div class="input-group">
                <label for="yearInput">Enter a year:</label>
                <input type="number" id="yearInput" class="form-input">
            </div>
            <button onclick="checkLeapYear()" class="btn">Check Year</button>
        </div>

        <!-- Task 5: Compare Two Numbers -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">5. Compare Two Numbers</h3>
            <div class="input-group">
                <label for="num1Compare">Enter first number:</label>
                <input type="number" id="num1Compare" class="form-input">
            </div>
            <div class="input-group">
                <label for="num2Compare">Enter second number:</label>
                <input type="number" id="num2Compare" class="form-input">
            </div>
            <button onclick="compareNumbers()" class="btn">Compare</button>
        </div>

        <!-- Task 6: Student Mark Grade -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">6. Student Mark Grade</h3>
            <div class="input-group">
                <label for="studentMark">Enter student's mark:</label>
                <input type="number" id="studentMark" class="form-input">
            </div>
            <button onclick="displayGrade()" class="btn">Get Grade</button>
        </div>

        <!-- Task 7: Divisible by 3 and 5 -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">7. Divisible by 3 and 5</h3>
            <div class="input-group">
                <label for="numDivisible">Enter a number:</label>
                <input type="number" id="numDivisible" class="form-input">
            </div>
            <button onclick="checkDivisibleBy3And5()" class="btn">Check Divisibility</button>
        </div>

        <!-- Task 8: Check Empty String -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">8. Check Empty String</h3>
            <div class="input-group">
                <label for="stringEmpty">Enter a string:</label>
                <input type="text" id="stringEmpty" class="form-input">
            </div>
            <button onclick="checkEmptyString()" class="btn">Check String</button>
        </div>

        <!-- Task 9: Day Name by Number (Switch) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">9. Day Name by Number (1=Monday)</h3>
            <div class="input-group">
                <label for="dayNumber">Enter day number (1-7):</label>
                <input type="number" id="dayNumber" min="1" max="7" class="form-input">
            </div>
            <button onclick="getDayName()" class="btn">Get Day Name</button>
        </div>

        <!-- Task 10: Vowel Check (Switch) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">10. Vowel Check (a, e, i, o, u)</h3>
            <div class="input-group">
                <label for="charVowel">Enter a single character:</label>
                <input type="text" id="charVowel" maxlength="1" class="form-input">
            </div>
            <button onclick="checkVowel()" class="btn">Check Vowel</button>
        </div>

        <!-- Task 11: What to Wear (Switch) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">11. What to Wear based on Weather</h3>
            <div class="input-group">
                <label for="weatherInput">Enter weather (sunny, rainy, cold):</label>
                <input type="text" id="weatherInput" class="form-input">
            </div>
            <button onclick="recommendOutfit()" class="btn">Recommend Outfit</button>
        </div>

        <!-- Task 12: Weekend or Weekday (Switch) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">12. Weekend or Weekday</h3>
            <div class="input-group">
                <label for="dayTypeInput">Enter day (e.g., Monday, Saturday):</label>
                <input type="text" id="dayTypeInput" class="form-input">
            </div>
            <button onclick="checkDayType()" class="btn">Check Day Type</button>
        </div>

        <!-- Task 13: Password Strength (if-else) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">13. Password Strength (>= 8 chars)</h3>
            <div class="input-group">
                <label for="passwordInput">Enter password:</label>
                <input type="text" id="passwordInput" class="form-input">
            </div>
            <button onclick="checkPasswordStrength()" class="btn">Check Strength</button>
        </div>

        <!-- Task 14: Compare Two Strings (Case-Insensitive) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">14. Compare Two Strings (Case-Insensitive)</h3>
            <div class="input-group">
                <label for="string1Compare">Enter first string:</label>
                <input type="text" id="string1Compare" class="form-input">
            </div>
            <div class="input-group">
                <label for="string2Compare">Enter second string:</label>
                <input type="text" id="string2Compare" class="form-input">
            </div>
            <button onclick="compareStringsCaseInsensitive()" class="btn">Compare Strings</button>
        </div>

        <!-- Task 15: Number within Range -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">15. Number within Specific Range (10 to 100)</h3>
            <div class="input-group">
                <label for="numRange">Enter a number:</label>
                <input type="number" id="numRange" class="form-input">
            </div>
            <button onclick="checkNumberInRange()" class="btn">Check Range</button>
        </div>

        <!-- Part 2: Loops -->
        <h2 class="text-3xl font-bold section-title mb-6 mt-12">Part 2: Loops</h2>

        <!-- Task 16: Print numbers 1 to 10 (for loop) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">16. Print Numbers from 1 to 10 (for loop)</h3>
            <button onclick="printNumbers1To10()" class="btn">Run Loop</button>
        </div>

        <!-- Task 17: Print even numbers 1 to 20 (for loop) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">17. Print Even Numbers from 1 to 20 (for loop)</h3>
            <button onclick="printEvenNumbers1To20()" class="btn">Run Loop</button>
        </div>

        <!-- Task 18: Print odd numbers 1 to 20 (while loop) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">18. Print Odd Numbers from 1 to 20 (while loop)</h3>
            <button onclick="printOddNumbers1To20()" class="btn">Run Loop</button>
        </div>

        <!-- Task 19: Print numbers 5 to 1 (do...while loop) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">19. Print Numbers from 5 to 1 (do...while loop)</h3>
            <button onclick="printNumbers5To1DoWhile()" class="btn">Run Loop</button>
        </div>

        <!-- Task 20: Sum of numbers 1 to 50 -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">20. Calculate Sum of Numbers from 1 to 50</h3>
            <button onclick="calculateSum1To50()" class="btn">Calculate Sum</button>
        </div>

        <!-- Task 21: Factorial of a number -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">21. Calculate Factorial of a Number</h3>
            <div class="input-group">
                <label for="factorialNum">Enter a number:</label>
                <input type="number" id="factorialNum" min="0" class="form-input">
            </div>
            <button onclick="calculateFactorial()" class="btn">Calculate Factorial</button>
        </div>

        <!-- Task 22: Iterate through an array of names (for loop) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">22. Iterate through Array of Names (for loop)</h3>
            <button onclick="iterateNamesArray()" class="btn">Iterate Names</button>
        </div>

        <!-- Task 23: Print characters of a string (while loop) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">23. Print Characters of a String (while loop)</h3>
            <div class="input-group">
                <label for="stringChars">Enter a string:</label>
                <input type="text" id="stringChars" class="form-input">
            </div>
            <button onclick="printStringCharacters()" class="btn">Print Characters</button>
        </div>

        <!-- Task 24: Count down from 10 to 1 -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">24. Count Down from 10 to 1</h3>
            <button onclick="countDown10To1()" class="btn">Count Down</button>
        </div>

        <!-- Task 25: Print a pattern -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">25. Print Asterisk Pattern</h3>
            <div class="input-group">
                <label for="patternRows">Enter number of rows:</label>
                <input type="number" id="patternRows" min="1" max="10" value="3" class="form-input">
            </div>
            <button onclick="printPattern()" class="btn">Print Pattern</button>
        </div>

        <!-- Task 26: Iterate through array of fruits (for...of) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">26. Iterate through Array of Fruits (for...of)</h3>
            <button onclick="iterateFruitsForOf()" class="btn">Iterate Fruits</button>
        </div>

        <!-- Task 27: Iterate through object properties (for...in) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">27. Iterate through Object Properties (for...in)</h3>
            <button onclick="iterateObjectForIn()" class="btn">Iterate Object</button>
        </div>

        <!-- Task 28: Find maximum number in an array -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">28. Find Maximum Number in an Array</h3>
            <button onclick="findMaxInArray()" class="btn">Find Max</button>
        </div>

        <!-- Task 29: Reverse a string -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">29. Reverse a String</h3>
            <div class="input-group">
                <label for="stringReverse">Enter a string:</label>
                <input type="text" id="stringReverse" class="form-input">
            </div>
            <button onclick="reverseString()" class="btn">Reverse String</button>
        </div>

        <!-- Task 30: Count vowels in a string -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3 text-gray-700">30. Count Vowels in a String</h3>
            <div class="input-group">
                <label for="stringVowels">Enter a string:</label>
                <input type="text" id="stringVowels" class="form-input">
            </div>
            <button onclick="countVowels()" class="btn">Count Vowels</button>
        </div>

    </div>

    <script>
        // Get the output div element
        const outputDiv = document.getElementById('output');

        /**
         * Appends a message to the output div.
         * @param {string} message - The message to display.
         */
        function logOutput(message) {
            const p = document.createElement('p');
            p.textContent = message;
            outputDiv.appendChild(p);
            // Scroll to the bottom to show the latest output
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }

        /**
         * Clears all messages from the output div.
         */
        function clearOutput() {
            outputDiv.innerHTML = '<p>Results will appear here...</p>';
        }

        // Part 1: Conditionals — Tasks 1–15

        /**
         * Task 1: Checks if a number is positive or negative.
         */
        function checkPositiveNegative() {
            const num = parseFloat(document.getElementById('numPosNeg').value);
            if (isNaN(num)) {
                logOutput("Task 1: Please enter a valid number.");
                return;
            }
            if (num > 0) {
                logOutput(`Task 1: ${num} is a positive number.`);
            } else if (num < 0) {
                logOutput(`Task 1: ${num} is a negative number.`);
            } else {
                logOutput(`Task 1: ${num} is zero.`);
            }
        }

        /**
         * Task 2: Checks if a number is even or odd using if-else.
         */
        function checkEvenOdd() {
            const num = parseInt(document.getElementById('numEvenOdd').value);
            if (isNaN(num)) {
                logOutput("Task 2: Please enter a valid integer.");
                return;
            }
            if (num % 2 === 0) {
                logOutput(`Task 2: ${num} is an even number.`);
            } else {
                logOutput(`Task 2: ${num} is an odd number.`);
            }
        }

        /**
         * Task 3: Checks user's age category (minor, adult, senior citizen).
         */
        function checkAgeCategory() {
            const age = parseInt(document.getElementById('userAge').value);
            if (isNaN(age) || age < 0) {
                logOutput("Task 3: Please enter a valid positive age.");
                return;
            }
            if (age < 18) {
                logOutput(`Task 3: Age ${age} - The user is a minor.`);
            } else if (age >= 18 && age < 65) {
                logOutput(`Task 3: Age ${age} - The user is an adult.`);
            } else {
                logOutput(`Task 3: Age ${age} - The user is a senior citizen.`);
            }
        }

        /**
         * Task 4: Checks whether a year is a leap year or not.
         * A year is a leap year if it is divisible by 4,
         * but not by 100, unless it is also divisible by 400.
         */
        function checkLeapYear() {
            const year = parseInt(document.getElementById('yearInput').value);
            if (isNaN(year) || year < 0) {
                logOutput("Task 4: Please enter a valid positive year.");
                return;
            }
            let isLeap = false;
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                isLeap = true;
            }
            if (isLeap) {
                logOutput(`Task 4: ${year} is a leap year.`);
            } else {
                logOutput(`Task 4: ${year} is not a leap year.`);
            }
        }

        /**
         * Task 5: Compares two numbers and logs the greater one.
         */
        function compareNumbers() {
            const num1 = parseFloat(document.getElementById('num1Compare').value);
            const num2 = parseFloat(document.getElementById('num2Compare').value);
            if (isNaN(num1) || isNaN(num2)) {
                logOutput("Task 5: Please enter two valid numbers.");
                return;
            }
            if (num1 > num2) {
                logOutput(`Task 5: The greater number is ${num1}.`);
            } else if (num2 > num1) {
                logOutput(`Task 5: The greater number is ${num2}.`);
            } else {
                logOutput(`Task 5: Both numbers are equal: ${num1}.`);
            }
        }

        /**
         * Task 6: Displays student's grade based on mark.
         */
        function displayGrade() {
            const mark = parseFloat(document.getElementById('studentMark').value);
            if (isNaN(mark) || mark < 0 || mark > 100) {
                logOutput("Task 6: Please enter a valid mark between 0 and 100.");
                return;
            }
            let grade;
            if (mark >= 90) {
                grade = 'A';
            } else if (mark >= 75) {
                grade = 'B';
            } else if (mark >= 60) {
                grade = 'C';
            } else {
                grade = 'F';
            }
            logOutput(`Task 6: With a mark of ${mark}, the grade is: ${grade}.`);
        }

        /**
         * Task 7: Checks if a number is divisible by 3 and 5.
         */
        function checkDivisibleBy3And5() {
            const num = parseInt(document.getElementById('numDivisible').value);
            if (isNaN(num)) {
                logOutput("Task 7: Please enter a valid integer.");
                return;
            }
            if (num % 3 === 0 && num % 5 === 0) {
                logOutput(`Task 7: ${num} is divisible by both 3 and 5.`);
            } else {
                logOutput(`Task 7: ${num} is NOT divisible by both 3 and 5.`);
            }
        }

        /**
         * Task 8: Checks whether a string is empty or not.
         */
        function checkEmptyString() {
            const str = document.getElementById('stringEmpty').value;
            if (str.trim() === '') { // .trim() removes whitespace from both ends of a string
                logOutput("Task 8: The string is empty or contains only whitespace.");
            } else {
                logOutput(`Task 8: The string "${str}" is not empty.`);
            }
        }

        /**
         * Task 9: Outputs the day name based on day number (1 = Monday) using a switch.
         */
        function getDayName() {
            const dayNum = parseInt(document.getElementById('dayNumber').value);
            let dayName;
            switch (dayNum) {
                case 1:
                    dayName = "Monday";
                    break;
                case 2:
                    dayName = "Tuesday";
                    break;
                case 3:
                    dayName = "Wednesday";
                    break;
                case 4:
                    dayName = "Thursday";
                    break;
                case 5:
                    dayName = "Friday";
                    break;
                case 6:
                    dayName = "Saturday";
                    break;
                case 7:
                    dayName = "Sunday";
                    break;
                default:
                    dayName = "Invalid day number. Please enter a number between 1 and 7.";
            }
            logOutput(`Task 9: Day number ${dayNum} is ${dayName}.`);
        }

        /**
         * Task 10: Prints "Vowel" if input is 'a', 'e', 'i', 'o', 'u' using a switch.
         */
        function checkVowel() {
            const char = document.getElementById('charVowel').value.toLowerCase();
            if (char.length !== 1 || !/[a-z]/.test(char)) {
                logOutput("Task 10: Please enter a single alphabet character.");
                return;
            }
            switch (char) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    logOutput(`Task 10: "${char}" is a Vowel.`);
                    break;
                default:
                    logOutput(`Task 10: "${char}" is a Consonant.`);
            }
        }

        /**
         * Task 11: Decides what to wear based on weather using a switch.
         */
        function recommendOutfit() {
            const weather = document.getElementById('weatherInput').value.toLowerCase().trim();
            let outfit;
            switch (weather) {
                case "sunny":
                    outfit = "t-shirt";
                    break;
                case "rainy":
                    outfit = "raincoat";
                    break;
                case "cold":
                    outfit = "jacket";
                    break;
                default:
                    outfit = "I'm not sure what to wear for that weather. Try 'sunny', 'rainy', or 'cold'.";
            }
            logOutput(`Task 11: For "${weather}" weather, you should wear a ${outfit}.`);
        }

        /**
         * Task 12: Logs “Weekend” or “Weekday” based on day input using a switch.
         */
        function checkDayType() {
            const day = document.getElementById('dayTypeInput').value.toLowerCase().trim();
            let dayType;
            switch (day) {
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                    dayType = "Weekday";
                    break;
                case "saturday":
                case "sunday":
                    dayType = "Weekend";
                    break;
                default:
                    dayType = "Invalid day name. Please enter a valid day of the week.";
            }
            logOutput(`Task 12: "${day}" is a ${dayType}.`);
        }

        /**
         * Task 13: Checks if a password length is strong (>= 8 chars) using if-else.
         */
        function checkPasswordStrength() {
            const password = document.getElementById('passwordInput').value;
            if (password.length >= 8) {
                logOutput("Task 13: Password strength: Strong (length >= 8 characters).");
            } else {
                logOutput("Task 13: Password strength: Weak (length < 8 characters).");
            }
        }

        /**
         * Task 14: Compares two strings and checks if they are equal (case-insensitive).
         */
        function compareStringsCaseInsensitive() {
            const str1 = document.getElementById('string1Compare').value;
            const str2 = document.getElementById('string2Compare').value;
            if (str1.toLowerCase() === str2.toLowerCase()) {
                logOutput(`Task 14: The strings "${str1}" and "${str2}" are equal (case-insensitive).`);
            } else {
                logOutput(`Task 14: The strings "${str1}" and "${str2}" are NOT equal (case-insensitive).`);
            }
        }

        /**
         * Task 15: Checks if a number is within a specific range (e.g., 10 to 100).
         */
        function checkNumberInRange() {
            const num = parseFloat(document.getElementById('numRange').value);
            const min = 10;
            const max = 100;
            if (isNaN(num)) {
                logOutput("Task 15: Please enter a valid number.");
                return;
            }
            if (num >= min && num <= max) {
                logOutput(`Task 15: ${num} is within the range (${min} to ${max}).`);
            } else {
                logOutput(`Task 15: ${num} is NOT within the range (${min} to ${max}).`);
            }
        }

        // Part 2: Loops — Tasks 16–30

        /**
         * Task 16: Prints numbers from 1 to 10 using a for loop.
         */
        function printNumbers1To10() {
            let result = "Task 16: Numbers from 1 to 10: ";
            for (let i = 1; i <= 10; i++) {
                result += i + (i === 10 ? "" : ", ");
            }
            logOutput(result);
        }

        /**
         * Task 17: Prints even numbers from 1 to 20 using a for loop.
         */
        function printEvenNumbers1To20() {
            let result = "Task 17: Even numbers from 1 to 20: ";
            for (let i = 2; i <= 20; i += 2) {
                result += i + (i === 20 ? "" : ", ");
            }
            logOutput(result);
        }

        /**
         * Task 18: Prints odd numbers from 1 to 20 using a while loop.
         */
        function printOddNumbers1To20() {
            let result = "Task 18: Odd numbers from 1 to 20: ";
            let i = 1;
            while (i <= 20) {
                if (i % 2 !== 0) {
                    result += i + (i === 19 ? "" : ", ");
                }
                i++;
            }
            logOutput(result);
        }

        /**
         * Task 19: Uses a do...while loop to print numbers from 5 to 1.
         */
        function printNumbers5To1DoWhile() {
            let result = "Task 19: Numbers from 5 to 1 (do...while): ";
            let i = 5;
            do {
                result += i + (i === 1 ? "" : ", ");
                i--;
            } while (i >= 1);
            logOutput(result);
        }

        /**
         * Task 20: Calculates the sum of numbers from 1 to 50 using a loop.
         */
        function calculateSum1To50() {
            let sum = 0;
            for (let i = 1; i <= 50; i++) {
                sum += i;
            }
            logOutput(`Task 20: Sum of numbers from 1 to 50 is: ${sum}.`);
        }

        /**
         * Task 21: Uses a loop to calculate the factorial of a number.
         */
        function calculateFactorial() {
            const num = parseInt(document.getElementById('factorialNum').value);
            if (isNaN(num) || num < 0) {
                logOutput("Task 21: Please enter a valid non-negative integer.");
                return;
            }
            if (num === 0 || num === 1) {
                logOutput(`Task 21: The factorial of ${num} is 1.`);
                return;
            }
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            logOutput(`Task 21: The factorial of ${num} is: ${factorial}.`);
        }

        /**
         * Task 22: Uses a for loop to iterate through an array of names and print each one.
         */
        function iterateNamesArray() {
            const names = ["Alice", "Bob", "Charlie", "David"];
            let result = "Task 22: Names in the array: ";
            for (let i = 0; i < names.length; i++) {
                result += names[i] + (i === names.length - 1 ? "" : ", ");
            }
            logOutput(result);
        }

        /**
         * Task 23: Uses a while loop to print characters of a string one by one.
         */
        function printStringCharacters() {
            const str = document.getElementById('stringChars').value;
            if (str.length === 0) {
                logOutput("Task 23: The string is empty.");
                return;
            }
            let result = `Task 23: Characters of "${str}": `;
            let i = 0;
            while (i < str.length) {
                result += str[i] + (i === str.length - 1 ? "" : ", ");
                i++;
            }
            logOutput(result);
        }

        /**
         * Task 24: Writes a loop that counts down from 10 to 1.
         */
        function countDown10To1() {
            let result = "Task 24: Countdown from 10 to 1: ";
            for (let i = 10; i >= 1; i--) {
                result += i + (i === 1 ? "" : ", ");
            }
            logOutput(result);
        }

        /**
         * Task 25: Uses a loop to print a pattern.
         */
        function printPattern() {
            const rows = parseInt(document.getElementById('patternRows').value);
            if (isNaN(rows) || rows < 1) {
                logOutput("Task 25: Please enter a valid number of rows (minimum 1).");
                return;
            }
            let pattern = "Task 25: Asterisk Pattern:\n";
            for (let i = 1; i <= rows; i++) {
                for (let j = 0; j < i; j++) {
                    pattern += "*";
                }
                pattern += "\n";
            }
            logOutput(pattern);
        }

        /**
         * Task 26: Uses for...of to iterate through an array of fruits and log each.
         */
        function iterateFruitsForOf() {
            const fruits = ["Apple", "Banana", "Cherry", "Date"];
            let result = "Task 26: Fruits using for...of: ";
            let first = true;
            for (const fruit of fruits) {
                if (!first) {
                    result += ", ";
                }
                result += fruit;
                first = false;
            }
            logOutput(result);
        }

        /**
         * Task 27: Uses for...in to iterate through an object with properties: name, age, city.
         */
        function iterateObjectForIn() {
            const person = { name: "John Doe", age: 30, city: "New York" };
            let result = "Task 27: Person properties using for...in: ";
            let first = true;
            for (const key in person) {
                if (!first) {
                    result += ", ";
                }
                result += `${key}: ${person[key]}`;
                first = false;
            }
            logOutput(result);
        }

        /**
         * Task 28: Uses a loop to find the maximum number in an array.
         */
        function findMaxInArray() {
            const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
            if (numbers.length === 0) {
                logOutput("Task 28: Array is empty, cannot find maximum.");
                return;
            }
            let max = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                }
            }
            logOutput(`Task 28: The maximum number in [${numbers.join(', ')}] is: ${max}.`);
        }

        /**
         * Task 29: Uses a loop to reverse a string (e.g., "hello" → "olleh").
         */
        function reverseString() {
            const originalString = document.getElementById('stringReverse').value;
            let reversedString = "";
            for (let i = originalString.length - 1; i >= 0; i--) {
                reversedString += originalString[i];
            }
            logOutput(`Task 29: Original string: "${originalString}", Reversed string: "${reversedString}".`);
        }

        /**
         * Task 30: Uses a loop to count how many vowels are in a given string.
         */
        function countVowels() {
            const str = document.getElementById('stringVowels').value.toLowerCase();
            let vowelCount = 0;
            const vowels = "aeiou";
            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) {
                    vowelCount++;
                }
            }
            logOutput(`Task 30: The string "${str}" contains ${vowelCount} vowel(s).`);
        }
    </script>
</body>
</html>
