// constructor is a method which is automatically invoked when a object of class is created
// initialize object

class ToyotaCar {
  constructor(Brand, mileage) {
    console.log("creating new object");
    this.Brand = Brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 20);
console.log(lexus);
