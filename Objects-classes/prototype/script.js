const student = {
  // an object have prototype by default
  fullName: "Prince gupta",
  marks: 94.4,
  printMarks: function () {
    console.log("Marks of " + this.fullName + " is = " + this.marks); // this is a keyword denotes current object(student)
  },
};

student.printMarks();

console.log(student.fullName); //access the properties of an object
console.log(student.marks);

//
student.toString();
