// Reverse a string without using reverse()
let str = "Aditya"
let revStr = ""
for(let i = str.length; i >= 0; i--){
    revStr += str.charAt(i)
}
console.log(revStr)