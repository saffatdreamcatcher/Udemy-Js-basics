const nmbrs = arrayFromRange (1, -1);
console.log(nmbrs);
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i<=max; i++)
  output.push(i);
return output;
}