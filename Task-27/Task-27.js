// Function to calculate average of marks
function calculateAverage(marks) {
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  return total / marks.length;
}

// Function to determine grade based on average
function getGrade(average) {
  if (average >= 90) return 'A';
  else if (average >= 80) return 'B';
  else if (average >= 70) return 'C';
  else if (average >= 60) return 'D';
  else return 'F';
}

// Function to print student report
function printStudentReport(student) {
  const average = calculateAverage(student.marks);
  const grade = getGrade(average);
  console.log(`Student: ${student.name}`);
  console.log(`Marks: ${student.marks.join(", ")}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Grade: ${grade}`);
  console.log("-------------------------");
}

// Array of students using objects
let students = [
  { name: "Alice", marks: [85, 90, 78, 92] },
  { name: "Bob", marks: [65, 70, 58, 60] },
  { name: "Charlie", marks: [95, 88, 93, 97] },
  { name: "Daisy", marks: [55, 60, 52, 48] }
];

// Loop through each student and print report
for (let student of students) {
  printStudentReport(student);
}
