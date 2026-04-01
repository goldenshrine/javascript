// array method
//forEach loop in Arrays - it is kind of method
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

console.log("\n");

arr.forEach((val) => {
  // using arrow function
  console.log(val);
});

let cities = ["delhi", "mumbai", "pune"];
cities.forEach(function printcities(city) {
  console.log(city);
});
cities.forEach((city) => {
  console.log(city);
});

// Q. for a given array of numbers print th square of each value using the foreach loop

let arrays = [15, 63, 84];
arrays.forEach(function printAr(Ar) {
  console.log(Ar * Ar);
});

// arrays.forEach((num) => {
//   console.log(num * num);
// });

let calcSquare = (num) => {
  console.log(num * num);
};

arrays.forEach(calcSquare);
