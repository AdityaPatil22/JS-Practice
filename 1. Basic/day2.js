function Palindrome(str){
    const lowercase = str.toLowerCase();
    const reversed = lowercase.split('').reverse().join('');
    return lowercase === reversed;
}
console.log(Palindrome("racecar"));
console.log(Palindrome("hello"));  
console.log(Palindrome("A man a plan a canal Panama"));