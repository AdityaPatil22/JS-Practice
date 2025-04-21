// Convert Roman numerals to integers

function romanToInt(roman) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let total = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const curr = map[roman[i]];
      const next = map[roman[i + 1]];
  
      // If the current value is less than the next, subtract it
      if (next > curr) {
        total += next - curr;
        i++; // skip next char since it's already used
      } else {
        total += curr;
      }
    }
  
    return total;
  }
  

console.log(romanToInt("MCMXCIV"));
