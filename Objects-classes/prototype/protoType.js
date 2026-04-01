//Prototype in JavaScript is an object that allows other objects to inherit properties and methods.
// In JavaScript, prototype is a mechanism by which objects can share properties and methods with other objects.

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

// const employee = {
//     calcTax : function () { /// both are same but different ways to define
//       console.log("tax rate is 10%");
//     },
//   };

const karanArjun = {
  salary: 50000,
  pos: "dev",
};
const karanArjun2 = {
  salary: 50000,
  pos: "dev",
};
const karanArjun3 = {
  salary: 50000,
  pos: "dev",
};
const karanArjun4 = {
  salary: 50000,
  pos: "dev",
};
karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

console.log(employee.calcTax());
