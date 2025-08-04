let number = 7;
let Prime = true;

if (number <= 1) {
  Prime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      Prime = false;
      break;
    }
  }
}

if (Prime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}
