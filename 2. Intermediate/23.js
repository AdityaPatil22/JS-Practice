// Implement a basic memoization function

// Creating an array to store the result of the functions output
const prevResult = [];

const sum = (n) => { 
    // Checking if the value is present in the array if present early return with the value
    if (prevResult[n] != null) return prevResult[n]

    // sum of n numbers
    let sum = 0;
    for(let i=1; i<=n ; i++) {
        sum+=i;
    }

    prevResult[n]=sum;
    return sum
}

console.log(sum(10000))
console.log(sum(10000))
console.log(sum(10000))
console.log(sum(10000))
console.log(sum(10000))