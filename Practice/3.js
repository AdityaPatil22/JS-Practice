// Count the number of vowels in a string.

let str = "aditya"

let arr = ["a", "e", "i", "o", "u"];
let count = 0
for(let i of str){
    if(arr.includes(i)){
        count++;
    }
}

console.log(count)