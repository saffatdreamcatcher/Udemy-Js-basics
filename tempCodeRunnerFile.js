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