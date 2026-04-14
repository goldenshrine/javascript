// arrow function

hello = () => {
  console.log("hello world");
};

hello();

sum = (a, b) => {
  return a + b;
};

console.log(sum(8, 19));

console.log("hello");

mul = (a, b) => a * b;
console.log(mul(6, 7));

const greet = () => ({ name: "prince", class: "bhut padha likha" }); // clean arrow function

const user = greet();
console.log(user.name); // with variable

console.log(greet().name); //without variable both are same
