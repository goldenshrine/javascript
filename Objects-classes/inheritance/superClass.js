class person {
  constructor(name) {
    this.species = "homosapien";
    this.name = name;
  }
  eat() {
    console.log("pearson eats");
  }
}

class engineer extends person {
  constructor(name) {
    super(name); // to invoke parent class constructor
  }
  work() {
    super.eat();
    console.log("solve problems, build something");
  }
}

let engineerObj = new engineer("shradha");

// class person {
//   constructor() {
//     console.log("enter parent constructor");
//     this.species = "homosapien";
//   }
//   eat() {
//     console.log("pearson eats");
//   }
// }

// class engineer extends person {
//   constructor(branch) {
//     console.log("enter child constructor");
//     super(); // to invoke parent class constructor
//     this.branch = branch;
//     console.log("exit child constructor");
//   }
//   work() {
//     console.log("solve problems, build something");
//   }
// }

// let engineerObj = new engineer("chemical engg");
