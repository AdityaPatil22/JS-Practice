// Count the number of vowels in a string.

const vowelsCount = (str) => {
    const vowelArr = ["a", "e", "i", "o", "u"];
    var count=0;
    for(let i =0; i<str.length; i++) {
        if(vowelArr.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    console.log(count)
}

vowelsCount("aditya")