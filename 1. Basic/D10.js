// Return the sum of all even numbers in an array.
const sum = (arr) => {
  let i = 0,
    sum = 0;
  while (i < arr.length) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
};
const arr = [2, 8, 3, 15, 66];
console.log(sum(arr));
