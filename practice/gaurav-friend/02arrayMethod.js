// Q1 👉 double all values (map)

// let values01 = [1, 2, 3, 4];

// let doubleValues = values01.map((x) => x * 2);

// console.log("double values",doubleValues.toString(values)); // .toString(values) was unnecessary

// Q2 👉 get values > 20 (filter)
let values02 = [10, 25, 30, 5];

let above20 = values02.filter((x) => x > 20);

console.log("values > 20", above20);

//Q3 👉 find total (reduce)
let nums = [5, 10, 15];

let sum = nums.reduce((res, curr) => res + curr, 0);

console.log(sum);

// Q4 ⭐⭐ (Important React level) 👉 get names of users age > 18
let users = [
  { name: "Prince", age: 23 },
  { name: "Amit", age: 17 },
  { name: "Rahul", age: 25 },
];

// let names = users.reduce((acc, curr) => {
//   if (curr.age > 18) {
//     acc.push(curr.name);
//   }
//   return acc;
// }, []);

// console.log(names);

// Q4 ⭐⭐ industry standard:-

let names = users.filter((x) => x.age > 18).map((x) => x.name); // .age bhool gya tha

console.log(names);
