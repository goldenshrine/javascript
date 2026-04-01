// changes in the state of an object is known as events - occcurance of an activity:- mouse clck, keyboard event etc.
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("btn1 was clicked");
  let a = 26;
  a++;
  console.log(a);
};

btn1.onclick = () => {
  console.log("btn1 was clicked01"); // this overwrites above given code hence we dont handle same code more than one time
};

let div = document.querySelector("div"); // js events has more priority than inline events
div.onmouseover = () => {
  console.log("you are inside the box");
};
