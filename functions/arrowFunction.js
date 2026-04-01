//Arrow functions -> generally used for small functions like division and multiplication.
const arrowSum = (a, b) => {
  console.log(a + b);
};

//arrowMul,arrowSum are just variables and the arrowfunction is right side part of =

// arrow multiplication
const arrowMul = (a, b) => {
  console.log(a * b);
};

// Q. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  //console.log(count);
  return count;
}

// create an arrow function to perform the same task

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  //console.log(count);
  return count;
};
