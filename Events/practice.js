let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; // dark
modebtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});

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
