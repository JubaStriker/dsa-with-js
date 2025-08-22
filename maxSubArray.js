function maxSubArray(arr) {

    let currentSum = arr[0];
    let maxSum = arr[0];



    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
}


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maxSum = maxSubArray(arr);
console.log(maxSum);

// Using Kadane’s algorithm