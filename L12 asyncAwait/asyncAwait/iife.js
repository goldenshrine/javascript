// iffe is a function which is called immediately as soon as it is defined --> solution --> async await .

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

(async function () {
  console.log("getting data...1");
  await getData(1);
  console.log("getting data...2");
  await getData(2);
  console.log("getting data...3");
  await getData(3);
  console.log("getting data...4");
  await getData(4);
  console.log("getting data...5");
  await getData(5);
  console.log("getting data...6");
  await getData(6);
  console.log("getting data...7");
  await getData(7);
})();

//Drawback --> iife is one time use only
// it executes automatically -- immediately invoked
