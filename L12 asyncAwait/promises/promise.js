/*Promises - A javascript promise object can be
  - Pending : The result is undefined
  - Resolved : The result ia a value (fulfilled)  resolve(result)
  - Rejected : The result is an error object      reject(error)

  promise has state (pending , fulfilled) & some result (result is for resolove and error for reject).*/

/*Promises
 .then() and .catch() 
  promise.then((res)=>{...})
  promise.catch((res)=>{...}) */

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("123");
    // reject("error(chotll lag giya)");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("rejected", err);
});
