// Implement a binary search algorithm

const binarySearch = (arr, target) => {
    sortedArr = arr.sort()
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([2,4,5,6,3,5,3] , 2))