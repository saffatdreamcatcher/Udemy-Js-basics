const marks = [80, 80, 50];
console.log(calculateGrade(array));

function calculateGrade(marks) {
//   let sum = 0;
//   for (let mark of marks)
//   sum += mark;
// let average = sum / marks.length;

const average = calculateAverage(marks);

if (average < 60) return 'Grade F';
if (average < 70) return 'Grade D';
if (average < 80) return 'Grade C';
if (average < 90) return 'Grade B';
return 'Grade A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
  sum += value;
// let average = sum / array.length;
// return average;
return sum / array.length;
}