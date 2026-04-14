//Simple Function :-

// //01
// function greet() {
//   console.log("hello how are you");
// }

// console.log(greet());

// function sum(num1, num2) {
//   const addNum = num1 + num2;
//   console.log(addNum);
// }
// sum(56, 3);

// // return thows the soln outside the block of code or function - to use
// // If you want to use the result later, do this:

// function sum2(a, b) {
//   return a + b;
// }

// let result = sum2(2.65, 76);
// console.log(result);

function sum3(num1, num2, num3 = 0, num4 = 0) {
  const addNum = num1 + num2 + num3 + num4; // issue we cant add all nums manually
  return addNum;
}

const total1 = sum3(1, 2, 3); // return yaha use horha, return ke baad value store karke use karte hain
console.log(total1);

// 02 Use of rest operator -- bht sari values ko catch karne mein kaam ata

function sum4(...num) {
  let sum = 0;
  num.forEach((element) => {
    sum += element;
  });
  return sum;
}

const total3 = sum4(1, 2, 3, 4); // return yaha use horha, return ke baad value store karke use karte hain
console.log(total3);

// 03 Use of spread operator -- array ya obj ko khol ke rakh deta

arr1 = [12, 4, 5, 6, 7, 7, 67];
arr2 = [65, 5, 6, 4, 75];

console.log([...arr1, ...arr2]); //appends arr2 to arr1
