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
