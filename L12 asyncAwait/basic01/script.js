// synchronous - code runs in purticular sequence of instruction given in the program each instruction waits for the privios instruction to complete its exection
// Asynchronous - due to synchronous programming, sometimes imp instructions get b;pcked due to some previous instruction, which cuases a delay in the UI. Asynchronous code exection allows to execute next instruction immediately and doesnt block the flow.

console.log("hello1");
setTimeout(() => {
  console.log("hello2");
}, 2000); // 2000 = 2second
console.log("hello3");
console.log("hello4");
console.log("hello5");
console.log("hello6");

//aisa function jo kisi dusre function mein as an argument pass hota hai usse hum callback kahte hain
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);
calculator(1, 2, (a, b) => {
  console.log(a + b);
});
