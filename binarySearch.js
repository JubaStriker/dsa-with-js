// Binary search only works on sorted array

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    arr.sort((a, b) => a - b);

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) return middle;
        if (arr[middle] < target) left = middle + 1;
        else right = middle - 1;
    }

    return -1;

}

console.log(binarySearch([1, 2, 11, 4, 5, 6, 12, 7, 8, 9, 10, 3], 2));

// Big - O => O(log n)    // Input size reduced by half
// n is the number of elements in the array