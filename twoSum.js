var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};



function twoSumOptimal(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);

    }
}

console.log(twoSumOptimal([2, 7, 11, 15], 26));