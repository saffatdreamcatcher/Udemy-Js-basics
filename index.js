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

//17- Ex Sum of Multiple

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i<= limit; i++)
  if (i % 3 === 0 ||i % 5 === 0 )
  sum += i;

return sum;
}

//18- Ex Grade

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

//19- Ex Stars
showStars(5);
function showStars(rows) {
  for (let row= 1; row <= rows ; row++)
  {
    let pattern = '';
    for ( let i = 0; i < row; i++)
    pattern += '*';
  console.log(pattern);
  }
}

//20- Prime
showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
  if(isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if( number % factor === 0) 
    // break;
    return false;

return true;
}

// Factory Function
function createCircle(radius) {
  return {
    // radius: radius,
    radius,

    draw() {
      console.log('draw');
    }
    // draw: function() {
    //   console.log('draw');
    // }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


// Functions are objects
 const myCircle = createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
 Circle.call({}, 1);
 Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);


//Value vs Ref

let number2 = 10;

function increase(number2) {
number2++;
}
increase(number2);
console.log(number2);


let obj = { value: 10};

function increase(obj) {
obj.value++;
}
increase(obj);
console.log(obj);

// Enumerating properties of an object

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};
for (let key in circle)
console.log(key, circle[key]);

for (let key of Object.keys(circle))
console.log(key);

for (let entry of Object.entries(circle))
console.log(entry);

if ('radius in circle') console.log('yes');

// Cloning an obj
const circle3 = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// const another3 = {};
// for (let key in circle3)
// another[key] = circle[key];

// const another3 = Object.assign({
//   color: 'yellow'
// }, circle3)

const another3 = {...circle3 };

console.log(another3);


//String 

//string primitive
const message = 'this is my first message';

// String obj
const anotherone = new String('hi');

// Exercise 1
let address = {
  street: 'parkside',
  city: 'kolkata', 
  zipCode: 9210
};
function showAddress(address) {
  for (let key in address)
  console.log(key, address[key]);
}
showAddress(address);

// Exercise 2

let address2 = createAddress ('parkside', 'kolkata', 9210)

console.log(address2);
//Factory Function 
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

// Constructor Function
let address3 = new Address2('St carolina', 'new york', 5768)
console.log(address3)

function Address2(street, city, zipCode) {
this.street = street;
this.city = city;
this.zipCode = zipCode;
}

 

//ex 3

let address11 = new Address('St carolina', 'new york', 5768);
let address12 = new Address('St carolina', 'new york', 5768);
let address13 = address11;

console.log(areEqual(address11, address12));
console.log(areSame(address11, address12));
console.log(areSame(address11, address13));

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  }

  function areEqual(address11, address12) {
   return address11.street === address12.street && 
   address11.city === address12.city && 
   address11.zipCode === address12.zipCode;
  }

  function areSame(address11, address12) {
    return address11 === address12;
  }


  //Ex 4 Blog Post Object

  let post = {
    title: 'a', 
    body: 'b',
    author: 'c', 
    views: 10,
    comments: [
      { author:'a', body: 'b'},
      { author:'c', body: 'd'},
    ],
    isLive: true
  };
  console.log(post);


  //Ex 5 Constructor Functions 

  let post2 =  new Post('a', 'b', 'c');
   
  console.log(post2);

  function Post(title, body, author) {
   this.title = title;
   this.body = body;
   this.author = author;
   this.views = 0;
   this.comments = [];
   this.isLive = false;
  }

  //Ex 6 Price Range Objects

  let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}
  ];

  let resturants = [
    { averagePerPerson: 5}
  ]


  //Array | Adding Elements

 const numbers = [3, 4];

 //End
 numbers.push(5, 6);
 console.log(numbers);

 //Begining
 numbers.unshift(1,2);
 console.log(numbers);

 //Middle 
 numbers.splice(2, 0, 'a', 'b');
 console.log(numbers);

 //Finding Elements (primitives) 

 const numbers2 = [1, 2, 3, 2, 4];
 console.log(numbers2.indexOf(2));
 console.log(numbers2.lastIndexOf((2)));

 console.log(numbers2.indexOf(2) !== -1);
 console.log(numbers2.includes(3));


 //Finding Elements (Ref Types) 
 const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
 ];

 const course = courses.find(function(course) {
  return course.name === 'a';
 });

 console.log(course);

 //Arrow Functions

 const books = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
 ];

