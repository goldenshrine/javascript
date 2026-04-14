//function : expression

// let add = sum(55, 45); cannot call a function before intiolization but this while is doablein normal function
// console.log(add);

const sum = function (num1, num2) {
  return num1 + num2;
};

let add = sum(55, 45);
console.log(add);
