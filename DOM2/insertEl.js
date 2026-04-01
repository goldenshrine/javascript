///// creating new elements using javascript instead of using HTML.
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

let div = document.querySelector("div");
// uncomment 1 statement at a time otherwise it will not work.
//div.append(newBtn); // adds at the end of node(inside).
//div.prepend(newBtn); // adds at the start of node(inside).
//div.before(newBtn); // adds before the node (outside).
//div.after(newBtn); // adds after the node (outside).

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>new heading!</i>";

document.querySelector("body").prepend("newHeading");
