function recusrsiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

search()

console.log(recusrsiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

// Big - O => O(log n)    // Input size reduced by half
// n is the number of elements in the array