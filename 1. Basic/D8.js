// function to remove duplicates from array
function removeDuplicates(arr) {
  let arr1 = [];
  let i = 0;
  while (i < arr.length) {
    if (arr1.includes(arr[i])) {
      i++;
    } else {
      arr1.push(arr[i]);
      i++;
    }
  }
  console.log(arr1);
}
removeDuplicates([1, 12, 4, 8, 12, 1]);
