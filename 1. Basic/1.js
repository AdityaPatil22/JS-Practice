//1. Write a function to reverse a string.

const revStr = (str) => {
    return str.split('').reverse().join();
}

console.log(revStr("Aditya"))