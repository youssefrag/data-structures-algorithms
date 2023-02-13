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
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("WE FOUND NEMO");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took", t1 - t0, "milliseconds");
};

findNemo(large);
