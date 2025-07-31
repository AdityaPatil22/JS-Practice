//Fibonacci sequence up to n terms.

let a = 0;
let b = 1;
const fibonacci = (n) => {
  let result = a + " " + b;
  for (let i = 0; i < n - 2; i++) {
    sum = a + b;
    result += " " + sum;
    a = b;
    b = sum;
  }
  console.log(result);
};

let n = prompt("enter a number: ");
fibonacci(n);