//  const book = books.find(book => {
//   return book.name === 'a';
//  });
const book = books.find(book => book.name ==='a')

 console.log(book);

 //Combining and slicing arrays

 const first = [1, 2, 3];
 const second = [4, 5, 6];
 const combined = first.concat(second);

 const slice = combined.slice(2, 4);

 console.log(combined);
 console.log(slice);


//Mapping an Array

const nums = [1, -1, 2, 3];

const filtered = nums.filter(n => n=> 0);

//const items = filtered.map(n => '<li>' + n + '</li>');

// const items = filtered.map(n => {
//  const obj = {value: n};
//  return obj;
// });

const items = filtered.map(n => ({ value: n }) );

//const html = '<ul>' + items.join('') + '</ul>';

//console.log(html);
console.log(items);


//Exercise 1 Array from Range

const nmbrs = arrayFromRange (1, 4);
console.log(nmbrs);
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i<=max; i++)
  output.push(i);
return output;
}


//Exercise 2 Includes

const nms = [1, 2, 3, 4];

console.log(nms.includes(5));

function includes(array, searchElement) {
  for (let element of array)
  if(element === searchElement)
  return true;
return false;
}

//Exercise 3 Except

const nms2 = [1, 2, 3, 4, 1, 1, 1];

const output2 = except(nms2, [1, 2]);

console.log(output2);

function except(array, excluded) {
  const output2 = [];
  for (let element of array)
  if (!excluded.includes(element))
  output2.push(element);
return output2;
}

//Exercise 4 Moving an Element

const movenums = [1, 2, 3, 4];

const ouput3 = move(movenums, 0, -2);

console.log(ouput3);

function move(array, index, offset) {

  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset');
    return
  }
 const output3 = [...array];
 const element = output3.splice(index, 1)[0];
 output3.splice(index + offset, 0, element);
 return output3;
}

//Exercise 5 Count Occurences

const countnums =  [1, 2, 3, 4, 1];

const count = countOccurrences(countnums, 1);

console.log(count);

function countOccurrences(array, searchElement) {
//  let count = 0;
//  for (let element of array)
//   if(element === searchElement)
//   count++;
// return count;

return array.reduce((accumulator, current) => {
const occurrence = (current === searchElement) ? 1 : 0;
console.log(accumulator, current, searchElement);
return accumulator + occurrence;
}, 0);
}


// Exercise 6 Get Max

const nums6 = [1, 2, 3, 4];

const max =getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
  if(array.length === 0) return undefined;

  // let max = array[0];

  // for (let i =1; i< array.length; i++)
  // if(array[i] > max)
  // max = array[i];

  // return max;

  return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator); 
 
}


// Exercise 7 Movies 

const movies = [
  { title: 'a', year:2018, rating: 4.5 },
  { title: 'b', year:2018, rating: 4.7 },
  { title: 'c', year:2018, rating: 3 },
  { title: 'd', year:2017, rating: 4.5 },
];

//All the movies in 2018 with rating > 4
// Sort them by their rating
//Descending order
//Pick their title

const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a,b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

  console.log(titles);

  //Section 7: Functions

  //function declaration
  walk();

  function walk() {
    console.log('walk');
  }

  //Anonymous Function Expression
  let run = function() {
    console.log('run');
  };
  let move = run;
  run();
  move();

  //Arguments

  function sum() {

    let total = 0;
    for (let value of arguments)
    total += value;
  return total;
    console.log(arguments);
    return a + b;    // 1 + undefined
  }

  console.log(sum(1, 2, 3, 4, 5));

  //the rest Operator

  function sum(discount, ...prices) {
    //console.log(args);
    // return args.reduce((a,b) => a + b);
    const total = prices.reduce((a,b) => a + b);
    return total * (1- discount);
  }

  // console.log(sum(1, 2, 3, 4, 5, 10));
  console.log(sum(0.1, 20, 30));

// getters & Setters

const prson = {
firstName: 'Mosh',
lastName: 'Hamedani',
get fullName() {
  return `${prson.firstName}  ${prson.lastName}`;
},
set fullName(value) {
  if (typeof value !== 'string') 
  throw new Error('Value is not a string');

  const parts = value.split(' ');
  if (parts.length !== 2)
  throw new Error('Enter a first and last Name');

  this.firstName = parts[0];
  this.lastName = parts[1];
}
};

//prson.fullName = 'John Smith'
try {
  prson.fullName = '';
}
catch (e) {
 alert(e);
}

//console.log(prson.fullName);
console.log(prson);