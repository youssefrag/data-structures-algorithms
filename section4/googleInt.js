const findNumsSum = (array, sum) => {
  let a = null;
  let b = null;
  for (num1 of array) {
    for (num2 of array) {
      //   console.log(num1, num2);
      if (num1 + num2 === sum) {
        a = num1;
        b = num2;
      }
    }
  }
  console.log("a:", a, "b:", b);
};

// findNumsSum([1, 2, 3, 9], 8);
findNumsSum([1, 2, 28, 1], 29);
