// for loop
let heroes = ["spiderman", "superman", "mysterio", "krish", "hulk"];
// console.log(heroes);
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}
let marks = [89, 93, 83, 84, 85];
// console.log(marks);
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// we generally use 'for-of' loop in java but 'for-in' loop can also be used.
// for-of loop :-
for (let hero of heroes) {
  console.log(hero); // print individual element of array
}
console.log("\n"); // console.log(\n);  will not work due to "" not included
let cities = ["delhi", "gurugram", "hydrabad", "pune", "mumbai", "bangluru"];
for (let city of cities) {
  console.log(city);
  console.log(city.toUpperCase());
  console.log(city.length);
}

/// Q for a given array with marks of students -> [85,97,44,37,76,60]. find the average marks of entire class.

let stdMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of stdMarks) {
  sum = sum + val;
  //sum += val; alternate method
}
let avg = sum / stdMarks.length;
console.log(`Average marks of students is ${avg}`);

// Q. For a given array with prices of 5 items -> [400, 490, 570, 490, 420] all items have an offer of 10% off on them. Change the array to store the final price after applying offer.
/* done using for-of loop which is not recommended
let price = [400, 490, 570, 490, 420];
let i = 0;
for (let val of price) {
  //console.log(`value at index ${i} = ${val}`);
  let offer = val / 10;
  price[i] = price[i] - offer;
  console.log(`value after offer ${price[i]}`);
  i++;
}*/

let price = [400, 490, 570, 490, 420];
let i = 0;
for (let i = 0; i < price.length; i++) {
  let offer = price[i] / 10;
  price[i] -= offer;
}
console.log(price);
