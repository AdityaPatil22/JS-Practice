let str1 = "abc";
let str2 = "bca";
let map1 = new Map();
let map2 = new Map();
if(str1.length != str2.length){
    return "false"
}

for(let i of str1){
    map1.set(i, (map1.get(i) || 0) + 1)
}

for(let i of str2){
    map2.set(i, (map2.get(i) || 0) + 1)
}
let isAnagram = "true"
for(let [key, val] of map1){
    if(map2.get(key) !== val){
        isAnagram = "false"
        break;
    }
}

console.log(isAnagram)