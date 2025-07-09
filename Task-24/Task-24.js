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

        <!-- New Section: Functions -->
        <h2 class="text-3xl font-bold section-title mb-6 mt-12">Part 3: Functions</h2>

        <!-- Part 1: Function Declaration — Tasks 1–5 -->
        <h3 class="text-2xl font-bold section-title mb-4">Part 3.1: Function Declaration</h3>

        <!-- Task 1: greet() -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">1. Function: greet()</h4>
            <button onclick="greet()" class="btn">Greet</button>
        </div>

        <!-- Task 2: sayHello(name) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">2. Function: sayHello(name)</h4>
            <div class="input-group">
                <label for="sayHelloName">Enter a name:</label>
                <input type="text" id="sayHelloName" class="form-input">
            </div>
            <button onclick="callSayHello()" class="btn">Say Hello</button>
        </div>

        <!-- Task 3: square(num) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">3. Function: square(num)</h4>
            <div class="input-group">
                <label for="squareNum">Enter a number:</label>
                <input type="number" id="squareNum" class="form-input">
            </div>
            <button onclick="callSquare()" class="btn">Get Square</button>
        </div>

        <!-- Task 4: isEven(num) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">4. Function: isEven(num)</h4>
            <div class="input-group">
                <label for="isEvenNum">Enter a number:</label>
                <input type="number" id="isEvenNum" class="form-input">
            </div>
            <button onclick="callIsEven()" class="btn">Check Even</button>
        </div>

        <!-- Task 5: ageCategory(age) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">5. Function: ageCategory(age)</h4>
            <div class="input-group">
                <label for="ageCategoryInput">Enter age:</label>
                <input type="number" id="ageCategoryInput" class="form-input">
            </div>
            <button onclick="callAgeCategory()" class="btn">Get Category</button>
        </div>

        <!-- Part 2: Function Expression — Tasks 6–10 -->
        <h3 class="text-2xl font-bold section-title mb-4 mt-8">Part 3.2: Function Expression</h3>

        <!-- Task 6: greetExpression -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">6. Function Expression: greetExpression()</h4>
            <button onclick="greetExpression()" class="btn">Greet (Expression)</button>
        </div>

        <!-- Task 7: squareExpression -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">7. Function Expression: squareExpression(num)</h4>
            <div class="input-group">
                <label for="squareExpressionNum">Enter a number:</label>
                <input type="number" id="squareExpressionNum" class="form-input">
            </div>
            <button onclick="callSquareExpression()" class="btn">Get Square (Expression)</button>
        </div>

        <!-- Task 8: calculateArea -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">8. Function Expression: calculateArea(length, width)</h4>
            <div class="input-group">
                <label for="areaLength">Enter length:</label>
                <input type="number" id="areaLength" class="form-input">
            </div>
            <div class="input-group">
                <label for="areaWidth">Enter width:</label>
                <input type="number" id="areaWidth" class="form-input">
            </div>
            <button onclick="callCalculateArea()" class="btn">Calculate Area</button>
        </div>

        <!-- Task 9: isPalindrome -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">9. Function Expression: isPalindrome(str)</h4>
            <div class="input-group">
                <label for="palindromeString">Enter a string:</label>
                <input type="text" id="palindromeString" class="form-input">
            </div>
            <button onclick="callIsPalindrome()" class="btn">Check Palindrome</button>
        </div>

        <!-- Task 10: reverseStringExpression -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">10. Function Expression: reverseStringExpression(str)</h4>
            <div class="input-group">
                <label for="reverseStringExpressionInput">Enter a string:</label>
                <input type="text" id="reverseStringExpressionInput" class="form-input">
            </div>
            <button onclick="callReverseStringExpression()" class="btn">Reverse String (Expression)</button>
        </div>

        <!-- Part 3: Arrow Functions — Tasks 11–15 -->
        <h3 class="text-2xl font-bold section-title mb-4 mt-8">Part 3.3: Arrow Functions</h3>

        <!-- Task 11: greetArrow -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">11. Arrow Function: greetArrow()</h4>
            <button onclick="greetArrow()" class="btn">Greet (Arrow)</button>
        </div>

        <!-- Task 12: addNumbersArrow -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">12. Arrow Function: addNumbersArrow(a, b)</h4>
            <div class="input-group">
                <label for="addNum1">Enter first number:</label>
                <input type="number" id="addNum1" class="form-input">
            </div>
            <div class="input-group">
                <label for="addNum2">Enter second number:</label>
                <input type="number" id="addNum2" class="form-input">
            </div>
            <button onclick="callAddNumbersArrow()" class="btn">Add Numbers</button>
        </div>

        <!-- Task 13: cubeArrow -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">13. Arrow Function: cubeArrow(num)</h4>
            <div class="input-group">
                <label for="cubeNum">Enter a number:</label>
                <input type="number" id="cubeNum" class="form-input">
            </div>
            <button onclick="callCubeArrow()" class="btn">Get Cube</button>
        </div>

        <!-- Task 14: checkDivisibleArrow -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">14. Arrow Function: checkDivisibleArrow(num)</h4>
            <div class="input-group">
                <label for="divisibleArrowNum">Enter a number:</label>
                <input type="number" id="divisibleArrowNum" class="form-input">
            </div>
            <button onclick="callCheckDivisibleArrow()" class="btn">Check Divisibility (Arrow)</button>
        </div>

        <!-- Task 15: greetUserArrow -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">15. Arrow Function: greetUserArrow(name)</h4>
            <div class="input-group">
                <label for="greetUserName">Enter user name:</label>
                <input type="text" id="greetUserName" class="form-input">
            </div>
            <button onclick="callGreetUserArrow()" class="btn">Greet User (Arrow)</button>
        </div>

        <!-- Part 4: Parameters and Arguments — Tasks 16–20 -->
        <h3 class="text-2xl font-bold section-title mb-4 mt-8">Part 3.4: Parameters and Arguments</h3>

        <!-- Task 16: sum(a, b) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">16. Function: sum(a, b)</h4>
            <div class="input-group">
                <label for="sumA">Enter first number:</label>
                <input type="number" id="sumA" class="form-input">
            </div>
            <div class="input-group">
                <label for="sumB">Enter second number:</label>
                <input type="number" id="sumB" class="form-input">
            </div>
            <button onclick="callSum()" class="btn">Calculate Sum</button>
        </div>

        <!-- Task 17: nameColorSentence(name, color) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">17. Function: nameColorSentence(name, color)</h4>
            <div class="input-group">
                <label for="sentenceName">Enter name:</label>
                <input type="text" id="sentenceName" class="form-input">
            </div>
            <div class="input-group">
                <label for="sentenceColor">Enter favorite color:</label>
                <input type="text" id="sentenceColor" class="form-input">
            </div>
            <button onclick="callNameColorSentence()" class="btn">Generate Sentence</button>
        </div>

        <!-- Task 18: calculateAverage(num1, num2, num3) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">18. Function: calculateAverage(num1, num2, num3)</h4>
            <div class="input-group">
                <label for="avgNum1">Enter first number:</label>
                <input type="number" id="avgNum1" class="form-input">
            </div>
            <div class="input-group">
                <label for="avgNum2">Enter second number:</label>
                <input type="number" id="avgNum2" class="form-input">
            </div>
            <div class="input-group">
                <label for="avgNum3">Enter third number:</label>
                <input type="number" id="avgNum3" class="form-input">
            </div>
            <button onclick="callCalculateAverage()" class="btn">Calculate Average</button>
        </div>

        <!-- Task 19: repeatString(str, count) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">19. Function: repeatString(str, count)</h4>
            <div class="input-group">
                <label for="repeatStringInput">Enter string:</label>
                <input type="text" id="repeatStringInput" class="form-input">
            </div>
            <div class="input-group">
                <label for="repeatCount">Enter repeat count:</label>
                <input type="number" id="repeatCount" min="0" class="form-input">
            </div>
            <button onclick="callRepeatString()" class="btn">Repeat String</button>
        </div>

        <!-- Task 20: getArrayLength(arr) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">20. Function: getArrayLength(arr)</h4>
            <div class="input-group">
                <label for="arrayLengthInput">Enter array elements (comma-separated):</label>
                <input type="text" id="arrayLengthInput" placeholder="e.g., apple,banana,cherry" class="form-input">
            </div>
            <button onclick="callGetArrayLength()" class="btn">Get Array Length</button>
        </div>

        <!-- Part 5: Return Values — Tasks 21–25 -->
        <h3 class="text-2xl font-bold section-title mb-4 mt-8">Part 3.5: Return Values</h3>

        <!-- Task 21: getFullName(firstName, lastName) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">21. Function: getFullName(firstName, lastName)</h4>
            <div class="input-group">
                <label for="firstNameInput">Enter first name:</label>
                <input type="text" id="firstNameInput" class="form-input">
            </div>
            <div class="input-group">
                <label for="lastNameInput">Enter last name:</label>
                <input type="text" id="lastNameInput" class="form-input">
            </div>
            <button onclick="callGetFullName()" class="btn">Get Full Name</button>
        </div>

        <!-- Task 22: getLargestOfThree(num1, num2, num3) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">22. Function: getLargestOfThree(num1, num2, num3)</h4>
            <div class="input-group">
                <label for="largestNum1">Enter first number:</label>
                <input type="number" id="largestNum1" class="form-input">
            </div>
            <div class="input-group">
                <label for="largestNum2">Enter second number:</label>
                <input type="number" id="largestNum2" class="form-input">
            </div>
            <div class="input-group">
                <label for="largestNum3">Enter third number:</label>
                <input type="number" id="largestNum3" class="form-input">
            </div>
            <button onclick="callGetLargestOfThree()" class="btn">Find Largest</button>
        </div>

        <!-- Task 23: multiplyOrAdd(a, b, operation) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">23. Function: multiplyOrAdd(a, b, operation)</h4>
            <div class="input-group">
                <label for="opNumA">Enter first number:</label>
                <input type="number" id="opNumA" class="form-input">
            </div>
            <div class="input-group">
                <label for="opNumB">Enter second number:</label>
                <input type="number" id="opNumB" class="form-input">
            </div>
            <div class="input-group">
                <label for="operationInput">Enter operation (add or multiply):</label>
                <input type="text" id="operationInput" class="form-input">
            </div>
            <button onclick="callMultiplyOrAdd()" class="btn">Perform Operation</button>
        </div>

        <!-- Task 24: includesJS(str) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">24. Function: includesJS(str)</h4>
            <div class="input-group">
                <label for="includesJSString">Enter a string:</label>
                <input type="text" id="includesJSString" class="form-input">
            </div>
            <button onclick="callIncludesJS()" class="btn">Check for "JS"</button>
        </div>

        <!-- Task 25: factorialLoop(num) -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">25. Function: factorialLoop(num)</h4>
            <div class="input-group">
                <label for="factorialLoopNum">Enter a number:</label>
                <input type="number" id="factorialLoopNum" min="0" class="form-input">
            </div>
            <button onclick="callFactorialLoop()" class="btn">Calculate Factorial (Loop)</button>
        </div>

        <!-- Part 6: Scope (Local vs Global) — Tasks 26–30 -->
        <h3 class="text-2xl font-bold section-title mb-4 mt-8">Part 3.6: Scope (Local vs Global)</h3>

        <!-- Task 26: Global Variable -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">26. Global Variable Usage</h4>
            <button onclick="useGlobalVariable()" class="btn">Use Global Var</button>
        </div>

        <!-- Task 27: Local Variable Access -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">27. Local Variable Access (Will show error in console)</h4>
            <button onclick="accessLocalVariable()" class="btn">Access Local Var</button>
        </div>

        <!-- Task 28: Local Variable Increment -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">28. Local Variable Increment (Each call resets)</h4>
            <button onclick="incrementLocalCount()" class="btn">Increment Local Count</button>
        </div>

        <!-- Task 29: Same Variable Name Locally -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">29. Same Variable Name Locally (No Conflict)</h4>
            <button onclick="callConflictingFunctions()" class="btn">Run Conflicting Functions</button>
        </div>

        <!-- Task 30: Modify Global Variable -->
        <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 class="text-xl font-semibold mb-3 text-gray-700">30. Modify Global Variable</h4>
            <button onclick="modifyGlobalVariable()" class="btn">Modify Global Var</button>
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

        // Part 3: Functions - New Section

        // Part 3.1: Function Declaration — Tasks 1–5

        /**
         * Task 1: Function greet() that logs “Hello, World!”.
         */
        function greet() {
            logOutput("Part 3.1, Task 1: Hello, World!");
        }

        /**
         * Task 2: Function sayHello(name) that takes a name and logs “Hello, name!”.
         * @param {string} name - The name to greet.
         */
        function sayHello(name) {
            logOutput(`Part 3.1, Task 2: Hello, ${name}!`);
        }

        /**
         * Helper function to call sayHello from the UI.
         */
        function callSayHello() {
            const name = document.getElementById('sayHelloName').value;
            if (name.trim() === '') {
                logOutput("Part 3.1, Task 2: Please enter a name.");
                return;
            }
            sayHello(name);
        }

        /**
         * Task 3: Function square(num) that returns the square of a number.
         * @param {number} num - The number to square.
         * @returns {number} The square of the number.
         */
        function square(num) {
            return num * num;
        }

        /**
         * Helper function to call square from the UI.
         */
        function callSquare() {
            const num = parseFloat(document.getElementById('squareNum').value);
            if (isNaN(num)) {
                logOutput("Part 3.1, Task 3: Please enter a valid number.");
                return;
            }
            const result = square(num);
            logOutput(`Part 3.1, Task 3: The square of ${num} is ${result}.`);
        }

        /**
         * Task 4: Function isEven(num) that returns true if the number is even.
         * @param {number} num - The number to check.
         * @returns {boolean} True if even, false otherwise.
         */
        function isEven(num) {
            return num % 2 === 0;
        }

        /**
         * Helper function to call isEven from the UI.
         */
        function callIsEven() {
            const num = parseInt(document.getElementById('isEvenNum').value);
            if (isNaN(num)) {
                logOutput("Part 3.1, Task 4: Please enter a valid integer.");
                return;
            }
            const result = isEven(num);
            logOutput(`Part 3.1, Task 4: Is ${num} even? ${result}.`);
        }

        /**
         * Task 5: Function that takes age as input and returns “Adult” or “Minor”.
         * @param {number} age - The age to check.
         * @returns {string} "Adult" or "Minor".
         */
        function ageCategory(age) {
            return age >= 18 ? "Adult" : "Minor";
        }

        /**
         * Helper function to call ageCategory from the UI.
         */
        function callAgeCategory() {
            const age = parseInt(document.getElementById('ageCategoryInput').value);
            if (isNaN(age) || age < 0) {
                logOutput("Part 3.1, Task 5: Please enter a valid positive age.");
                return;
            }
            const result = ageCategory(age);
            logOutput(`Part 3.1, Task 5: Age ${age} is: ${result}.`);
        }

        // Part 3.2: Function Expression — Tasks 6–10

        /**
         * Task 6: Function expression let greet = function() {} that logs a message.
         */
        let greetExpression = function() {
            logOutput("Part 3.2, Task 6: Hello from a function expression!");
        };

        /**
         * Task 7: Convert square() function to a function expression.
         */
        let squareExpression = function(num) {
            return num * num;
        };

        /**
         * Helper function to call squareExpression from the UI.
         */
        function callSquareExpression() {
            const num = parseFloat(document.getElementById('squareExpressionNum').value);
            if (isNaN(num)) {
                logOutput("Part 3.2, Task 7: Please enter a valid number.");
                return;
            }
            const result = squareExpression(num);
            logOutput(`Part 3.2, Task 7: The square of ${num} (expression) is ${result}.`);
        }

        /**
         * Task 8: Create a function expression to calculate the area of a rectangle.
         * @param {number} length - The length of the rectangle.
         * @param {number} width - The width of the rectangle.
         * @returns {number} The area of the rectangle.
         */
        let calculateArea = function(length, width) {
            return length * width;
        };

        /**
         * Helper function to call calculateArea from the UI.
         */
        function callCalculateArea() {
            const length = parseFloat(document.getElementById('areaLength').value);
            const width = parseFloat(document.getElementById('areaWidth').value);
            if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
                logOutput("Part 3.2, Task 8: Please enter valid positive numbers for length and width.");
                return;
            }
            const result = calculateArea(length, width);
            logOutput(`Part 3.2, Task 8: The area of a rectangle with length ${length} and width ${width} is ${result}.`);
        }

        /**
         * Task 9: Use a function expression to check if a string is a palindrome.
         * @param {string} str - The string to check.
         * @returns {boolean} True if palindrome, false otherwise.
         */
        let isPalindrome = function(str) {
            const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
            const reversedStr = cleanedStr.split('').reverse().join('');
            return cleanedStr === reversedStr;
        };

        /**
         * Helper function to call isPalindrome from the UI.
         */
        function callIsPalindrome() {
            const str = document.getElementById('palindromeString').value;
            if (str.trim() === '') {
                logOutput("Part 3.2, Task 9: Please enter a string.");
                return;
            }
            const result = isPalindrome(str);
            logOutput(`Part 3.2, Task 9: Is "${str}" a palindrome? ${result}.`);
        }

        /**
         * Task 10: Write a function expression to reverse a string.
         * @param {string} str - The string to reverse.
         * @returns {string} The reversed string.
         */
        let reverseStringExpression = function(str) {
            return str.split('').reverse().join('');
        };

        /**
         * Helper function to call reverseStringExpression from the UI.
         */
        function callReverseStringExpression() {
            const str = document.getElementById('reverseStringExpressionInput').value;
            logOutput(`Part 3.2, Task 10: Original: "${str}", Reversed (expression): "${reverseStringExpression(str)}".`);
        }

        // Part 3.3: Arrow Functions — Tasks 11–15

        /**
         * Task 11: Convert greet() to an arrow function.
         */
        const greetArrow = () => {
            logOutput("Part 3.3, Task 11: Hello from an arrow function!");
        };

        /**
         * Task 12: Write an arrow function that adds two numbers and returns the result.
         */
        const addNumbersArrow = (a, b) => a + b;

        /**
         * Helper function to call addNumbersArrow from the UI.
         */
        function callAddNumbersArrow() {
            const num1 = parseFloat(document.getElementById('addNum1').value);
            const num2 = parseFloat(document.getElementById('addNum2').value);
            if (isNaN(num1) || isNaN(num2)) {
                logOutput("Part 3.3, Task 12: Please enter two valid numbers.");
                return;
            }
            const result = addNumbersArrow(num1, num2);
            logOutput(`Part 3.3, Task 12: Sum of ${num1} and ${num2} (arrow) is ${result}.`);
        }

        /**
         * Task 13: Create an arrow function to return the cube of a number.
         */
        const cubeArrow = num => num * num * num;

        /**
         * Helper function to call cubeArrow from the UI.
         */
        function callCubeArrow() {
            const num = parseFloat(document.getElementById('cubeNum').value);
            if (isNaN(num)) {
                logOutput("Part 3.3, Task 13: Please enter a valid number.");
                return;
            }
            const result = cubeArrow(num);
            logOutput(`Part 3.3, Task 13: The cube of ${num} (arrow) is ${result}.`);
        }

        /**
         * Task 14: Write an arrow function to check if a number is divisible by 3 and 5.
         */
        const checkDivisibleArrow = num => num % 3 === 0 && num % 5 === 0;

        /**
         * Helper function to call checkDivisibleArrow from the UI.
         */
        function callCheckDivisibleArrow() {
            const num = parseInt(document.getElementById('divisibleArrowNum').value);
            if (isNaN(num)) {
                logOutput("Part 3.3, Task 14: Please enter a valid integer.");
                return;
            }
            const result = checkDivisibleArrow(num);
            logOutput(`Part 3.3, Task 14: Is ${num} divisible by 3 and 5 (arrow)? ${result}.`);
        }

        /**
         * Task 15: Create an arrow function greetUser(name) with one-line return using template literals.
         */
        const greetUserArrow = name => `Hello, ${name}! Welcome (arrow function)!`;

        /**
         * Helper function to call greetUserArrow from the UI.
         */
        function callGreetUserArrow() {
            const name = document.getElementById('greetUserName').value;
            if (name.trim() === '') {
                logOutput("Part 3.3, Task 15: Please enter a name.");
                return;
            }
            const result = greetUserArrow(name);
            logOutput(`Part 3.3, Task 15: ${result}`);
        }

        // Part 3.4: Parameters and Arguments — Tasks 16–20

        /**
         * Task 16: Create a function sum(a, b) that returns the sum of two numbers.
         * @param {number} a - First number.
         * @param {number} b - Second number.
         * @returns {number} The sum.
         */
        function sum(a, b) {
            return a + b;
        }

        /**
         * Helper function to call sum from the UI.
         */
        function callSum() {
            const num1 = parseFloat(document.getElementById('sumA').value);
            const num2 = parseFloat(document.getElementById('sumB').value);
            if (isNaN(num1) || isNaN(num2)) {
                logOutput("Part 3.4, Task 16: Please enter two valid numbers.");
                return;
            }
            const result = sum(num1, num2);
            logOutput(`Part 3.4, Task 16: Sum of ${num1} and ${num2} is ${result}.`);
        }

        /**
         * Task 17: Write a function that takes a name and favorite color as parameters and returns a sentence.
         * @param {string} name - The person's name.
         * @param {string} color - The favorite color.
         * @returns {string} A descriptive sentence.
         */
        function nameColorSentence(name, color) {
            return `${name}'s favorite color is ${color}.`;
        }

        /**
         * Helper function to call nameColorSentence from the UI.
         */
        function callNameColorSentence() {
            const name = document.getElementById('sentenceName').value;
            const color = document.getElementById('sentenceColor').value;
            if (name.trim() === '' || color.trim() === '') {
                logOutput("Part 3.4, Task 17: Please enter both name and favorite color.");
                return;
            }
            const result = nameColorSentence(name, color);
            logOutput(`Part 3.4, Task 17: ${result}`);
        }

        /**
         * Task 18: Create a function that takes 3 numbers and returns their average.
         * @param {number} num1 - First number.
         * @param {number} num2 - Second number.
         * @param {number} num3 - Third number.
         * @returns {number} The average of the three numbers.
         */
        function calculateAverage(num1, num2, num3) {
            return (num1 + num2 + num3) / 3;
        }

        /**
         * Helper function to call calculateAverage from the UI.
         */
        function callCalculateAverage() {
            const num1 = parseFloat(document.getElementById('avgNum1').value);
            const num2 = parseFloat(document.getElementById('avgNum2').value);
            const num3 = parseFloat(document.getElementById('avgNum3').value);
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                logOutput("Part 3.4, Task 18: Please enter three valid numbers.");
                return;
            }
            const result = calculateAverage(num1, num2, num3);
            logOutput(`Part 3.4, Task 18: The average of ${num1}, ${num2}, and ${num3} is ${result.toFixed(2)}.`);
        }

        /**
         * Task 19: Write a function that accepts a string and a number, and repeats the string that many times.
         * @param {string} str - The string to repeat.
         * @param {number} count - The number of times to repeat.
         * @returns {string} The repeated string.
         */
        function repeatString(str, count) {
            if (count < 0) return "";
            return str.repeat(count);
        }

        /**
         * Helper function to call repeatString from the UI.
         */
        function callRepeatString() {
            const str = document.getElementById('repeatStringInput').value;
            const count = parseInt(document.getElementById('repeatCount').value);
            if (str.trim() === '' || isNaN(count)) {
                logOutput("Part 3.4, Task 19: Please enter a string and a valid repeat count.");
                return;
            }
            const result = repeatString(str, count);
            logOutput(`Part 3.4, Task 19: "${str}" repeated ${count} times: "${result}".`);
        }

        /**
         * Task 20: Create a function that accepts an array and returns its length.
         * @param {Array} arr - The array to check.
         * @returns {number} The length of the array.
         */
        function getArrayLength(arr) {
            return arr.length;
        }

        /**
         * Helper function to call getArrayLength from the UI.
         */
        function callGetArrayLength() {
            const input = document.getElementById('arrayLengthInput').value;
            const arr = input.split(',').map(item => item.trim()).filter(item => item !== ''); // Handle empty inputs
            const result = getArrayLength(arr);
            logOutput(`Part 3.4, Task 20: The length of the array [${arr.join(', ')}] is: ${result}.`);
        }

        // Part 3.5: Return Values — Tasks 21–25

        /**
         * Task 21: Create a function getFullName(firstName, lastName) that returns the full name.
         * @param {string} firstName - The first name.
         * @param {string} lastName - The last name.
         * @returns {string} The full name.
         */
        function getFullName(firstName, lastName) {
            return `${firstName} ${lastName}`;
        }

        /**
         * Helper function to call getFullName from the UI.
         */
        function callGetFullName() {
            const firstName = document.getElementById('firstNameInput').value;
            const lastName = document.getElementById('lastNameInput').value;
            if (firstName.trim() === '' || lastName.trim() === '') {
                logOutput("Part 3.5, Task 21: Please enter both first and last names.");
                return;
            }
            const result = getFullName(firstName, lastName);
            logOutput(`Part 3.5, Task 21: Full Name: ${result}.`);
        }

        /**
         * Task 22: Write a function that returns the largest of 3 numbers.
         * @param {number} num1 - First number.
         * @param {number} num2 - Second number.
         * @param {number} num3 - Third number.
         * @returns {number} The largest of the three numbers.
         */
        function getLargestOfThree(num1, num2, num3) {
            return Math.max(num1, num2, num3);
        }

        /**
         * Helper function to call getLargestOfThree from the UI.
         */
        function callGetLargestOfThree() {
            const num1 = parseFloat(document.getElementById('largestNum1').value);
            const num2 = parseFloat(document.getElementById('largestNum2').value);
            const num3 = parseFloat(document.getElementById('largestNum3').value);
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                logOutput("Part 3.5, Task 22: Please enter three valid numbers.");
                return;
            }
            const result = getLargestOfThree(num1, num2, num3);
            logOutput(`Part 3.5, Task 22: The largest of ${num1}, ${num2}, ${num3} is: ${result}.`);
        }

        /**
         * Task 23: Create a function multiplyOrAdd(a, b, operation) that performs the correct operation based on input.
         * @param {number} a - First number.
         * @param {number} b - Second number.
         * @param {string} operation - The operation to perform ('add' or 'multiply').
         * @returns {number|string} The result of the operation or an error message.
         */
        function multiplyOrAdd(a, b, operation) {
            if (isNaN(a) || isNaN(b)) {
                return "Invalid numbers provided.";
            }
            switch (operation.toLowerCase().trim()) {
                case 'add':
                    return a + b;
                case 'multiply':
                    return a * b;
                default:
                    return "Invalid operation. Please use 'add' or 'multiply'.";
            }
        }

        /**
         * Helper function to call multiplyOrAdd from the UI.
         */
        function callMultiplyOrAdd() {
            const numA = parseFloat(document.getElementById('opNumA').value);
            const numB = parseFloat(document.getElementById('opNumB').value);
            const operation = document.getElementById('operationInput').value;
            const result = multiplyOrAdd(numA, numB, operation);
            logOutput(`Part 3.5, Task 23: Result of ${numA} ${operation} ${numB}: ${result}.`);
        }

        /**
         * Task 24: Write a function that returns true if a string includes the word “JS”.
         * @param {string} str - The string to check.
         * @returns {boolean} True if "JS" is found, false otherwise.
         */
        function includesJS(str) {
            return str.includes("JS");
        }

        /**
         * Helper function to call includesJS from the UI.
         */
        function callIncludesJS() {
            const str = document.getElementById('includesJSString').value;
            const result = includesJS(str);
            logOutput(`Part 3.5, Task 24: Does "${str}" include "JS"? ${result}.`);
        }

        /**
         * Task 25: Create a function that returns the factorial of a number using a for loop.
         * This is a duplicate of Task 21 in Part 2, but re-implemented here for functions section.
         * @param {number} num - The number to calculate factorial for.
         * @returns {number|string} The factorial or an error message.
         */
        function factorialLoop(num) {
            if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
                return "Please enter a valid non-negative integer.";
            }
            if (num === 0 || num === 1) {
                return 1;
            }
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            return factorial;
        }

        /**
         * Helper function to call factorialLoop from the UI.
         */
        function callFactorialLoop() {
            const num = parseInt(document.getElementById('factorialLoopNum').value);
            const result = factorialLoop(num);
            logOutput(`Part 3.5, Task 25: The factorial of ${num} is: ${result}.`);
        }

        // Part 3.6: Scope (Local vs Global) — Tasks 26–30

        /**
         * Task 26: Declare a global variable and use it inside a function.
         */
        let globalVar = "I am a global variable!"; // Global variable

        function useGlobalVariable() {
            logOutput(`Part 3.6, Task 26: Inside function: ${globalVar}`);
        }

        /**
         * Task 27: Declare a local variable inside a function and try accessing it outside the function.
         */
        function declareLocalVariable() {
            let localVar = "I am a local variable!"; // Local variable
            logOutput(`Part 3.6, Task 27: Inside function: ${localVar}`);
        }

        function accessLocalVariable() {
            declareLocalVariable(); // Call the function to declare the local variable
            try {
                // This line will cause an error if uncommented and run directly outside the function scope
                // logOutput(localVar); // ReferenceError: localVar is not defined
                logOutput("Part 3.6, Task 27: Attempted to access local variable outside function. Check console for ReferenceError.");
            } catch (e) {
                logOutput(`Part 3.6, Task 27: Error accessing local variable outside function: ${e.message}`);
            }
        }

        /**
         * Task 28: Create a function with a local variable count that gets incremented each time it runs.
         * Note: A new 'count' is created and initialized to 0 each time the function is called.
         */
        function incrementLocalCount() {
            let count = 0; // Local variable, reset on each call
            count++;
            logOutput(`Part 3.6, Task 28: Local count (resets each call): ${count}`);
        }

        /**
         * Task 29: Create two functions using the same variable name locally. Show they don’t conflict.
         */
        function functionA() {
            let message = "Message from Function A";
            logOutput(`Part 3.6, Task 29: Function A: ${message}`);
        }

        function functionB() {
            let message = "Message from Function B";
            logOutput(`Part 3.6, Task 29: Function B: ${message}`);
        }

        function callConflictingFunctions() {
            functionA();
            functionB();
        }

        /**
         * Task 30: Create a function that modifies a global variable’s value and log it before/after calling the function.
         */
        let changeableGlobalVar = "Original Global Value"; // Global variable for modification

        function modifyGlobal() {
            logOutput(`Part 3.6, Task 30: Inside modifyGlobal before change: ${changeableGlobalVar}`);
            changeableGlobalVar = "Modified Global Value";
            logOutput(`Part 3.6, Task 30: Inside modifyGlobal after change: ${changeableGlobalVar}`);
        }

        function modifyGlobalVariable() {
            logOutput(`Part 3.6, Task 30: Before calling modifyGlobal: ${changeableGlobalVar}`);
            modifyGlobal();
            logOutput(`Part 3.6, Task 30: After calling modifyGlobal: ${changeableGlobalVar}`);
        }

    </script>
</body>
</html>