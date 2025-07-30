// Write a function to reverse a string.

function reverse(s) {
  //   const rev = s.split('').reverse().join('');

  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s.charAt(i);
  }
  console.log(rev);
}

reverse("rutuja");
