const arr = [1, 2, 3, 4, 5, 6, 7];

// Double - [2,4,6,8,10,12,14]
// Triple -[]
// Binary -[]

const double = (x) => {
  return x * 2;
};

const Triple = (x) => {
  return x * 3;
};

const output1 = arr.map(double);

console.log(output1);

const output2 = arr.map(Triple);

console.log(output2);

const output3 = arr.map((x) => x.toString(2));

console.log(output3);

// Final Mental Model
// Problem Type	Use This-->
// Change values	= map
// Select values	= filter
// Count / group	= reduce
