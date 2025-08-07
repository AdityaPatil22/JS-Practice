// 7. Write a function to find the largest number in an array.

const largest = (arr) => {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
let a = parseInt(prompt("Enter the length of array "));
let arr = new Array(a);
for (let i = 0; i < a; i++) {
  arr[i] = parseInt(prompt());
}
console.log("Largest number in array is " + largest(arr));
