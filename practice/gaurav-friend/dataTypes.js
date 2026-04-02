// Topic 1 data types

//Q1 create variables
let name = "prince";
let age = 23;
let isStudent = true;

//Q2 create an array
let city = ["delhi", "mumbai", "pune"];

console.log(city[0]);

console.log(city[city.length - 1]);

//mid value of the array

let midIndx = Math.floor(city.length / 2);
console.log("mid", city[midIndx]);

// function way
function getLastElem(arr) {
  return arr[arr.length - 1]; // my mistakes i had put city inseatd of arr and logged the values instead of return
}

console.log("function way =", getLastElem(city));

//normal way

let prince = [22, 16, 4];

console.log(prince[prince.length - 1]);

//Q3 create an object

let person = {
  name: "prince",
  city: "delhi",
  age: 69,
};

console.log(person.name, person.city);

//Q4 (Important ⭐)
let x = "5";
let y = 2;

console.log(x + y); // output will be NaN (not a number).... checked the log i was wrong but how is this happening

//Q5 (Spread operator)
let array = [1, 23, 4];

let newArray = [...array, 1, 23, 4]; //simply append the values to new array

console.log(newArray);

//Q6 👉 Print: 2nd element, 2nd last element ,middle element

let arr = [10, 20, 30, 40, 50];
let midArr = Math.floor(arr.length / 2);

//mid arr with func
//i always get confuse while passing params in function like -->(arr) here like what to pass and why exactly we pass it

function middleArr(array) {
  let mid = Math.floor(array.length / 2);
  // If you want the actual value (e.g., "30"), use: return array[mid];
  return array[mid];
}

console.log("Q6, 2nd element", arr[1]); //2nd element
console.log("Q6, 2nd last element", arr[arr.length - 2]); //2nd last element
console.log("Q6, middle element", arr[midArr]); // middle element, hey cgpt if array is of even numbers then there is none mid el !?, i have taken a even array, it was printing upper limit el.
console.log("Q6, middle element with function", middleArr(arr)); // CORRECTION: Prince! Use () to call the function and pass 'arr' as an argument
