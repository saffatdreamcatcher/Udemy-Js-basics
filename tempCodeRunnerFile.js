  function sum(a, b) {

    let total = 0;
    for (let value of arguments)
    total += value;
  return total;
    console.log(arguments);
    return a + b;    // 1 + undefined
  }

  console.log(sum(1, 2, 3, 4, 5));