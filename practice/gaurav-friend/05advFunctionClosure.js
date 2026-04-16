// 🧠 1. Functions Advanced (Quick)
// 🔥 Functions are values

// 👉 JS me function = normal value

const sayHi = function () {
  console.log("Hi");
};
sayHi();
// 👉 You can:

// store in variable ✅
// pass as argument ✅
// return from function ✅

// 🧠 02 Closure (MAIN TOPIC ⚠️)
// 🔥 Definition (simple)

// 👉 Closure = function + its outer variables

//🧠 Example:

// function outer() {
//   count = 0;

//   function inner() {
//     count += 1;
//     console.log(count);
//   }

//   return inner;
// }

// const fn = outer();

// fn();
// fn();
// fn();
// fn();

// Q1 c create a counter using closure⭐

// function outer() {
//   count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const fn = outer();

// fn();
// fn();
// fn();

//Q2.

function MultiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

let double = MultiplyBy(2);
console.log(double(3));
console.log(double(6));

// heinn yeh kaise hogya
