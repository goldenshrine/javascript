function greet() {
  console.log("hello");
}

function meet(callback) {
  console.log("meeting mei mating");
  callback();
}

greet(meet); //erlier tried this, why this not worked
meet(greet); // why this works

// function greet(callback) {
//   console.log("hello");
//   callback();
// }

// function meet() {
//   console.log("meeting mei mating");
// }

// greet(meet); //erlier tried this, why this not worked
