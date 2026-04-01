{
  let a = 10;
  let b = 2;

  console.log("a + b =", a + b);
  console.log("a - b =", a - b);
  console.log("a * b =", a * b);
  console.log("a / b =", a / b);
  console.log("a % b =", a % b);

  // increment and decrement operator
  console.log(a++);
  console.log(a--);
  console.log(++a);
  console.log(++a);

  a++;
  console.log(a);

  console.log("\n");

  a = 10;
  console.log(a);
  // assignment operator
  a /= 5;
  console.log(a);
  a -= 5; // idk why -3 output
  console.log(a);
  a += 5;
  console.log(a);
  a *= 5;
  console.log(a);
  a %= 5;
  console.log(a);

  a = 5;

  a **= 4;
  console.log("a =", a);

  // Comparison operators
  let n = 5;
  let m = 2;

  console.log("m == n", m == n);
  console.log("m != n", m != n);
  console.log("m == n", m == n);
  console.log("m <= n", m <= n);
  console.log("m >= n", m >= n);

  let p = 5;
  let q = "5";

  console.log("p == q", p == q); // this is not logically true but gives true because it consider only values not datatypes.
  console.log("p === q", p === q); // stricter version, checks datatypes also.
  console.log("p !== q", p !== q);

  //  logical operator
  // && logical and operator  --when both are true
  // || logical or operator   -- needs only one true to return true
  // !  logical not operator  -- inverse the result

  let i = 5;
  let j = 2;

  let cond1 = 5 > 2; //true
  let cond2 = i === 5; // true

  console.log("cond1 && cond2", cond1 && cond2); // true
  console.log("cond1 || cond2", cond1 || cond2); // true
  console.log("!cond1, cond2", !(cond1, cond2)); // false, bcz it inverse the result

  //conditional statements
  // if statement
  let mode = "light";
  let color;

  if (mode === "dark") {
    color = "black";
  }

  if (mode === "light") {
    color = "white";
  }

  console.log(color);

  // if-esle

  let age = 56;
  if (age > 18) {
    console.log("you can vote");
  } else {
    console.log("you can not vote");
  }
}

// odd or even
let num = 9;

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//turnary operator

// let age = prompt("please enter your age");
// age >= 18 ? console.log("adult") : console.log("not adult");

// let age = 18;
// let result = age >= 18? "adult" : "not adult";
// console.log(result);

/////////////////////////////

//practoce Q1. :-

// let number = prompt("please enter a number here");
// let newResult = number % 5 === 0 ? "number is divisible by 5" : "numeber is not divisible by 5";
// console.log(newResult);

//practoce Q2. :-

let score = prompt("please enter your score here");
if (score >= 90 && score <= 100) {
  console.log("A grade");
} else if (score >= 80 && score <= 89) {
  console.log("B grade");
} else if (score >= 70 && score <= 79) {
  console.log("C grade");
} else if (score >= 60 && score <= 69) {
  console.log("D grade");
} else if (score >= 50 && score <= 59) {
  console.log("E grade");
} else if (score >= 40 && score <= 49) {
  console.log("F grade");
} else if (score >= 0 && score <= 39) {
  console.log("fail");
}
