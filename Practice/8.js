// Write a function to remove duplicates from an array.

let arr = [1, 2,3, 3, 4, 4]
let result = [];

for(let i of arr){
    if (!result.includes(i)){
        result.push(i)
    }
}

console.log(result)
