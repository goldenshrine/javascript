// //Q.1 👉 map → square each number

// let arr = [1, 2, 3, 4];

// let square = arr.map((x) => x * x);

// console.log(square);

// //Q.2 👉 filter → only even numbers -
// let even = arr.filter((x) => x % 2 === 0);
// console.log("even values", even);

// //Q3 👉 reduce → sum of all numbers

// let sum = arr.reduce((res, curr) => res + curr, 0);

// console.log(sum);

// //Q.4 names where age > 18
// let users = [
//   { name: "Prince", age: 23 },
//   { name: "Amit", age: 17 },
//   { name: "Rahul", age: 25 },
// ];

// let names = users.filter((x) => x.age > 18).map((x) => x.name);
// console.log(names);

//Q5 ⭐👉 using reduce → return [2,4,6,8]

// let nums = [1, 2, 3, 4];

// let newNums = nums.reduce((res, curr) => {
//   res.push(curr * 2);
//   return res;
// }, []);

// console.log(newNums);
// okay this is the solution now, i understood and get it but

// let newNums = nums.reduce((res, curr) => {
//  res[];
//   }, []);

//Q6 👉 Using reduce → return product of all numbers

// let nums2 = [1, 2, 3, 4];

// let product = nums2.reduce((res, curr) => {
//   res = res * curr;
//   return res;
// }, 1);

// // done only with referance not by self
// console.log(product);

//Q7 👉 Using reduce → return only even numbers array
let nums3 = [1, 2, 3, 4, 5];

let even = nums3.reduce((res, curr) => {
  if (curr % 2 === 0) {
    res.push(curr);
  }
  return res;
}, []);

console.log(even);

//Q8👉 Using reduce → return count object: {apple: 3,banana: 2,orange: 1}
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = words.reduce((res, curr) => {
  if (res[curr]) {
    res[curr] += 1;
  } else {
    res[curr] = 1;
  }
  return res;
}, {});

console.log(count);

// Q.9 🚀Using reduce: return sum of only even numbers 👉 Output: 6 (2 + 4)

let nums4 = [1, 2, 3, 4, 5];

let sumEven = nums4.reduce((res, curr) => {
  if (curr % 2 === 0) {
    return res + curr;
    // got stuck here, still took reference
  }
  return res;
}, 0);

console.log(sumEven);

// ternary operator version

let sumEven2 = nums4.reduce(
  (res, curr) => (curr % 2 === 0 ? res + curr : res),
  0
);

console.log(sumEven2);
