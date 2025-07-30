//Find the factorial of a number.

const factorial = (n) => {
  let fact = 1;
  while (n > 0) {
    fact = fact * n;
    n--;
  }
  console.log("Factorial", fact);
};
factorial(5);
