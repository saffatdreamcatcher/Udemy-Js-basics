const crcle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(crcle.area);