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