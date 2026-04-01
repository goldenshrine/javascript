let h2 = document.querySelector("h2");
console.dir((h2.innerText = h2.innerText + "from Apna college students"));

let divs = document.querySelectorAll(".box");
// console.log(divs);
// console.log((divs[0].innerText = "hello1"));
// console.log((divs[1].innerText = "hello2"));
// console.log((divs[2].innerText = "hello3"));

let i = 1;
for (let div of divs) {
  div.innerText = `new unique value ${i}`;
  i++;
}
