////////////CGPT EXAMPLE
function Student(name) {
  this.name = name;
}
Student.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

let s1 = new Student("rahul");
let s2 = new Student("amit");

s1.sayHello();
s2.sayHello();
