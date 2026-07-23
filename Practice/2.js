// Check if a string is a palindrome.

let str = "aabaa"
let revStr = ""
for(let i = str.length; i >= 0; i--){
    revStr += str.charAt(i);
}

let result = str === revStr ? "true" : "false";
console.log(result)