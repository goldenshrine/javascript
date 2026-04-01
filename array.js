let arr = [23, 45, 65, 78, 21, 07];
let heroes = [
  "shaktiman",
  "superman",
  "spiderman",
  "Dr.strange",
  "Black Widow",
];

heroes[4] = "vision"; //cant do this in strings bcz strings are immutable
console.log(heroes);

for (let idx = 0; idx < heroes.length; idx++) {
  console.log(heroes[idx]);
}

for (let hero = 0; hero < heroes.length; hero++) {
  console.log(heroes[hero]);
}

let cities = ["delhi", "maumbai", "pune", "ujjain"];

const charector = {
  fullName: "Oscar shcindler",
  type: "hero",
  work: " save people ",
  Natutre: "good",
};
console.log(charector);
