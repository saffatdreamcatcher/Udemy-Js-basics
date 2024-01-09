const movenums = [1, 2, 3, 4];

const ouput3 = move(movenums, 0, 1);

console.log(ouput3);

function move(array, index, offset) {
 const output3 = [...array];
 const element = output3.splice(index, 1)[0];
 output3.splice(index + offset, 0, element);
 return output3;
}
