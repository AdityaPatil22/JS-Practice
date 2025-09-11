let str = "hue, i am rutuja haladkar";
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  words[i] = word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(words.join(" "));
