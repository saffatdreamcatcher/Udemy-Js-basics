function createCircle(radius) {
  return {
    // radius: radius,
    radius,

    draw() {
      console.log('draw');
    }
    // draw: function() {
    //   console.log('draw');
    // }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


// Constructor Function
// const myCircle = createCircle(2);

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
 Circle.call({}, 1);
 Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);
