let str = "Hey my name is aditya";

let result = str
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

console.log(result);