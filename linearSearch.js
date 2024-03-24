function linearSearch(arr, target) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 4, 6, 8, 10, -5], 99));

// Big - O => O(n)
