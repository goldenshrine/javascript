function greet() {
  console.log("hello");
}

function meet(callback) {
  console.log("meeting mei mating");
  callback();
}

meet(greet); //works properly
// greet(meet); //INVALID only greet will work not meet because callback defined in meet

// function greet(callback) {
//   console.log("hello");
//   callback();
// }

// function meet() {
//   console.log("meeting mei mating");
// }

// greet(meet); //erlier tried this, why this not worked
