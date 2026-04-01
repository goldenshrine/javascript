/*let std1 = 94; some random practice not important
let std2 = 98;
let std3 = 84;
let std4 = 64;
let std5 = 59;

alert(
  `marks of students = std1 : ${std1}, std2 : ${std2}, std3 : ${std3}, std4 : ${std4}, std5 : ${std5}`
);*/

let heroes = ["spiderman", "superman", "mysterio", "krish", "hulk"];
console.log(heroes);
console.log(heroes[3]);

let marks = [89, 93, 83, 84, 85];
console.log(marks[3]);
84; // array index
console.log(marks.length); // array length = last index(4) + 1 = 5
console.log(typeof marks); // gives 'object' not an array because array have key-value pairs.
let newMarks = (marks[3] = 87);
console.log(newMarks);
console.log((marks[4] = 87)); // making changes at index
