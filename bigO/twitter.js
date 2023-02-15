// // Find 1st, Find Nth...
// const array = [
//   { tweet: "hi", date: 2012 },
//   { tweet: "my", date: 2014 },
//   { tweet: "wadi", date: 2034 },
//   { tweet: "salam", date: 1995 },
//   { tweet: "teddy", date: 2018 },
// ];

// const getFirstAndLast = (array) => {
//   let oldestTweet = {};
//   for (let i = 0; i < array.length; i++) {
//     oldestTweet = array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (array[j].date <= oldestTweet.date) {
//         oldestTweet = array[j];
//       }
//     }
//   }
//   console.log("oldest:", oldestTweet);
//   let newestTweet = {};
//   for (let i = 0; i < array.length; i++) {
//     newestTweet = array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (array[j].date >= newestTweet.date) {
//         newestTweet = array[j];
//       }
//     }
//   }
//   console.log("newest:", newestTweet);
// };

// getFirstAndLast(array);
