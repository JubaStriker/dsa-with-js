// Binary search only works on sorted array

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (arr[middleIndex] === target) {
            return middleIndex;
        }
        else if (arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));

// Big - O => O(log n)    // Input size reduced by half
// n is the number of elements in the array