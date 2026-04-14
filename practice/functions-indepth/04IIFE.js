// 👉 IIFE = Immediately Invoked Function Expression

(hello = () => {
  console.log("hello world");
})();

(() => {
  console.log("hello world arrow");
})();
// Immediately Invoked after declaration
