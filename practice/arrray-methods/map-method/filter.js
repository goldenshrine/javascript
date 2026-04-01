// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const check = (x) => {
//   console.log(x, x % 2 === 0 ? "even" : "odd");
//   return x % 2 === 0;
// };
// const isEven = arr.filter(check);

// console.log(isEven);

const numbs = [1, 34, 54, 68, 7, 898, 6, 8];

function check(x) {
  return x % 2 != 0;
}
const even = numbs.filter((x) => x % 2 === 0);

console.log(even);

const odd = numbs.filter(check);

console.log(odd);

// Final Mental Model
// Problem Type	Use This-->
// Change values	= map
// Select values	= filter
// Count / group	= reduce
