// callback hell : Nested callbacks stacked below one forming a pyramid structure.(pyramid of doom)
// this style of programming becomes diifficult to understand & manage

// function getData(dataId, GetNextData) {
//   setTimeout(() => {
//     console.log("data =", dataId);
//     if (GetNextData) {
//       GetNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("getting data 2");
//   getData(2, () => {
//     console.log("getting data 3"); // <-- this whole program is a callback hell
//     getData(3, () => {
//       console.log("getting data 4");
//       getData(4);
//     });
//   });
// });

// same work with promise chaining

function getData(dataId, GetNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data =", dataId);
      resolve("success");
    }, 2000);
  });
}

getData(1)
  .then((res) => {
    console.log("getting data 2");
    return getData(2);
  })
  .then((res) => {
    console.log("getting data 3");
    return getData(3);
  })
  .then((res) => {
    console.log("getting data 4");
    console.log(res);
  });
