// Reduce method
// performs operations on array and reduce it to a single value. it returns that value
// jaha input mein bht sari values hoti hain and output mein hume 1 value hi chahiye ho-> i > 1 & O = 1.
const array1 = [1, 2, 3, 4];

//0+1+2+3+4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  initialValue
);
console.log(sumWithInitial);
// Expected output = 10

///////////////////////////////////////////// diff way
const output = array1.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);
// Expected output = 10

/// return biggest element from given array

const output1 = array1.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(output1);

/// return smallest element from given array

const output2 = array1.reduce((prev, curr) => {
  return prev < curr ? prev : curr;
});
console.log(output2);

// we are given array of marks of students filter out the marks of students who scored more than 90
let marks = [89, 83, 95, 97, 99, 100];

let score = marks.filter((val) => {
  return val > 90;
});

console.log(score);

// Q. take a number n as input from user. Create an array of numbers from 1 to n.

let n = prompt("please a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i; // 1[0],2[1],3[2]....
}

console.log(arr);
// use the reduce method to calculate sum of all numbers in the array.
let sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log("sum =", sum);

// use the reduce method to calculate product of all numbers in the array.
let factorial = arr.reduce((res, curr) => {
  return res * curr;
});
console.log("factorial=", factorial);
console.log();
