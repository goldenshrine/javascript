let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i], "odd");
  } else {
    console.log(arr[i], "even"); // this is extra but did in purpose
  }
}
