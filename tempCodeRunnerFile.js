
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