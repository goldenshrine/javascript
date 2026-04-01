// for (let i = 1; i <= 1021; i++) {
//   console.log("Jai Bajrang Bali");
// }
// for (let j = 1; j <= 1021; j++) {
//   console.log("Hare Ke Sahere Ki Jai");
//   console.log("Mere Baba Khatu Shyam Ki Jai");
// }

// for (let jaiKara = 1; jaiKara <= 1021; jaiKara++) {
//   console.log("Radhe Radhe");
// }
for (let i = 1; i <= 108; i++) {
  console.log("i=", i);
}

for (let k = 6; k <= 50; k++) {
  console.log("jai khatu naresh ki");
}

for (let i = 3; i >= 5; i++) {
  console.log("i will definitely code");
}
//////
let i = 1;
while (i <= 10) {
  console.log("new day new library");
  i++;
}

// while loop

// let i = 1;
// while (i <= 5) {
//   console.log("jai ganesh");
//   i++;
// }

// let j = 1;
// do {
//   console.log("jai ganesh");
//   j++;
// } while (j <= 50);

// let m = 1;
// do {
//   console.log("my name is prince");
//   m++;
// } while (m <= 10);

// let count = 1;
// do {
//   console.log("job is new");
//   count++;
// } while (count <= 10);

// for-of loop

// array and strings ke single charectors ke upar loop lagane ke liye use hota hai
// No initialization.
// no stopping condition.
// no updation.
// let str = "Mera naam prince";
// let i = 1;

// for (let i of str) {
// i -> iterator -> charectors
//   console.log("i=", i);
// }

let str = "new day new class";

for (let t of str) {
  console.log("t=", t);
}
// let size = 0;
// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }
// console.log("string size =", size);
let size = 0; // string upar se li hai.
for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("string size=", size);
// for in loop

// let student = {
//   name: "Prince gupta",
//   age: 22,
//   CGPA: 7.2,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key=", key, "value", student[key]);
// }

/// Q:-1 print all the even numbers from 0 to 100

// for (let num = 1; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("number is even", num);
//   }
//   if (num % 2 !== 0) {
//     console.log("number is odd", num);
//   }
// }

for (let num = 1; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log("number is even", num);
  }
  if (num % 2 !== 0) {
    console.log("number is odd", num);
  }
}
// Q:- 2 create a game in which you take number from user until he guesses the right number.
// let gameNum = 25;
// let userNum = prompt("geuss the number");

// while (userNum != gameNum) {
//   userNum = prompt("you have entered wrong number");
// }
// console.log("congratulations you have entered the right number");

/////////////////////////

// let gameNum = 35;
// let userNum = prompt("guess the number");

// while (userNum != gameNum) {
//   userNum = prompt("you have entered incorrect number please try again");
// }
// alert("congratulations! you have entered right number");

////////////////////////////////////////////////////////

// strings : sequence of charectors
//console.log("string charector at", str[9]);

let str1 = "prince";
let text = "abcdefghijklmnopqrstuvwxyz";
let name = "Prince";
let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
// console.log(length);

// Template Literals :Also known as String Interpolation.
// Template Literals : spacial type o string.

// let obj = {
//   title: "Pen",
//   price: 10,
// };
// let output = `the cost of ${obj.title} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.title, "is", obj.price, "rupees");

// let specialString = `this is a template literal ${1 + 2 + 3}`;
// console.log(specialString);

let obj = {
  title: "pen",
  price: 10,
};
let output = `the cost of ${obj.title} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of", obj.title, "is", obj.price, "rupees");
//
/// print in next line / line break
console.log("new day\nnew class");
console.log("newday\tnewclass");
console.log("All is\nwell"); // escape charectors
console.log("All is\twell"); // escape tab

let str3 = "name\tPrince"; //12 charectors
console.log(str3.length); //prints 11 because it counts \t as a single charector

let str5 = "name\tPrince";
console.log(str5.toLowerCase());
let str6 = "   my name is prince gupta        ";
console.log(str6.trim());
let str7 = "01234567";
let str8 = "GO";
console.log(str7.slice(1, 3));
console.log(str7.concat(str8));
console.log(str7.replace("7", "789"));
console.log(str7.charAt(0));

//string methods
/*
 str.toUpperCase()
 str.toLowerCase()
 str.trim() //removes white spaces from front and back part of string only
*/
console.log(name.toUpperCase());

let str4 = "   name is   prince       ";
console.log(str4.trim()); // removes space except those are in between
console.log(name.slice(1, 3)); //ri "str.slice(start,end)"
console.log(name.concat(str1)); //
//alternate of concat
console.log(str1 + name);
console.log(str1.replace("p", "h")); // replaace p with h 'str.replace("oldchar","newchar")'

let umar = 32;

if (umar >= 18) {
  console.log("you can vote");
}
if (umar <= 18) {
  console.log("you can not vote");
}

// let mode = "light";
// let color;
// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);

// let num = 5;

// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("number is odd");
// }

let age = 35;

if (age <= 18) {
  console.log("under age");
} else if (age >= 60) {
  console.log("elderly people");
} else {
  console.log("adult");
}

let mode = "";
if (mode === "dark") {
  console.log("dark background");
} else if (mode === "blue") {
  console.log("blue background");
} else if (mode === "red") {
  console.log("red background");
} else if (mode === "white") {
  console.log("white background");
} else {
  console.log("not supported");
}

// let number = prompt("enter a number");

// if (number % 2 === 0) {
//   console.log(number, "number is even");
// } else {
//   console.log("number is odd");
// }

let Name = prompt("Enter full name ");
// let userName = `@${Name}${Name.length}`;
let userName = "@" + Name + Name.length;
alert(`Your username is ${userName}`);
