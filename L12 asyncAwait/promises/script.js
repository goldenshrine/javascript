// promises is for "eventual" completion of task. it is an object in JS.
// it is the solution to callback hell.
// resolve & reject are callbacks provided by JS
////
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   //resolve("successfull");
//   reject("some error occured");
// });

function getData(dataId, GetNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("data =", dataId);
      //   resolve("success");
      reject("error");
      if (GetNextData) {
        GetNextData();
      }
    }, 2000);
  });
}
