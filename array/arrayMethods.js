let foodItems = ["salad", "banana", "paneer", "milk"];
foodItems.push("mango", "bread"); // add elements at end -> salad, banana, paneer, milk, mango , bread
foodItems.pop(); // removes element at the end -> salad, banana, paneer, milk, mango
foodItems.unshift("potato", "tomato"); // add element at start -> potato, tomato, salad, banana, paneer, milk, mango
foodItems.shift(); // removes element at start -> tomato, salad, banana, paneer, milk, mango
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems); // does not changes original array
let marks = [37, 83, 75, 76, 64];
console.log(marks);
console.log(marks.toString());
let marvelHeroes = ["ironman", "superman", "spiderman", "hawkeye"];
let dcHeroes = ["aquaMan", "batMan"];
let indianHeroes = ["shaktiman", "krish"];
newHeroes = marvelHeroes.concat(dcHeroes, indianHeroes); // joins to arrays
console.log(newHeroes);
console.log("heroes from idx 1 to 3", marvelHeroes.slice(1, 3)); // returns piece of an array,last idx is non inclusive ie 3.
console.log(marvelHeroes.slice()); //some times used to make copy of an array
console.log(marvelHeroes.splice(0, 2, "blackwidow")); // change original array add remove and replace
console.log(marvelHeroes); //
let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
arr.splice(2, 0, 123); // add - 0 element deleted
console.log(arr);
arr.splice(4);
console.log(arr);

/*Q. create an array to store companies -> "bloomberg","microsoft","uber","Google","IBM","NETFLIX"
 A. Remove the first company from the array
 B. Remove Uber and add Ola it its place
 C. Add Amazon at the end */

let companies = ["bloomberg", "microsoft", "uber", "Google", "IBM", "NETFLIX"];
companies.shift();
console.log(companies);
companies.splice(2, 1, "ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
