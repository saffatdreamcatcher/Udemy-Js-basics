//Removing Falsy values from an array
const mixBag = [
  "apple",
  false,
  "orange",
  NaN,
  0,
  undefined,
  "chilly",
  null,
  "",
  "mango",
];
const fruits = mixBag.filter(Boolean);
console.log(fruits);

//Replace all occurences of a string
const quotes =
  "React is a JS framework & this framework is the most popular front-end framework right now";
console.log(quotes.replace(/framework/g, "library" ));


//Swaping values

// let array = [1, 2, 3, 4, 5];

// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

//Array destructuring 
let array = [1, 2, 3, 4, 5];

[array[0], array[4]] = [array[4], array[0]];
console.log(array);



let a = 1;
let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

//math
b = a + (a = b) - b;
console.log(a, b);

//destructuring alias

const language = {
  name: "Javascript",
  founded: 1995,
  founder: "Brendan Eich",
};

const {name: languageName, founder:createrName} = language;
console.log(languageName, createrName);

//Remove duplicate from array
const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6]
console.log([...new Set(arr)]);
