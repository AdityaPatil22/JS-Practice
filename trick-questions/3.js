// Count vowels in a string
let str = "asdfasdfaeiou";
let vowels = new Set(["a", "e", "i", "o", "u"]);
let count = 0;

for (let char of str) {
    if (vowels.has(char)) {
        count++;
    }
}

console.log(count);