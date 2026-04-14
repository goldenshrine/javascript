function blinkitOrderPlace() {
  console.log("We have started packing your order");
}

function ZomatoOrderPlace() {
  console.log("We have started preparing your food");
}

function payment(amount, callback) {
  console.log(`${amount} payment has been initiolized`);
  console.log("payment succesfull");
  callback;
}

payment(500, ZomatoOrderPlace);
payment(300, blinkitOrderPlace);
