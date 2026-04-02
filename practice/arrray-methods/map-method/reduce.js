const arr = [-1, 1, 2, 3, 4, 5, 6];

//reduce all the given values to a single with performing operations on it
// sum or highest/lowest etc.
// my trick to not get confused btwn result and current in highest and lowest write -->
// Always write curr first

////////////////////////////01 find sum using reduce

function add(res, curr) {
  res = res + curr; // Always write curr first
  return res;
}

const sum = arr.reduce(add);

console.log("Sum with reduce = ", sum);

const sum1 = arr.reduce((res, curr) => res + curr, 0); // no need to return here they automatically get returned, Why 0 --> Works even if array is empty & Best practice

console.log("Sum with reduce and clean function = ", sum1);

////////////02 find sum without reduce
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("Sum without reduce = ", findSum(arr));

/////////////////////////////03 Finding highest number in the array using reduce

function max(res, curr) {
  if (res < curr) {
    /// pehle current chalega then result - to avoid confusion
    res = curr;
  }
  return res;
}

const highest = arr.reduce(max);

console.log("Highest number with reduce = ", highest);

// clean function

const maximum = arr.reduce((res, curr) => (curr > res ? curr : res));

console.log("Highest number with reduce and clean function = ", maximum);

///////////////04 Finding highest number in the array without using reduce

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Highest number without reduce = ", findMax(arr));

//////////////////////// Finding least number in the array using reduce
function low(res, curr) {
  if (curr < res) {
    res = curr;
  }
  return res;
}

const lowest = arr.reduce(low);

console.log("least number with reduce = ", lowest);

//////////////////////// Finding least number in the array using reduce and clean function

const lowestNum = arr.reduce((res, curr) => (curr < res ? curr : res));

console.log("least number with reduce and clean function = ", lowestNum);

/////////////// Finding least number in the array without using reduce
function findLeast(arr) {
  let least = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < least) {
      least = arr[i];
    }
  }
  return least;
}

console.log("Least number without reduce = ", findLeast(arr));

// Final Mental Model
// Problem Type	Use This-->
// Change values	= map
// Select values	= filter
// Count / group	= reduce

// just practice
const array = [2, 3, 43, -6789, 34, 12, 2, 1, 21];

// const lowestt = array.reduce((res, curr) => (curr < res ? curr : res));

// console.log("lowesstt", lowestt);

//const highesgt

// const highestt = array.reduce((res, curr) => (curr > res ? curr : res));

// console.log("highest", highestt);

// function highestNumber(res, curr) {
//   if (curr > res) {
//     res = curr;
//   }
//   return res;
// }

// const high = array.reduce(highestNumber, -Infinity);

// console.log(high);

// function lowestNumber(res, curr) {
//   if (curr < res) {
//     res = curr;
//   }
//   return res;
// }

// const lowestt = array.reduce(lowestNumber);

// console.log(lowestt);
