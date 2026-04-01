// creates new array with filterd out values - array pe filter lagata hai bss
let arr = [2, 5, 5, 6, 7, 8, 2, 4, 3, 4, 56, 45, 3, 4, , 324, , 5564, 55];

let oddArr = arr.filter((val) => {
  return val % 2 != 0;
});

console.log("odd numbers ", oddArr);

let evenArr = arr.filter((val) => {
  return val % 2 === 0;
});

console.log("even numbers ", evenArr);

let gthree = arr.filter((val) => {
  return val > 3;
});

console.log("values greater than three", gthree);
