// fat arrow function
// function number() {
//   return 10;
// }

// let number = () => {
//   return 10;
// }

// let number = () =>  10;

// console.log(number());


// let number = (a, b) =>  a + b;

//  console.log(number(5, 6));


// var javascript = {
//   name: 'Javascript',
//   libraries:['React', 'Angular', 'Vue'],
//   printLibraries: function() {
//     var self = this;
//     this.libraries.forEach(function(a) {
//       console.log(`${self.name} loves ${a}` )
//     });
//   },
// };
// javascript.printLibraries();



// var javascript = {
//   name: 'Javascript',
//   libraries:['React', 'Angular', 'Vue'],
//   printLibraries: function() {
//     this.libraries.forEach((a)  => {
//       console.log(`${this.name} loves ${a}` )
//     });
//   },
// };
// javascript.printLibraries(); 


//Array.prototype.find()

// const numbers = [1, 2, 3, 4, 5, 6, 10, 12];
// const result = numbers.find(function(currentValue) {
//  return currentValue > 4;
// });

// console.log(numbers);

// console.log (result);


//Array.prototype.filter()

// const numbers = [1, 2, 3, 4, 5, 6, 10, 12];
// const result = numbers.filter(function(currentValue) {
//  return currentValue > 4;
// });

// console.log(numbers);

// console.log (result);


//Array.prototype.slice()

// const numbers = [1, 2, 3, 4, 5, 6, 10, 12];
// const result = numbers.slice(1, 3);

// console.log(numbers);

// console.log (result);


// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.slice(-2, 4);

// console.log(numbers);

// console.log (result);


// //Array.prototype.slice()

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.splice(1, 2, 10, 12, 16);

// console.log(numbers);

// console.log (result);



//Array.prototype.map()

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num) => {
//   return 2 * num;
// });


// console.log(numbers);

// console.log (result);


//Array.prototype.reduce()

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((prevValue, currentValue) => {
//   return prevValue + currentValue;
// }, 1);

// console.log(sum);


// //Spread Operator

// const nums = [1, 2, 3];
// const newNums = [...nums, 4, 5, 6];
// console.log(newNums);

//Rest operator

function myFunction(a, ...params) {
  console.log(a);
  console.log(params);
}

myFunction(4, 5, 6, 7, 8);



