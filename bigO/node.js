// const { performance } = require("perf_hooks");

// const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

// const large = new Array(100).fill("nemo");

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("WE FOUND NEMO");
      break;
    }
  }
};

const findNemo2 = (array) => {
  array.forEach((fish) => {
    console.log("running");
    if (fish === "nemo") {
      console.log("WE FOUND NEMO");
      return;
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    console.log("running");
    if (fish === "nemo") {
      console.log("WE FOUND NEMO");
      break;
    }
  }
};

findNemo3(everyone); // O(n) --> Linear Time

const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
}; // O(1) --> Constant Time

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

// logFirstTwoBoxes(boxes); // O(2)
