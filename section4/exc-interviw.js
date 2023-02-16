const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

const isThereCommonElement = (arrayA, arrayB) => {
  for (item of arrayA) {
    // console.log(item);
    if (arrayB.includes(item)) {
      return true;
    }
  }
  return false;
};

console.log(isThereCommonElement(array3, array4));
