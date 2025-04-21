// Write a function to shuffle an array (Fisher-Yates).

const shuffleArray = (arr) => {
    // Loop from the last element to the second
  for (let i = arr.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};


const nums = [1, 2, 3, 4, 5];
const shuffled = shuffleArray([...nums]); // Use spread to keep original array untouched
console.log('Original:', nums);
console.log('Shuffled:', shuffled);