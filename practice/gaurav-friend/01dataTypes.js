// Topic 1 data types

//Q1 create variables
let name = "prince";
let age = 23;
let isStudent = true;

//Q2 create an array
let city = ["delhi", "mumbai", "pune"];

console.log(city[0]); //first el

console.log(city[city.length - 1]); //last el

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
let midArrIdx = Math.floor(arr.length / 2); // use midIndex instead of midArr to avoid confsion

//mid arr with func
//hey cgpt, I always get confuse while passing params in function like -->(arr)and also while calling the function:refrence-->console.log("Q6, middle element with function", middleArr(arr));, here like what to pass and why exactly we pass it

function middleArr(array) {
  let mid = Math.floor(array.length / 2);
  // If you want the actual value (e.g., "30"), use: return array[mid];
  // or clean -->
  // return array[(mid = Math.floor(array.length / 2))];

  return array[mid];
}

console.log("Q6, 2nd element", arr[1]); //2nd element
console.log("Q6, 2nd last element", arr[arr.length - 2]); //2nd last element
console.log("Q6, middle element", arr[midArrIdx]); // middle element, hey cgpt if array is of even numbers then there is none mid el !?, i have taken a even array, it was printing upper limit el.
console.log("Q6, middle element with function", middleArr(arr)); // CORRECTION: Prince! Use () to call the function and pass 'arr' as an argument

// Q7 create an Object(student) with: name, marks, subjects(array) 👉 Print: 2nd subject

let student = {
  name: "prince",
  marks: 80,
  subject: [
    "english",
    "hindi",
    "chemistry",
    "physics",
    "biology",
    "physical-Edu",
  ],
};

console.log("Q7", student.subject[1]);

// Q8 (Tricky ⭐). console.log("10" + 5); console.log("10" - 5); console.log(true + 1); 👉 Guess outputs

console.log("Q8", "10" + 5); //105
console.log("Q8", "10" - 5); //5
console.log("Q8", true + 1); //2

// Q9 ⭐ (Important) 👉 Create function: return sum of all elements

let numbers = [5, 10, 15, 20, 25];

// function sum(arr) {
//   let sum = 0; // variable define karne ke liye let aur const ka use kiya kar-bhool jata tu
//   for (let i = 0; i < arr.length; i++) { // yaha seedha array mat ghused diya kar- arr ki jagah seedh numbers use karha tha tu
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// hey chatgpt yaha jab mene arr ki jagah numbers liya tha toh meri thinking yeh thi --> arr toh bs array ka ek single elemnt hota hai na [0] or [1] naaki pura array

// const sum = (arr) => arr.reduce((acc, res) => (res = acc + res)); //res = is unnecessary because:
// reduce already expects you to RETURN a value
// You don’t need to assign it to res, just return it
const sum = (arr) => arr.reduce((acc, res) => acc + res, 0);
console.log("sum", sum(numbers));

//Q10 ⭐⭐ return "Hello Prince", "Hello Amit"... (array output)

let users = ["Prince", "Amit", "Rahul"];

function greet1(arr) {
  // Now arr = ["Prince", "Amit", "Rahul"]
  let hello = [];
  for (let i = 0; i < arr.length; i++) {
    hello.push("hello " + arr[i]);
  }
  return hello;
}

// hey chatgpt i think my concepts are still not clear like mujhe lagta hai ki cheezein samjh nhi parha bss patterns yaad karha, is it normal or bad and kya ye practice ke sth theek ho jayega main ye iss liye bol rha hun kyunki woh hello greet wala question parso map ke sath and loops ke sath hi mene kiya tha aur aaj ho nhi rha and mefri speed bht hi slow hai.
console.log(greet1(users));

let greet = users.map((user) => "hello " + user);
console.log(greet);

// Q11 multiply each element by 2, return new array

let arrayMul = [2, 4, 6];

function multiply(arr) {
  let num = [];
  // hey cgpt; not get it properly or masterd it,tried multple times then got the result:- first i try this num = 0 then "" and the []
  for (let i = 0; i < arr.length; i++) {
    num.push(arr[i] * 2);
    // cgpt also here the same problem first i tried num = num*2 but not got the expected result
  }
  return num;
}

console.log("mul", multiply(arrayMul));

let multipl = (arr) => (arr = arr * 2); // tried to do this in one line but got stuck
console.log(multipl(arrayMul));

//Q12 Same using map().

let mapMul = arrayMul.map((arr) => arr * 2, 0);
console.log(mapMul);
