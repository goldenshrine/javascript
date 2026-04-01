/* FETCH API :-   

The fetch API provides an interface for fetching (sending/recieving) resources.
 
It uses Request and Response Objects.

The fetch() method is used to fetch a reaource (data).

Synt. = let promise = fetch(url,[option])  */

// const URL = "https://catfact.ninja/fact";
// const factPara = document.querySelector("#facts");

// const getFacts = async () => {
//   console.log("getting data....");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   //   factPara.innerText = data.text;
//   console.log(data);
// };

/////////////

const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//   let response = await fetch(URL);
//   let data = await response.json();

//   factPara.innerText = data.fact;
//};

// using promise chaining
function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data.fact;
    });
}

btn.addEventListener("click", getFacts);
