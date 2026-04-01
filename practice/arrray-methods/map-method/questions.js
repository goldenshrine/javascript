const people = [
  {
    name: "Prince",
    surname: "Gupta",
    age: 22,
    city: "Delhi",
  },
  {
    name: "Rahul",
    surname: "Sharma",
    age: 22,
    city: "Mumbai",
  },
  {
    name: "Ankit",
    surname: "Verma",
    age: 23,
    city: "Lucknow",
  },
  {
    name: "Sneha",
    surname: "Singh",
    age: 21,
    city: "Jaipur",
  },
];

// Q.1 - write full name using suitable array method :-

// const joint = (x) => {
//   const jointName = x.name + " " + x.surname;
//   return jointName;
// };
const fullName = people.map((x) => x.name + " " + x.surname); // no comma !

console.log(fullName);

//Q.2 Give age as output and and also their frequency

const ages = people.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ages);

// Final Mental Model
// Problem Type	Use This-->
// Change values	= map
// Select values	= filter
// Count / group	= reduce

// Q3 first name of all the people who's age is above 22

function ageFunc(x) {
  return x.age > 22;
}
// const above22 = people.filter(ageFunc).map((x) => x.name);

// console.log(above22);

// Q3 with reduce method

const above22 = people.reduce((res, curr) => {
  if (curr.age > 22) {
    res.push(curr.name);
  }
  return res;
}, []);

// console.log(above22);
