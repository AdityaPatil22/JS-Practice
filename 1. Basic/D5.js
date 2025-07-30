// Check if a number is prime

const prime = (n) => {
  let prime = true;
  if (n <= 1) {
    prime = false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(n + " is a prime number");
  } else {
    console.log(n + " is not a prime number");
  }
};
prime(4);
