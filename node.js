const { performance } = require("perf_hooks");

const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
  "nemo",
];

const large = new Array(100).fill("nemo");

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("WE FOUND NEMO");
    }
  }
};

findNemo(large); // O(n) --> Linear Time
