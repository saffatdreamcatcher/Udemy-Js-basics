const circle3 = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// const another3 = {};
// for (let key in circle3)
// another[key] = circle[key];

// const another3 = Object.assign({
//   color: 'yellow'
// }, circle3)

const another3 = {...circle3 };

console.log(another3);