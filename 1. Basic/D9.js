const anagram = (a, b) => {
  if (a.length != b.length) {
    console.log("Not an anagram");
  }
  let arr1 = a.split("");
  let arr2 = b.split("");

  if (arr1.sort().join("") == arr2.sort().join("")) {
    console.log("anagram");
  } else {
    console.log("Not an anagram");
  }
};
anagram("rutuja", "ajutur");
