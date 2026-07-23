// Check if a string is a palindrome.
let str = "aa"
let revStr = ""
for(let i = str.length; i >= 0; i--){
    revStr += str.charAt(i)
}

console.log((revStr === str) ? "true" : "false")

