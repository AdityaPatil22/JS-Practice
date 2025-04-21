// Implement a function that returns all permutations of a string

function getPermutations(str) {
    if (str.length <= 1) return [str];
  
    const permutations = [];
  
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const remaining = str.slice(0, i) + str.slice(i + 1);
      const remainingPerms = getPermutations(remaining);
  
      for (let perm of remainingPerms) {
        permutations.push(currentChar + perm);
      }
    }
  
    return permutations;
  }
  

console.log(getPermutations("abc"))