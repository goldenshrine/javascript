// create a button element give it a text click me.background color of red & text color of white. insert the button as the first element inside the body tag
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

//Q2
let para = document.querySelector("p");
para.getAttribute("class");
console.log(para);
//para.setAttribute("class", "newclass"); // this overwrite the class - text prprty changes from white to black to avoid this we use classlist
para.classList.add("newclass");
//para.classList.remove("newclass"); // removes the class
