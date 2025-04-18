// Write a function to count the frequency of elements in an array

const freqArr = (arr) => {
    const freqMap = {};

    for (let item of arr) {
        if (freqMap[item]) {
            freqMap[item]++;
        } else {
            freqMap[item] = 1;
        }
    }

    return freqMap;
};

console.log(freqArr([1, 2, 1, 3, 2, 4, 1]));

