function singleElementInSortedArray(arr) {
    if (arr.length === 0) return 0;

    for (let i = 0; i <= (arr.length - 1); i += 2) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i]
        };
    };
    return arr[arr.length - 1];
};

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7];
//const arr = [1, 1, 2];

console.log(singleElementInSortedArray(arr));