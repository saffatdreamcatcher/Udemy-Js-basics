  console.log(sum(1, 2, 3, 4, 5));

  //the rest Operator

  function sum(discount, ...prices) {
    //console.log(args);
    // return args.reduce((a,b) => a + b);
    const total = prices.reduce((a,b) => a + b);
    return total * (1- discount);
  }

  // console.log(sum(1, 2, 3, 4, 5, 10));
  console.log(sum(0.1, 20, 30));