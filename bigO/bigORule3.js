const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
      count++;
    }
  }
  console.log(count);
}

logAllPairsOfArray(boxes);

// O(n^2)
