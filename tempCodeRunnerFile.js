const nums = [1, -1, 2, 3];

const filtered = nums.filter(n => n=> 0);

//const items = filtered.map(n => '<li>' + n + '</li>');

// const items = filtered.map(n => {
//  const obj = {value: n};
//  return obj;
// });

const items = filtered.map(n => ({ value: n }) );

//const html = '<ul>' + items.join('') + '</ul>';

//console.log(html);
console.log(items);