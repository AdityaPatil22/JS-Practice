// Print Fibonacci sequence up to n terms

function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Print first 10 Fibonacci numbers using recursion
  for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
  }



// Fibonacci series using memoization

function fib(n, prevValues) {
  if(prevValues[n] != null) {
    return prevValues[n]
  }

  let result
  if(n <= 2) {
    result = 1
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
  }

  prevValues[n] = result
  return result;
}

console.log(fib(500))  