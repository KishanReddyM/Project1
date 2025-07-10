<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Objects, Prototypes, and Classes Demo</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8;
            color: #334155;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
            max-width: 900px;
            width: 100%;
        }
        h1 {
            color: #1e293b;
            font-size: 2.25rem; /* 36px */
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;
        }
        h2 {
            color: #334155;
            font-size: 1.5rem; /* 24px */
            font-weight: 600;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 5px;
        }
        p {
            margin-bottom: 10px;
            line-height: 1.6;
        }
        pre {
            background-color: #e2e8f0;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }
        .console-output {
            background-color: #1a202c;
            color: #a0aec0;
            padding: 20px;
            border-radius: 8px;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            font-size: 0.85rem;
            white-space: pre-wrap;
            word-break: break-all;
            max-height: 400px;
            overflow-y: auto;
            margin-top: 20px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>JavaScript Objects, Prototypes, and Classes Demo</h1>
        <p>This page demonstrates various JavaScript concepts related to objects, prototypes, and ES6 classes. The results of the operations are logged to the browser's console. Please open your browser's developer tools (usually F12 or Ctrl+Shift+I / Cmd+Option+I) and navigate to the "Console" tab to see the output.</p>

        <div class="console-output" id="consoleOutput">
            <!-- Console output will be displayed here -->
            <strong>Console Output:</strong><br>
        </div>

        <script>
            // Redirect console.log to a div for display on the page
            const originalConsoleLog = console.log;
            const consoleOutputDiv = document.getElementById('consoleOutput');

            console.log = function(...args) {
                originalConsoleLog.apply(console, args); // Still log to actual console
                const p = document.createElement('p');
                p.textContent = args.map(arg => {
                    if (typeof arg === 'object' && arg !== null) {
                        try {
                            return JSON.stringify(arg, null, 2);
                        } catch (e) {
                            return arg.toString(); // Fallback for circular references etc.
                        }
                    }
                    return String(arg);
                }).join(' ');
                consoleOutputDiv.appendChild(p);
                consoleOutputDiv.scrollTop = consoleOutputDiv.scrollHeight; // Scroll to bottom
            };

            console.log("--- Starting JavaScript Demo ---");

            // ---------------------------------------------------------------------
            // 🟧 Part 1: Basic Object Operations — Tasks 1–10
            // ---------------------------------------------------------------------
            console.log("\n--- Part 1: Basic Object Operations ---");

            // Task 1: Create an object person with properties: name, age, city.
            let person = {
                name: "Alice",
                age: 30,
                city: "New York"
            };
            console.log("Task 1: Initial person object:", person);

            // Task 2: Access and log each property using dot notation.
            console.log("Task 2: Accessing properties using dot notation:");
            console.log("Name:", person.name);
            console.log("Age:", person.age);
            console.log("City:", person.city);

            // Task 3: Access and log properties using bracket notation.
            console.log("Task 3: Accessing properties using bracket notation:");
            console.log("Name:", person["name"]);
            console.log("Age:", person["age"]);
            console.log("City:", person["city"]);

            // Task 4: Add a new property email to the person object.
            person.email = "alice@example.com";
            console.log("Task 4: Person object after adding email:", person);

            // Task 5: Update the city of the person to a new value.
            person.city = "San Francisco";
            console.log("Task 5: Person object after updating city:", person);

            // Task 6: Delete the age property from the object.
            delete person.age;
            console.log("Task 6: Person object after deleting age:", person);

            // Task 7: Loop through the object using for...in to log all keys and values.
            console.log("Task 7: Looping through person object with for...in:");
            for (let key in person) {
                console.log(`${key}: ${person[key]}`);
            }

            // Task 8: Create an object book with properties: title, author, year.
            let book = {
                title: "The Great Adventure",
                author: "Jane Doe",
                year: 2020
            };
            console.log("Task 8: Book object:", book);

            // Task 9: Nest one object inside another (e.g., person.address = { street, zip }).
            person.address = {
                street: "123 Main St",
                zip: "94105"
            };
            console.log("Task 9: Person object after nesting address:", person);
            console.log("Nested address street:", person.address.street);

            // Task 10: Create an array of 3 objects (e.g., students) and log the second student’s name.
            let students = [
                { name: "Bob", id: 101, grade: "A" },
                { name: "Charlie", id: 102, grade: "B" },
                { name: "Diana", id: 103, grade: "A+" }
            ];
            console.log("Task 10: Array of students:", students);
            console.log("Second student's name:", students[1].name);

            // ---------------------------------------------------------------------
            // 🟩 Part 2: Properties and Methods — Tasks 11–17
            // ---------------------------------------------------------------------
            console.log("\n--- Part 2: Properties and Methods ---");

            // Task 11: Add a method greet() to person that logs “Hello, my name is ___”.
            // (Note: This will be updated in Part 3 to use 'this')
            person.greet = function() {
                console.log("Task 11: Hello, my name is " + this.name + ".");
            };
            person.greet();

            // Task 12: Create an object calculator with methods: add(a, b), subtract(a, b).
            const calculator = {
                add: function(a, b) {
                    return a + b;
                },
                subtract: function(a, b) {
                    return a - b;
                }
            };
            console.log("Task 12: Calculator add(5, 3):", calculator.add(5, 3));
            console.log("Task 12: Calculator subtract(10, 4):", calculator.subtract(10, 4));

            // Task 13: Add a method isAdult() in person that returns true if age ≥ 18.
            // (Note: 'age' was deleted earlier, so we'll re-add it for this task)
            person.age = 25; // Re-adding age for this task
            person.isAdult = function() {
                return this.age >= 18;
            };
            console.log("Task 13: Is person an adult?", person.isAdult());
            person.age = 16;
            console.log("Task 13: Is person (age 16) an adult?", person.isAdult());
            person.age = 25; // Resetting age

            // Task 14: Create an object circle with radius and method area() using Math.PI.
            const circle = {
                radius: 5,
                area: function() {
                    return Math.PI * this.radius * this.radius;
                }
            };
            console.log("Task 14: Circle area (radius 5):", circle.area());

            // Task 15: Add a method getSummary() to book that returns a combined sentence.
            book.getSummary = function() {
                return `${this.title} by ${this.author}, published in ${this.year}.`;
            };
            console.log("Task 15: Book summary:", book.getSummary());

            // Task 16: Create a method in person that updates the name (setName(newName)).
            person.setName = function(newName) {
                this.name = newName;
            };
            console.log("Task 16: Person name before setName:", person.name);
            person.setName("Alicia");
            console.log("Task 16: Person name after setName:", person.name);

            // Task 17: Create a method that logs all property values in a formatted string.
            person.logProperties = function() {
                let properties = [];
                for (let key in this) {
                    // Exclude methods from the general property logging for clarity
                    if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                         properties.push(`${key}: ${this[key]}`);
                    } else if (typeof this[key] === 'object' && this[key] !== null) {
                        properties.push(`${key}: ${JSON.stringify(this[key])}`);
                    }
                }
                console.log("Task 17: Person's properties (formatted): " + properties.join(", "));
            };
            person.logProperties();

            // ---------------------------------------------------------------------
            // 🟦 Part 3: this Keyword — Tasks 18–21
            // ---------------------------------------------------------------------
            console.log("\n--- Part 3: 'this' Keyword ---");

            // Task 18: Use this inside person.greet() to access name.
            // (Already done in Task 11, but explicitly calling it again for this task)
            console.log("Task 18: Using 'this' in person.greet():");
            person.greet(); // Now logs "Hello, my name is Alicia."

            // Task 19: Log the difference between calling a method with arrow function vs regular function (scope of this).
            console.log("Task 19: 'this' scope: Arrow vs Regular functions");

            const objWithMethods = {
                value: 42,
                regularFunction: function() {
                    // 'this' refers to objWithMethods
                    console.log("  Regular function 'this.value':", this.value);
                },
                arrowFunction: () => {
                    // 'this' refers to the lexical scope (global object in this case, or undefined in strict mode)
                    console.log("  Arrow function 'this.value':", this.value); // Will likely be undefined or global object's value
                }
            };
            objWithMethods.regularFunction();
            objWithMethods.arrowFunction();

            // Demonstrating 'this' with a standalone function vs object method
            function standaloneFunc() {
                console.log("  Standalone function 'this':", this); // 'this' will be the global object (window in browser, undefined in strict mode)
            }
            standaloneFunc();

            // Task 20: Add a nested object and use this inside its method. Observe behavior.
            person.job = {
                title: "Software Engineer",
                company: "Tech Corp",
                getJobDetails: function() {
                    // 'this' here refers to the 'job' object
                    console.log(`Task 20: Job Details: ${this.title} at ${this.company}.`);
                    // To access person's name from here, you'd need a reference to the outer object
                    // console.log(`  (Employee: ${person.name})`); // Accessing via outer scope variable
                }
            };
            person.job.getJobDetails();

            // Task 21: Create a method where this is used incorrectly (arrow inside method) and fix it.
            console.log("Task 21: Incorrect 'this' usage (arrow inside method) and fix:");

            const problemObject = {
                data: "Important Data",
                // Incorrect usage: 'this' in the arrow function refers to the global scope
                // because arrow functions do not bind their own 'this'.
                logDataIncorrect: function() {
                    setTimeout(() => {
                        console.log("  Incorrect 'this' (arrow in setTimeout):", this.data); // 'this' here is problemObject
                    }, 100);
                },
                // Correct usage: the arrow function correctly captures 'this' from its lexical parent (logDataCorrect)
                logDataCorrect: function() {
                    const self = this; // Common pattern before ES6 arrows, or just use arrow function directly
                    setTimeout(function() {
                        console.log("  Correct 'this' (regular function in setTimeout, using self):", self.data);
                    }, 100);
                    // The best fix with arrow functions:
                    setTimeout(() => {
                        console.log("  Correct 'this' (arrow function in setTimeout, lexical 'this'):", this.data); // 'this' here correctly refers to problemObject
                    }, 100);
                }
            };

            problemObject.logDataIncorrect(); // This will correctly log "Important Data" because arrow function captures 'this' from `logDataIncorrect`
                                            // My previous comment was slightly off; arrow functions *are* the fix for `this` in callbacks.
                                            // Let's re-demonstrate the *original* problem that arrow functions solve.

            const oldProblemObject = {
                data: "Old Data",
                logDataProblem: function() {
                    // In a regular function callback, 'this' refers to the caller of the callback (often window/global)
                    setTimeout(function() {
                        console.log("  Problematic 'this' (regular function in setTimeout):", this.data); // 'this' is window, this.data is undefined
                    }, 100);
                }
            };
            oldProblemObject.logDataProblem(); // This will log undefined for `this.data`

            // The fix is indeed using an arrow function for the callback
            const fixedObject = {
                data: "Fixed Data",
                logDataFixed: function() {
                    setTimeout(() => { // Arrow function retains 'this' from logDataFixed
                        console.log("  Fixed 'this' (arrow function in setTimeout):", this.data); // 'this' is fixedObject
                    }, 100);
                }
            };
            fixedObject.logDataFixed();


            // ---------------------------------------------------------------------
            // 🟦 Part 4: Constructor Functions & Prototypes — Tasks 22–26
            // ---------------------------------------------------------------------
            console.log("\n--- Part 4: Constructor Functions & Prototypes ---");

            // Task 22: Create a constructor function Car(brand, model, year) and create 2 car objects.
            function Car(brand, model, year) {
                this.brand = brand;
                this.model = model;
                this.year = year;
            }

            const car1 = new Car("Toyota", "Camry", 2020);
            const car2 = new Car("Honda", "Civic", 2023);
            console.log("Task 22: Car 1:", car1);
            console.log("Task 22: Car 2:", car2);

            // Task 23: Add a method getDetails() to the Car prototype.
            Car.prototype.getDetails = function() {
                return `Task 23: ${this.year} ${this.brand} ${this.model}`;
            };
            console.log(car1.getDetails());
            console.log(car2.getDetails());

            // Task 24: Add a property mileage to one car object using constructor.
            // (Assuming "using constructor" means adding it after instantiation, as it's not a parameter)
            car1.mileage = 50000;
            console.log("Task 24: Car 1 with mileage:", car1);
            console.log("Task 24: Car 2 (no mileage property):", car2);

            // Task 25: Use prototype to add a method honk() shared by all car instances.
            Car.prototype.honk = function() {
                console.log(`Task 25: The ${this.model} honks: Beep beep!`);
            };
            car1.honk();
            car2.honk();

            // Task 26: Add a method isNew() that returns true if year ≥ 2022.
            Car.prototype.isNew = function() {
                return this.year >= 2022;
            };
            console.log("Task 26: Is Car 1 new (2020)?", car1.isNew());
            console.log("Task 26: Is Car 2 new (2023)?", car2.isNew());

            // ---------------------------------------------------------------------
            // 🟥 Part 5: ES6 Classes — Tasks 27–30
            // ---------------------------------------------------------------------
            console.log("\n--- Part 5: ES6 Classes ---");

            // Task 27: Create a class Student with constructor: name, roll, grade.
            class Student {
                constructor(name, roll, grade) {
                    this.name = name;
                    this.roll = roll;
                    this.grade = grade;
                }

                // Task 28: Add a method getDetails() inside the class.
                getDetails() {
                    return `Task 28: Student: ${this.name}, Roll No: ${this.roll}, Grade: ${this.grade}`;
                }
            }

            // Task 29: Create 2 instances of Student and log their details.
            const student1 = new Student("Emily", 1, "A");
            const student2 = new Student("Frank", 2, "B+");
            console.log("Task 29: Student 1 details:", student1.getDetails());
            console.log("Task 29: Student 2 details:", student2.getDetails());

            // Task 30: Extend Student into a GraduateStudent class and add degree property + method getDegree().
            class GraduateStudent extends Student {
                constructor(name, roll, grade, degree) {
                    super(name, roll, grade); // Call the parent constructor
                    this.degree = degree;
                }

                getDegree() {
                    return `Task 30: ${this.name} is pursuing a ${this.degree} degree.`;
                }

                // Optionally override getDetails to include degree
                getDetails() {
                    return `${super.getDetails()}, Degree: ${this.degree}`;
                }
            }

            const gradStudent1 = new GraduateStudent("Grace", 3, "A-", "Masters in AI");
            console.log("Task 30: Graduate Student 1 details:", gradStudent1.getDetails());
            console.log("Task 30: Graduate Student 1 degree:", gradStudent1.getDegree());

            console.log("\n--- JavaScript Demo Complete ---");
        </script>
    </div>
</body>
</html>
