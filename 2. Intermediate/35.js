// Write a function to find the nth largest number in an array

const nthLargest = (arr, n) => {
    if (n > arr.length) return null; // or throw error
    const sorted = [...arr].sort((a, b) => b - a); // Sort descending
    return sorted[n - 1];
  };

console.log(nthLargest([3,4,5,6,8,9] ,2))