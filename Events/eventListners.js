// we mainly use eventlistners to handle events

btn1.onclick = (evt) => {
  // console.log(evt);
  // console.log(evt.type);
  // console.log(evt.target);
  // console.log(evt.clientX, evt.clientY);
};
btn1.addEventListener("click", () => {
  console.log("button was clicked");
});

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler2"); //multiple handlings can be done on a single event- does not overwrites
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
});

////

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler1");
});

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler2");
});

const handler3 = () => {
  console.log("button was clicked - handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - handler4");
});

//removing buttton handler

btn1.removeEventListener("click", handler3);

let div = document.querySelector("div");
