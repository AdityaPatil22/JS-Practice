function vowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for( let i = 0; i < str.length ; i++){
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

let myString ="This is a dumbest idea ever";
let vowelscount = vowels(myString);
console.log("NO. of vowels " + vowelscount);
