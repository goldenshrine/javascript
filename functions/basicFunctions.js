// function myFunction() {
//   console.log("prince gupta");
//   console.log("prince gupta1");
//   console.log("prince gupta2");
// }

// myFunction();
// myFunction();// function performs a specific task

function myFunction(msg) {
  //parameter -> input
  console.log(msg);
}

myFunction("i love js"); // argument

/// function 2 number sum
// function sum(x, y) {
//   console.log(x + y);
// }
function sum(x, y) {
  // parameteres inside function acts as local variable - block scope
  s = x + y;
  console.log("before return");
  return s;
  console.log("before return"); // code return; never executes-unreachable code
}

let val = sum(3, 8);
console.log(x); //-> gives undefined-local variable
console.log(val);

/////////////////////////////////////////////////// just practicing
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// let number1 = Number(prompt("please enter the first number"));
// let number2 = Number(prompt("please enter the second number"));
// addTwoNumbers(number1, number2);

// function multiplyTwoNumbers(number3, number4) {
//   alert(number3 * number4);
// }
// let number3 = Number(prompt("please enter first number to be multiplied"));
// let number4 = Number(prompt("please enter second number to be multiplied"));

// multiplyTwoNumbers(number3, number4);

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
let number1 = Number(prompt("please enter the 1st number"));
let number2 = Number(prompt("please enter the 2nd number"));

let answer = addTwoNumbers(number1, number2);
alert(answer);

let g = prompt("test");
console.log(g);
