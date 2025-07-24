function maxAscendingSubArray(arr) {
    if (arr.length === 0) return 0

    let sum = arr[0];
    let max = sum;

    for (let i = 1; i <= (arr.length - 1); i++) {
        if (arr[i] > arr[i - 1]) {
            sum += arr[i];

        } else {
            sum = arr[i];
        }
        if (sum > max) max = sum
    }
    return max;
}

const arr = [10, 20, 30, 5, 10, 50]

console.log(maxAscendingSubArray(arr));