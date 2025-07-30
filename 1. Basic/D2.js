// Check if a string is a palindrome.

function palindrome(s) {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s.charAt(i);
  }
  if (s == rev) {
    console.log(s + " is a palindrome");
  } else {
    console.log(s + " is not a palindrome");
  }
}

palindrome("sos");
