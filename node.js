// const { performance } = require("perf_hooks");

// const nemo = ["nemo"];

// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
//   "nemo",
// ];

// const large = new Array(100).fill("nemo");

// const findNemo = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("WE FOUND NEMO");
//     }
//   }
// };

// findNemo(large); // O(n) --> Linear Time

// const compressFirstBox = (boxes) => {
//   console.log(boxes[0]);
// }; // O(1) --> Constant Time

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(2)
