let num = 12345;
let revNum = 0;
while(num > 0){
    let digit = num % 10;
    revNum = revNum * 10 + digit
    num = Math.floor(num / 10)
}

console.log(revNum)
