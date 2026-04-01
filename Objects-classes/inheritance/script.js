// example 1
class parent {
  hello() {
    console.log("hello");
  }
}

class child extends parent {}

let obj = new child();

//console.log(obj.hello());

// example 2 - better example

class person {
  constructor() {
    this.species = "homosapien";
  }
  eat() {
    console.log("pearson eats");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("do nothing, waste money-haram ka khata makaada");
  }
  study() {
    console.log("do study - learn languages");
  }
}

// Class methods are accessed using objects (new ClassName()), not directly by class name unless they are static.

console.log(new person());

class engineer extends person {
  // class person inharited by using extend keyword
  work() {
    console.log("solve problems, build something"); //method overriding
  }
}

class monica extends person {
  occupation() {
    console.log("student");
  }

  gender() {
    console.log("female");
  }

  isSmart() {
    console.log("true");
  }
}
// new ex.
class doctor extends person {
  // class person inharited by using extend keyword
  work() {
    console.log("treat patients, make money");
  }
}

class mota extends person {
  study() {
    console.log("no study just come to library");
  }

  hobby() {
    console.log("eat, game - cs go, ");
  }

  charectoristics() {
    console.log("Snorrrr in  the Library & disturb others");
  }

  typeof() {
    console.log(
      "dissoriented person, != focused, must study hard otherwise time will be wasted "
    );
  }
  prayForHim() {
    console.log(
      "may he achieve all the things that he ever wished for, be focused in his own work and study "
    );
  }
  relation() {
    console.log("fellow in the library");
  }
}

let monicaObj = new monica();
let shradhaObj = new engineer();
let gattu = new doctor();
let student = new person();
let p1 = new person(); //<-- these are objects
let prince = new person();
let Newmota = new mota();

// console.log(shradhaObj); // we can also access them in inspent tab by just "shradhaObj"
// console.log(shradhaObj.work()); // "shradhaObj.work()"
// console.log(shradhaObj.eat());
// console.log(shradhaObj.sleep());
