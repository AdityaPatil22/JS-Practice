//2. Check if a string is a palindrome.

const palindrome = (str) => {
    const revstr = str.split('').reverse().join();
    const result = revstr === str ? "true" : "flase";
    console.log(result)
}

palindrome("aaaa")