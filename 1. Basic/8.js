//Write a function to remove duplicates from an array

const remDuplicate = (arr) => {
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 1);
            i--; 
        }
    }
    console.log(arr);
}

remDuplicate([2, 3, 1, 3, 2, 3, 2, 4, 2])