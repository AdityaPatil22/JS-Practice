// Check if a number is prime.

let n = 13
let i = 1
let count = 0;
while(i != n){
    let count = 0;
    if(n % i == 0){
        count++;
    }
    i++
}

let result = count == 2 ? "IsPrime" : "Not Prime"
console.log(result)