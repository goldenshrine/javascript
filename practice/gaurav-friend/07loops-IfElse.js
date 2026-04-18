//Q1
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i], "odd");
  } else {
    console.log(arr[i], "even"); // this is extra but did in purpose
  }
}

//Q2 same using filter

let odds = arr.filter((val) => val % 2 != 0);

console.log(odds);

//Q3 ⭐ grading system:-
let marks = 75;

if (marks > 80) {
  console.log("A");
} else if (marks > 60) {
  console.log("B");
} else {
  console.log("C");
}

//

//04👉 print: "big" if >20 "small" otherwise.
let arr1 = [10, 25, 30, 15];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 20) {
    console.log(arr1[i], "big");
  } else {
    console.log(arr1[i], "small");
  }
}
