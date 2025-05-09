function recusrsiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) return middleIndex;

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else if (target > arr[middleIndex]) {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(recusrsiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));

// Big - O => O(log n)    // Input size reduced by half
// n is the number of elements in the array