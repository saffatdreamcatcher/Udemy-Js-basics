
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