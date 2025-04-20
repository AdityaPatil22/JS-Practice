// Check if a number is prime

const isPrime = (n) => {
    let count = 0;
    for(let i=1; i<=n; i++) {
        if(n%i === 0) {
            count++;
        }
    }
    let result = count === 2 ? "Prime" : "Not Prime";
    console.log(result)
}

isPrime(31)