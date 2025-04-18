//Write a function to find the largest number in an array.

const largestArr = () => {
    const arr = [1,2,3,4,5,6,7, 332]
    let max = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max)
}

largestArr()