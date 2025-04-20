// Write a function that returns the longest word in a sentence.

const longestWord = (str) => {
  const words = str.split(' ');
  let longest = '';

  for (let word of words) {
    const cleanedWord = word.replace(/[^\w]/g, '');
    if (cleanedWord.length > longest.length) {
      longest = cleanedWord;
    }
  }

  console.log(longest);
}

longestWord("This is a program for longest word in a sentence")