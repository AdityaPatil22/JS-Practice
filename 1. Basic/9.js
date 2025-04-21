//Check if two strings are anagrams.

function areAnagrams(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/\W/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\W/g, '').toLowerCase();
  
    // Early return if lengths are different
    if (cleanStr1.length !== cleanStr2.length) return false;
  
    // Sort and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    
    if(sortedStr1 === sortedStr2) {
        console.log("Anagrams");
    }
    console.log("Not Anagrmas")
  }

areAnagrams("Aditya", "Aditya")