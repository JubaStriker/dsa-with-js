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
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSumOptimal([2, 7, 11, 15], 9));