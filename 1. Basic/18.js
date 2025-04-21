// Write a function to find the intersection of two arrays.

const intersectArr = (arr1, arr2) => {
    const arr = [];
    for(let i of arr1){
        for(let j of arr2){
            if(i == j) {
                arr.push(i)
            }
        }
    }
    console.log(arr)
}

intersectArr([1,2,3,4,6,9,2], [2,3,1,5,9])