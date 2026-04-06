// 1. Functions (Core Idea)

// 👉 Function = reusable block of code
function add(a, b) {
  return a + b;
}

let sum = add(3, 4);
console.log(sum);

// 👉 a, b = parameters
// 👉 add(3,4) → arguments

//////////////

////⚡ Types of functions

// 1. Normal

function sum1(a, b) {
  return a + b;
}
let addition = sum1(3, 4);
console.log(addition);

// 2. Arrow (React uses this 🔥)

const sum2 = (a, b) => a + b;

console.log(sum2(6, 7));

// 🧠 2. Callback Functions (VERY IMPORTANT ⚠️)
// 👉 Callback = function passed inside another function

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function bye() {
  console.log("Bye!");
}

greet("Prince", bye);

// Output:

// Hello Prince
// Bye!
////////////////////////////////Questions :-

//Q.1
function processNumber(num, callback) {
  return callback(num);
}
// in this exaple i did not uderstand the return part...how this a callback and callback connected to mul
const mul = (a) => a * 2;

console.log(processNumber(2, mul));

// hey chatgpt, why this will not work processNumber(mul, 2)
// and erlier u said we cant log anything directlty inside function something like this or maybe im confused because in this below given example we are logging things

function add(a, b) {
  console.log(a + b);
}
function calculator(a, b, callback) {
  callback(a, b);
}
calculator(1, 2, add);

//hey chatgpt im confused  we can do the same thing  with below given code then why we even complicate the things

function add(a, b) {
  console.log(a + b);
}

add(1, 2);

//im fucking hating this topic

//Q2
function greetUser(name, callback) {
  // print "Hello Prince"
  // then call callback
  console.log("hello " + name);
  callback();
}

// how bye is callback and how its even conected with callback and why callback passed inside greetuser
function bye() {
  console.log("bye");
}

greetUser("prince", bye);

// Q.3 👉 Create your own function: 👉 should behave like .map()

let arr = [1, 2, 3];
let result = [];
// can i put result outside the funtion like i did here. valid???
function myMap(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i];
    result.push(callback(arr[i]));
  }

  return result;
}

console.log(myMap(arr, (x) => x * 2));

//Q4 add
function operate(a, b, callback) {
  callback(a, b);
}

function adds(a, b) {
  console.log(a + b);
}

operate(2, 4, adds);

//Q5

function modifyArray(arr, callback) {
  // return new array using callback
  val = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i];
    val.push(callback(arr[i]));
  }
  return val;
}
console.log(modifyArray([1, 2, 3], (x) => x * 3));
