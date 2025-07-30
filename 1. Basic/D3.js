//Count the number of vowels in a string.

const vowels = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let r = s.charAt(i).toLowerCase();
    if (r == "a" || r == "e" || r == "i" || r == "o" || r == "u") {
      count = count + 1;
    }
  }
  console.log("Total number of vowels:", count);
};

vowels("rutuja");
