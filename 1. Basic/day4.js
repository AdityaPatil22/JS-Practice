const Factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}
const number = 5;
console.log(Factorial(number));