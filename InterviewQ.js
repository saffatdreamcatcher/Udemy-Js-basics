//Removing Falsy values from an array
const mixBag = ['apple', false, 'orange', NaN, 0, undefined, 'chilly', null, '', 'mango'];
const fruits = mixBag.filter(Boolean);
console.log(fruits);

//Replace all occurences of a string
