// Capitalize the first letter of every word in a sentence.

const capatialize = (str) => {
 console.log(str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '));
}

capatialize("hey this is a string")