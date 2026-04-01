class ToyotaCar {
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  chapri() {
    console.log("system-system, system-system, system-system, system-system");
  }

  DLNCR() {
    console.log("self-entitled & rash drivers");
  }

  setBrand(Brand) {
    this.brandName = Brand;
  }
}

class HR {
  start() {
    console.log("self-entitled & rash drivers = Accident & trash talkers");
  }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let thar = new HR();
let DLNCR = new ToyotaCar();

fortuner.start();
fortuner.stop();
fortuner.chapri();
fortuner.chapri();
thar.start();
