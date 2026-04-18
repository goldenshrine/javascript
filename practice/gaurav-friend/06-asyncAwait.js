// 🧠 1. Problem Async solves

// 👉 JS is single-threaded
// 👉 So long tasks block everything ❌
// 👉 UI freeze ho jayega 😵

//02Async Concept (Simple)

// function setTimeOutUse() {
//   console.log("Start");

//   setTimeout(() => {
//     console.log("Tem lagega,tem");
//   }, 5000);

//   console.log("End");
// }

// setTimeOutUse();

// Key Idea --> JS → runs sync first → async later

//🧠 4. Callback Hell (Problem)

// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");

//       setTimeout(() => {
//         console.log("step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// 🧠 5. Promise (Solution)
// 👉 Promise = “future value”

// let promise = new Promise((resolve, reject) => {
//   resolve("done");
// });

// promise.then((res) => console.log(res));

// States:
// pending
// resolved
// rejected

//🧠 6. fetch (Real-world use)

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//🧠 7. async/await (Best way)

// async function getData() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await res.json();
//   console.log(data);
// }

// getData();

////Questions:-

//Q1 tell o/p
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");
// //output: ABC no delay. correction; ACB no delay

// //Q2👉 should print "Done" after 2 sec using setTimeout

// function wait() {
//   setTimeout(() => {
//     console.log("Done");
//   }, 2000);
// }

// wait();

// //Q3

// // let result = new Promise((resolve, reject) => {
// //   resolve(  ///                      my mistake : 👉 You are resolving timer ID, not "Success"
// //     setTimeout(() => {
// //       console.log("success");
// //     }, 1000)
// //   );
// // });

// // result.then((res) => console.log(res));

// // correct version
// let result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });

// result.then((res) => console.log(res));

// //Q4 output ?

// new Promise((resolve) => {
//   resolve(5);
// }).then((res) => console.log(res * 2)); //10

// //5 👉 Output?
// new Promise((resolve, reject) => {
//   reject("Error");
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err)); // Error

// //  Q6 ⭐Create Promise:👉 after 2 sec → "Hello"

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 2000);
// }).then((res) => console.log("Q6", res));

// //Q7 ⭐⭐ Chain: 👉 "Hi" → "Hi User" → "Hi User!"

// function chaining() {
//   setTimeout(() => {
//     console.log("hi");
//     setTimeout(() => {
//       console.log("Hi User");
//       setTimeout(() => {
//         console.log("Hi User!");
//       }, 100);
//     }, 100);
//   }, 100);
// }

// chaining();

// new Promise((resolve, reject) => { //incorrect
//   resolve("hi");
// })
//   .then((res) => console.log("Q7", res))
//   .then((res) => console.log(res + "user"))
//   .then((res) => console.log(res + "user !"));

new Promise((resolve) => {
  resolve("hi");
})
  .then((res) => {
    console.log(res);
    return res + " user";
  })
  .then((res) => {
    console.log(res);
    return res + " !";
  })
  .then((res) => console.log(res)); // Not properly understood what happened here

// //  Q5 ⭐⭐⭐ (important thinking) 👉 Output?
// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })
//   .then((res) => res * 2)
//   .then((res) => res + 5)
//   .then((res) => console.log(res)); // 25

// Promise.resolve(2)
//   .then((x) => x * 3)
//   .then((x) => {
//     console.log(x);
//   })
//   .then((x) => console.log(x)); // this gives undefined.., but why no undefined here .then((res) => console.log(res)); // 25 ans --> beacuse u have not retured anything

//If you RETURN → value goes to next .then
//If you DON'T → undefined goes to next .then

//.then = pipeline

// return → pass forward
// no return → break value (undefined)

// asyc await :- 👉 Just clean syntax over Promise

// Rules ✅ async 👉 function always returns Promise

// ex:-
async function getData2() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();

  let allTitles = data.map((x) => x.title);

  console.log(data[8].title);
  //   console.log(allTitles); // prints all titles
}
getData2();

///async await questions

//Q1.

// async function test() { //👉 async makes it Promise automatically
//   // u forgot to use async
//   return 10;
// }

// test().then((x) => console.log(x));

//02.

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2); // you keep doing same mistake again and again do not resolve whole set timeout
    }, 2000);
  });
}

async function run() {
  let res = await wait();
  console.log(res * 2);
}

run();

//Q3 :-

function hello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 2000);
  });
}

async function print() {
  let res = await hello();
  console.log(res);
}

print();

// Q4 :-

async function sum() {
  let a = await Promise.resolve(4);
  let b = await Promise.resolve(4);
  console.log(a + b);
}
sum(); //8
