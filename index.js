// Object (RefType)
let person = {name:'Mosh',
            age:30
          };

          //Dot Notation
          person.age =40;
          console.log(person.age);
    
// ternary operator
let points= 110;
let type= points > 100 ? 'gold' : 'silver';      
console.log(type);    

let hour = 11;
if (hour >= 6 && hour < 10)
console.log ('morning');
else if (hour==12 || hour==24);
else(console.log('something else'));

//switch case
let role = 'guest';
switch (role){
case 'admin':
console.log('Admin User');
//break;

case 'guest':
console.log('Guest User');
break;

default:
  console.log('Unknown User');
}

//for loop
for (i=0; i<=5; i++)
{
  console.log('Welcome To JS');
}

for (let i = 0; i <=5; i++) {
if (i%2 ==0) console.log(i);
}

//while
// let i = 0;
// while (i<=5) {
// if (i%2==0) console.log(i);
// i++;
// }

//do-while
let i = 0;
do {
  if (i%2==0) console.log(i);
  i++;
} while (i<=5);

//infinite-loop
let j = 0;
while (j<5) {
  console.log(j);
}

//for-in
const person = {
  name:'Mosh',
  age: 30
};
for (let key in person)
console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
// for ( let index in colors)
// console.log(index, colors[index]);

//for-of
for (let color of colors)
console.log(color);

// break and continue

let k = 0;
while (k <=5) {
// if (k==3) break;
if (k % 2 == 0) {
  k++;
  continue;
}

console.log(k);
k++;
}

//Ex
let number = max(6,3);
console.log(number);  

function max(a, b) {
  // if (a> b) return a;
  // return b;
  return (a>b) ? a: b;
}

//11-Ex
console.log(isLandscape(800, 600));
function isLandscape(width, height) 
{
  // return(width > height ? true: false);
  return (width > height);
}

//12-Ex fizzBuzz
const output = fizzBuzz(14);
console.log(output);

function fizzBuzz(input) {
  for (let m=1; m<=16; m++)
  {
    if (m % 3 == 0 && m % 5 == 0) {
      console.log("FizzBuzz")
    }
    else if ( m % 3 == 0) {
      console.log("Fizz")
    }
    else if ( m % 5 == 0) {
      console.log("Buzz")
    }
    else {
      console.log(m)
    }
  }
}

//13-Ex demerit points
checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5

  if (speed < speedLimit + kmPerPoint)
  console.log('Ok');
else {
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >=12)
  console.log('License suspended');
else
console.log('Points', points)
}
}

//15-Ex Count Truthy
const array = [ 0, null, undefined, 1, 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array)
  if (value)
  count++;
return count;
}

//16- Ex String Properties
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};
showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
  // console.log(key);
 if (typeof obj[key] == 'string')
 console.log(key, obj[key]);
}

//17- Sum of Multiple

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i<= limit; i++)
  if (i % 3 === 0 ||i % 5 === 0 )
  sum += i;

return sum;
}