// Return the sum of all even numbers in an array

const evenSum = (arr) => {
    let sum = 0;
    for(let i of arr) {
        if(i % 2 == 0){
            sum+= i;
        }
    }
    console.log(sum)
}

evenSum([1, 2, 4, 3, 5, 6, 7, 2])