// Write a function to reverse a string.

let revStr = (str) => {
    let reverse = ""
    for(let i = str.length; i >= 0; i--){
        reverse += str.charAt(i);
    }
    return reverse
}

console.log(revStr("Aditya"))