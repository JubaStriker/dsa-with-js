function maxSubArray(arr) {

    let currentSum = arr[0];
    let maxSum = arr[0];

    let start = 0;
    let tempStart = 0;
    let end = 0;

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];

        if (num > currentSum + num) {
            currentSum = num;
            tempStart = i;
        } else {
            currentSum += num;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    const subArray = arr.slice(start, end + 1);
    return { maxSum, subArray }
}


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maxSum = maxSubArray(arr);
console.log(maxSum);

// Using Kadane’s algorithm